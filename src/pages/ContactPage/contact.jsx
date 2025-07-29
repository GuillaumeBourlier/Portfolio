import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Modal from "../../components/Form/Modal";

const Contact = () => {
  const [state, handleSubmit] = useForm("mnnzvyek");

  if (state.succeeded) {
    return <Modal message="Votre message a bien été envoyé !" onClose={() => {}} />;
  }

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
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">
            Votre nom
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Votre nom"
            required
          />
          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
          />
          <label htmlFor="email">
            Votre email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Votre email"
            required
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
          <label htmlFor="message">
            Votre message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Votre message"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting}>
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
