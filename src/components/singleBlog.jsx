import {React,  useEffect,  useState } from 'react';
import { useParams } from 'react-router-dom';

export default function SingleBlog(){
    const [ blog , setBlog ] = useState([]) ;
    const [ poster, setPoster ]= useState();
    const { id } = useParams()
    const loadBlogs = async ()=>  {
      try{
        const res = await fetch(`http://localhost:8089/api/blog/get/${id}`);
        if(!res.ok){
          console.log(error);
        } else {
          const data = await res.json();
          console.log(data.poster);
          if(data.poster){
            setPoster(data.poster);
          }
          setBlog(data);
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

  return (
    <div className="container">
      <article className="blog-container">
        <header className="blog-header">
          <h1 className="blog-title">{blog.title}</h1>
          <div className="blog-meta">
        {poster && (
            <span className="blog-author">{blog.poster.fullname}</span>
        )}
            
          
          </div>
        </header>
        <div className="blog-image-container">
          <img src={"http://localhost:8089/api/blog/upload/"+blog.url} alt={blog.title} className="blog-image" />
        </div>
        <div className="blog-content">
          {blog.description}
        </div>
      </article>
    </div>
  );
};
