
export enum VisitReason {
  CHECK_UP = 'Check-up',
  EMERGENCY = 'Emergency',
  COSMETIC = 'Cosmetic',
  OTHER = 'Other'
}

export interface BookingData {
  patientName: string;
  phoneNumber: string;
  reason: VisitReason;
  preferredDate: string;
  preferredTime: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}
