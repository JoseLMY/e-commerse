import { useContext } from "react"
import {Link} from "react-router-dom"
import { ShoppingBagIcon, Bars3BottomRightIcon } from "@heroicons/react/24/solid"

import { ShoppingCartContext } from '../../Context'
import { ProductDetail } from "../ProductDetail"
import { Settings } from "../Settings"

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

    const handleSettings = () =>{
        if (context.viewSettings) {
            context.closeViewSettings()
        } else {
            context.openViewSettings() 
        }
    }

    const renderBttLogin = () =>{
        if (!context.bttLogin) {
            return (
                <div className="loginContainer">
                    <a className="login" href="/login" >LOG IN</a>
                </div>
            )
        } else {
            return (
                <div className="userContainer">
                    <Bars3BottomRightIcon 
                        className="settingsIcon"
                        onClick={() => handleSettings()}
                    />
                </div>
            )
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
                </div>
                <div className="cartNavContainer" onClick={() => {openCheckoutSideMenu()}}>
                    <div className="cartProducts">
                        <ShoppingBagIcon className="shoppingBag"/>
                    </div>
                    <div className="productCounter">
                        <span>{context.cartProducts.length}</span>
                    </div>
                </div>
                {
                    renderBttLogin()
                }
                <Settings />
                <ProductDetail/>
            </nav>
                
        </>
    )
}
export {NavBar}