import { Outlet } from 'react-router-dom'
import {Header} from './components/Header/Header'
import './assets/css/root/root.css'



const Root = () => {
    return (
        <div className="root">
            <Header />
            <Outlet />
            {/* <Footer /> */}
        </div>
    )
}

export default Root
