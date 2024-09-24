import { Outlet } from 'react-router-dom'
import './assets/css/root/root.css'
import { Register } from './pages/Register/Register'
import { Login } from './pages/Login/Login'

const Root = () => {
    return (
        <div className="root">
          
            {/* <Register /> */}
            <Login />
        </div>
    )
}

export default Root
