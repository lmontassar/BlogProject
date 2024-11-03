import { useEffect, useState } from "react";
import BlogCard from "./blogCard";

export default function Blogs() {

    const [blogs , setBlogs ] = useState([]) ;
    const loadBlogs = async ()=>  {
      try{
        const res = await fetch("http://localhost:8089/api/blog/get/all");
        if(!res.ok){
          console.log(error);
        } else {
          const data = await res.json();
          setBlogs(data);
        }
      }catch(e){
        console.log(e);
      }
    };
    useEffect(()=>{
      const fetchBlogs =  async ()=> {
        try{
          await loadBlogs();
        }catch {

        }
      }
      fetchBlogs();
    }, [])

    const blogsElements = blogs.map((value, index) => (
        <BlogCard key={index}
            id={value.id}
            image={value.url} 
            title={value.title} 
            description={value.description} 
            author={(value.poster.fullname)}  />
      ))
    return (
    <div className="blog-grid">
      {blogsElements}
    </div>
  );
}
