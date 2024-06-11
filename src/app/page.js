import Navbar from "./components/Navbar"
import Landing from "./components/Landing"
import Carousel from "./components/Carousel"
import Events from "./components/Events"
import Content from "./components/Content"

const page = () => {
  return (
    <div>
      <Navbar/>
      <Landing/>
      <Carousel/>
      <Content/>
      
    </div>
  )
}

export default page