import FAQFilledChevron from "../assets/Images/FAQFilledChevron.svg"
import FAQEmptyChevron from "../assets/Images/FAQEmptyChevron.svg"
import FAQChatIcon from "../assets/Images/FAQChatIcon.svg"
import FAQPhoneIcon from "../assets/Images/FAQPhoneIcon.svg"

const Faq = () => {
  return (
    <>
      <section id="faq">
        <div className="container">
          <div className="contain-tablet">
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

          <div className="contain-desktop">

          <div className="flex">
            <div className="question">
              Is any of my personal information stored in the App?
            </div> 
        
            <img id="filled-chevron-a" src={FAQFilledChevron} alt="" />

            <img id="empty-chevron-a" src={FAQEmptyChevron} alt="" />
          </div>

          <div className="contain-a">
            <div className="text">
              Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et,
              cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra
              fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque.
              Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam
              tristique tincidunt suspendisse ut consequat.
            </div>

            <div className="text">
              Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia
              posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas
              aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.
            </div>
          </div>

          <div className="contain-b">
            <div className="question">
              What formats can I download my transaction history in?
            </div>

            <img src={FAQEmptyChevron} alt="" />
          </div>

          <div className="contain-c">
            <div id="question-c" className="question">
              Can I schedule future transfers?
            </div>

            <img id="empty-chevron-c" src={FAQEmptyChevron} alt="" />

            <img id="filled-chevron-c" src={FAQFilledChevron} alt="" />

            <p className="text"> 
              Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. 
              Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis
              accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida 
              adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.
            </p>
          </div>

          <div className="contain-d">
            <div className="question">
              When can I use Banking App services?
            </div>

            <img src={FAQEmptyChevron} alt="" />
          </div>

          <div className="contain-e">
            <div className="question">
              Can I create my own password that is easy for me to remember?
            </div>

            <img src={FAQEmptyChevron} alt="" />
          </div>

          <div className="contain-f">
            <div className="question">
              What happens if I forget or lose my password?
            </div>

            <img src={FAQEmptyChevron} alt="" />
          </div>

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