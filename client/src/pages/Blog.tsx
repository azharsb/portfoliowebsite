import Navbar from "@/components/Navbar";
import SimpleFooter from "@/components/SimpleFooter";
import { motion } from "framer-motion";
import { Link } from "wouter";

const BlogPage = () => {
  const blogPosts = [
    {
      title: "Building Scalable Web Applications with React.js",
      date: "April 20, 2025",
      excerpt: "Learn how to create scalable and efficient web applications using React.js and modern tools.",
      image: "/blog/react-scalable.jpg",
      category: "Web Development",
    },
    {
      title: "Smart Contracts: The Backbone of Blockchain",
      date: "April 10, 2025",
      excerpt: "Explore how smart contracts are revolutionizing industries with secure and automated solutions.",
      image: "/blog/smart-contracts.jpg",
      category: "Blockchain",
    },
    {
      title: "Mastering SEO for 2025: Tips and Strategies",
      date: "April 5, 2025",
      excerpt: "Discover the latest SEO techniques to improve your website's visibility and ranking.",
      image: "/blog/seo-strategies.jpg",
      category: "SEO Optimization",
    },
    {
      title: "Next.js vs. Traditional React: Which One to Choose?",
      date: "March 25, 2025",
      excerpt: "A detailed comparison of Next.js and traditional React for building modern web applications.",
      image: "/blog/nextjs-vs-react.jpg",
      category: "Web Development",
    },
    {
      title: "Decentralized Applications: A Beginner's Guide",
      date: "March 15, 2025",
      excerpt: "An introduction to DApps and how they are transforming the digital landscape.",
      image: "/blog/dapps-guide.jpg",
      category: "Blockchain",
    },
    {
      title: "Tailwind CSS: The Future of Responsive Design",
      date: "March 5, 2025",
      excerpt: "Learn how Tailwind CSS simplifies responsive design and speeds up development.",
      image: "/blog/tailwind-css.jpg",
      category: "Web Development",
    },
  ];

  return (
    <div className="bg-[#0c0e0c] text-white font-sans antialiased">
      <Navbar />
      <div className="py-16 bg-[#0d0f0d] relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              My <span className="text-[#00ff4c]">Blog</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Insights, updates, and expert knowledge on web development, blockchain, and SEO optimization.
            </p>
            <Link
              to="/blog/create"
              className="inline-block mt-4 px-6 py-2 bg-[#00ff4c] text-black rounded hover:bg-[#00cc3d] transition-colors"
            >
              Write New Blog
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1a1a1a] rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
              >
                <div
                  className="h-48 bg-gray-800 blog-post-image"
                  data-image-url={post.image}
                ></div>
                <div className="p-6">
                  <span className="text-[#00ff4c] text-sm">{post.category}</span>
                  <h3 className="text-xl font-bold mt-2 mb-2">{post.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">{post.date}</span>
                    <button className="text-[#00ff4c] hover:underline">Read More</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <SimpleFooter />
    </div>
  );
};

export default BlogPage;