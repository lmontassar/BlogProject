import { Link } from "react-router-dom";

export default function BlogCard( {id="",image="",date="",title="",description="",author=""} ){
    return (
        <div className="blog-card">
                <img src={"http://localhost:8089/api/blog/upload/"+image} alt="Blog post image" className="blog-image" />
                <div className="blog-content">
                    <h2 className="blog-title">{title}</h2>
                    <p className="blog-author">{date}</p>
                    <p className="blog-description">{description}</p>
                    <p className="blog-author">{author}</p>
                    <Link className="blog-button" to={`/blog/${id}`} >
                        Read More
                    </Link>
                </div>
        </div>
    );
}