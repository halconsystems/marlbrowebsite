export interface Service {
  id: number;
  title: string;
  description: string;
  image?: string;
  tag?: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: 'Security Guards',
    description: 'Uniformed guards for general protection, access control, and surveillance across residential, commercial, and industrial locations.',
    image: '/assets/ser1.jpg',
    tag: 'Security',
  },
  {
    id: 2,
    title: 'Armed Guards',
    description: 'Highly trained, licensed, and armed personnel for high-risk and sensitive locations requiring advanced deterrence.',
    image: '/assets/ser2.jpg',
    tag: 'Security',
  },
  {
    id: 3,
    title: 'Un-Armed Guards',
    description: 'Professional and well-groomed guards ideal for low-risk areas, customer service environments, and front-desk roles.',
    image: '/assets/ser3.jpg',
    tag: 'Security',
  },
  {
    id: 4,
    title: 'Event Security Management',
    description: 'Comprehensive security planning and deployment for public, private, and corporate events, including crowd control, VIP protection, and emergency response.',
    image: '/assets/ser4.jpg',
    tag: 'Security',
  },
  {
    id: 5,
    title: 'CCTV Monitoring & Surveillance Support',
    description: 'Real-time CCTV monitoring services with trained operators who coordinate with on-ground teams for swift response to suspicious activities.',
    image: '/assets/ser5.jpg',
    tag: 'Surveillance',
  },
  {
    id: 6,
    title: 'Executive & VIP Protection',
    description: 'Discreet and strategic personal protection services for business leaders, diplomats, and high-profile individuals, including armed escort and convoy management.',
    image: '/assets/ser6.jpg',
    tag: 'Protection',
  },
  {
    id: 7,
    title: 'Cash-in-Transit Security',
    description: 'Secure movement of cash, confidential documents, and valuables with GPS-enabled vehicles and armed escort teams.',
    image: '/assets/ser7.jpg',
    tag: 'Transport',
  },
  {
    id: 8,
    title: 'Patrolling Services',
    description: 'Mobile patrolling units for wider area coverage, ideal for large residential zones, industrial estates, and commercial parks.',
    image: '/assets/ser8.jpg',
    tag: 'Patrol',
  },
  {
    id: 9,
    title: 'Fire Safety & Emergency Response Staff',
    description: 'Deployment of trained personnel for fire watch duties, emergency evacuation assistance, and first-response coordination.',
    image: '/assets/ser9.jpg',
    tag: 'Emergency',
  },
  {
    id: 10,
    title: 'Security Consultancy & Risk Assessment',
    description: 'Professional site surveys, risk analysis, and custom security planning to help you build a proactive and cost-effective security strategy.',
    image: '/assets/ser10.jpg',
    tag: 'Consultancy',
  }
];
