import { useEffect, useState } from "react"
import LogoType from "../assets/Images/Navbarlogo.svg"

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)

    if (!isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark')
      localStorage.setItem('theme', 'dark')
    }
    else {
      document.documentElement.setAttribute('data-theme', 'light')
      localStorage.setItem('theme', 'light')
    }
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark')
      setIsDarkMode(true)
    }
    else {
      document.documentElement.setAttribute('data-theme', 'light')
      setIsDarkMode(false)
    }

  }, [])

  return (
    <>
      <header>
        <div className="container">

          <a id="logo" href="Silicon.html"><img src={LogoType} /></a>

          <nav id="main-menu" className="navbar">
            <a className="nav-link" href="#">Features</a>
          </nav>

          <div className="btn-toggle-switch">
              <span className="label">Dark mode</span>
            <label className="toggle-switch">
              <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
              <span className="slider round"></span>
            </label>
          </div>

          <a id="signin" href="#" className="btn-signin">
          <i className="fa-regular fa-user"></i>
            <span>Sign in / up</span>
          </a>

          <button className="btn-mobile">
            <i className="fa-solid fa-bars"></i>
          </button>

        </div>
      </header>
    </>
  )
}
export default Header