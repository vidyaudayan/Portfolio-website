import React, { useState } from 'react'
import img1 from '../assets/img1.png'
import img7 from  '../assets/img7.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import img6 from '../assets/img6.png'


const Projects = () => {
  const [readMoreStates, setReadMoreStates] = useState([false, false, false, false]);

  const toggleReadMore = (index) => {
    const newStates = [...readMoreStates];
    newStates[index] = !newStates[index];
    setReadMoreStates(newStates);
  };

  const projectsData = [
    {
      title: 'Pagination',
      imageSrc: img1,
      description: 'It helps to navigate through large datasets, enhancing user experience. With an extensive catalog of mock products,',
      extendedDescription: 'the fake store API supports fetching products for the pages. ',
    },
    {
      title: 'Shopping Website',
      imageSrc: img7,
      description: 'Functional shopping website created with MERN stack styled using Tailwind CSS!',
      extendedDescription: 'Features are user autheication,product listing,shopping cart and stripe payment gateway',
    },
    {
      title: 'Healthy Weight Calculator using React',
      imageSrc: img3,
      description: 'This tool empowers individuals on their wellness journey by providing accurate and personalized insights into achieving a healthy weight. ',
      extendedDescription: 'We can calculate the Body mass index(BMI) and the healthy weight range of an individual.',
    },
    {
      title: 'Footwear Product Page',
      imageSrc: img4,
      description: 'A stylish product page for ForFoot online shoe store! Using HTML and CSS, I created a seamless browsing experience with clear images and product categories',
      extendedDescription:'CSS positioning, gradients and box shadows are implemented in the project.'
    },
    {
      title: 'Functional contact form using EmailJS',
      imageSrc: img5,
      description: 'EmailJS offers a seamless solution for sending emails directly from client-side JavaScript without the need for server-side code',
      extendedDescription:'and ensuring efficient and reliable email delivery.'
    },
    {
      title: 'Video Gallery',
      imageSrc: img6,
      description: 'This gallery is designed with seamless integration of HTML5s <video> element ',
      extendedDescription:'users can browse through a collection of videos effortlessly'
    },
  ];

  return (
    <div className='flex  mt-16 mb-16' >
      <div className='ml-8'>
      <h2 className="subTitle proTitle ">
        All <span>Projects</span>
      </h2>
      </div>
      
      <div className="project mr-12 ">
        {projectsData.map((project, index) => (
          <div className="card" key={index}>
            <div className="content">
              <p className="heading">
                {project.title}
              
              </p>
              <img src={project.imageSrc} alt=""/>
              <div className="mybox">
                <div>
                  <p className="para" id="para">{project.description}</p>
                  <span className="mybox1" id="mybox1id">
                    {readMoreStates[index] && project.extendedDescription}
                  </span>
                </div>
                <button
                  id="mybuttonid"
                  onClick={() => toggleReadMore(index)}
                  className="btn mt-2"
                >
                  {readMoreStates[index] ? 'Read less' : 'Read more'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
