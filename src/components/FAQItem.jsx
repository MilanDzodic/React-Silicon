const FAQItem = ({ item }) => {
  return (
    <div className="contain">
      <div className="question">
        <h3>{item.title}</h3>
      </div>
      <div className="text">
        <p>{item.content}</p>
      </div>
    </div>
  )
}
export default FAQItem