import React from 'react'
import ReactDOM from 'react-dom';
import '../Styles/Header.css'
import Modal from 'react-modal'
import {useState} from 'react'
import FacebookLogin from 'react-facebook-login'
import { GoogleLogin } from 'react-google-login';
// import { response } from 'express';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  

export default function Header() {

    const [isLoginModalOpen,setLoginModal]=useState(false)

    const responseFacebook=(response)=>{
        console.log(response)

    }
    return (
        <div className="header">
                <div className="s-logo">
                    <span>e!</span>
                </div>
                <div className="btn-group login-block">
                    <span className="login" onClick={()=>setLoginModal(true)}>LogIn</span>
                    <span className="signUp">Create an account</span>
                </div>
                <Modal 
                isOpen={isLoginModalOpen}
                style={customStyles}
                >
            <h2>Login Modal
                <button onClick={()=>setLoginModal(false)} className='btn btn-danger float-end'>X</button>
            </h2>
         <br/>
            <form>
                <input placeholder='enter your emailId' type="text"/>
            <br/>
                <input placeholder='enter your Password' type="password"/>
                <br/>
                <button>Login</button>
            </form>
            <br/>

            <FacebookLogin
        appId="1088597931155576"
        fields="name,email,picture"
        callback={()=>responseFacebook}
       />

<GoogleLogin
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    buttonText="LOGIN WITH GOOGLE"
   
  />
        
        </Modal>

        
        </div>


       
    )
}
