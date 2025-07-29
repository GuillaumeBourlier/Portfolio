import React, { useState } from "react";
import Modal from "../../components/Form/Modal";

const Contact = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const response = await fetch(e.target.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setShowModal(true);
        e.target.reset(); // Réinitialise le formulaire
        setTimeout(() => setShowModal(false), 3000);
      } else {
        alert("Une erreur s'est produite, veuillez réessayer.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Une erreur s'est produite, veuillez réessayer.");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <div className="contact-info">
          <h2>Contactez-moi</h2>
          <p>
            Actuellement à la recherche de nouvelles opportunités professionnelles,
            je suis ouvert aux collaborations en tant que freelance ainsi qu'au
            poste de développeur junior au sein d'une entreprise. Passionné par le
            développement et la création de solutions innovantes, je suis déterminé
            à apporter ma rigueur et ma créativité à vos projets. N'hésitez pas à
            me contacter pour discuter de la manière dont je pourrais contribuer à
            votre équipe ou à vos initiatives.
          </p>
        </div>
        <form
          className="contact-form"
          onSubmit={handleSubmit}
          action="https://formspree.io/f/mnnzvyek"
          method="POST"
        >
          <input type="text" name="name" placeholder="Votre nom" required />
          <input type="email" name="email" placeholder="Votre email" required />
          <textarea
            name="message"
            rows="5"
            placeholder="Votre message"
            required
          ></textarea>
          <button type="submit">Envoyer</button>
        </form>
      </div>
      {showModal && (
        <Modal
          message="Votre message a bien été envoyé !"
          onClose={() => setShowModal(false)}
        />
      )}
    </section>
  );
};

export default Contact;
