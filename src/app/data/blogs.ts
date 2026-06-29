const rawImages = import.meta.glob("../../assets/obembe_projects/*.{jpeg,jpg,png,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const projectImages = Object.keys(rawImages).sort().map(key => rawImages[key]);

const blog1 = projectImages[17] || "";
const blog2 = projectImages[18] || "";
const blog3 = projectImages[19] || "";
const blog4 = projectImages[20] || "";
const blog5 = projectImages[21] || "";
const blog6 = projectImages[22] || "";
const blog7 = projectImages[23] || "";
const blog8 = projectImages[24] || "";
const blog9 = projectImages[25] || "";
const blog10 = projectImages[26] || "";
const blog11 = projectImages[27] || "";

export interface BlogPost {
  id: number;
  slug: string;
  img: string;
  date: string;
  title: string;
  content: string[];
}

export const blogs: BlogPost[] = [
  {
    id: 1,
    slug: "the-five-star-hotel-project",
    img: blog1,
    date: "December 9, 2024",
    title: "The Five Star Hotel Project",
    content: [
      "Building a five-star hotel requires a careful blend of robust civil engineering, precise luxury finishes, and strategic project management. At Obembe Construction, we manage every phase of hospitality construction—from initial piling and structural framing to the intricate mechanical, electrical, and plumbing (MEP) installations.",
      "Our turnkey approach ensures that international brand standards are met, delivering a world-class luxury experience that stands the test of time. We work closely with hoteliers and designers to execute complex interior designs, load-bearing superstructures, and smart automation systems.",
      "With a commitment to absolute excellence and engineering precision, we turn bold concepts into stunning architectural realities across Nigeria."
    ]
  },
  {
    id: 2,
    slug: "turnkey-hospitality-projects-advantage",
    img: blog2,
    date: "December 1, 2024",
    title: "Turnkey Hospitality Projects: The Obembe Construction Advantage",
    content: [
      "Turnkey construction simplifies the complex development lifecycle by placing all responsibility under one roof. For hospitality projects, this means coordinating structural engineering, procurement of premium materials, and interior fit-outs seamlessly.",
      "Obembe Construction offers an end-to-end advantage: we eliminate communication gaps between multiple contractors, optimize construction schedules, and guarantee top-tier delivery from concept to completion.",
      "By trusting a single execution partner, clients reduce project overhead, mitigate safety risks, and enjoy peace of mind knowing every detail is handled by seasoned experts."
    ]
  },
  {
    id: 3,
    slug: "10-reasons-why-obembe-leads-in-hospitality",
    img: blog3,
    date: "December 1, 2024",
    title: "10 Reasons Why Obembe Construction Leads in Hospitality Construction",
    content: [
      "From pre-construction planning to custom finishes, Obembe Construction has established itself as Nigeria's premier hospitality contractor. Our success is built on ten core pillars:",
      "1. Expert Project Management: Ensuring timelines are met with military precision.\n2. Global Procurement Networks: Sourcing premium construction materials globally.\n3. Safety Compliance: Adhering to international construction safety standards.\n4. Structural Integrity: Deep engineering expertise in high-rise and heavy structures.\n5. Skilled Workmanship: Employing master craftsmen for finishing and detailing.",
      "6. Sustainable Building: Incorporating green materials and energy-efficient designs.\n7. Transparent Budgeting: Zero hidden costs or surprise variations.\n8. Technology Integration: Utilizing BIM and advanced scheduling tools.\n9. Rapid Mobilization: Commencing work quickly and efficiently.\n10. Uncompromising Client Focus: Transforming your custom requirements into realities."
    ]
  },
  {
    id: 4,
    slug: "insights-from-transcorp-hilton-renovation",
    img: blog4,
    date: "January 15, 2025",
    title: "Insights from the Transcorp Hilton Renovation",
    content: [
      "Renovating an iconic landmark like the Transcorp Hilton requires a delicate balance between modernizing facilities and preserving the original architectural heritage. Our team at Obembe Construction took on this challenge with a phased execution strategy to minimize disruption.",
      "A major aspect of the renovation involved upgrading the mechanical, electrical, and plumbing (MEP) infrastructure to meet contemporary sustainability and efficiency standards. The interior spaces were reimagined to reflect world-class luxury, incorporating bespoke furnishings and state-of-the-art automation systems.",
      "This project highlights our capability to deliver large-scale, high-end renovations under tight schedules while maintaining the uncompromising quality our clients expect."
    ]
  },
  {
    id: 5,
    slug: "mastering-urban-planning-architecture-estate",
    img: blog5,
    date: "February 2, 2025",
    title: "Mastering Urban Planning: The Architecture Estate Project",
    content: [
      "The Architecture Estate stands as a testament to forward-thinking urban design. In developing this residential complex, our primary goal was to create a harmonious community that seamlessly blends functionality with aesthetic appeal.",
      "We employed advanced geospatial analysis and master planning techniques to optimize land use, ensuring ample green spaces and efficient traffic flow. The structural design emphasizes natural lighting and ventilation, significantly reducing the environmental footprint of each unit.",
      "Through innovative engineering and rigorous quality control, the Architecture Estate is redefining modern urban living, offering residents a sanctuary of comfort and elegance."
    ]
  },
  {
    id: 6,
    slug: "building-for-leisure-golf-center-development",
    img: blog6,
    date: "February 18, 2025",
    title: "Building for Leisure: The Golf Center Development",
    content: [
      "Developing a world-class golf center involves much more than landscaping; it requires intricate soil engineering, precise topographical contouring, and advanced water management systems. Obembe Construction partnered with leading golf course architects to execute this complex project.",
      "Our scope included the construction of the clubhouse, which features high-end amenities, panoramic viewing decks, and luxurious locker rooms. We also implemented an advanced irrigation system designed to conserve water while maintaining the pristine condition of the greens.",
      "The successful completion of the Golf Center underscores our versatility and expertise in delivering specialized recreational facilities that meet international standards."
    ]
  },
  {
    id: 7,
    slug: "the-art-of-bespoke-furnitures-and-furnishing",
    img: blog7,
    date: "March 5, 2025",
    title: "The Art of Bespoke Furnitures and Furnishing",
    content: [
      "A building's interior is where its true character is expressed. In our Furniture and Furnishing division, we focus on creating bespoke pieces that elevate the aesthetic and functional quality of any space.",
      "From sourcing rare, sustainable hardwoods to collaborating with master artisans, every piece we produce is crafted with meticulous attention to detail. Our portfolio ranges from executive office suites to opulent hotel lobbies, all tailored to the specific vision of our clients.",
      "This integration of custom furnishing into our turnkey construction services ensures a cohesive design narrative, delivering spaces that are not only structurally sound but also visually stunning."
    ]
  },
  {
    id: 8,
    slug: "modern-city-jahi-pioneering-sustainable-infrastructure",
    img: blog8,
    date: "March 22, 2025",
    title: "Modern City Jahi: Pioneering Sustainable Infrastructure",
    content: [
      "Modern City Jahi is a flagship project that embodies our commitment to sustainable development. Designed as a smart mini-city, it integrates residential, commercial, and recreational zones within a self-sustaining ecosystem.",
      "Key features include solar-powered street lighting, advanced waste management facilities, and smart grid technology to optimize energy consumption. The infrastructure was built using eco-friendly materials that reduce the overall carbon footprint.",
      "By pushing the boundaries of green construction, Modern City Jahi sets a new benchmark for future developments in the region, proving that luxury and sustainability can go hand in hand."
    ]
  },
  {
    id: 9,
    slug: "structural-excellence-in-asokoro-project",
    img: blog9,
    date: "April 10, 2025",
    title: "Structural Excellence in the Asokoro Project",
    content: [
      "The Asokoro project presented unique topographical challenges that demanded innovative structural solutions. Located in a prime but challenging terrain, our engineering team had to design complex foundation systems to ensure absolute stability.",
      "We utilized deep piling techniques and reinforced retaining walls to secure the site. The superstructure itself features a bold, contemporary design with expansive glass facades that offer breathtaking views while maintaining strict thermal efficiency.",
      "This project highlights our ability to overcome complex engineering hurdles, delivering structurally robust and architecturally magnificent buildings in any environment."
    ]
  },
  {
    id: 10,
    slug: "luxury-defined-insights-from-maitama-project",
    img: blog10,
    date: "April 28, 2025",
    title: "Luxury Defined: Insights from the Maitama Project",
    content: [
      "In the heart of one of the city's most exclusive districts, the Maitama Project stands as a pinnacle of luxury residential construction. Our mandate was to create a living space that offers unparalleled comfort and sophistication.",
      "Every aspect of the project, from the Italian marble flooring to the custom-designed smart home integrations, was executed with absolute precision. We implemented advanced acoustic insulation and state-of-the-art security systems to ensure privacy and safety.",
      "The Maitama Project reflects our dedication to high-end residential construction, where no detail is too small and perfection is the only acceptable standard."
    ]
  },
  {
    id: 11,
    slug: "future-of-epc-engineering-procurement-construction",
    img: blog11,
    date: "May 15, 2025",
    title: "The Future of EPC: Engineering, Procurement, and Construction",
    content: [
      "The EPC model is rapidly evolving, driven by technological advancements and shifting economic landscapes. At Obembe Construction, we are at the forefront of this transformation, leveraging digital tools to enhance efficiency and transparency.",
      "Building Information Modeling (BIM) allows us to visualize projects in 3D before ground is broken, minimizing errors and optimizing resource allocation. Our global procurement network utilizes AI-driven supply chain management to ensure timely delivery of premium materials.",
      "As we look to the future, our focus remains on integrating sustainable practices and cutting-edge technology into every phase of the EPC process, ensuring we deliver maximum value to our clients."
    ]
  }
];
