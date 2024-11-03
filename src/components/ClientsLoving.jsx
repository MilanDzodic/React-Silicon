import OurClientsQuote from "../assets/Images/OurClientsQuote.svg"
import OurClientsReview1 from "../assets/Images/OurClientsReview1.svg"
import OurClientsReview2 from "../assets/Images/OurClientsReview2.svg"


const Clientsloving = () => {
  return (
    <>
      <section id="clients-are-loving">
        <div className="container">
          <h1 className="headline">
            Clients are Loving Our App
          </h1>

          <div className="images-1">
            <img id="outer-first" src={OurClientsQuote} alt=""/>

            <img id="inner-first" src={OurClientsReview1} alt=""/>
          </div>

          <div className="images-2">
            <img id="outer-second" src={OurClientsQuote} alt=""/>
            
            <img id="inner-second" src={OurClientsReview2} alt="" />
          </div>
        </div>
      </section>
    </>
  )
}
export default Clientsloving