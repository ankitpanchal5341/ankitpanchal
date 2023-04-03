import React, { useState } from 'react'
import Home from './Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutMe from './Pages/AboutMe'
import Header from './Pages/Header'
import Footer from './Pages/Footer'

export default function App() {
    const [hlightMode, sethLightMode] = useState(true)

    return (
        <BrowserRouter>
            <Header lightMode={hlightMode} sethLightMode={sethLightMode} />
            <Routes>
                <Route path='/' Component={Home} hlightMode={hlightMode} sethLightMode={sethLightMode} />
                <Route path='/about' Component={AboutMe} />

            </Routes>
            <Footer />
        </BrowserRouter>

    )
}
