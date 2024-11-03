import { useEffect, useState } from 'react'
import { useAuth } from "./AuthProvider";
import { useNavigate } from 'react-router-dom';

export default function AddBlog() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [file, setFile] = useState(null);
    const [errors, setErrors] = useState({ title: '', content: '', image: '' });
    const navigate = useNavigate();
    const auth = useAuth();


    const CreateBlog = async (e) =>{
        e.preventDefault();

        if (!file) {
            console.error("No image file selected");
            return;
          }
        const id = auth.user.id;
        const Blog = JSON.stringify({
            poster: { id: id },
            title: title,
            description: content
          })
          const data = new FormData();
          data.append("file", file);
          data.append("blog", Blog );
        try{
          const res = await fetch("http://localhost:8089/api/blog/add",{
            method: 'POST',
            body: data
          });
          // navigate('/login');
        }catch(error){
          console.log(e);
        }
        setTitle('');
        setContent('');
        setImage(null);
        setFile(null);
      }


    const handleImageChange = (e) => {
      const f = e.target.files[0];
      if (f) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImage(reader.result);
          setFile(f);
        };
        reader.readAsDataURL(f);
      }
    };
  
    const validateForm = () => {
      let isValid = true;
      const newErrors = { title: '', content: '', image: '' };
  
      if (title.trim().length < 5) {
        newErrors.title = 'Title must be at least 5 characters long';
        isValid = false;
      }
  
      if (content.trim().length < 20) {
        newErrors.content = 'Content must be at least 20 characters long';
        isValid = false;
      }
  
      if (!image) {
        newErrors.image = 'Please upload an image';
        isValid = false;
      }
  
      setErrors(newErrors);
      return isValid;
    };
  

  
    return (
      <div className="container">
        <div className="signup-container">
          <div className="signup-logo">Create New Blog Post</div>
          <form onSubmit={CreateBlog} className="signup-form">
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter blog title"
              />
              {errors.title && <p className="invalid">{errors.title}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="content">Content</label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your blog content here"
                rows={6}
              />
              {errors.content && <p className="invalid">{errors.content}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="image">Image</label>
              <input
                id="image"
                type="file"
                onChange={handleImageChange}
                accept="image/*"
              />
              {errors.image && <p className="invalid">{errors.image}</p>}
            </div>
            {image && (
              <div className="form-group">
                <label>Image Preview</label>
                <img src={image} alt="Preview" className="blog-image" />
              </div>
            )}
            <button type="submit" className="submit-btn">Create Post</button>
          </form>
        </div>
      </div>
    );
  }
  