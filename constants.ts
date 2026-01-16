
import { FAQ, VisitReason } from './types';

export const COLORS = {
  primary: '#0b2c5d', // Midnight Navy
  secondary: '#64748b', 
  accent: '#2cb1bc', // Aqua Teal
  white: '#ffffff',
  background: '#ffffff', // Clean White
  lightBg: '#f8fafc' // Subtle Cool Gray
};

export const PRACTICE_NAME = "Your Dental Practice";
export const PRACTICE_PHONE = "020 7353 8110";

export const FAQS: FAQ[] = [
  {
    id: 'parking',
    question: 'Where do I park?',
    answer: 'We offer convenient parking facilities located right next to our surgery. Please ask our reception team for a permit upon your arrival.'
  },
  {
    id: 'finance',
    question: 'Do you offer finance?',
    answer: 'Yes, we provide flexible 0% interest finance plans for a range of treatments. Our team can help you find a payment schedule that suits your lifestyle.'
  },
  {
    id: 'emergency',
    question: 'Emergency contact',
    answer: `If you are in pain, we aim to see all dental emergencies on the same day. Please call us at ${PRACTICE_PHONE} as early as possible so we can accommodate you.`
  }
];

export const VISIT_REASONS = Object.values(VisitReason);
