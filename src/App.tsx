import Advantages from "./components/Advantages"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Customizable from "./components/Customizable"
import Features from "./components/Features"
import AboutUs from "./components/AboutUs"
import Faqs from "./components/Faqs"
import DownloadPage from "./components/DownloadPage"
import Home from "./components/Home"
export default function App() {
  return (
    <div className="font-Space">
      <Header/>
      <Home/>
      <Features/>
      <Advantages/>
      <Customizable/>
      <AboutUs/>
      <Faqs/>
      <DownloadPage/>
      <Footer/>
    </div>
  )
}
