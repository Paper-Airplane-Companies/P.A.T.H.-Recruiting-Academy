const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  const navLinks = siteNav.querySelectorAll("a");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", (event) => {
    const clickedInsideNav = siteNav.contains(event.target);
    const clickedMenuButton = menuToggle.contains(event.target);

    if (!clickedInsideNav && !clickedMenuButton && siteNav.classList.contains("active")) {
      siteNav.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      siteNav.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

const linkedInUrl = "https://www.linkedin.com/in/brandonlabonte73";

const personalFooterRow = document.querySelector(".personal-footer .footer-row");
if (personalFooterRow && !personalFooterRow.querySelector('a[href*="linkedin.com"]')) {
  const linkedInItem = document.createElement("div");
  const linkedInLink = document.createElement("a");
  linkedInLink.href = linkedInUrl;
  linkedInLink.target = "_blank";
  linkedInLink.rel = "noopener noreferrer";
  linkedInLink.textContent = "LinkedIn";
  linkedInItem.appendChild(linkedInLink);
  personalFooterRow.appendChild(linkedInItem);
}

const siteFooterLinks = document.querySelector(".site-footer .footer-links");
if (siteFooterLinks && !siteFooterLinks.querySelector('a[href*="linkedin.com"]')) {
  const linkedInLink = document.createElement("a");
  linkedInLink.href = linkedInUrl;
  linkedInLink.target = "_blank";
  linkedInLink.rel = "noopener noreferrer";
  linkedInLink.textContent = "LinkedIn";
  siteFooterLinks.appendChild(linkedInLink);
}

const inquiryType = document.getElementById("inquiry-type");
const speakingDetails = document.getElementById("speaking-details");
const speakingType = document.getElementById("speaking-type");

function syncSpeakingFields() {
  if (!inquiryType || !speakingDetails) return;

  const isSpeakingInquiry = inquiryType.value === "Speaking or Event Inquiry";
  speakingDetails.hidden = !isSpeakingInquiry;

  speakingDetails.querySelectorAll("input, select, textarea").forEach((field) => {
    field.disabled = !isSpeakingInquiry;
  });

  if (speakingType) {
    speakingType.required = isSpeakingInquiry;
  }
}

if (inquiryType && speakingDetails) {
  inquiryType.addEventListener("change", syncSpeakingFields);
  syncSpeakingFields();
}
