document.addEventListener("DOMContentLoaded", () => {
  emailjs.init("-8D-FDn1Qy5e-WEtp"); //Lagay mo dito yung API KEY after nun gawa ka sa service piliin mo gmail

  const contactForm = document.getElementById("contactform");
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const submitButton = contactForm.querySelector("button");
    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    emailjs
      .sendForm("service_qab6u3i", "template_j333izp", contactForm) //lalagay dito id ng sa service and after nun gawa ka template message ikaw na bahala kung ano message mo then after nun lagay mo ID ng template mo jan
      .then(() => {
        alert("Your message has been sent successfully!");
        contactForm.reset();
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        alert("An error occurred. Please try again later.");
      })
      .finally(() => {
        submitButton.disabled = false;
      });
  });
});
