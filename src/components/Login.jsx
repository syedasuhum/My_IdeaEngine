import React from 'react'
import {Link} from "react-router-dom"
import "./Login.css"

export default function Login() {
    function validate(){
        const mail = document.getElementById("email").value;
        const regExp = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
        regExp.test(mail) ? alert("You have entered a valid email") : alert("You have entered wrong email");
      }
  return (
    <>
    <div className="divlayout-auth-page">
      <div className="divpage-fg">
        <div className="space"></div>
        <div className="section">
          <div className="heading-1">
            <div className="welcome-to-dayzero">Welcome to Idea Engine</div>
          </div>
          <div className="ppage-tagmargin">
            <div className="blueprint-to-brilliance">
              BLUEPRINT TO BRILLIANCE
            </div>
          </div>
          <div className="heading-2margin">
            <div className="heading-2">
              <div className="a-blueprint-engine-container">
                <span className="a-blueprint-engine">{`A blueprint engine that converts your ideas into execution focused plan of action within `}</span>
                <b>6 minutes</b>
                <span className="a-blueprint-engine">.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
        <div className="section1">
        <div className="pform-title">
            <div className="create-your-account">Welcome Back</div>
          </div>
          <div className="pform-subtitle">
            <div className="fill-your-details">
              Fill your details to get started
            </div>
          </div>
          <div className="divor-box">
            <button className="button1">
              <img src="/svg.svg" className="svg" alt="" />
              <div className="span1">
                <div className="continue-with-google">Continue With Google</div>
              </div>
            </button>
            <div className="divline">
              <div className="span2">
                <div className="or">OR</div>
              </div>
            </div>
          </div>
          <div className="form">
           <div className="name">
           <input className="input" type="email" placeholder="Enter Your Email" id="email"></input>
           </div>
            <div className="name">
            <input className="input" type="password" placeholder="Enter Unique Password"></input>
            </div>
           <div className="btn">
           <button onClick={validate} className="button2">
              <span className="create-an-account">Create an account</span>
            </button>
           </div>
            <div className="pswitch-link">
              <div className="do-you-already-container">
                <span>{`Don't have an account? `}</span>
                <Link to="/signUp"><span className="login">Register</span></Link>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}
