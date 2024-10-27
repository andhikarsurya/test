import "./navbar.css"
import{Link} from 'react-router-dom'
import icon from '../assets/icon.png'
interface iProps{
name:string
}
function Navbar(prop:iProps){
    return(
        <div className="navbar">
            <img src={icon} alt="" className="logo"/>
            <div className="link">
                <a href="/" className="active">Home</a>
                <Link to={'/about'}><a href="/about">About</a></Link>
                <Link to={'/contact'}><a href="/contact">Contact</a></Link>
            </div>
            <p className="name">Hello {prop.name}</p>
        </div>
    )
}
export default Navbar