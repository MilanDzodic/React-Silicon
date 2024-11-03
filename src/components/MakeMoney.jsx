import CheckCircle from "../assets/Images/CheckCircle.svg"
import MakeYourMoneyInnerFirst from "../assets/Images/MakeYourMoneyInnerFirst.svg"
import MakeYourMoneyOuterFirst from "../assets/Images/MakeYourMoneyOuterFirst.svg"
import MakeYourMoneyInnerSecond from "../assets/Images/MakeYourMoneyInnerSecond.svg"
import MakeYourMoneyOuterSecond from "../assets/Images/MakeYourMoneyOuterSecond.svg"
import RegularCashback from "../assets/Images/RegularCashback.svg"


const MakeMoney = () => {
  return (
    <>
      <section id="make-your-money">
        <div className="container">
          <div className="content-1">
            <h1 className="headline">
            Make your money transfer simple and clear
            </h1>

            <div className="containy">
              <div className="flex">
                <img className="checkbox" src={CheckCircle} alt="checkbox circle" />Banking transactions are free for you
              </div>

              <div className="flex">
                <img className="checkbox" src={CheckCircle} alt="checkbox circle" />No monthly cash comission
              </div>

              <div className="flex">
                <img className="checkbox" src={CheckCircle} alt="checkbox circle" />Manage payments and transactions only
              </div>
            </div>

            <button className="button">
              Learn more <i className="fa-light fa-arrow-right"></i>
            </button>
              
          </div>

          <div className="images-1">
            <img id="inner-first" src={MakeYourMoneyInnerFirst} alt="" />

            <img id="outer-first" src={MakeYourMoneyOuterFirst} alt="" />
          </div>

          <div className="images-2">
            <img id="inner-second" src={MakeYourMoneyInnerSecond} alt="" />

            <img id="outer-second" src={MakeYourMoneyOuterSecond} alt="" />
          </div>

          <div className="content-2">
            <h1 className="headline">
              Receive payment from international bank details
            </h1>

            <div className="containz">
              <div className="flex">
                <img src="/Images/Easy Paments.svg" alt=""></img> <img src={RegularCashback} alt="" />
              </div>

              <div className="flexy">
                <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
              </div>
            </div>

            <button className="button">
              Learn more <i className="fa-light fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
export default MakeMoney