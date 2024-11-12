import { useEffect, useState } from "react"
import TestimoItem from "./TestimoItem"

const Clientsloving = () => {
  const [Testimo, setTestimo] = useState([])

  const getTestimo = async () => {
    const res = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials')
    setTestimo(await res.json())
  }

  useEffect(() => {
    getTestimo()
  }, [])

  return (
    <section id="clients-are-loving">
      <div className="container">
        <h1 className="headline">
          Clients are Loving Our App
        </h1>

        <div className="tja">
        {
          Testimo.map((item) => (<TestimoItem key={item.id} item={item} />))
        }
        </div>
      </div>
    </section>
  )
}
export default Clientsloving