/* ============================================================
   ARNAV HEERAKAR — PORTFOLIO
   script.js
   ============================================================ */

/* ============================================================
   PROJECTS DATA
   ---------------------------------------------------------------
   To ADD a project: copy one object below and add it to the array.
   To REMOVE a project: delete the object (and its trailing comma).
   To EDIT a project: change the field values directly.

   Fields:
     title       — project heading
     description — short summary shown on the card
     tech        — array of strings, shown as badges
     image       — path to image (relative to root), e.g. "assets/images/proj1.png"
     github      — full GitHub URL
     demo        — full live demo URL, or "" if none
   ============================================================ */
const projects = [
  {
    title: "Amazon Sales Analysis — Excel & Power BI Dashboard",
    description: "Cleaned and analyzed an Amazon product dataset to identify pricing patterns, discount strategies, and rating distributions. Built an interactive Power BI dashboard covering product performance and customer engagement.",
    tech: ["Excel", "Power BI", "Data Cleaning", "EDA"],
    image: "assets/images/projects/amazon-sales.jpg",
    github: "https://github.com/arnav-is-op/amazon-sales-analysis-excel-powerbi",
    demo: ""
  },
  {
    title: "Power BI Data Jobs Dashboard 2.0",
    description: "Transformed 479K job records using Power Query to build interactive dashboards with slicers, KPIs, and drill-through features. Surfaces salary trends, high-demand roles, and skill distributions.",
    tech: ["Power BI", "DAX", "Power Query"],
    image: "assets/images/projects/powerbi-dashboard.jpg",
    github: "https://github.com/arnav-is-op/powerbi-data-jobs-dashboard-2",
    demo: ""
  },
  {
    title: "Python Data Jobs Analysis",
    description: "End-to-end Python project analyzing 2023 job postings across the US and India. Covers skill demand, trending skills, salary analysis, and optimal skill combinations using Pandas, Matplotlib, and Seaborn.",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter"],
    image: "assets/images/projects/python-jobs.jpg",
    github: "https://github.com/arnav-is-op/python_project_for_job_analysis",
    demo: ""
  },
  {
    title: "E-Commerce Sales & Customer Behavior Analysis",
    description: "Analyzed transactional data to evaluate customer behavior, retention, and revenue contribution. Used SQL CTEs and window functions for customer segmentation and cohort analysis.",
    tech: ["PostgreSQL", "CTEs", "Window Functions", "Cohort Analysis"],
    image: "assets/images/projects/ecommerce-sql.jpg",
    github: "https://github.com/arnav-is-op/SQL-Analytics-Project-Intermediate-Level",
    demo: ""
  },
  {
    title: "SQL Job Market Analysis",
    description: "Queried large datasets using JOINs, aggregations, and window functions to analyze job market trends and identify optimal skill combinations balancing salary potential and market demand.",
    tech: ["PostgreSQL", "SQL", "JOINs", "Aggregations"],
    image: "assets/images/projects/sql-jobs.jpg",
    github: "https://github.com/arnav-is-op/SQL_Project_Data_Job_Analysis",
    demo: ""
  }
];

/* ============================================================
   SKILLS DATA
   ============================================================ */
const skills = [
  {
    group: "Languages",
    items: ["Python", "SQL"]
  },
  {
    group: "Data Analysis",
    items: ["Data Cleaning", "Data Wrangling" , "EDA", "Joins", "Subqueries" , "Aggregations", "CTEs", "Window Functions"]
  },
  {
    group: "ANALYTICS CONCEPTS",
    items: ["Cohort Analysis", "Customer Segmentation", "KPI Analysis"]
  },
  {
    group: "Visualization",
    items: ["Power BI", "DAX", "Power Query", "Matplotlib", "Seaborn"]
  },
  {
    group: "Tools",
    items: ["Excel", "PostgreSQL", "DBeaver", "Git", "GitHub", "Jupyter Notebook"]
  },
  {
    group: "LIBRARIES",
    items: ["Pandas"]
  }
];

/* ============================================================
   CERTIFICATIONS DATA
   ---------------------------------------------------------------
   To ADD a certificate: copy one object and add it to the array.
   To REMOVE: delete the object.
   Fields: title, issuer, date, link, github (optional)
   ============================================================ */
const certifications = [
  {
    title: "Deloitte Data Analytics Virtual Experience Program",
    issuer: "Forage",
    date: "2025",
    link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_4g3j3BEWx6sh6qiE2_1775790524281_completion_certificate.pdf",
    github: "https://github.com/arnav-is-op/Deloitte-Data-Analytics-Project-Machine-Failure-Analysis",
    tech: ["Python", "Pandas", "Power BI"]
  },
  {
    title: "Quantium Data Analytics Virtual Experience Program",
    issuer: "Forage",
    date: "2025",
    link: "https://www.theforage.com/completion-certificates/32A6DqtsbF7LbKdcq/NkaC7knWtjSbi6aYv_32A6DqtsbF7LbKdcq_4g3j3BEWx6sh6qiE2_1775934318385_completion_certificate.pdf",
    github: "https://github.com/arnav-is-op/Quantium-Retail-Analytics-Trial-Store-Evaluation",
    tech: ["Python", "Pandas"]
  }
];

/* ============================================================
   RENDER PROJECTS
   ============================================================ */
function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  grid.innerHTML = projects.map((p, i) => {
    const initial = p.title.charAt(0);
    const imgMarkup = p.image
      ? `<img src="${p.image}" alt="${p.title}" loading="lazy" />`
      : `<span class="project-img-placeholder">${initial}</span>`;

    const demoBtn = p.demo
      ? `<a href="${p.demo}" target="_blank" class="btn btn-ghost">Live Demo</a>`
      : "";

    return `
      <div class="project-card reveal" style="transition-delay: ${i * 80}ms">
        <div class="project-img">${imgMarkup}</div>
        <div class="project-body">
          <h3 class="project-title">${p.title}</h3>
          <p class="project-desc">${p.description}</p>
          <div class="project-tech">
            ${p.tech.map(t => `<span class="tech-badge">${t}</span>`).join("")}
          </div>
          <div class="project-links">
            <a href="${p.github}" target="_blank" class="btn btn-primary">
              <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
              View Code
            </a>
            ${demoBtn}
          </div>
        </div>
      </div>
    `;
  }).join("");
}

/* ============================================================
   RENDER SKILLS
   ============================================================ */
function renderSkills() {
  const container = document.getElementById("skillsGroups");
  if (!container) return;

  container.innerHTML = skills.map(group => `
    <div class="reveal">
      <p class="skill-group-label">${group.group}</p>
      <div class="skill-badges">
        ${group.items.map(item => `<span class="skill-badge">${item}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

/* ============================================================
   RENDER CERTIFICATIONS
   ============================================================ */
function renderCertifications() {
  const grid = document.getElementById("certsGrid");
  if (!grid) return;

  grid.innerHTML = certifications.map((c, i) => {
    const techBadges = c.tech
      ? `<div class="cert-tech">${c.tech.map(t => `<span class="cert-tech-badge">${t}</span>`).join("")}</div>`
      : "";

    const githubBtn = c.github
      ? `<a href="${c.github}" target="_blank" class="cert-link cert-link-gh">
           <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
           GitHub
         </a>`
      : "";

    return `
      <div class="cert-card reveal" style="transition-delay: ${i * 80}ms">
        <div class="cert-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 15l-4-4 1.41-1.42L12 12.17l6.59-6.58L20 7l-8 8z"/>
            <circle cx="12" cy="12" r="10"/>
          </svg>
        </div>
        <p class="cert-title">${c.title}</p>
        <p class="cert-issuer">${c.issuer}</p>
        <p class="cert-date">${c.date}</p>
        ${techBadges}
        <div class="cert-actions">
          ${c.link ? `<a href="${c.link}" target="_blank" class="cert-link">View Certificate →</a>` : ""}
          ${githubBtn}
        </div>
      </div>
    `;
  }).join("");
}

/* ============================================================
   NAVBAR: SCROLL EFFECT
   ============================================================ */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const onScroll = () => {
    navbar.classList.toggle("scrolled", window.scrollY > 20);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ============================================================
   NAVBAR: ACTIVE LINK ON SCROLL
   ============================================================ */
function initActiveLinks() {
  const links = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        links.forEach(link => {
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px" });

  sections.forEach(s => observer.observe(s));
}

/* ============================================================
   HAMBURGER MENU
   ============================================================ */
function initHamburger() {
  const btn = document.getElementById("hamburger");
  const links = document.getElementById("navLinks");

  btn.addEventListener("click", () => {
    btn.classList.toggle("open");
    links.classList.toggle("open");
  });

  // Close on link click
  links.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      btn.classList.remove("open");
      links.classList.remove("open");
    });
  });
}

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -60px 0px" });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderSkills();
  renderCertifications();
  initNavbar();
  initActiveLinks();
  initHamburger();
  // Reveal runs after render so dynamically created elements are observed
  setTimeout(initReveal, 50);
});
