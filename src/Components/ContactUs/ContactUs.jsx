// import React from 'react'
// import './ContactUs.css'
// import msg_icon from '../../assets/msg-icon.png'
// import mail_icon from '../../assets/mail-icon.png'
// import phone_icon from '../../assets/phone-icon.png'
// import location_icon from '../../assets/location-icon.png'



// const ContactUs = () => {
//   const [result, setResult] = React.useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending....");
//     const formData = new FormData(event.target);

//     formData.append("access_key", "cd011a40-6082-4b69-b154-565e94c66d12");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData
//     });

//     const data = await response.json();

//     if (data.success) {
//       setResult("Form Submitted Successfully");
//       event.target.reset();
//     } else {
//       console.log("Error", data);
//       setResult(data.message);
//     }
//   };

//   return (
//     <div className='contact'>
//       <div className="contact-col">
//         <h3>Send us a message <img src={msg_icon} alt="" /></h3>
//         <p>We value your feedback and inquiries. Whether you have questions about our programs, need assistance with admissions, or want to learn more about our campus life, we’re here to help.</p>
//         <ul>
//           <li><img src={mail_icon} alt="" />Contact@BrainBloom.dev</li>
//           <li><img src={phone_icon} alt="" />+011-2345672</li>
//           <li><img src={location_icon} alt="" />425/3, rose avenue, Cambridge<br/> MA 02139, United States</li>
//         </ul>
//       </div>
//       <div className="contact-col">
//         <form onSubmit={onSubmit}>
//           <label>Your Name</label>
//           <input type='text' name='name' placeholder='Enter Your Name' required />

//           <label>Phone Number</label>
//           <input type='tel' name='phone' placeholder='Enter Your Mobile Number' required />

//           <label>Write your massege here</label>
//           <textarea name='message' rows={10} placeholder='Enter your message'required></textarea>

//           <button type='submit' className='btn dark-btn'>Submit now</button>
          
//         </form>
//         <span>{result}</span>
//       </div>
//     </div>
//   )
// }

// export default ContactUs

import React from 'react'
import './ContactUs.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

const ContactUs = () => {
  const [result, setResult] = React.useState("");
  const [messageType, setMessageType] = React.useState(""); // Add a state for message type

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    setMessageType("sending"); // Set the message type for sending
    const formData = new FormData(event.target);

    formData.append("access_key", "cd011a40-6082-4b69-b154-565e94c66d12");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setMessageType("success"); // Set the message type for success
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      setMessageType("error"); // Set the message type for error
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>We value your feedback and inquiries. Whether you have questions about our programs, need assistance with admissions, or want to learn more about our campus life, we’re here to help.</p>
        <ul>
          <li><img src={mail_icon} alt="" />Contact@BrainBloom.dev</li>
          <li><img src={phone_icon} alt="" />+011-2345672</li>
          <li><img src={location_icon} alt="" />425/3, rose avenue, Cambridge<br/> MA 02139, United States</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type='text' name='name' placeholder='Enter Your Name' required />

          <label>Phone Number</label>
          <input type='tel' name='phone' placeholder='Enter Your Mobile Number' required />

          <label>Write your message here</label>
          <textarea name='message' rows={10} placeholder='Enter your message'required></textarea>

          <button type='submit' className='btn dark-btn'>Submit now</button>
        </form>
        <span className={`message ${messageType}`}>{result}</span>
      </div>
    </div>
  )
}

export default ContactUs
