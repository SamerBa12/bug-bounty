import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import './assets/css/root/root.css'

const Root = () => {
    return (
        <div className="root">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Root
