import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <main className="error-page">
      <h1 className="error-page__title">Erreur 404</h1>
      <h2 className="error-page__message">
        La page que vous recherchez est introuvable ou a été déplacée
      </h2>
      <Link to="/" className="error-page__link">Retourner à l'accueil</Link>
    </main>
  );
}
