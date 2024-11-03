import Playstore from "../assets/Images/PlaystoreLight.svg"
import Appstore from "../assets/Images/AppstoreLight.svg"
import PhoneBack from "../assets/Images/PhoneBack.svg"
import PhoneFront from "../assets/Images/PhoneFront.svg"

const Heros = () => {
  return (
    <>
      <section id="hero">
        <div className="container">
          <div className="headline">
            <h1>Manage All Your Money in One App</h1>
          </div>

          <div className="content">
            <p>We offer you a new generation of the mobile
              banking. Save, spend & manage money in your pocket.</p>
            <div className="buttons">
              <a className="btn-downloadapp" href="#"><img src={Playstore} alt="Playstore" /></a>
              <a className="btn-downloadapp" href="#"><img src={Appstore} alt="Appstore" /></a>
            </div>

            <a href="#" className="discover-more">
              <span className="btn-circle"><i className="fa-solid fa-chevron-down"></i></span>
              <span>Discover More</span>
            </a>
          </div>

          <div className="images">
            <img className="img-back" src={PhoneBack} alt="Phone back img" />
            <img className="img-front" src={PhoneFront} alt="Phone front img" />
          </div>
        </div>
      </section>
    </>
  )
}
export default Heros