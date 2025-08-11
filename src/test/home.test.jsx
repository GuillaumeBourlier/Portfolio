
// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import { describe, it, expect, vi, beforeEach } from 'vitest';
// import { MemoryRouter } from 'react-router-dom';
// import { ThemeContext } from '../components/Theme/ThemeContext';
// import Home from '../pages/HomePage/home';


// const renderWithProviders = (ui) => {
//   const themeContextValue = {
//     theme: 'light',
//     toggleTheme: vi.fn(),
//   };

//   return render(
//     <ThemeContext.Provider value={themeContextValue}>
//       <MemoryRouter initialEntries={['/']}>
//         {ui}
//       </MemoryRouter>
//     </ThemeContext.Provider>
//   );
// };

// describe('Page d\'accueil (Home)', () => {
//   beforeEach(() => {
//     renderWithProviders(<Home />);
//   });

//   it('devrait afficher les informations d\'en-tête (nom, titre)', () => {
//     expect(
//       screen.getByRole('heading', { level: 1, name: /Guillaume Bourlier/i })
//     ).toBeInTheDocument();

//     expect(
//       screen.getByRole('heading', { level: 2, name: /Développeur Front-End/i })
//     ).toBeInTheDocument();
//   });

//   it('devrait afficher la section "À propos de moi" avec l\'image et les liens', () => {
//     expect(
//       screen.getByRole('heading', { level: 2, name: /À propos de moi/i })
//     ).toBeInTheDocument();

//     const profileImg = screen.getByAltText(/Photo de profil de Guillaume Bourlier/i);
//     expect(profileImg).toBeInTheDocument();

//     const linkedinLink = screen.getByRole('link', { name: /Profil LinkedIn/i });
//     expect(linkedinLink).toHaveAttribute('href', expect.stringContaining('linkedin.com'));

//     const githubLink = screen.getByRole('link', { name: /Profil GitHub/i });
//     expect(githubLink).toHaveAttribute('href', expect.stringContaining('github.com'));
//   });

//   it('devrait afficher un lien fonctionnel pour télécharger le CV', () => {
//     const cvButton = screen.getByRole('link', { name: /Télécharger mon CV/i });
//     expect(cvButton).toHaveAttribute('download', 'CV_Guillaume_Bourlier.pdf');
//   });

//   it('devrait afficher les sections de compétences (Stack et Soft Skills)', () => {
//     expect(
//       screen.getByRole('heading', { level: 2, name: /Stack Technique/i })
//     ).toBeInTheDocument();
//     const techs = ["HTML", "CSS", "JavaScript", "React", "Redux"];
//     techs.forEach(tech => expect(screen.getByText(tech)).toBeInTheDocument());

//     expect(
//       screen.getByRole('heading', { level: 3, name: /Soft Skills/i })
//     ).toBeInTheDocument();
//     const softSkills = ["Communication & esprit d'équipe", "Rigueur & souci du détail", "Orientation client & UX"];
//     softSkills.forEach(skill => expect(screen.getByText(skill)).toBeInTheDocument());
//   });

//   it('devrait afficher la section "In progress"', () => {
//     expect(
//       screen.getByRole('heading', { level: 3, name: /In progress/i })
//     ).toBeInTheDocument();
//     const nextJsLogo = screen.getByAltText(/Logo Next.js/i);
//     expect(nextJsLogo).toBeInTheDocument();
//   });
// });
