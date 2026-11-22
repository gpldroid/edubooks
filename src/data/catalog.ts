export type LearningCategory = {
  slug: string;
  nameEn: string;
  nameFr: string;
  nameEs: string;
  descriptionEn: string;
  descriptionFr: string;
  descriptionEs: string;
};

export type BookTocItem = {
  titleEn: string;
  titleFr: string;
  titleEs: string;
  page?: number;
};

export type Book = {
  slug: string;
  title: string;
  titleFr: string;
  titleEs: string;
  description: string;
  descriptionFr: string;
  descriptionEs: string;
  category: string;
  language: 'en' | 'fr' | 'es' | 'multilingual';
  format: 'PDF';
  cover: string;
  coverAlt: string;
  status: 'draft' | 'published';
  author?: string;
  pages?: number;
  level?: string;
  subjects?: string[];
  toc: BookTocItem[];
  previewPdf: string;
  samplePageCount: number;
  downloadPdf?: string;
  // Commercial fields are retained for backwards-compatible editorial metadata only.
  // Public templates intentionally never render checkout or download links.
  price?: number | null;
  currency?: 'USD' | 'EUR';
  gumroadUrl?: string;
  paypalUrl?: string;
  downloadUrl?: string;
};

export const categories: LearningCategory[] = [
  { slug: 'language-learning', nameEn: 'Language learning', nameFr: 'Apprentissage des langues', nameEs: 'Aprendizaje de idiomas', descriptionEn: 'Vocabulary, grammar, reading, writing and practical language exercises.', descriptionFr: 'Vocabulaire, grammaire, lecture, écriture et exercices pratiques.', descriptionEs: 'Vocabulario, gramática, lectura, escritura y ejercicios prácticos.' },
  { slug: 'school-learning', nameEn: 'School learning', nameFr: 'Apprentissage scolaire', nameEs: 'Aprendizaje escolar', descriptionEn: 'Subject guides, revision materials and practice sheets.', descriptionFr: 'Guides par matière, révisions et fiches d’exercices.', descriptionEs: 'Guías por asignatura, repasos y hojas de ejercicios.' },
  { slug: 'academic-guides', nameEn: 'Academic guides', nameFr: 'Guides académiques', nameEs: 'Guías académicas', descriptionEn: 'Study skills, research methods and reference guides.', descriptionFr: 'Méthodes de travail, recherche et guides de référence.', descriptionEs: 'Técnicas de estudio, métodos de investigación y referencias.' },
  { slug: 'teacher-resources', nameEn: 'Teacher resources', nameFr: 'Ressources pédagogiques', nameEs: 'Recursos para docentes', descriptionEn: 'Lesson planning, classroom activities and assessment templates.', descriptionFr: 'Préparation des cours, activités et modèles d’évaluation.', descriptionEs: 'Planificación de clases, actividades y modelos de evaluación.' },
  { slug: 'early-learning', nameEn: 'Early learning', nameFr: 'Éveil et petite enfance', nameEs: 'Aprendizaje temprano', descriptionEn: 'Activities that support foundational skills and curiosity.', descriptionFr: 'Activités pour développer les compétences fondamentales et la curiosité.', descriptionEs: 'Actividades para desarrollar habilidades básicas y curiosidad.' },
  { slug: 'lifelong-learning', nameEn: 'Lifelong learning', nameFr: 'Apprentissage continu', nameEs: 'Aprendizaje permanente', descriptionEn: 'Digital literacy and professional learning guides.', descriptionFr: 'Culture numérique et guides de développement professionnel.', descriptionEs: 'Alfabetización digital y guías de desarrollo profesional.' }
];

export const books: Book[] = [];

export function validateBookCatalog(catalog: readonly Book[]): string[] {
  const errors: string[] = [];
  const slugs = new Set<string>();

  for (const book of catalog) {
    const prefix = `Book "${book.slug || '(missing slug)'}"`;
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(book.slug)) errors.push(`${prefix}: slug must be lowercase kebab-case.`);
    if (slugs.has(book.slug)) errors.push(`${prefix}: duplicate slug.`);
    slugs.add(book.slug);

    for (const [field, value] of Object.entries({
      title: book.title, titleFr: book.titleFr, titleEs: book.titleEs,
      description: book.description, descriptionFr: book.descriptionFr, descriptionEs: book.descriptionEs,
      coverAlt: book.coverAlt
    })) {
      if (!value?.trim()) errors.push(`${prefix}: ${field} is required.`);
    }

    if (!book.cover.startsWith('/') || book.cover.startsWith('//') || book.cover.includes('..')) {
      errors.push(`${prefix}: cover must be a safe root-relative public path.`);
    }
    if (!book.previewPdf.startsWith('/previews/') || !book.previewPdf.endsWith('.pdf') || book.previewPdf.includes('..')) {
      errors.push(`${prefix}: previewPdf must point to a PDF inside /previews/.`);
    }
    if (!Number.isInteger(book.samplePageCount) || book.samplePageCount < 3 || book.samplePageCount > 5) {
      errors.push(`${prefix}: samplePageCount must be an integer from 3 to 5.`);
    }
    if (!Array.isArray(book.toc) || book.toc.length === 0) {
      errors.push(`${prefix}: at least one table-of-contents item is required.`);
    } else {
      book.toc.forEach((item, index) => {
        if (![item.titleEn, item.titleFr, item.titleEs].every((title) => title?.trim())) {
          errors.push(`${prefix}: table-of-contents item ${index + 1} must have EN, FR and ES titles.`);
        }
        if (item.page !== undefined && (!Number.isInteger(item.page) || item.page < 1)) {
          errors.push(`${prefix}: table-of-contents page numbers must be positive integers.`);
        }
      });
    }
    if (book.status !== 'draft' && book.status !== 'published') errors.push(`${prefix}: invalid publication status.`);
  }

  return errors;
}

const catalogErrors = validateBookCatalog(books);
if (catalogErrors.length > 0) {
  throw new Error(`Invalid EduBooks catalogue:\\n- ${catalogErrors.join('\\n- ')}`);
}
