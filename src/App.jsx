import { BrowserRouter as Router, Routes, Route} from "react-router-dom"// esto hay que imporatrlo para usar la libreria npm react -router-dom, para acceder a los paquetes debo agregarle as Router, Routes, route
import { Home } from "./pages/Home"//direccion
import { Register } from "./pages/Register"
import { GetStarted } from "./pages/GetStarted"
import { Login } from "./pages/login"
import { Products } from "./pages/Products"
import { Categories } from "./pages/Categories"


function App() {

  return (
    <>
    
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/GetStarted" element={<GetStarted/>} />
          <Route path="/Products" element={<Products/>} />
          <Route path="/Categories" element={<Categories/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
