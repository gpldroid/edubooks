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
  previewPdf?: string;
  samplePageCount?: number;
  downloadPdf?: string;
};

export const categories: LearningCategory[] = [
  { slug: 'language-learning', nameEn: 'Language learning', nameFr: 'Apprentissage des langues', nameEs: 'Aprendizaje de idiomas', descriptionEn: 'Vocabulary, grammar, reading, writing and practical language exercises.', descriptionFr: 'Vocabulaire, grammaire, lecture, écriture et exercices pratiques.', descriptionEs: 'Vocabulario, gramática, lectura, escritura y ejercicios prácticos.' },
  { slug: 'school-learning', nameEn: 'School learning', nameFr: 'Apprentissage scolaire', nameEs: 'Aprendizaje escolar', descriptionEn: 'Subject guides, revision materials and practice sheets.', descriptionFr: 'Guides par matière, révisions et fiches d’exercices.', descriptionEs: 'Guías por asignatura, repasos y hojas de ejercicios.' },
  { slug: 'academic-guides', nameEn: 'Academic guides', nameFr: 'Guides académiques', nameEs: 'Guías académicas', descriptionEn: 'Study skills, research methods and reference guides.', descriptionFr: 'Méthodes de travail, recherche et guides de référence.', descriptionEs: 'Técnicas de estudio, métodos de investigación y referencias.' },
  { slug: 'teacher-resources', nameEn: 'Teacher resources', nameFr: 'Ressources pédagogiques', nameEs: 'Recursos para docentes', descriptionEn: 'Lesson planning, classroom activities and assessment templates.', descriptionFr: 'Préparation des cours, activités et modèles d’évaluation.', descriptionEs: 'Planificación de clases, actividades y modelos de evaluación.' },
  { slug: 'early-learning', nameEn: 'Early learning', nameFr: 'Éveil et petite enfance', nameEs: 'Aprendizaje temprano', descriptionEn: 'Activities that support foundational skills and curiosity.', descriptionFr: 'Activités pour développer les compétences fondamentales et la curiosité.', descriptionEs: 'Actividades para desarrollar habilidades básicas y curiosidad.' },
  { slug: 'lifelong-learning', nameEn: 'Lifelong learning', nameFr: 'Apprentissage continu', nameEs: 'Aprendizaje permanente', descriptionEn: 'Digital literacy and professional learning guides.', descriptionFr: 'Culture numérique et guides de développement professionnel.', descriptionEs: 'Alfabetización digital y guías de desarrollo profesional.' }
];

const foundationsToc: BookTocItem[] = [
  { titleEn: 'Start Here: How Languages Work', titleFr: 'Bien commencer : comment fonctionne l’apprentissage des langues', titleEs: 'Primeros pasos: cómo funciona el aprendizaje de idiomas' },
  { titleEn: 'The Alphabet and Spelling', titleFr: 'L’alphabet et l’épellation', titleEs: 'El alfabeto y cómo deletrear' },
  { titleEn: 'First Sounds and Pronunciation', titleFr: 'Premiers sons et prononciation', titleEs: 'Primeros sonidos y pronunciación' },
  { titleEn: 'Greetings and Politeness', titleFr: 'Salutations et politesse', titleEs: 'Saludos y cortesía' },
  { titleEn: 'Introducing Yourself', titleFr: 'Se présenter', titleEs: 'Presentarse' },
  { titleEn: 'Numbers, Dates and Time', titleFr: 'Nombres, dates et heure', titleEs: 'Números, fechas y hora' },
  { titleEn: 'Personal Information and Questions', titleFr: 'Informations personnelles et questions', titleEs: 'Información personal y preguntas' },
  { titleEn: 'Classroom and Learning Language', titleFr: 'Langue de la classe et de l’apprentissage', titleEs: 'Lenguaje del aula y del aprendizaje' },
  { titleEn: 'First Sentences', titleFr: 'Les premières phrases', titleEs: 'Las primeras frases' },
  { titleEn: 'Integrated Beginner Project', titleFr: 'Projet intégré pour débutants', titleEs: 'Proyecto integrado para principiantes' }
];

const vocabularyToc: BookTocItem[] = [
  { titleEn: 'People, Family and Relationships', titleFr: 'Personnes, famille et relations', titleEs: 'Personas, familia y relaciones' },
  { titleEn: 'Home and Everyday Objects', titleFr: 'La maison et les objets du quotidien', titleEs: 'La casa y los objetos cotidianos' },
  { titleEn: 'Food and Meals', titleFr: 'Les aliments et les repas', titleEs: 'La comida y las comidas' },
  { titleEn: 'Clothing and Shopping', titleFr: 'Les vêtements et les achats', titleEs: 'La ropa y las compras' },
  { titleEn: 'Daily Routines', titleFr: 'Les activités quotidiennes', titleEs: 'Las rutinas diarias' },
  { titleEn: 'Town, Places and Directions', titleFr: 'La ville, les lieux et les directions', titleEs: 'La ciudad, los lugares y las indicaciones' },
  { titleEn: 'Travel and Accommodation', titleFr: 'Les voyages et l’hébergement', titleEs: 'Los viajes y el alojamiento' },
  { titleEn: 'Work and Study', titleFr: 'Le travail et les études', titleEs: 'El trabajo y los estudios' },
  { titleEn: 'Body and Basic Health Needs', titleFr: 'Le corps et les besoins de santé courants', titleEs: 'El cuerpo y las necesidades básicas de salud' },
  { titleEn: 'Weather, Seasons and Leisure', titleFr: 'La météo, les saisons et les loisirs', titleEs: 'El tiempo, las estaciones y el ocio' },
  { titleEn: 'Feelings, Preferences and Opinions', titleFr: 'Les sentiments, les préférences et les opinions', titleEs: 'Los sentimientos, las preferencias y las opiniones' },
  { titleEn: 'Build Your Vocabulary System', titleFr: 'Construire son système de vocabulaire', titleEs: 'Crear tu sistema de vocabulario' }
];

const editions = (base: Omit<Book, 'slug' | 'language' | 'cover' | 'coverAlt'>, bookSlug: string): Book[] =>
  (['en', 'fr', 'es'] as const).map((language) => ({
    ...base,
    slug: `${bookSlug}-${language}`,
    language,
    cover: `/covers/${bookSlug}-${language}.svg`,
    coverAlt: `${base.title} — ${language.toUpperCase()} edition cover`,
    previewPdf: `/previews/${bookSlug}-${language}-sample.pdf`,
    samplePageCount: 5,
    downloadPdf: `/books/${bookSlug}-${language}.pdf`
  }));

const foundationsBase: Omit<Book, 'slug' | 'language' | 'cover' | 'coverAlt'> = {
  title: 'Language Foundations',
  titleFr: 'Fondements de l’apprentissage des langues',
  titleEs: 'Fundamentos del aprendizaje de idiomas',
  description: 'A practical beginner workbook covering learning strategies, the alphabet, pronunciation, greetings, introductions, numbers, personal information and first sentences.',
  descriptionFr: 'Un cahier pratique pour débutants consacré aux méthodes d’apprentissage, à l’alphabet, à la prononciation, aux salutations, aux présentations, aux nombres, aux informations personnelles et aux premières phrases.',
  descriptionEs: 'Un cuaderno práctico para principiantes sobre estrategias de aprendizaje, el alfabeto, la pronunciación, los saludos, las presentaciones, los números, la información personal y las primeras frases.',
  category: 'language-learning',
  format: 'PDF',
  status: 'published',
  level: 'Pre-A1–A1 learning target; not a certification',
  subjects: ['Language learning', 'Pronunciation', 'Beginner communication', 'Study skills'],
  toc: foundationsToc
};

const vocabularyBase: Omit<Book, 'slug' | 'language' | 'cover' | 'coverAlt'> = {
  title: 'Essential Vocabulary',
  titleFr: 'Vocabulaire essentiel',
  titleEs: 'Vocabulario esencial',
  description: 'A self-study vocabulary workbook for everyday communication, with twelve themed units, guided practice, answer checks, a personal vocabulary record and a glossary.',
  descriptionFr: 'Un cahier d’autoapprentissage du vocabulaire quotidien comprenant douze unités thématiques, des activités guidées, des corrigés, un carnet personnel et un glossaire.',
  descriptionEs: 'Un cuaderno de autoaprendizaje de vocabulario cotidiano con doce unidades temáticas, práctica guiada, soluciones, un registro personal y un glosario.',
  category: 'language-learning',
  format: 'PDF',
  status: 'draft',
  level: 'A1–A2 approximate learning range; not a certification',
  subjects: ['Everyday vocabulary', 'Self-study', 'Communication', 'Spaced review'],
  toc: vocabularyToc
};

export const books: Book[] = [
  ...editions(foundationsBase, 'language-foundations'),
  ...editions(vocabularyBase, 'essential-vocabulary')
];

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
    if (!['en', 'fr', 'es', 'multilingual'].includes(book.language)) {
      errors.push(`${prefix}: invalid edition language.`);
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

    if (book.status === 'published') {
      if (!book.previewPdf || !book.previewPdf.startsWith('/previews/') || !book.previewPdf.endsWith('.pdf') || book.previewPdf.includes('..')) {
        errors.push(`${prefix}: published editions require a safe PDF preview under /previews/.`);
      }
      if (!book.downloadPdf || !book.downloadPdf.startsWith('/books/') || !book.downloadPdf.endsWith('.pdf') || book.downloadPdf.includes('..')) {
        errors.push(`${prefix}: published editions require a full PDF under /books/.`);
      }
      if (!Number.isInteger(book.samplePageCount) || (book.samplePageCount ?? 0) < 3 || (book.samplePageCount ?? 0) > 5) {
        errors.push(`${prefix}: published samplePageCount must be from 3 to 5.`);
      }
    } else if (book.previewPdf || book.downloadPdf || book.samplePageCount) {
      errors.push(`${prefix}: draft editions must not expose preview or download files.`);
    }

    if (book.status !== 'draft' && book.status !== 'published') errors.push(`${prefix}: invalid publication status.`);
  }

  return errors;
}

const catalogErrors = validateBookCatalog(books);
if (catalogErrors.length > 0) {
  throw new Error(`Invalid EduBooks catalogue:\n- ${catalogErrors.join('\n- ')}`);
}
