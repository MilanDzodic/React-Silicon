import HowWork1 from "../assets/Images/HowDoesItWorkPhone1.svg"
import HowWork2 from "../assets/Images/HowDoesItWorkPhone2.svg"
import HowWork3 from "../assets/Images/HowDoesItWorkPhone3.svg"

const HowWork = () => {
  return (
    <>
      <section id="how-work">
        <div className="container">
          <h1 className="headline">
            How Does It Work?
          </h1>

          <div className="how-does-img">
             <div id="phone-1" className="image">
              <img src={HowWork1} alt="" />
            </div>

            <div id="phone-2" className="image">
              <img src={HowWork2} alt="" />
            </div>

            <div id="phone-3" className="image">
              <img src={HowWork3} alt="" />
            </div>
          </div>

          <h2 className="sub-headline">
            Transfers to people from your contact list
          </h2>

          <h2 className="sub-headline-tablet">
            Step 3. Transfers to people from your contact list
          </h2>

          <h2 className="sub-headline-desktop"> 
            Latest transaction history
          </h2>

          <p className="text">
            Proin volutpat mollis egestas. Nam luctus facilisis
            ultrices. Pellentesque volutpat ligula est. Mattis
            fermentum, at nec lacus
          </p>

          <p className="text-desktop">
            Enim, et amet praesent pharetra. Mi non ante hendrerit
            amet sed. Arcu sociis tristique quisque hac in consectetur 
            condimentum.
          </p>
        </div>
      </section>
    </>
  )
}
export default HowWork

