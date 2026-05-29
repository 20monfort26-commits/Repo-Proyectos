const SITE_CONFIG = {
  quoteFormEndpoint: "",
  quoteEmail: "hola@impulsasocial.es",
  stripeLinks: {
    start: "",
    growth: "",
    performance: ""
  }
};

const pageMap = {
  home: "index.html",
  services: "services.html",
  campaigns: "social-media.html",
  testimonials: "testimonials.html",
  faq: "faq.html",
  contact: "contact.html"
};

const bodyPage = document.body.dataset.page;
const navLinks = document.querySelectorAll(".site-nav a[href]");

navLinks.forEach((link) => {
  if (link.getAttribute("href") === pageMap[bodyPage]) {
    link.classList.add("is-active");
  }
});

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const payButtons = document.querySelectorAll(".pay-button");

payButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const plan = button.dataset.plan;
    const paymentUrl = SITE_CONFIG.stripeLinks[plan];

    if (paymentUrl) {
      window.location.href = paymentUrl;
      return;
    }

    const fallbackUrl = new URL("contact.html", window.location.href);
    fallbackUrl.searchParams.set("plan", plan || "custom");
    fallbackUrl.searchParams.set("source", "pricing");
    window.location.href = fallbackUrl.toString();
  });
});

const quoteForm = document.querySelector("#quote-form");
const statusNode = document.querySelector("#form-status");
const serviceField = document.querySelector("#service");
const planField = document.querySelector("#selected-plan");
const searchParams = new URLSearchParams(window.location.search);
const requestedService = searchParams.get("service");
const selectedPlan = searchParams.get("plan");

if (requestedService && serviceField) {
  serviceField.value = requestedService;
}

if (selectedPlan && planField) {
  planField.value = selectedPlan;
}

const setStatus = (message, type = "success") => {
  if (!statusNode) {
    return;
  }

  statusNode.textContent = message;
  statusNode.style.color = type === "error" ? "var(--danger)" : "var(--success)";
};

const createMailtoUrl = (payload) => {
  const subject = `Solicitud de presupuesto - ${payload.service || "marketing digital"}`;
  const body = [
    `Nombre: ${payload.name}`,
    `Email: ${payload.email}`,
    `Empresa: ${payload.company || "No indicada"}`,
    `Servicio: ${payload.service}`,
    `Presupuesto: ${payload.budget}`,
    `Plan seleccionado: ${payload.selectedPlan || "Sin plan"}`,
    "",
    "Objetivos y contexto:",
    payload.message
  ].join("\n");

  return `mailto:${SITE_CONFIG.quoteEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

if (quoteForm) {
  quoteForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!quoteForm.checkValidity()) {
      quoteForm.reportValidity();
      setStatus("Revisa los campos obligatorios antes de enviar.", "error");
      return;
    }

    const formData = new FormData(quoteForm);
    const payload = Object.fromEntries(formData.entries());
    const endpoint = SITE_CONFIG.quoteFormEndpoint;

    if (!endpoint) {
      setStatus("Abriendo tu cliente de correo para completar la solicitud.");
      window.location.href = createMailtoUrl(payload);
      return;
    }

    try {
      setStatus("Enviando solicitud...");
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("No se pudo enviar el formulario.");
      }

      quoteForm.reset();
      if (planField && selectedPlan) {
        planField.value = selectedPlan;
      }
      if (serviceField && requestedService) {
        serviceField.value = requestedService;
      }
      setStatus("Solicitud enviada correctamente. Te responderemos muy pronto.");
    } catch (_error) {
      setStatus("No se pudo enviar online. Abrimos el correo como alternativa.", "error");
      window.location.href = createMailtoUrl(payload);
    }
  });
}
