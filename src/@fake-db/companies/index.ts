
export interface Company {
  id: string;
  name: string;
  logo: string;
}

const companiesData: Company[] = [
  {
    id: '1',
    name: 'Netflix',
    logo: 'public/lovable-uploads/e46157a5-f94b-4e2a-b6a6-f7433764f946.png'
  },
  {
    id: '2',
    name: 'YouTube',
    logo: 'public/lovable-uploads/3ca08595-6e21-4400-a7bb-b6733f798e22.png'
  },
  {
    id: '3',
    name: 'Google',
    logo: 'public/lovable-uploads/5256ec1f-331c-48b7-ba4d-4fc82b94b5a1.png'
  },
  {
    id: '4',
    name: 'Lenovo',
    logo: 'public/lovable-uploads/26f8db48-dc9b-42c5-b872-8160c881920d.png'
  },
  {
    id: '5',
    name: 'Slack',
    logo: 'public/lovable-uploads/dc77cbe3-9bec-41b7-abd5-a74d1792d570.png'
  },
  {
    id: '6',
    name: 'Verizon',
    logo: 'public/lovable-uploads/d96cc226-f350-4e1b-a092-9ba7a45a6377.png'
  },
  {
    id: '7',
    name: 'Lexmark',
    logo: 'public/lovable-uploads/cd126d31-a32c-4499-a656-a60f64c25399.png'
  },
  {
    id: '8',
    name: 'Microsoft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png'
  }
];

export const trustedCompanies = companiesData;

export default companiesData;
