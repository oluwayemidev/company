import React from 'react'
import "../../styles/contact.css"
import contactbg from "../../images/contactbg1.jpg"

function contact() {
  return (
    <div className='container-contact' style={{
      backgroundImage: `url(${contactbg})`
    }}>
      <div className="contactbox">
        <p>Contact Us</p>
        <input type="text" name="" id="" placeholder='Name' />
        <input type="text" name="" id="" placeholder='Email' />
        <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
        <button>Submit</button>
      </div>
    </div>
  )
}

export default contact