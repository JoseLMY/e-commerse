import { useContext } from "react"
import {Link} from "react-router-dom"
import { ShoppingBagIcon } from "@heroicons/react/24/solid"

import { ShoppingCartContext } from '../../Context'
import { ProductDetail } from "../ProductDetail"

import cart from "../../assets/cart.svg"
import "./styles.css"
const NavBar = () =>  { 

    const context = useContext(ShoppingCartContext)

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
                        <ShoppingBagIcon className="shoppingBag"/>
                    </div>
                    <div className="productCounter">
                        <span>{context.count}</span>
                    </div>
                </div>
                <div className="loginContainer">
                    <a className="login" href="/login">LOG IN</a>
                </div>
                <ProductDetail/>
            </nav>
        </>
    )
}
export {NavBar}