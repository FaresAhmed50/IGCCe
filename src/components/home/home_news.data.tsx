import type { News } from '@/interfaces/News'

export const dataNews: Array<News> = [
    {
        id: '1',
        slug: 'new-courses-announcement',
        image: [{
            url: '/program_1.jpeg',
            width: 800,
            height: 600
        }],
        title: 'New Governance Courses Launched',
        shortDescription: 'We are excited to announce a new series of specialized training courses in corporate governance',
        description: [
            'We are pleased to announce the launch of a new series of specialized training courses in corporate governance.',
            'The new courses cover diverse topics such as risk management, regulatory compliance, and board best practices.',
            'These courses have been designed to meet the needs of professionals and executives in the region.'
        ],
        date: '2024-02-15'
    },
    {
        id: '2',
        slug: 'successful-governance-conference',
        image: [{
            url: '/program_2.png',
            width: 800,
            height: 600
        }],
        title: 'Annual Governance Conference Success',
        shortDescription: 'The Annual Governance Conference concludes with participation from experts worldwide',
        description: [
            'The Annual Governance Conference has successfully concluded with over 500 participants.',
            'The conference discussed the latest developments in corporate governance and global best practices.',
            'Distinguished experts and specialists from around the world participated in the conference.'
        ],
        date: '2024-02-10'
    },
    {
        id: '3',
        slug: 'new-partnership-announcement',
        image: [{
            url: '/program_3.png',
            width: 800,
            height: 600
        }],
        title: 'New Strategic Partnership',
        shortDescription: 'Strategic partnership agreement signed with the International Governance Institute',
        description: [
            'A strategic partnership agreement has been signed with the International Governance Institute to enhance training and development programs.',
            'The partnership aims to provide internationally accredited professional certifications in governance.',
            'This partnership will create new opportunities for professionals in the region to access the latest knowledge and practices.'
        ],
        date: '2024-02-05'
    }
]
