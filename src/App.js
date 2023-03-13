import React, { useState } from 'react'
import Hero from './Pages/Hero'
import './App.css'
import Projects from './Pages/Projects'
import Footer from './Pages/Footer'
import { darkTheme, lightTheme } from './themes'
export default function App() {
  const [lightMode, setLightMode] = useState(true)

  return (
    <div style={{
      marginRight: -8, marginLeft: -9, marginTop: -10, overflow: 'hidden',
      ...(lightMode ? lightTheme : darkTheme)
    }}>
      <Hero lightMode={lightMode} setLightMode={setLightMode} />
      <Projects lightMode={lightMode} />
      <Footer />
    </div>
  )
}
