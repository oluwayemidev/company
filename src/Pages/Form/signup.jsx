import "../../styles/form.css"
import bg from "../../images/contactbg1.jpg"
import React from 'react'

function signup() {
  return (
    <div className="container-form">
        <div className="box" style={{
            backgroundImage: `url(${bg})`
        }}>
            <button>Register now...</button>
        </div>
        <div className="box">

        </div>
    </div>
  )
}

export default signup