export type ServiceCategory = 'All' | 'Hair & Balayage' | 'Skin & Facial' | 'Nail Artistry' | 'Spa & Body' | 'Bridal & Gala';

export interface Service {
  id: string;
  name: string;
  category: ServiceCategory;
  price: number;
  durationMinutes: number;
  description: string;
  popularTag?: string;
  accentColor: string; // Tailwind gradient or hex
  image: string;
  features: string[];
}

export interface Stylist {
  id: string;
  name: string;
  title: string;
  experienceYears: number;
  specialty: string;
  rating: number;
  reviewsCount: number;
  avatar: string;
  bio: string;
  availableDays: string[];
  instagramHandle: string;
  portfolioImages: string[];
}

export interface Transformation {
  id: string;
  title: string;
  category: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  stylistName: string;
  duration: string;
}

export interface LookbookItem {
  id: string;
  title: string;
  category: ServiceCategory;
  image: string;
  stylistName: string;
  likes: number;
  tags: string[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  serviceName: string;
  avatar: string;
  verified: boolean;
}

export interface BookingState {
  isOpen: boolean;
  selectedService: Service | null;
  selectedStylist: Stylist | null;
  selectedDate: string;
  selectedTime: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  notes: string;
  step: number; // 1: Service, 2: Stylist, 3: Date/Time, 4: Details, 5: Confirmation
  confirmationCode?: string;
}
