import FAQFilledChevron from "../assets/Images/FAQFilledChevron.svg"
import FAQEmptyChevron from "../assets/Images/FAQEmptyChevron.svg"
import FAQChatIcon from "../assets/Images/FAQChatIcon.svg"
import FAQPhoneIcon from "../assets/Images/FAQPhoneIcon.svg"
import { useEffect, useState } from "react"
import FAQItem from "./FAQItem"

const Faq = () => {
  const [FAQ, setFAQ] = useState([])

  const getFAQ = async () => {
    const res = await fetch('https://win24-assignment.azurewebsites.net/api/faq')
    setFAQ(await res.json())
  }

  useEffect(() => {
    getFAQ()
  }, [])

  return (
    <>
      <section id="faq">
        <div className="container">
          <div className="contain-desktop">
            <h1 className="headline">
                Any questions? Check out the FAQs
            </h1>

            <h2 className="sub-headline">
                Still have unanswered questions and need to get in touch?
            </h2>

            <div className="contain-both">
              <div className="contain-phone">
                <img src={FAQPhoneIcon} alt="" />

                <p>Still have questions?</p>

                <a className="phone" href="#">Contact us <i className="fa-regular fa-arrow-right"></i></a>
            </div>

            <div className="contain-chat">
                <img src={FAQChatIcon} alt="" />

                <p>Don't like phone calls?</p>

                <a className="chat" href="#">Contact us <i className="fa-regular fa-arrow-right"></i> </a>
              </div>
            </div>
          </div>

          <div className="services">
            {
              FAQ.map((item) => (<FAQItem key={item.id} item={item} />))
            }
          </div>

          <div className="contain-tablet">
            <div className="contain-both">
              <div className="contain-phone">
                <img src={FAQPhoneIcon} alt="" />

                <p>Still have questions?</p>

                <a className="phone" href="#">Contact us <i className="fa-regular fa-arrow-right"></i></a>
              </div>

              <div className="contain-chat">
                <img src={FAQChatIcon} alt="" />

                <p>Don't like phone calls?</p>

                <a className="chat" href="#">Contact us <i className="fa-regular fa-arrow-right"></i> </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Faq