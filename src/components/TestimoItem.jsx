import Review1 from "../assets/Images/Rating1.svg"
import Review2 from "../assets/Images/Rating2.svg"

const TestimoItem = ({ item }) => {

  const starrating = item.starRating === 4 ? Review1 : Review2

  return (
    <div className="testimonials">

      <div className="tjabba">
        <div className="starrating">
          <img src={starrating}/>
        </div>

        <div className="avatarurl">
          <img src={item.avatarUrl} />
        </div>
        
        <div className="author">
          <h3>{item.author}</h3>
        </div>
        
        <div className="jobrole">
          <p>{item.jobRole}</p>
        </div>
      </div>

      <div className="comment">
        <p>{item.comment}</p>
      </div>
    </div>
  )
}
export default TestimoItem