'use client'
import { useState} from "react"
import axios from 'axios';

const page = () => {
    
    const [text, setText] = useState('');
    const [image, setImage] = useState(null);

    
    const handleSubmit = async (e) => {
      e.preventDefault();//stops form from being submitted in the default manner 
       const formData = new FormData();
       formData.append('file',image);
       formData.append('text',text);
     
      try {
        const res = await axios.post('/api/content', formData,{
          headers:{'Content-Type':'multipart/form-data'},
        })
        
        setText('');
        setImage(null);
        
      } catch (error) {
        console.error(error);
      }
    };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Text:</label>
          <textarea 
            type="text" 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
          />
        </div>
        <div>
          <label>Image:</label>
          <input 
            type="file" 
            accept="image/*" 
            onChange={(e) => setImage(e.target.files[0])} 
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      </div>
  )
}
export default page
