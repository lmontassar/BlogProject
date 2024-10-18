import BlogCard from "./blogCard";

const blogs = [
  {
    image: "blog1.jpg", // A URL to an image related to the blog
    date: "15/11/2024", // Date of blog post
    title: "The Future of Web Development: Trends for 2025", // Blog title
    description:
      "Explore the upcoming trends in web development for 2025, including the rise of AI tools, headless CMS, and WebAssembly.", // Brief description of the blog
    author: "Jane Doe", // Author's name
  },
  {
    image: "blog1.jpg",
    date: "12/10/2024",
    title: "Building Scalable Applications with React and Spring Boot",
    description:
      "A detailed guide on how to build scalable, full-stack applications using ReactJS on the frontend and Spring Boot on the backend.",
    author: "John Smith",
  },
  {
    image: "blog1.jpg",
    date: "08/09/2024",
    title: "MongoDB Best Practices: How to Optimize Your NoSQL Database",
    description:
      "This blog post covers the best practices for optimizing MongoDB performance and handling large-scale data operations.",
    author: "Emily Johnson",
  },
  {
    image: "blog1.jpg",
    date: "20/08/2024",
    title: "A Beginner’s Guide to Building Auction Systems",
    description:
      "Learn the basics of building an auction system from scratch using modern technologies like ReactJS, Node.js, and MongoDB.",
    author: "Chris Lee",
  },
  {
    image: "blog1.jpg",
    date: "05/07/2024",
    title: "Project Management Tools: How to Stay Organized in 2024",
    description:
      "A comprehensive review of the top project management tools to help you stay organized and manage your team's workflow effectively.",
    author: "Sarah Williams",
  },
];
export default function Blogs() {
    const blogsElements = blogs.map((value, index) => (
        <BlogCard key={index}
            image={value.image} 
            title={value.title} 
            description={value.description} 
            author={value.author}  />
      ))
    return (
    <div className="blog-grid">
      {blogsElements}
    </div>
  );
}
