import { useContext } from "react"
import {Link} from "react-router-dom"
import { ShoppingBagIcon } from "@heroicons/react/24/solid"

import { ShoppingCartContext } from '../../Context'
import { ProductDetail } from "../ProductDetail"

import "./styles.css"
const NavBar = () =>  { 

    const context = useContext(ShoppingCartContext)
    const closeDetails = () => {
        context.closeProductDetail()   
    }
    const openCheckoutSideMenu = () => {
        if (context.isCheckoutSideMenuOpen) {
            context.closeCheckoutSideMenu()
        } else {
            context.openCheckoutSideMenu()
        }
    }

    const openCreateAccount = () =>{
        if (context.isCreateAccountOpen) {
            context.closeCreateAccount()
        } else {
            context.openCreateAccount()
        }
    }


    return (
        <>
            <nav className="navBar">
                <div className="logo">
                    <h1>E-COMMERCE</h1>
                </div>
                <div className="linksContainer">
                    <ul className="links-li">
                        <li>
                            <Link className='links' to="/" onClick={() => closeDetails()}>All</Link>
                        </li>
                        <li>
                            <Link className='links' to="/classic" onClick={() => closeDetails()}>Classic</Link>
                        </li>
                        <li>
                            <Link className='links' to="/folkloric" onClick={() => closeDetails()}>Folkloric</Link>
                        </li>
                        <li>
                            <Link className='links' to="/bussines" onClick={() => closeDetails()}>Bussines</Link>
                        </li>
                        <li>
                            <Link className='links' to="/sport" onClick={() => closeDetails()}>Sport</Link>
                        </li>
                        <li>
                            <Link className='links' to="/elegant" onClick={() => closeDetails()}>Elegant</Link>
                        </li>
                        <li>
                            <Link className='links' to="/formal" onClick={() => closeDetails()}>Formal</Link>
                        </li>
                    </ul>
                    <input type="text" placeholder='Search a Product' className='search'/>
                </div>
                <div className="cartNavContainer" onClick={() => {openCheckoutSideMenu()}}>
                    <div className="cartProducts">
                        <ShoppingBagIcon className="shoppingBag"/>
                    </div>
                    <div className="productCounter">
                        <span>{context.cartProducts.length}</span>
                    </div>
                </div>
                <div className="loginContainer">
                    <button onClick={() => {openCreateAccount()}} className="login" >LOG IN</button>
                </div>
                <ProductDetail/>
            </nav>
                
        </>
    )
}
export {NavBar}