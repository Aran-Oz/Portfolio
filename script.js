// === Basic site customization ===
// Change these values to personalize your site.
const SITE = {
  name: "Your Name",
  role: "Web Developer",
  email: "you@example.com",
  socials: {
    github: "https://github.com/youruser",
    linkedin: "https://www.linkedin.com/in/youruser/"
  }
};

// Add your projects here. Duplicate to add more.
const PROJECTS = [
  {
    title: "Project One",
    description: "Short description of what it is and what you did.",
    image: "assets/project-1.svg",
    tags: ["HTML","CSS","JavaScript"],
    links: {
      live: "#",
      source: "#"
    }
  },
  {
    title: "Project Two",
    description: "Another cool project—keep the text concise.",
    image: "assets/project-2.svg",
    tags: ["API","Accessibility"],
    links: {
      live: "#",
      source: "#"
    }
  },
  {
    title: "Project Three",
    description: "Show impact: performance boost, users, or learning.",
    image: "assets/project-3.svg",
    tags: ["Performance","UX"],
    links: {
      live: "#",
      source: "#"
    }
  }
];

// ——— Runtime setup ———
const el = sel => document.querySelector(sel);

function initBasics(){
  document.title = `${SITE.name} — Portfolio`;
  el("meta[name='description']").setAttribute("content", `Portfolio of ${SITE.name} — ${SITE.role}.`);
  el(".brand").textContent = SITE.name;
  el(".tagline").textContent = `I build clean, fast, accessible experiences for the web.`;
  document.getElementById("year").textContent = new Date().getFullYear();
  const gh = el("#social-github"); const li = el("#social-linkedin");
  gh.href = SITE.socials.github; li.href = SITE.socials.linkedin;
  el("#contact-linkedin").href = SITE.socials.linkedin;
  // Update email links
  document.querySelectorAll(`a[href^='mailto:']`).forEach(a => {
    a.href = `mailto:${SITE.email}?subject=Hello%20from%20your%20portfolio`;
  });
}

function renderProjects(){
  const grid = document.getElementById("projects-grid");
  grid.innerHTML = "";
  PROJECTS.forEach(p => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.title} preview" loading="lazy">
      <div class="card-body">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="tags">${p.tags.map(t=>`<span class='tag'>${t}</span>`).join("")}</div>
        <div class="links">
          <a href="${p.links.live}" target="_blank" rel="noopener">Live ↗</a>
          <a href="${p.links.source}" target="_blank" rel="noopener">Code ↗</a>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Mobile nav toggle
function setupNav(){
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.getElementById("nav-menu");
  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  // Close when clicking a link (mobile)
  menu.querySelectorAll("a").forEach(a => a.addEventListener("click", ()=>{
    menu.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }));
}

// Smooth scroll for internal links
function smoothScroll(){
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      const id = a.getAttribute("href").slice(1);
      const target = document.getElementById(id);
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:"smooth"});
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initBasics();
  renderProjects();
  setupNav();
  smoothScroll();
});
