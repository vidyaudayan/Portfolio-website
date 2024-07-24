import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceID =  import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userID =  import.meta.env.VITE_EMAILJS_USER_ID;

    console.log('Service ID:', serviceID);
    console.log('Template ID:', templateID);
    console.log('User ID:', userID);
    emailjs.send(serviceID, templateID, formData, userID)
      .then((result) => {
        console.log(result.text);
        alert('Email sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send email.');
      });
  };
  return (
    <div className='mt-16 '>
      <section className="contact">
       
       
        
        <div className="twoBox">
          <div className="container">
            <div className="contactInfo">
              <div className="box ">
                <div className="icon">
                  <i className="bx bx-map" style={{ color: "#f05c49" }} />
                </div>
                <div className="text">
                <div className=''>
        <h2 className="subTitle ">
          Contact <span>Me</span>
        </h2>
        </div>
                  <h3 className='font-bold text-xl text-slate-800'>Address</h3>
                  <p className='text-lg'>
                    5/1679,
                    <br />
                    Elementary School street <br />
                    Elakkiyampatti Dharmapuri 636705
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="icon">
                  <i className="bx bxs-envelope" style={{ color: "#f05c49" }} />
                </div>
                <div className="text">
                  <h3 className='text-lg font-semibold text-slate-800'>Email</h3>
                  <p className='text-lg'>vidyaudayan89@gmail.com</p>
                </div>
              </div>
              <div className="box">
                <div className="icon">
                  <i className="bx bx-phone" style={{ color: "#f05c49" }} />
                </div>
               
              </div>
            </div>
          </div>
          <div className="contactForm pr-24">
            <form  onSubmit={handleSubmit}>
              <h2>Send Message</h2>
              <div className="inputBox">
                <span>Full Name</span>
                <input className='w-72' type="text" name="fullName"  value={formData.fullName}
          onChange={handleChange} required="required" />
              </div>
              <div className="inputBox ">
                <span>Your Email</span>
                <input className='w-72' type="text" name="email" value={formData.email}
          onChange={handleChange} required="required" />
              </div>
              <div className="inputBox mb-2">
                <span className=''>Type Your Message...</span>
                <textarea className='resize-none mt-2 w-72'
                  name="message"
                  id=""
                  cols={30}
                  rows={10}
                  required="" value={formData.message}
                  onChange={handleChange}
                  defaultValue={""} 
                />
                <div className="inputBox">
                  <input
                    type="submit"
                    name=""
                        value="Send"
                    defaultValue="Send"
                    className="sendButton p-6 h-8 text-white w-20 hover:bg-orange-600 cursor-pointer hover:text-white"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Contact