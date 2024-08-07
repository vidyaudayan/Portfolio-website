import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import aboutimg from '../assets/aboutimg.jpg'
import aboutimg2 from '../assets/aboutimg1.jpg'
import PdfViewer from '../components/PdfViewer'
const About = () => {
  const [showPdf, setShowPdf] = useState(false);
  const pdfUrl = '/Vidyamol Udayan_Entri.pdf'; 

  const handleButtonClick = () => {
    setShowPdf(true);
  };

  return (
    <div>
      <section className="about" id="about">
    <div className='imgDiv flex' >
      <img className="aboutImg" src={aboutimg} alt="" />
      <img className="aboutImg" src={aboutimg2} alt="" />
</div>
    <div className="aboutText">
      <h2>
        About <span>Me</span>
      </h2>
      <h4>Full Stack Developer</h4>
      <p className='text-white'>
      Enthusiastic and adaptable full-stack developer passionate about learning and working in web development technologies. Seeking to leverage diverse technical skills and programming expertise in a dynamic Full Stack Developer role. Eager to contribute innovative solutions to complex software development challenges while continuously expanding knowledge of cutting-edge technologies. Committed to delivering high-quality, scalable applications that drive business success and user satisfaction.
        </p>

        <div>
      <Link to={'/view-resume'} state={{ pdfUrl }} className='bg-orange-700 p-4 rounded-3xl text-white cursor-pointer hover:bg-orange-500' onClick={handleButtonClick}>View Resume</Link>
      {showPdf && <PdfViewer fileUrl={pdfUrl} />}
    </div>
      
    </div>
  </section>
  
  </div>
  )
}

export default About