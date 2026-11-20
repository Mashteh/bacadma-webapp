import cleaning from "@/assets/service-cleaning.jpeg";
import gardening from "@/assets/service-gardening.jpeg";
import catering from "@/assets/service-catering.jpeg";
import contracts from "@/assets/service-contracts.jpeg";

export type Service = {
  slug: string;
  title: string;
  summary: string;
  items: string[];
  image: string;
  imageAlt: string;
  imagePosition?: string;
  cta: string;
};

export const services: Service[] = [
  {
    slug: "cleaning",
    title: "Professional Cleaning",
    summary:
      "Dependable cleaning programmes for offices, commercial premises, institutions and homes — delivered on schedule and to a consistent standard.",
    items: [
      "Office cleaning",
      "Commercial cleaning",
      "Residential cleaning",
      "Deep cleaning",
      "Institutional cleaning",
      "Post-construction cleaning",
      "General sanitation and maintenance",
    ],
    image: cleaning,
    imageAlt: "Professional cleaning team servicing a bright office interior",
    imagePosition: "50% 50%",
    cta: "Learn More",
  },
  {
    slug: "gardening",
    title: "Gardening & Landscaping",
    summary:
      "Well-kept outdoor spaces through routine grounds maintenance and landscaping work suited to compounds, institutions and residences.",
    items: [
      "Lawn maintenance",
      "Garden maintenance",
      "Landscaping",
      "Grass cutting",
      "Tree and plant care",
      "Hedge trimming",
      "Outdoor area maintenance",
    ],
    image: gardening,
    imageAlt: "Groundskeeper maintaining a landscaped garden lawn",
    imagePosition: "50% 48%",
    cta: "Learn More",
  },
  {
    slug: "catering",
    title: "Catering Services",
    summary:
      "Carefully prepared food and refreshment services for corporate functions, institutions, events and private gatherings.",
    items: [
      "Corporate catering",
      "Event catering",
      "Institutional catering",
      "Private functions",
      "Food preparation",
      "Refreshments and beverages",
      "Custom catering packages",
    ],
    image: catering,
    imageAlt: "Catering team plating food for a corporate event buffet",
    imagePosition: "50% 35%",
    cta: "Learn More",
  },
  {
    slug: "contracts",
    title: "General Contracts & Tender Services",
    summary:
      "Beyond our core services, Bacadma General Enterprises is open to suitable tenders, contracts, and service opportunities across different sectors. We work closely with clients to understand their requirements and deliver practical, reliable solutions.",
    items: [
      "Service contracts",
      "Tender-based assignments",
      "Scheduled maintenance agreements",
      "Short-term and one-off assignments",
      "Multi-service packages",
      "Requirement assessment and proposals",
    ],
    image: contracts,
    imageAlt: "Service managers reviewing a contract document together",
    imagePosition: "50% 50%",
    cta: "Discuss a Contract",
  },
];

export const whyChooseUs = [
  {
    title: "Reliable & Professional",
    body: "We take every assignment seriously and strive to deliver dependable services.",
  },
  {
    title: "Quality Focused",
    body: "We are committed to maintaining high standards in every service we provide.",
  },
  {
    title: "Flexible Solutions",
    body: "Our services can be adapted to different client requirements and contract sizes.",
  },
  {
    title: "Experienced Service Team",
    body: "Our team is organised and capable of handling different service requirements with care and attention.",
  },
  {
    title: "Customer Focused",
    body: "We prioritise understanding our clients' needs and delivering solutions that meet their expectations.",
  },
  {
    title: "Contract Ready",
    body: "We are open to suitable tenders and service contracts from organisations and businesses.",
  },
];

export const processSteps = [
  {
    title: "Tell Us What You Need",
    body: "Get in touch with your requirements and the scope you have in mind.",
  },
  {
    title: "Discuss Your Requirements",
    body: "Our team evaluates the scope and clarifies expectations with you.",
  },
  {
    title: "Receive a Proposal",
    body: "We prepare an appropriate quotation or service proposal for your review.",
  },
  {
    title: "We Deliver",
    body: "The agreed service is carried out professionally and efficiently.",
  },
];

export const industries = [
  "Offices & Businesses",
  "Schools & Institutions",
  "Hotels & Hospitality",
  "Events & Organizations",
  "Residential Properties",
  "Government & Private Contracts",
  "NGOs & Organizations",
  "Construction Companies",
];

export const contactDetails = {
  phone: "[Phone number to be provided]",
  email: "[Email address to be provided]",
  address: "[Physical address to be provided]",
  hours: "[Business hours to be provided]",
};
