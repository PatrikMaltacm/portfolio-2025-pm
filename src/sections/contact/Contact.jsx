import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form)).toString(),
    })
      .then(() => setSuccess(true))
      .catch((error) => alert("Erro ao enviar mensagem. Tente novamente."));
  };

  return (
    <section id="contact" className="contact">
      <h2>Contato</h2>

      {success ? (
        <p>Mensagem enviada com sucesso! Entraremos em contato em breve.</p>
      ) : (
        <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Não preencha isso: <input name="bot-field" />
            </label>
          </p>
          <input type="text" name="name" placeholder="Seu Nome" required onChange={handleChange} />
          <input type="email" name="email" placeholder="Seu E-mail" required onChange={handleChange} />
          <textarea name="message" placeholder="Sua Mensagem" required onChange={handleChange}></textarea>
          <button type="submit">Enviar</button>
        </form>
      )}
    </section>
  );
};

export default Contact;
