/* ================= PAGE LOAD FADE-IN ================= */
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
  document.body.style.transition = "opacity 1s ease";
});

/* ================= SCROLL REVEAL ANIMATIONS ================= */
const scrollElements = document.querySelectorAll("[data-animate]");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  return elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend;
};

const displayScrollElement = (element) => {
  element.classList.add("active");
};

const hideScrollElement = (element) => {
  element.classList.remove("active");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el, index) => {
    if (elementInView(el, 1.25)) {
      // Add staggered delay
      el.style.transitionDelay = `${index * 0.15}s`;
      displayScrollElement(el);
    } else {
      hideScrollElement(el);
      el.style.transitionDelay = "0s";
    }
  });
};

window.addEventListener("scroll", handleScrollAnimation);

/* ================= NAVBAR ACTIVE LINK HIGHLIGHT ================= */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

const handleNavHighlight = () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
};

window.addEventListener("scroll", handleNavHighlight);

/* ================= SMOOTH SCROLL FOR NAV LINKS ================= */
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    window.scrollTo({
      top: targetSection.offsetTop - 70,
      behavior: "smooth"
    });
  });
});

/* ================= TEXT HOVER ANIMATION ================= */
const hoverTexts = document.querySelectorAll("h1, h2, h3, p, .logo, .navbar a");

hoverTexts.forEach(text => {
  text.addEventListener("mouseenter", () => {
    text.style.color = "#38bdf8";
    text.style.transition = "0.3s ease";
    text.style.transform = "translateY(-3px)";
  });

  text.addEventListener("mouseleave", () => {
    text.style.color = "";
    text.style.transform = "translateY(0)";
  });
});

/* ================= STAGGERED SKILL BARS ANIMATION ================= */
const skillBars = document.querySelectorAll(".bar span");

const handleSkillBars = () => {
  skillBars.forEach((bar, index) => {
    const barTop = bar.getBoundingClientRect().top;
    if (barTop <= window.innerHeight) {
      setTimeout(() => {
        bar.style.width = bar.parentElement.querySelector("h3 span").innerText;
        bar.style.transition = "width 1s ease-in-out";
      }, index * 150); // stagger effect
    }
  });
};

window.addEventListener("scroll", handleSkillBars);

/* ================= STAGGERED EDUCATION / EXPERIENCE CARDS ================= */
const eduExpCards = document.querySelectorAll(".education-box .content");

const handleEduExpCards = () => {
  eduExpCards.forEach((card, index) => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop <= window.innerHeight * 0.9) {
      setTimeout(() => {
        card.classList.add("active");
      }, index * 150); // stagger animation
    }
  });
};

window.addEventListener("scroll", handleEduExpCards);
