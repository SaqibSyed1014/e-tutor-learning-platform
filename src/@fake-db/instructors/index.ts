
export interface Instructor {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  students: number;
  courses?: number;
}

const instructorsData: Instructor[] = [
  {
    id: '1',
    name: 'Devon Lane',
    role: 'Senior Developer',
    avatar: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
    rating: 4.8,
    students: 854,
    courses: 12
  },
  {
    id: '2',
    name: 'Darrell Steward',
    role: 'Digital Project Designer',
    avatar: 'https://images.unsplash.com/photo-1520409364224-63400afe26e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    rating: 4.6,
    students: 451444,
    courses: 8
  },
  {
    id: '3',
    name: 'Jane Cooper',
    role: 'UX/UI Designer',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    rating: 4.8,
    students: 435871,
    courses: 15
  },
  {
    id: '4',
    name: 'Albert Flores',
    role: 'Adobe Instructor',
    avatar: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2122&q=80',
    rating: 4.7,
    students: 311323,
    courses: 10
  },
  {
    id: '5',
    name: 'Kathryn Murphy',
    role: 'Lead Developer',
    avatar: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    rating: 4.2,
    students: 2711,
    courses: 5
  }
];

export const topInstructors = instructorsData;

export default instructorsData;
