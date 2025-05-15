import {
    BugDroid, Camera,
    ChartBarHorizontal,
    CreditCard, FirstAidKit,
    Handshake, Headphones, MegaPhoneSpeaker, Package,
    PenNib,
    Processor,
    Receipt
} from "@/assets/icons/icons.tsx";
import { CourseCategory } from "@/@fake-db/courseCategories/type.ts"

export const courseCategories: Record<string, CourseCategory> = {
    LEGAL: {
        id: 1,
        title: "Legal",
        courses: "63,265",
        color: 'secondary',
        isBestSelling: true,
        icon: <Processor />
    },
    DESIGN: {
        id: 1,
        title: "Design",
        courses: "13,265",
        color: 'primary',
        isBestSelling: true,
        icon: <PenNib />,
    },
    DEVELOPMENTS: {
        id: 2,
        title: 'Developments',
        courses: "13,265",
        color: 'secondary',
        isBestSelling: true,
        icon: <PenNib />,
    },
    BUSINESS: {
        id: 3,
        title: 'Business',
        courses: "52,622",
        color: 'success',
        isBestSelling: true,
        icon: <Handshake />,
    },
    FINANCE: {
        id: 5,
        title: 'Finance & Accounting',
        courses: "12,068",
        color: 'warning',
        isBestSelling: true,
        icon: <CreditCard />,
    },
    IT: {
        id: 6,
        title: 'IT & Software',
        courses: "12,068",
        color: 'error',
        isBestSelling: true,
        icon: <ChartBarHorizontal />,
    },
    PERSONALDEVELOPMENT: {
        id: 7,
        title: 'Personal Development',
        courses: "12,068",
        color: 'white',
        isBestSelling: true,
        icon: <BugDroid />,
    },
    OFFICE: {
        id: 8,
        title: 'Office Productivity',
        courses: "12,068",
        color: 'gray',
        isBestSelling: true,
        icon: <Receipt />,
    },
    MARKETING: {
        id: 4,
        title: 'Marketing',
        courses: "12,068",
        color: 'secondary',
        isBestSelling: true,
        icon: <MegaPhoneSpeaker />,
    },
    PHOTOGRAPHY: {
        id: 9,
        title: 'Photography & Video',
        courses: "12,068",
        color: 'gray',
        isBestSelling: true,
        icon: <Camera />
    },
    LIFESTYLE: {
        id: 10,
        title: 'Lifestyle',
        courses: "2,068",
        color: 'warning',
        isBestSelling: true,
        icon: <Package />,

    },
    HEALTH: {
        id: 11,
        title: 'Health & Fitness',
        courses: "1,665",
        color: 'success',
        isBestSelling: true,
        icon: <FirstAidKit />,
    },
    MUSIC: {
        id: 12,
        title: 'Music',
        courses: "1,665",
        color: 'warning',
        isBestSelling: true,
        icon: <Headphones />,
    },
}
