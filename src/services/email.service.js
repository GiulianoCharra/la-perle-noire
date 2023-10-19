export default function EmailService(btn, form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    btn.textContent = "Enviando...";

    const serviceID = import.meta.env.EMAIL_SERVICE;
    const templateID = import.meta.env.TEMPLATE_CONTACTO_ID;

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btn.textContent = "Enviado";
        form.reset();
        setTimeout(() => (btn.textContent = "Enviar"), 2000);
      },
      (err) => {
        btn.textContent = "Error";
        alert(JSON.stringify(err));
      }
    );
  });
}
