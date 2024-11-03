import Phone from "../assets/Images/AppFeaturesPhone.svg"
import EasyPayments from "../assets/Images/EasyPayments.svg"
import DataSecurity from "../assets/Images/DataSecurity.svg"
import CostStatistics from "../assets/Images/CostStatistics.svg"
import Support247 from "../assets/Images/Support247.svg"
import RegularCashback from "../assets/Images/RegularCashback.svg"
import TopStandards from "../assets/Images/TopStandards.svg"

const Appfeatures = () => {
  return (
    <>
      <section id="app-features">
        <div className="container">
          <img id="phone" src={Phone} />

          <h1 className="headline" id="headline">
            App Features
          </h1>

          <p id="first-text" className="first-text">
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Proin volutpat mollis egestas.
            Nam luctus facilisis ultrices. Pellentesque
            volutpat ligula est. Mattis fermentum, at nec
            lacus.
          </p>

          <div id="easy-img" className="img-features">
            <img src={EasyPayments} alt="" />
          </div>
          
          <div className="sub-headline easy">
            <h2>Easy Payments</h2>
          </div>
          
          <p className="second-text easy-text">
            Id mollis consectetur congue egestas
            egestas suspendisse blandit justo.
          </p>
          
          <div id="data-img" className="img-features">
            <img src={DataSecurity} alt="" />
          </div>
          
          <div className="sub-headline data">
            <h2>Data Security</h2>
          </div>        
          
          <p className="second-text data-text">
            Augue pulvinar justo, fermentum
            fames aliquam accumsan vestibulum
            non.
          </p>
      
          <div id="cost-img" className="img-features">
            <img src={CostStatistics} alt="" />
          </div>

          <div className="sub-headline cost">
            <h2>Cost Statistics</h2>
          </div>     
      
          <p className="second-text cost-text">
            Mattis urna ultricies non amet, purus
            in auctor non. Odio vulputate ac nibh.
          </p>
  
          <div id="support-img" className="img-features">
            <img src={Support247} alt="" />
          </div>

          <div className="sub-headline support">
            <h2>Support 24/7</h2>
          </div>    
  
          <p className="second-text support-text">
            A elementum, imperdiet enim, pretium
            etiam facilisi in aenean quam mauris.
          </p>

          <div id="regular-img" className="img-features">
            <img src={RegularCashback} alt="" />
          </div>

          <div className="sub-headline regular">
            <h2>Regular Cashback</h2>
          </div>  

          <p className="second-text regular-text">
            Sit facilisis dolor arcu, fermentum
            vestibulum arcu elementum imperdiet
            eleifend.
          </p>

          <div id="top-img" className="img-features">
            <img src={TopStandards} alt="" />
          </div>
          
          <div className="sub-headline top">
            <h2>Top Standards</h2>
          </div>        
          
          <p className="second-text top-text">
            Faucibus cursus maecenas lorem
            cursus nibh. Sociis sit risus id. Sit
            facilisis dolor arcu.
          </p>
        </div>
      </section>
    </>
  )
}
export default Appfeatures