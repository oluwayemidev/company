import "../../styles/form.css"
import banner from "../../images/lapi.jpg"
import React from 'react'
import user from "../../icons/user.svg"
import mail from "../../icons/mail.svg"
import password from "../../icons/password.svg"

function login() {
  return (
    <div className="container-form">
        <div className="box" style={{
      backgroundImage: `url(${banner})`
  }}>
          <div>
              <h1 className="h1login">g in</h1>
              <form action="">
                <input type="epassword" name="email" placeholder="Enter your email" style={{
                    backgroundImage: `url(${mail})`
                }} />
                <input type="password" name="password" placeholder="Enter your password" style={{
                    backgroundImage: `url(${password})`
                }} />
                <a href="/forgotpassword">Forgot password?</a>
                <input type="submit" value="Log in" />
                <span>Don't have an account? <a href="/signup">Sign up</a></span>
              </form>
          </div>
          <div>
            <button>Welcome...</button>
          </div>
        </div>
    </div>
  )
}

export default login