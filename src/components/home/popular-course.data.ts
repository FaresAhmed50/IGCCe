import type { Course } from '@/interfaces/course';
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useMemo } from 'react';

const useCourseData = () => {
  const { t } = useTranslation('common');
  const { locale } = useRouter();
  const isRtl = locale === 'ar';

  const data: Array<Course> = useMemo(() => [
    {
      id: 1,
      cover: '/program_1.jpeg',
      title: t('programTitle.program1'), // Use translation here
      rating: 5,
      ratingCount: 8,
      price: 250,
      category: '',
      description: t('programDes.program1'),
    },
    {
      id: 2,
      cover: '/program_2.png',
      title: t('programTitle.program2'),
      rating: 5,
      ratingCount: 15,
      price: 200,
      category: '',
      description: t('programDes.program2'),
    },
    {
      id: 3,
      cover: '/program_3.png',
      title: t('programTitle.program3'),
      rating: 4,
      ratingCount: 7,
      price: 30,
      category: '',
      description: t('programDes.program3'),
    },
    {
      id: 4,
      cover: '/program_4.png',
      title: t('programTitle.program4'),
      rating: 4,
      ratingCount: 12,
      price: 30,
      category: '',
      description: t('programDes.program4'),
    },
    {
      id: 5,
      cover: '/program_5.png',
      title: t('programTitle.program5'),
      rating: 4,
      ratingCount: 32,
      price: 35,
      category: '',
      description: t('programDes.program5'),
    },
    {
      id: 6,
      cover: '/program_6.png',
      title: t('programTitle.program6'),
      rating: 5,
      ratingCount: 14,
      price: 35,
      category: '',
      description: t('programDes.program6'),
    },
    {
      id: 7,
      cover: '/program_7.png',
      title: t('programTitle.program7'),
      rating: 4,
      ratingCount: 6,
      price: 25,
      category: '',
      description: t('programDes.program7'),
    },
    {
      id: 8,
      cover: '/program_8.png',
      title: t('programTitle.program8'),
      rating: 4,
      ratingCount: 6,
      price: 25,
      category: '',
      description: t('programDes.program8'),
    },
    {
      id: 9,
      cover: '/program_9.png',
      title: t('programTitle.program9'),
      rating: 4,
      ratingCount: 6,
      price: 25,
      category: '',
      description: t('programDes.program9'),
    },
    {
      id: 10,
      cover: '/program_10.png',
      title: t('programTitle.program10'),
      rating: 4,
      ratingCount: 6,
      price: 25,
      category: '',
      description: t('programDes.program10'),
    },
    {
      id: 11,
      cover: '/program_11.png',
      title: t('programTitle.program11'),
      rating: 4,
      ratingCount: 6,
      price: 25,
      category: '',
      description: t('programDes.program11'),
    },
    {
      id: 12,
      cover: '/program_12.png',
      title: t('programTitle.program12'),
      rating: 4,
      ratingCount: 6,
      price: 25,
      category: '',
      description: t('programDes.program12'),
    },
  ], [t]);

  return { data, isRtl };
};

export default useCourseData;
