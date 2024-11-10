import { useState } from "react"

const FAQItem = ({ item }) => {

  const [openQuestion, setOpenQuestion] = useState(false)

  const toggleQuestion = () => {
    setOpenQuestion(!openQuestion)
  }

  return (
    <div className={`contain ${openQuestion ? 'open' : ''}`}>
      <div className="question" onClick={toggleQuestion}>
        <h3>{item.title}</h3>
        <button className="btn-chevron" onClick={toggleQuestion}>
          <i class="fa-solid fa-chevron-down"></i>
        </button>
      </div>
      
      <div className="answer">
        <p>{item.content}</p>
      </div>
    </div>
  )
}
export default FAQItem