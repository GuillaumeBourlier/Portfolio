// setupTests.jsx

import '@testing-library/jest-dom';


vi.mock('@/assets/photo.webp', () => ({
  default: 'photo.webp',
}));
vi.mock('@/assets/CV-Guillaume-Bourlier.pdf', () => ({
  default: 'CV-Guillaume-Bourlier.pdf',
}));
