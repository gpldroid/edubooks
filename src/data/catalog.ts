export type LearningCategory = {
  slug: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
};

export type Book = {
  slug: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  category: string;
  language: 'en' | 'ar' | 'bilingual';
  format: 'PDF';
  cover: string;
  price: number | null;
  currency: 'USD';
  status: 'draft' | 'published';
  downloadUrl?: string;
};

// Category records are editorial taxonomy, not claims that products are available.
export const categories: LearningCategory[] = [
  { slug: 'language-learning', name: 'Language learning', nameAr: 'تعلم اللغات', description: 'Vocabulary, grammar, reading, writing and practical language exercises.', descriptionAr: 'المفردات والقواعد والقراءة والكتابة والتدريبات اللغوية العملية.' },
  { slug: 'school-learning', name: 'School learning', nameAr: 'التعليم المدرسي', description: 'Subject guides, revision materials and practice sheets.', descriptionAr: 'أدلة المواد والمراجعة والتمارين التعليمية.' },
  { slug: 'academic-guides', name: 'Academic guides', nameAr: 'الأدلة الأكاديمية', description: 'Study skills, research methods and reference guides.', descriptionAr: 'مهارات الدراسة ومناهج البحث والمراجع.' },
  { slug: 'teacher-resources', name: 'Teacher resources', nameAr: 'موارد المعلمين', description: 'Lesson planning, classroom activities and assessment templates.', descriptionAr: 'تخطيط الدروس وأنشطة الفصل وقوالب التقييم.' },
  { slug: 'early-learning', name: 'Early learning', nameAr: 'التعلم المبكر', description: 'Activities that support foundational skills and curiosity.', descriptionAr: 'أنشطة تدعم المهارات الأساسية والفضول.' },
  { slug: 'lifelong-learning', name: 'Lifelong learning', nameAr: 'التعلم مدى الحياة', description: 'Digital literacy and professional learning guides.', descriptionAr: 'الثقافة الرقمية وأدلة التعلم المهني.' }
];

// Keep empty until real, reviewed and licensed products are ready for publication.
export const books: Book[] = [];
