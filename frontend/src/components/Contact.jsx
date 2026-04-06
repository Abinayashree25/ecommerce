import Bag from './Contact.module.css'
import { useRef } from "react"
import emailjs from "@emailjs/browser"
import { FaUsers, FaShoppingBag, FaHeadset } from "react-icons/fa"

function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      "service_65g2nlp",       // Your EmailJS service ID
      "template_c1b6ysr",      // Your EmailJS template ID
      form.current,
      "cCMhIJlgSAqiiJfwi"      // Your EmailJS public key
    ).then(
      () => {
        alert("Message Sent Successfully ✅")
      },
      () => {
        alert("Failed to send message ❌")
      }
    )

    e.target.reset()
  }

  return (
    <section>
      {/* 🔥 STATS SECTION */}
      <section className={Bag.stats}>
        <div className={Bag.stune}>
          <FaUsers className={Bag.icon}/>
          <h2>10K+</h2>
          <p>Happy Customers</p>
        </div>
        <div className={Bag.stune}>
          <FaShoppingBag className={Bag.icon}/>
          <h2>500+</h2>
          <p>Beauty Products</p>
        </div>
        <div className={Bag.stune}>
          <FaHeadset className={Bag.icon}/>
          <h2>24/7</h2>
          <p>Customer Support</p>
        </div>
      </section>

      {/* 🔥 WHY CHOOSE US */}
      <section className={Bag.shree}>
        <h2>Why Choose Us</h2>
        <div className={Bag.niki}>
          <h3>🚚 Fast Delivery</h3>
          <p>Quick delivery to your doorstep.</p>
        </div>
        <div className={Bag.niki}>
          <h3>🛒 Free Shipping</h3>
          <p>No extra delivery charges.</p>
        </div>
        <div className={Bag.niki}>
          <h3>🔄 Easy Returns</h3>
          <p>Hassle-free return policy.</p>
        </div>
      </section>

      {/* 🔥 CONTACT SECTION */}
      <div id='Contact' className={Bag.hub}>

        {/* LEFT */}
        <div className={Bag.bub1}>
          <h1>Contact Us</h1>
          <p>We would love to hear from you! Reach out for any queries.</p>
          <p>📧 abi@gmail.com</p>
          <p>📞 +91 98765 43210</p>
          <p>📍 Chennai, India</p>
        </div>

        {/* RIGHT FORM */}
        <div className={Bag.bub2}>
          <form ref={form} onSubmit={sendEmail} className={Bag.bub3}>
            <input type="text" name="user_name" placeholder="Your Name" required className={Bag.sheet}/>
            <input type="email" name="user_email" placeholder="Your Email" required className={Bag.sheet}/>
            <textarea name="message" placeholder="Your Message" required className={Bag.sheet1}></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>
    </section>
  )
}

export default Contact