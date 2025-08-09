import type { Service } from '../components/ServiceCard';

export const services: Service[] = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Responsive, SEO-friendly websites and web apps built with modern frameworks.',
    icon: 'web',
    tags: ['React', 'Next.js', 'SEO'],
    features: ['Custom UI', 'CMS integration', 'Payments', 'Analytics'],
    stack: ['React', 'Next.js', 'Node.js', 'TailwindCSS', 'Vercel'],
  },
  {
    id: 'app-dev',
    title: 'App Development',
    description: 'High performance cross-platform mobile apps with native feel.',
    icon: 'cellphone',
    tags: ['iOS', 'Android', 'Expo'],
    features: ['Push notifications', 'Offline first', 'Native modules'],
    stack: ['React Native', 'Expo', 'TypeScript'],
  },
  {
    id: 'data-analysis',
    title: 'Data Analysis',
    description: 'Turn data into decisions with dashboards, analytics and ML.',
    icon: 'chart-line',
    tags: ['Dashboards', 'ETL', 'ML'],
    features: ['Data pipelines', 'BI dashboards', 'Forecasting'],
    stack: ['Python', 'Pandas', 'dbt', 'BigQuery', 'Superset'],
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description: 'Brand identities, marketing assets, and UI/UX design.',
    icon: 'palette',
    tags: ['Brand', 'UI/UX', 'Assets'],
    features: ['Logos', 'Design systems', 'Prototypes'],
    stack: ['Figma', 'Adobe CC'],
  },
  {
    id: 'tech-consulting',
    title: 'Tech Consulting',
    description: 'Architecture reviews, audits, and fractional CTO services.',
    icon: 'cog-outline',
    tags: ['Strategy', 'Architecture'],
    features: ['Roadmaps', 'Cloud architecture', 'Cost optimization'],
    stack: ['AWS', 'GCP', 'Azure'],
  },
];