export default function BlogCard( {image="",date="",title="",description="",author=""} ){
    return (
        <div className="blog-card">
                <img src={image} alt="Blog post image" className="blog-image" />
                <div className="blog-content">
                    <h2 className="blog-title">{title}</h2>
                    <p className="blog-author">{date}</p>
                    <p className="blog-description">{description}</p>
                    <p className="blog-author">{author}</p>
                    <a href="#" className="blog-button">Read More</a>
                </div>
        </div>
    );
}