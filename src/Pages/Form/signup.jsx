import "../../styles/form.css"
import banner from "../../images/lapi.jpg"
import React from 'react'
import user from "../../icons/user.svg"
import mail from "../../icons/mail.svg"
import password from "../../icons/password.svg"

function signup() {
  return (
    <div className="container-form">
        <div className="box" style={{
      backgroundImage: `url(${banner})`
  }}>
          <div>
              <h1>gn up</h1>
              <form action="">
                <input type="text" name="fname" placeholder="Enter your full name" style={{
                  backgroundImage: `url(${user})`
                }} />
                <input type="epassword" name="email" placeholder="Enter your email" style={{
                    backgroundImage: `url(${mail})`
                }} />
                <input type="password" name="password" placeholder="Enter your password" style={{
                    backgroundImage: `url(${password})`
                }} />
                <input type="submit" value="Sign up" />
                <span>Already have an account? <a href="/login">Log in</a></span>
              </form>
          </div>
          <div>
            <button>Welcome...</button>
          </div>
        </div>
    </div>
  )
}

export default signup