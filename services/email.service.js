export default function EmailService(btn, form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    btn.textContent = "Enviando...";

    const serviceID = "service_2oozw12";
    const templateID = "template_2cb9qae";

    emailjs.sendForm(serviceID, templateID, form).then(
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
