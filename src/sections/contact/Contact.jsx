import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contato</h2>
      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="name" placeholder="Seu Nome" required />
        <input type="email" name="email" placeholder="Seu E-mail" required />
        <textarea name="message" placeholder="Sua Mensagem" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contact;