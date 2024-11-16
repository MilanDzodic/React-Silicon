import { useState } from "react"
import SubscribeNotification from "../assets/Images/SubscribeNotification.svg"

const Subscribe = () => {

  const [formData, setFormData] = useState({ email: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({...formData, [name]: value})

    if (value.trim() === '') {
      setErrors(prevErrors => ({...prevErrors, [name]: `The ${name} field is required`}))
    }
    else {
      setErrors(prevErrors => ({...prevErrors, [name]: ``}))
    }  
  }

  const handleOk = () => {
    setSubmitted(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newErrors = {}
    Object.keys(formData).forEach(field => {
      if (formData[field].trim() === '') {
        newErrors[field] = `The ${field} field is required`
      }
    })

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    if (res.ok) {
      setSubmitted(true)
      setFormData({ email: '' })
    }
  }

  if (submitted) {
    return (
      <div className="informbox">
        <h1>Thanks for applying to our newsletter</h1>
        <p>We have sent you a confirmation email</p>
        <button className="btn-green" onClick={handleOk}>OK</button>
      </div>
    )
  }

  return (
    <>
      <section id="subscribe">
        <div className="container">
          <form onSubmit={handleSubmit} noValidate>
            <div className="contact">
              <button className="btn">
                Contact us now
              </button>
            </div>

            <div className="sub">
              <div className="notif">
                <img src={SubscribeNotification} alt="" />
              
                <p className="sub-text">Subscribe to our newsletter</p>

                <p className="sub-texty">Subscribe to our newsletter to stay informed about latest updates</p>
              </div>

              <div className="your-email">
                <input className="email" type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Your Email" />
                <button className="btn">Subscribe</button>
              </div>
              <span>{errors.email && errors.email}</span>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
export default Subscribe