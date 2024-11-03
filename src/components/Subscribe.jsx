const Subscribe = () => {
  return (
    <>
      <section id="subscribe">
        <div className="container">
          <div className="contact">
            <button className="btn">
              Contact us now
            </button>
          </div>

          <div className="sub">
            <div className="notif">
              <img src="/Images/Subscribe notification.svg" alt="" />
            
              <p className="sub-text">Subscribe to our newsletter</p>

              <p className="sub-texty">Subscribe to our newsletterto stay informed about latest updates</p>
            </div>

            <div className="your-email">
              <input className="email" type="email" placeholder="Your Email" />
              <button className="btn">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Subscribe