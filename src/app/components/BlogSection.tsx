import { motion } from "motion/react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { AnimatedSection } from "./AnimatedSection";
import { blogs } from "../data/blogs";

export function BlogSection() {
  const blogBig = blogs[0];
  const blogSmall = [blogs[1], blogs[2]];
  const blogGrid = blogs.slice(3);

  return (
    <section className="py-16 md:py-[60px] px-6 md:px-[60px]">
      <div className="max-w-[1320px] mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-[#111111]" style={{ fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 400, lineHeight: "1.2", letterSpacing: "-2px" }}>
            Stay tuned as we cover a wide range of topics
          </h2>
          <p className="text-[#546478] mt-4 max-w-3xl mx-auto" style={{ fontSize: "16px", lineHeight: "30.4px" }}>
            Welcome to the Inclusive Social Services Blog, where we share valuable insights, industry trends, and expert knowledge related to counseling, Child Welfare, and support (Family Support).
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Big card */}
            <div className="lg:w-1/2">
              <Link 
                to={`/blog/${blogBig.slug}`}
                className="group relative rounded-lg overflow-hidden block h-[400px] lg:h-full lg:min-h-[702px]"
              >
                <ImageWithFallback src={blogBig.img} alt={blogBig.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 rounded-lg" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0) 45%, rgba(0,0,0,0.7) 66%)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white mb-2" style={{ fontSize: "16px", lineHeight: "30.4px" }}>{blogBig.date}</p>
                  <h3 className="text-white" style={{ fontSize: "28px", fontWeight: 400, lineHeight: "36.4px", letterSpacing: "-0.5px" }}>
                    {blogBig.title}
                  </h3>
                </div>
              </Link>
            </div>

            {/* Small cards column */}
            <div className="lg:w-1/2 flex flex-col gap-6">
              {blogSmall.map((blog) => (
                <Link 
                  key={blog.id} 
                  to={`/blog/${blog.slug}`}
                  className="group relative rounded-lg overflow-hidden block h-[280px] lg:h-[340px]"
                >
                  <ImageWithFallback src={blog.img} alt={blog.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 rounded-lg" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0) 45%, rgba(0,0,0,0.7) 66%)" }} />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white mb-2" style={{ fontSize: "16px", lineHeight: "30.4px" }}>{blog.date}</p>
                    <h3 className="text-white" style={{ fontSize: "28px", fontWeight: 400, lineHeight: "36.4px", letterSpacing: "-0.5px" }}>
                      {blog.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {blogGrid.length > 0 && (
          <AnimatedSection delay={0.2} className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogGrid.map((blog) => (
                <Link 
                  key={blog.id} 
                  to={`/blog/${blog.slug}`}
                  className="group relative rounded-lg overflow-hidden block h-[280px] lg:h-[340px]"
                >
                  <ImageWithFallback src={blog.img} alt={blog.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 rounded-lg" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0) 45%, rgba(0,0,0,0.7) 66%)" }} />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white mb-2" style={{ fontSize: "16px", lineHeight: "30.4px" }}>{blog.date}</p>
                    <h3 className="text-white" style={{ fontSize: "22px", fontWeight: 400, lineHeight: "30px", letterSpacing: "-0.5px" }}>
                      {blog.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}