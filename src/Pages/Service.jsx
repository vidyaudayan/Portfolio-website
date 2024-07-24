/*import React from 'react'
import Servicecard from '../components/Servicecard'

const Service = () => {
    return (
        <div>
            <section className="services" id="services">
                <div className="container">
                    <h1 className="subTitle">
                        My <span>Services</span>
                    </h1>
        
                    <div className="serviceList">

                      

                        <div>
                            <i className="bx bx-code" style={{ color: "rgba(210,35,25,0.67)" }} />
                            <h2>Front end Design</h2>
                            <p>
                                The main goal of a frontend developer is to provide the platform for
                                visitors to interact with, a platform which provides and receives
                                information. This means some frontend developer skills include being
                                well-versed in web and UX design and using tools such as Photoshop and
                                Figma to create graphics and themed layouts.Everything that you
                                actually see on a website—the layout, the positioning of text and
                                images, colors, fonts, buttons, and so on—are all factors that the
                                frontend developer must consid
                            </p>
                            <a href="#" className="read">
                                Learn More
                            </a>
                        </div>
                        <div>
                            <i className="bx bx-crop" style={{ color: "rgba(210,35,25,0.67)" }} />
                            <h2>Front end Design</h2>
                            <p>
                                The main goal of a frontend developer is to provide the platform for
                                visitors to interact with, a platform which provides and receives
                                information. This means some frontend developer skills include being
                                well-versed in web and UX design and using tools such as Photoshop and
                                Figma to create graphics and themed layouts.Everything that you
                                actually see on a website—the layout, the positioning of text and
                                images, colors, fonts, buttons, and so on—are all factors that the
                                frontend developer must consid
                            </p>
                            <a href="#" className="read">
                                Learn More
                            </a>
                        </div>
                        <div>
                            <i
                                className="bx bx-shield-alt"
                                style={{ color: "rgba(210,35,25,0.67)" }}
                            />
                            <h2>Front end Design</h2>
                            <p>
                                The main goal of a frontend developer is to provide the platform for
                                visitors to interact with, a platform which provides and receives
                                information. This means some frontend developer skills include being
                                well-versed in web and UX design and using tools such as Photoshop and
                                Figma to create graphics and themed layouts.Everything that you
                                actually see on a website—the layout, the positioning of text and
                                images, colors, fonts, buttons, and so on—are all factors that the
                                frontend developer must consid
                            </p>
                            <a href="#" className="read">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Service*/



import React from 'react';
import Servicecard from '../components/Servicecard'; // Assuming Servicecard is a reusable component

const servicesData = [
  {
    icon: 'bx bx-code',
    title: 'Front-End Development',
    description:
      'Creating user-friendly and visually appealing web interfaces that provide a seamless user experience.',
    link: '#', // Replace with actual link if desired
    linkText: 'Enhancing user interactions and overall satisfaction',
  },
  {
    icon: 'bx bx-wrench', // Assuming you have an icon for back-end development
    title: 'Back-End Development',
    description:
      'Building and maintaining the server-side logic, databases, and APIs ',
    link: '#', // Replace with actual link if desired
    linkText: 'Developing the core functionality of the product',
  },
  {
    icon: 'bx bx-wrench', // Assuming you have an icon for back-end development
    title: 'React Development',
    description:
      'Enhancing user experience through intuitive design',
    link: '#', // Replace with actual link if desired
    linkText: 'Develops single-page applications (SPAs)',
  },
  {
    icon: 'bx bx-wrench', // Assuming you have an icon for back-end development
    title: 'Application Maintenance and Support',
    description:
      'Providing ongoing support and updates for web applications.',
    link: '#', // Replace with actual link if desired
    linkText: 'Optimizing application performance.',
  },

];

const Service = () => {
  return (
    <div className="service-container">  
    
      <section className="services" id="services">
      
        <div className="container">
        <h1 className="subTitle">
            My <span>Services</span>
          </h1>
         
          <div className="serviceList text-white">
            {servicesData.map((service) => (
              <Servicecard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
