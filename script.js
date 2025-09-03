// === Basic site customization ===
// Change these values to personalize your site.
const SITE = {
  name: "Aran",
  role: "Web Developer",
  email: "aranozley@gmail.com",
  socials: {
    github: "https://github.com/Aran-Oz",
    linkedin: "https://www.linkedin.com/in/aran-ozley/"
  }
};

// Add your projects here. Duplicate to add more.
const PROJECTS = [
  {
    title: "WPA3/2 Exploitation & Demo",
    description: "Discussed and demonstrated vulnerabilities within WPA3 and WPA2",
    image: "assets/Project 1.jpg",
    tags: ["Kali","Networking","Deauthentication"],
    links: {
      live: "#",
      source: "#"
    }
  },
  {
    title: "GitHub - Website Creation",
    description: "Using Github to store this very webpage",
    image: "assets/Project 2.jpg",
    tags: ["HTML","CSS","JavaScript"],
    links: {
      live: "#",
      source: "#"
    }
  },
  {
    title: "Bug Bounty Exploration",
    description: "Utilise BurpSuite to manipulate BWAPP docker container",
    image: "assets/Project 2.jpg",
    tags: ["Bug Bounty","BurpSuit","Exploit","Vulerability"],
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
