import { Suspense } from "react"
import { Link } from "react-router-dom"
import { Route, Routes } from "react-router-dom"
import "./styles/index.scss"
import { AboutPageLazy } from "./pages/AboutPage/AboutPage.lazy"
import { MainPageLazy } from "./pages/MainPage/MainPage.lazy"
import { useTheme } from "./theme/useTheme"


const App = () => {

  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <button onClick={() => toggleTheme()}>Toggle theme</button>
      <Link to="/">Home page</Link>
      <Link to="/about">About page</Link>
      <Suspense fallback="Loading...">
        <Routes>
          <Route path="/" element={<MainPageLazy />} />
          <Route path="/about" element={<AboutPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App