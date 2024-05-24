import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home/Home"
import Article from "./Article/Article"
import G from "./G/G"
import F from "./F/F"
import E from "./E/E"
import D from "./D/D"
import C from "./C/C"
import B from "./B/B"
import A from "./A/A"
import About from "./About/About"
import Menu from "../components/Menu/Menu"
import Error from "./Error/Error"

export default function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/article" element={<Article />} />
            <Route path="/about" element={<About />} />
            <Route path="/a" element={<A />} />
            <Route path="/b" element={<B />} />
            <Route path="/c" element={<C />} />
            <Route path="/d" element={<D />} />
            <Route path="/e" element={<E />} />
            <Route path="/f" element={<F />} />
            <Route path="/g" element={<G />} />
            <Route path="*" element={<Error />} />
        </Routes>
    </BrowserRouter>
  )
}
