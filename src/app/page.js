import Navbar from "./components/Navbar"
import Landing from "./components/Landing"
import Carousel from "./components/Carousel"
import Events from "./components/Events"
import Content from "./components/Content"
import Projects from "./Projects/page"

const page = () => {
  return (
    <>
      <Navbar/>
      <Landing/>
      <Carousel/>
      <Content/>
    </>
  )
}

export default page