export default function ErrorPage() {
  return (
    <main className="error-page">
      <h1 className="error-page__title">Erreur 404</h1>
      <h2 className="error-page__message">
        La page que vous recherchez est introuvable ou a été déplacée
      </h2>
      <a href="/" className="error-page__link">Retourner à l'accueil</a>
    </main>
  );
}
