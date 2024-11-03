import Brand1 from "../assets/Images/Brand1.svg"
import Brand2 from "../assets/Images/Brand2.svg"
import Brand3 from "../assets/Images/Brand3.svg"
import Brand4 from "../assets/Images/Brand4.svg"
import Brand5 from "../assets/Images/Brand5.svg"
import Brand6 from "../assets/Images/Brand6.svg"

const Brands = () => {
  return (
    <>
      <section id="brands">
        <div className="container">
          <div id="brand-1" className="brand-box">
            <img src={Brand1}/>
          </div>
            
          <div id="brand-2" className="brand-box">
            <img src={Brand2} />
          </div>

          <div id="brand-3" className="brand-box">
            <img src={Brand3} />
          </div>

          <div id="brand-4" className="brand-box">
            <img src={Brand4} />
          </div>

          <div id="brand-5" className="brand-box">
            <img src={Brand5} />
          </div>

          <div id="brand-6" className="brand-box">
            <img src={Brand6} />
          </div>
        </div>
      </section>  
    </>
  )
}
export default Brands