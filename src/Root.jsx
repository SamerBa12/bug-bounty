import { Outlet } from 'react-router-dom'
import './assets/css/root/root.css'
import { Register } from './pages/Register/Register'

const Root = () => {
    return (
        <div className="root">
          
            <Register />

        </div>
    )
}

export default Root
