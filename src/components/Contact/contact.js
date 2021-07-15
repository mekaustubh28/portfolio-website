import React, { useState } from 'react'
import "./contact.css"
import Footer from "../Footer/footer"
import axios from 'axios'


export default function Portfolio() {
  
  var date = new Date();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    date: ''+date,
  })
  
  function ChangeHandler(e) {
    if (e.target.name === 'name')
    setForm({
      name: e.target.value,
      email: form.email,
      message: form.message,
      date:''+date
    })
    if (e.target.name === 'email')
    setForm({
      email: e.target.value,
      name: form.name,
      message: form.message,
      date:''+date
    })
    if (e.target.name === 'message')
    setForm({
      message: e.target.value,
      email: form.email,
      name: form.name,
      date:''+date
    })
  }

  const[button,setButton] = useState('submit')
  const[successMsg,setSuccessMsg] = useState('success')
  const[failureMsg,setFailureMsg] = useState('failure')

  const FormSubmittion = (e) => {
    e.preventDefault();
    // console.log(form);
    axios.post('https://sheet.best/api/sheets/67fd7a01-a1fd-439d-926a-7c249bc0707b', form)
    .then(response => {
      setSuccessMsg('')
    },
    (error) => {
      setFailureMsg('')
    }
    )
    setButton('success')
  }


  return (
    <div className="contact-container">
      <div className="backgroundContact"style={{position:"fixed",zIndex:-9}}></div>
      <div className="contact">
        <div className="title-contact">
          <h1>Contact Me<span>.</span></h1>
        </div>
        <div className="contact-form">
          <div className="address">
            <p>CONTACT</p>
            <h2>Get in Touch-<br></br>let's work Together</h2>
            <p>ADDRESS</p>
            <h3>NIT, Hamirpur,<br></br>Himachal Pradesh,<br></br>177005.</h3>
          </div>
          <div className="form">
            <form onSubmit={FormSubmittion}>
              <h2>Got a Project for me? Big or Small, <span>Lets Work on It</span>.<br></br> I am Just one message away.</h2>
              <div className="form-submit">
                <input type="text" className="input date" style={{display:'none'}} name="date" placeholder="Your Date" required value={form.date} onChange={ChangeHandler} />
                <input type="text" className="input name" name="name" placeholder="Your Name" required value={form.name} onChange={ChangeHandler} />
                <input type="email" className="input email" name="email" placeholder="Your Email" required value={form.email} onChange={ChangeHandler} />
                <textarea className="input message" name="message" placeholder="Message" rows="5" required value={form.message} onChange={ChangeHandler} /><br></br>
                <input type="submit" className={button} value="submit"/>
                <br></br><br></br>
                <h2 className={successMsg} id="success">😊Thank you for Filling It, I will reach you soon!!</h2>
                <h2 className={failureMsg} id="failure">🤔Hmmm, something wents wrong.Please refresh and Try Again.</h2>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}