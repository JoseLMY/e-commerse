import {Link} from "react-router-dom"

import cart from "../assets/cart.svg"

import "./styles.css"
const NavBar = () =>  {
    return (
        <>
            <nav className="navBar">
                <div className="logo">
                    <h1>E-COMMERCE</h1>
                </div>
                <div className="linksContainer">
                    <ul className="links-li">
                        <li>
                            <Link className='links' to="/">All</Link>
                        </li>
                        <li>
                            <Link className='links' to="/classic">Classic</Link>
                        </li>
                        <li>
                            <Link className='links' to="/folkloric">Folkloric</Link>
                        </li>
                        <li>
                            <Link className='links' to="/bussines">Bussines</Link>
                        </li>
                        <li>
                            <Link className='links' to="/sport">Sport</Link>
                        </li>
                        <li>
                            <Link className='links' to="/elegant">Elegant</Link>
                        </li>
                        <li>
                            <Link className='links' to="/formal">Formal</Link>
                        </li>
                    </ul>
                </div>
                <div className="cartNavContainer">
                    <div className="cartProducts">
                        <img className='cartNav' src={cart} alt='buy dress'/>
                    </div>
                    <div className="productCounter">
                        <span>5</span>
                    </div>
                </div>
                <div className="loginContainer">
                    <a className="login" href="/login">LOG IN</a>
                </div>
            </nav>
        </>
    )
}

export {NavBar}