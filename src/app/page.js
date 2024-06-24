import Navbar from "./components/Navbar"
import Landing from "./components/Landing"
import Carousel from "./components/Carousel"
import Events from "./components/Events"
import Content from "./components/Content"
import Contact from "./components/Contact"
import Team from "./components/TeamDash"

import { configDotenv } from "dotenv";
configDotenv();

const page = () => {
  return (
    <>
      <Navbar/>
      <Landing/>
      <Carousel/>
      <Content/>
      <Contact/>
    </>
  )
}

export default page