// Import external components to application.js

import "./App.css"
import Footetr from "./footer"
import Frontend from "./frontend"
import Hero from "./hero"
import Portfolio from "./portfolio"
import Reviews from "./review"

export default function App() {
  return (
    // Adding my functional componets to app js for rendering
    <div className="hero">
      <Hero />
      <Frontend />            
      <Portfolio />
      <Reviews /> 
      <Footetr />
    </div>
  )
}