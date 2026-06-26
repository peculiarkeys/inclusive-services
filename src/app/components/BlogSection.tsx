import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { AnimatedSection } from "./AnimatedSection";

const rawImages = import.meta.glob("../../assets/obembe_projects/*.{jpeg,jpg,png,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const projectImages = Object.keys(rawImages).sort().map(key => rawImages[key]);
const blog1 = projectImages[17] || "";
const blog2 = projectImages[18] || "";
const blog3 = projectImages[19] || "";

const blogs = [
  {
    id: 1,
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
    img: blog3,
    date: "December 1, 2024",
    title: "10 Reasons Why Obembe Construction Leads in Hospitality Construction",
    content: [
      "From pre-construction planning to custom finishes, Obembe Construction has established itself as Nigeria's premier hospitality contractor. Our success is built on ten core pillars:",
      "1. Expert Project Management: Ensuring timelines are met with military precision.\n2. Global Procurement Networks: Sourcing premium construction materials globally.\n3. Safety Compliance: Adhering to international construction safety standards.\n4. Structural Integrity: Deep engineering expertise in high-rise and heavy structures.\n5. Skilled Workmanship: Employing master craftsmen for finishing and detailing.",
      "6. Sustainable Building: Incorporating green materials and energy-efficient designs.\n7. Transparent Budgeting: Zero hidden costs or surprise variations.\n8. Technology Integration: Utilizing BIM and advanced scheduling tools.\n9. Rapid Mobilization: Commencing work quickly and efficiently.\n10. Uncompromising Client Focus: Transforming your custom requirements into realities."
    ]
  }
];

export function BlogSection() {
  const [selectedBlog, setSelectedBlog] = useState<typeof blogs[0] | null>(null);

  const blogBig = blogs[0];
  const blogSmall = [blogs[1], blogs[2]];

  return (
    <section className="py-16 md:py-[60px] px-6 md:px-[60px]">
      <div className="max-w-[1320px] mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-[#111111]" style={{ fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 400, lineHeight: "1.2", letterSpacing: "-2px" }}>
            Stay tuned as we cover a wide range of topics
          </h2>
          <p className="text-[#546478] mt-4 max-w-3xl mx-auto" style={{ fontSize: "16px", lineHeight: "30.4px" }}>
            Welcome to the Obembe Construction Blog, where we share valuable insights, industry trends, and expert knowledge related to Engineering, Procurement, and Construction (EPC).
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Big card */}
            <div className="lg:w-1/2">
              <div 
                onClick={() => setSelectedBlog(blogBig)}
                className="group relative rounded-lg overflow-hidden cursor-pointer h-[400px] lg:h-full lg:min-h-[702px]"
              >
                <ImageWithFallback src={blogBig.img} alt={blogBig.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 rounded-lg" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0) 45%, rgba(0,0,0,0.7) 66%)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white mb-2" style={{ fontSize: "16px", lineHeight: "30.4px" }}>{blogBig.date}</p>
                  <h3 className="text-white" style={{ fontSize: "28px", fontWeight: 400, lineHeight: "36.4px", letterSpacing: "-0.5px" }}>
                    {blogBig.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Small cards column */}
            <div className="lg:w-1/2 flex flex-col gap-6">
              {blogSmall.map((blog) => (
                <div 
                  key={blog.id} 
                  onClick={() => setSelectedBlog(blog)}
                  className="group relative rounded-lg overflow-hidden cursor-pointer h-[280px] lg:h-[340px]"
                >
                  <ImageWithFallback src={blog.img} alt={blog.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 rounded-lg" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0) 45%, rgba(0,0,0,0.7) 66%)" }} />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white mb-2" style={{ fontSize: "16px", lineHeight: "30.4px" }}>{blog.date}</p>
                    <h3 className="text-white" style={{ fontSize: "28px", fontWeight: 400, lineHeight: "36.4px", letterSpacing: "-0.5px" }}>
                      {blog.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Readable Blog Modal */}
      <AnimatePresence>
        {selectedBlog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
            onClick={() => setSelectedBlog(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Image */}
              <div className="relative w-full h-[240px] md:h-[300px] shrink-0 bg-gray-100">
                <ImageWithFallback src={selectedBlog.img} alt={selectedBlog.title} className="w-full h-full object-cover" />
                <button
                  onClick={() => setSelectedBlog(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors cursor-pointer"
                  aria-label="Close post"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Text content */}
              <div className="p-6 md:p-8 overflow-y-auto">
                <div className="flex items-center gap-2 text-gray-500 text-xs md:text-sm mb-4">
                  <Calendar className="w-4 h-4 text-[#FF6501]" />
                  <span>{selectedBlog.date}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6501]" />
                  <span className="text-[#FF6501] font-semibold">Insights</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-medium text-[#111] mb-6 leading-tight tracking-tight">
                  {selectedBlog.title}
                </h3>
                <div className="flex flex-col gap-4 text-gray-600 text-sm md:text-base leading-relaxed">
                  {selectedBlog.content.map((paragraph, index) => (
                    <p key={index} className="whitespace-pre-line">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}