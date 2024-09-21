import { Outlet } from 'react-router-dom'
import {Header} from './components/Header/Header'
import './assets/css/root/root.css'
import { Register } from './pages/Register/Register'

const Root = () => {
    return (
        <div className="root">
            <Header />
            <Register />
            <Outlet />
            {/* <Footer /> */}
        </div>
    )
}

export default Root
