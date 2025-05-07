
export interface Course {
  id: string;
  title: string;
  category: string;
  price: number;
  originalPrice: number;
  discount?: number;
  rating: number;
  reviewCount: number;
  students: number;
  instructor: {
    id: string;
    name: string;
    avatar: string;
  };
  image: string;
  duration: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  description?: string;
  learningPoints?: string[];
}

const coursesData: Course[] = [
  {
    id: '1',
    title: 'Machine Learning A-Z™: Hands-On Python & R in Data Science',
    category: 'CODING',
    price: 57,
    originalPrice: 199.99,
    rating: 5.0,
    reviewCount: 357914,
    students: 285700,
    instructor: {
      id: '1',
      name: 'Kevin Gilbert',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    },
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    duration: 6,
    level: 'Beginner',
  },
  {
    id: '2',
    title: 'The Complete 2021 Web Development Bootcamp',
    category: 'DEVELOPMENT',
    price: 57,
    originalPrice: 199.99,
    rating: 5.0,
    reviewCount: 357914,
    students: 285700,
    instructor: {
      id: '1',
      name: 'Kevin Gilbert',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    },
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    duration: 6,
    level: 'Beginner',
  },
  {
    id: '3',
    title: 'Learn Python Programming Masterclass',
    category: 'LIBRARY',
    price: 57,
    originalPrice: 199.99,
    rating: 5.0,
    reviewCount: 357914,
    students: 285700,
    instructor: {
      id: '1',
      name: 'Kevin Gilbert',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    },
    image: 'https://images.unsplash.com/photo-1587691592099-24045742c181?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    duration: 6,
    level: 'Beginner',
  },
  {
    id: '4',
    title: 'The Complete Digital Marketing Course - 12 Courses in 1',
    category: 'MARKETING',
    price: 57,
    originalPrice: 199.99,
    rating: 5.0,
    reviewCount: 357914,
    students: 285700,
    instructor: {
      id: '1',
      name: 'Kevin Gilbert',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    },
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    duration: 6,
    level: 'Beginner',
  },
  {
    id: '5',
    title: 'React Level I: LifeUI Master/Teacher Program',
    category: 'DEVELOPMENT',
    price: 57,
    originalPrice: 199.99,
    rating: 5.0,
    reviewCount: 357914,
    students: 285700,
    instructor: {
      id: '1',
      name: 'Kevin Gilbert',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    },
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    duration: 6,
    level: 'Beginner',
  },
  {
    id: '6',
    title: 'The Complete Foundation Stock Trading Course',
    category: 'FINANCE',
    price: 57,
    originalPrice: 199.99,
    rating: 5.0,
    reviewCount: 357914,
    students: 285700,
    instructor: {
      id: '1',
      name: 'Kevin Gilbert',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    },
    image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    duration: 6,
    level: 'Beginner',
  },
  {
    id: '7',
    title: 'Become an Pro in Excel, Financial Modeling and Valuation',
    category: 'MARKETING',
    price: 57,
    originalPrice: 199.99,
    rating: 5.0,
    reviewCount: 357914,
    students: 285700,
    instructor: {
      id: '1',
      name: 'Kevin Gilbert',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    },
    image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    duration: 6,
    level: 'Beginner',
  },
  {
    id: '8',
    title: 'The Python Mega Course: Build 10 Real World Applications',
    category: 'HEALTH & FITNESS',
    price: 57,
    originalPrice: 199.99,
    rating: 5.0,
    reviewCount: 357914,
    students: 285700,
    instructor: {
      id: '1',
      name: 'Kevin Gilbert',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    },
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    duration: 6,
    level: 'Beginner',
    description: 'The Python Mega Course will take you from beginner to professional in Python programming, teaching both theory and practical implementation through building 10 real-world applications.',
    learningPoints: [
      'Learn to use Python professionally, learning both Python 2 and Python 3',
      'Create games with Python, like Tic Tac Toe and Blackjack',
      'Create web applications with Python'
    ]
  },
  {
    id: '9',
    title: 'Copywriting - Become a Freelance Copywriter, your own boss',
    category: 'DESIGN',
    price: 57,
    originalPrice: 199.99,
    rating: 5.0,
    reviewCount: 357914,
    students: 285700,
    instructor: {
      id: '1',
      name: 'Kevin Gilbert',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    },
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    duration: 6,
    level: 'Beginner',
    learningPoints: [
      'Learn to use Python professionally, learning both Python 2 and Python 3',
      'Create games with Python, like Tic Tac Toe and Blackjack',
      'Create web applications with Python'
    ]
  },
  {
    id: '10',
    title: 'Google Analytics Certification - Learn How To Pass The Exam',
    category: 'LEADERSHIP',
    price: 57,
    originalPrice: 199.99,
    rating: 5.0,
    reviewCount: 357914,
    students: 285700,
    instructor: {
      id: '1',
      name: 'Kevin Gilbert',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    },
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    duration: 6,
    level: 'Beginner',
    learningPoints: [
      'Learn to use Python professionally, learning both Python 2 and Python 3',
      'Create games with Python, like Tic Tac Toe and Blackjack',
      'Create web applications with Python'
    ]
  },
  {
    id: '11',
    title: 'Google Analytics Certification - Learn How To Pass The Exam',
    category: 'PERSONAL DEVELOPMENT',
    price: 14.00,
    originalPrice: 89.99,
    rating: 5.0,
    reviewCount: 357914,
    students: 265700,
    instructor: {
      id: '1',
      name: 'Kevin Gilbert',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    },
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    duration: 6,
    level: 'Beginner',
    learningPoints: [
      'Learn to use Python professionally, learning both Python 2 and Python 3',
      'Create games with Python, like Tic Tac Toe and Blackjack',
      'Create web applications with Python'
    ]
  },
  {
    id: '12',
    title: 'Investing In Stocks The Complete Course! (13 Hour)',
    category: 'HEALTH & FITNESS',
    price: 14.00,
    originalPrice: 89.99,
    rating: 5.0,
    reviewCount: 357914,
    students: 265700,
    instructor: {
      id: '1',
      name: 'Kevin Gilbert',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    },
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    duration: 6,
    level: 'Beginner',
    learningPoints: [
      'Learn to use Python professionally, learning both Python 2 and Python 3',
      'Create games with Python, like Tic Tac Toe and Blackjack',
      'Create web applications with Python'
    ]
  },
  {
    id: '13',
    title: 'Adobe XD for Web Design: Essential Principles',
    category: 'PRODUCTIVITY',
    price: 14.00,
    originalPrice: 89.99,
    rating: 5.0,
    reviewCount: 357914,
    students: 265700,
    instructor: {
      id: '1',
      name: 'Kevin Gilbert',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    },
    image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    duration: 6,
    level: 'Beginner',
    learningPoints: [
      'Learn to use Python professionally, learning both Python 2 and Python 3',
      'Create games with Python, like Tic Tac Toe and Blackjack',
      'Create web applications with Python'
    ]
  },
  {
    id: '14',
    title: 'The Python Mega Course: Build 10 Real World Applications',
    category: 'MUSIC',
    price: 14.00,
    originalPrice: 89.99,
    rating: 5.0,
    reviewCount: 357914,
    students: 265700,
    instructor: {
      id: '1',
      name: 'Kevin Gilbert',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    },
    image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    duration: 6,
    level: 'Beginner',
    learningPoints: [
      'Learn to use Python professionally, learning both Python 2 and Python 3',
      'Create games with Python, like Tic Tac Toe and Blackjack',
      'Create web applications with Python'
    ]
  },
  {
    id: '15',
    title: 'Facebook Ads & Facebook Marketing MASTERY 2021 Course',
    category: 'DEVELOPMENT',
    price: 57,
    originalPrice: 199.99,
    rating: 5.0,
    reviewCount: 357914,
    students: 265700,
    instructor: {
      id: '1',
      name: 'Kevin Gilbert',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    },
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    duration: 6,
    level: 'Beginner',
  },
  {
    id: '16',
    title: '2021 Complete Python Bootcamp From Zero to Hero in Python',
    category: 'DEVELOPMENT',
    price: 57,
    originalPrice: 199.99,
    discount: 50,
    rating: 5.0,
    reviewCount: 357914,
    students: 265700,
    instructor: {
      id: '1',
      name: 'Kevin Gilbert',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    },
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    duration: 6,
    level: 'Beginner',
    description: '2021 Complete Python Bootcamp From Zero to Hero in Python',
    learningPoints: [
      'Learn to use Python professionally, learning both Python 2 and Python 3',
      'Create games with Python, like Tic Tac Toe and Blackjack',
      'Create games with Python, like Tic Tac Toe and Blackjack'
    ]
  }
];

// Export different selections of courses
export const bestSellingCourses = coursesData.slice(0, 10);
export const featuredCourses = coursesData.slice(10, 14);
export const recentlyAddedCourses = coursesData.slice(7, 16);
export const getSingleCourse = (id: string) => coursesData.find(course => course.id === id) || null;
export const getCoursesByCategory = (category: string) =>
  coursesData.filter(course => course.category.toLowerCase() === category.toLowerCase());

export default coursesData;
