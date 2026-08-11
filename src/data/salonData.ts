import { Service, Stylist, Transformation, LookbookItem, Review } from '../types';

// Using generated bespoke images + curated high-res Unsplash beauty assets
import heroBannerImage from '../assets/images/hero_salon_banner_1786466747325.jpg';
import balayageHairImage from '../assets/images/salon_balayage_hair_1786466762370.jpg';

export const SERVICES_DATA: Service[] = [
  {
    id: 'hair-1',
    name: 'Signature Parisian Balayage & Gloss',
    category: 'Hair & Balayage',
    price: 24000,
    durationMinutes: 150,
    description: 'Hand-painted dimensional highlight custom blended with silk protein gloss treatment for effortless, radiant shine.',
    popularTag: 'Most Requested',
    accentColor: 'from-amber-500 to-rose-500',
    image: balayageHairImage,
    features: ['Custom Tone Formulating', 'Bond-Protecting Olaplex', 'Blowout & Styling Included', 'Deep Moisture Lock Mask'],
  },
  {
    id: 'hair-2',
    name: 'Sleek Precision Cut & Blowdry',
    category: 'Hair & Balayage',
    price: 11000,
    durationMinutes: 60,
    description: 'Tailored face-framing architectural haircut paired with scalp massage and red carpet volume blowout.',
    popularTag: 'Trending',
    accentColor: 'from-rose-500 to-purple-600',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800',
    features: ['In-depth Consultation', 'Scalp Detox Wash', 'Thermal Protection', 'Custom Styling Tutorial'],
  },
  {
    id: 'hair-3',
    name: 'Keratin Smoothing Infusion',
    category: 'Hair & Balayage',
    price: 28000,
    durationMinutes: 180,
    description: 'Eliminates 95% of frizz while restoring inner moisture locks for up to 4 months of silky, touchable smoothness.',
    accentColor: 'from-amber-400 to-yellow-600',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800',
    features: ['Zero Formaldehyde Formula', 'Humidity Proof Guard', 'Includes Home Care Travel Kit'],
  },
  {
    id: 'skin-1',
    name: 'Hydra-Radiance Diamond Facial',
    category: 'Skin & Facial',
    price: 19500,
    durationMinutes: 75,
    description: 'Medical-grade hydro-dermabrasion paired with pure oxygen infusion and 24K gold peptide facial mask.',
    popularTag: 'Celebrity Choice',
    accentColor: 'from-emerald-400 to-teal-600',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800',
    features: ['Deep Pore Extraction', 'Lymphatic Drainage', 'LED Light Therapy', 'Hyaluronic Hydration Serum'],
  },
  {
    id: 'skin-2',
    name: 'Pro-Collagen Sculpting Lift',
    category: 'Skin & Facial',
    price: 22000,
    durationMinutes: 90,
    description: 'Microcurrent tissue toning combined with Gua Sha facial contouring for instant jawline and cheekbone lift.',
    accentColor: 'from-indigo-400 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1512290900673-7002fda0137b?auto=format&fit=crop&q=80&w=800',
    features: ['Non-invasive Tightening', 'Cellular Renewal Peel', 'Neck & Decollete Care'],
  },
  {
    id: 'nail-1',
    name: 'Velvet Chrome Gel Artistry',
    category: 'Nail Artistry',
    price: 9500,
    durationMinutes: 60,
    description: 'Custom Japanese structured gel overlay with 3D cat-eye chrome finish and cuticle nourish ritual.',
    popularTag: 'Instagram Viral',
    accentColor: 'from-fuchsia-500 to-pink-500',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800',
    features: ['Non-toxic Gel Polish', 'Hand Scrub & Massage', '3D Gem & Chrome Accents', '3-Week Guarantee'],
  },
  {
    id: 'nail-2',
    name: 'Rose Gold Luxury Pedicure Spa',
    category: 'Nail Artistry',
    price: 8500,
    durationMinutes: 50,
    description: 'Warm rose petal bath, Himalayan pink salt exfoliation, hot stone calf massage, and paraffin hydration.',
    accentColor: 'from-rose-400 to-amber-500',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=800',
    features: ['Essential Oils Soak', 'Hot Stone Therapy', 'Hydrating Paraffin Booties'],
  },
  {
    id: 'spa-1',
    name: 'Aromatherapy Swedish Deep Tissue',
    category: 'Spa & Body',
    price: 17500,
    durationMinutes: 90,
    description: 'Customized full-body tension release using warmed organic lavender botanical oils and targeted pressure therapy.',
    accentColor: 'from-teal-500 to-emerald-700',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800',
    features: ['Custom Pressure Adjustment', 'Warm Towel Compress', 'Scalp Tension Melt'],
  },
  {
    id: 'bridal-1',
    name: 'Royal Bridal Hair & Glow Suite',
    category: 'Bridal & Gala',
    price: 45000,
    durationMinutes: 240,
    description: 'The ultimate luxury bride prep including trial session, wedding day crown hair styling, airbrush makeup, and champagne lounge.',
    popularTag: 'VIP Package',
    accentColor: 'from-amber-300 via-rose-400 to-purple-600',
    image: heroBannerImage,
    features: ['Pre-wedding Trial Included', 'Airbrush HD Makeup', 'Veil & Crown Placement', 'Private VIP Suite Access'],
  }
];

export const STYLISTS_DATA: Stylist[] = [
  {
    id: 'stylist-1',
    name: 'Elena Vance',
    title: 'Master Color Director & Balayage Specialist',
    experienceYears: 12,
    specialty: 'Dimensional Balayage & Platinum Blonde',
    rating: 4.98,
    reviewsCount: 420,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
    bio: 'Trained in Paris and Milan, Elena brings high-fashion dimensional balayage techniques that blend seamlessly with natural root tones.',
    availableDays: ['Mon', 'Tue', 'Thu', 'Fri', 'Sat'],
    instagramHandle: '@elena_aura_color',
    portfolioImages: [
      balayageHairImage,
      'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600'
    ]
  },
  {
    id: 'stylist-2',
    name: 'Marcus Sterling',
    title: 'Creative Style Director & Cut Architect',
    experienceYears: 10,
    specialty: 'Precision Bob Cuts, Shags & Extensions',
    rating: 4.95,
    reviewsCount: 310,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    bio: 'Known for creating effortless silhouettes that frame individual facial structure with movement and grace.',
    availableDays: ['Tue', 'Wed', 'Fri', 'Sat', 'Sun'],
    instagramHandle: '@marcus_cuts_aura',
    portfolioImages: [
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=600'
    ]
  },
  {
    id: 'stylist-3',
    name: 'Sophia Rose',
    title: 'Lead Aesthetician & Glow Specialist',
    experienceYears: 8,
    specialty: 'Diamond Hydrafacials & Collagen Sculpting',
    rating: 5.0,
    reviewsCount: 290,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    bio: 'Certified clinical skin therapist passionate about holistic skin barrier restoration and glass skin radiance.',
    availableDays: ['Mon', 'Wed', 'Thu', 'Sat'],
    instagramHandle: '@sophia_glow_aura',
    portfolioImages: [
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1512290900673-7002fda0137b?auto=format&fit=crop&q=80&w=600'
    ]
  },
  {
    id: 'stylist-4',
    name: 'Aria Chen',
    title: 'Senior Nail Artist & Designer',
    experienceYears: 7,
    specialty: '3D Chrome Gel & Minimalist Line Art',
    rating: 4.96,
    reviewsCount: 215,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400',
    bio: 'Blending contemporary Japanese nail artistry with high shine metal pigments for editorial hand elegance.',
    availableDays: ['Tue', 'Thu', 'Fri', 'Sat', 'Sun'],
    instagramHandle: '@aria_nails_aura',
    portfolioImages: [
      'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=600'
    ]
  }
];

export const TRANSFORMATIONS_DATA: Transformation[] = [
  {
    id: 'trans-1',
    title: 'Warm Copper to Sun-Kissed Parisian Balayage',
    category: 'Color & Highlight',
    description: 'Transitioned dull brassy hair to dimensional honey-blonde tones with seamless root melt.',
    beforeImage: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=600',
    afterImage: balayageHairImage,
    stylistName: 'Elena Vance',
    duration: '2.5 Hours'
  },
  {
    id: 'trans-2',
    title: 'Congested Skin to Diamond Hydro Glow',
    category: 'Skincare',
    description: 'Extracted deep impactions while saturating dermis with triple hyaluronic peptide solution.',
    beforeImage: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=600',
    afterImage: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600',
    stylistName: 'Sophia Rose',
    duration: '75 Minutes'
  },
  {
    id: 'trans-3',
    title: 'Over-processed Lengths to Sleek Architectural Cut',
    category: 'Haircut',
    description: 'Removed split weight and crafted layered curtain bangs for effortless movement.',
    beforeImage: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&q=80&w=600',
    afterImage: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=600',
    stylistName: 'Marcus Sterling',
    duration: '60 Minutes'
  }
];

export const LOOKBOOK_DATA: LookbookItem[] = [
  {
    id: 'lb-1',
    title: 'Golden Hour Balayage Waves',
    category: 'Hair & Balayage',
    image: balayageHairImage,
    stylistName: 'Elena Vance',
    likes: 342,
    tags: ['Balayage', 'Blonde', 'Beach Waves']
  },
  {
    id: 'lb-2',
    title: 'Glass Skin Hydra Glow',
    category: 'Skin & Facial',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800',
    stylistName: 'Sophia Rose',
    likes: 289,
    tags: ['Hydrafacial', 'GlassSkin', 'NoFilter']
  },
  {
    id: 'lb-3',
    title: 'Champagne Chrome Almond Gel',
    category: 'Nail Artistry',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800',
    stylistName: 'Aria Chen',
    likes: 412,
    tags: ['ChromeNails', 'NailArt', 'Minimalist']
  },
  {
    id: 'lb-4',
    title: 'Editorial Silk Straight Bob',
    category: 'Hair & Balayage',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800',
    stylistName: 'Marcus Sterling',
    likes: 198,
    tags: ['SleekCut', 'BobStyle', 'Gloss']
  },
  {
    id: 'lb-5',
    title: 'Rose Gold Spa Pedicure',
    category: 'Nail Artistry',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=800',
    stylistName: 'Aria Chen',
    likes: 220,
    tags: ['SpaDay', 'Pedicure', 'RoseGold']
  },
  {
    id: 'lb-6',
    title: 'Royal Bridal Tiara & Updo',
    category: 'Bridal & Gala',
    image: heroBannerImage,
    stylistName: 'Elena Vance & Team',
    likes: 580,
    tags: ['BridalHair', 'WeddingPrep', 'Luxury']
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: 'rev-1',
    author: 'Victoria Sterling',
    rating: 5,
    date: '2 days ago',
    comment: 'The balayage by Elena is unmatched anywhere in the city. The space is breathtakingly spacious, the champagne was chilled, and my hair looks like a red carpet dream!',
    serviceName: 'Signature Parisian Balayage',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'Camilla Thorne',
    rating: 5,
    date: '1 week ago',
    comment: 'I walked in feeling fatigued and walked out with literally glowing skin thanks to Sophia. The diamond hydrafacial is worth every single penny.',
    serviceName: 'Hydra-Radiance Diamond Facial',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Seraphina Lin',
    rating: 5,
    date: '2 weeks ago',
    comment: 'The attention to detail in Aria’s chrome nail designs is incredible. Plus, booking through their online platform took literally 20 seconds.',
    serviceName: 'Velvet Chrome Gel Artistry',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150',
    verified: true
  }
];
