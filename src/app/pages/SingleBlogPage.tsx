import { useParams, Link } from "react-router";
import { blogs } from "../data/blogs";
import { PageHero } from "../components/PageHero";
import { CTABanner } from "../components/CTABanner";
import { Calendar, ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function SingleBlogPage() {
  const { slug } = useParams();
  const blog = blogs.find(b => b.slug === slug);

  if (!blog) {
    return (
      <div className="w-full bg-[#f9f9f9] min-h-[60vh] flex flex-col items-center justify-center p-6 mt-[100px]">
        <h1 className="text-4xl font-semibold mb-4 text-[#111111]">Blog Not Found</h1>
        <p className="text-[#546478] mb-8 text-lg">The article you are looking for does not exist or has been moved.</p>
        <Link to="/blog" className="px-8 py-3 bg-[#FF6501] text-white rounded-full font-medium hover:bg-[#e55a00] transition-colors shadow-md">
          Back to Blog
        </Link>
      </div>
    );
  }

  // Get next 3 blogs for "More Articles" (excluding current one)
  const moreBlogs = blogs.filter(b => b.id !== blog.id).slice(0, 3);

  return (
    <div className="w-full bg-[#f9f9f9]">
      {/* 
        Using PageHero. 
        It has a default height of 60vh. We will use a negative margin on the content 
        below so it elegantly overlaps the hero background.
      */}
      <PageHero 
        title={blog.title} 
        description={`Published on ${blog.date}`}
        image={blog.img}
      />

      <section className="px-6 md:px-[60px] pb-16 md:pb-[60px]">
        <div className="max-w-[900px] mx-auto bg-white p-8 md:p-14 rounded-[24px] shadow-xl relative -mt-[80px] md:-mt-[120px] z-20">
          
          <Link to="/blog" className="inline-flex items-center text-sm font-medium text-[#546478] hover:text-[#FF6501] transition-colors mb-10 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to all articles
          </Link>

          <div className="flex items-center gap-2 text-[#546478] text-sm md:text-base mb-10 pb-8 border-b border-gray-100">
            <Calendar className="w-5 h-5 text-[#FF6501]" />
            <span>{blog.date}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6501] mx-3" />
            <span className="text-[#FF6501] font-semibold tracking-wide uppercase text-sm">Insights</span>
          </div>

          <div className="flex flex-col gap-6 text-[#4a5568]">
            {blog.content.map((paragraph, index) => (
              <p key={index} className="leading-[1.8] text-[17px] md:text-[19px] whitespace-pre-line font-light">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* More Articles Section */}
      {moreBlogs.length > 0 && (
        <section className="py-20 bg-white px-6 md:px-[60px]">
          <div className="max-w-[1320px] mx-auto">
            <div className="flex justify-between items-end mb-10">
              <h2 className="text-[32px] md:text-[40px] font-medium text-[#111111] tracking-tight">More Articles</h2>
              <Link to="/blog" className="hidden md:inline-flex text-[#FF6501] font-medium hover:underline">
                View all posts
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {moreBlogs.map((b) => (
                <Link 
                  key={b.id} 
                  to={`/blog/${b.slug}`}
                  className="group relative rounded-xl overflow-hidden block h-[320px] shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <ImageWithFallback src={b.img} alt={b.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 rounded-xl" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white/90 mb-2 font-medium" style={{ fontSize: "14px" }}>{b.date}</p>
                    <h3 className="text-white font-medium" style={{ fontSize: "22px", lineHeight: "28px", letterSpacing: "-0.5px" }}>
                      {b.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="mt-8 text-center md:hidden">
              <Link to="/blog" className="inline-flex text-[#FF6501] font-medium hover:underline">
                View all posts
              </Link>
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </div>
  );
}
