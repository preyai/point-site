import About from "./components/About"
import Activity from "./components/Activity"
import Apps from "./components/Apps"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Philosophy from "./components/Philosophy"
import Reviews from "./components/Reviews"
import Welcome from "./components/Welcome"
import Social from "./components/Social"
import Modal from "./components/Modal"
import { useRef } from "react"
import { useState } from "react"


function App() {
  const sections = useRef([])
  const [open, setOpen] = useState(false)

  return (
    <div className="App">
      <Header refs={sections} />
      <Welcome refs={sections} open={open} setOpen={setOpen} />
      {open &&
        <Activity refs={sections} />
      }
      <About refs={sections} />
      <Philosophy refs={sections} />
      <Reviews refs={sections} />
      <Apps refs={sections} />
      <Social refs={sections} />
      <Footer />
      {/* <Modal>2</Modal> */}
    </div>
  )
}

export default App
