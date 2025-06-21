export interface Certificate {
  name: string;
  email: string;
  course: string;
  id: string;
  duration: string;
  issuedOn: string;
}

const mockData: Certificate[] = [
  {
    name: "Lakshmi Mytrayee",
    email: "lakshmi@example.com",
    course: "Full Stack Development",
    id: "INL-FS-2025-0023",
    duration: "May 2025 – July 2025",
    issuedOn: "July 21, 2025"
  },
  {
    name: "Rahul Verma",
    email: "rahulv@example.com",
    course: "Cybersecurity",
    id: "INL-CS-2025-0011",
    duration: "June 2025 – August 2025",
    issuedOn: "August 20, 2025"
  }
];

export default mockData; 