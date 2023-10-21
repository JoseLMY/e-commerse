import {Link} from "react-router-dom"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import swal from "sweetalert"

import './styles.css'
const CategoryMobile = () =>{
    const context = useContext(ShoppingCartContext)
    let email =  JSON.parse(localStorage.getItem('user'))

    const goToCategory = () => {
        context.closeSeeCategories()
    }
    const logOut = () =>{
        swal({
            icon: "success",
            text: "Comming Out",
            buttons: false
        })
        setTimeout(()=>{
            localStorage.removeItem('user')
            localStorage.removeItem('state')
            localStorage.removeItem('item')
            window.location.href = 'http://localhost:3000/'
        }, 2000)
    }
    const renderButtonLogOut =()=>{
        if (context.bttLogin) {
            return (
                <button className="bttLogOutMobile" onClick={() => {logOut()}}>Log Out</button>
            )
        } else{
            return null
        }
    }
    return (
        <div className={`${context.seeCategories ? 'flex' : 'hidden'} allCategoriesContainer`}>
            <div className={`categoriesContainer`}>
                    <ul className="categories-li">
                        <li>
                            <Link 
                                className='categories' 
                                to="/"
                                onClick={()=>{goToCategory()}}
                            >
                                All
                            </Link>
                        </li>
                        <li>
                            <Link 
                                className='categories' 
                                to="/classic"
                                onClick={()=>{goToCategory()}}
                            >
                                Classic
                            </Link>
                        </li>
                        <li>
                            <Link 
                                className='categories' 
                                to="/folkloric"
                                onClick={()=>{goToCategory()}}
                            >
                                Folkloric
                            </Link>
                        </li>
                        <li>
                            <Link 
                                className='categories' 
                                to="/bussines"
                                onClick={()=>{goToCategory()}}
                            >
                                Bussines
                            </Link>
                        </li>
                        <li>
                            <Link 
                                className='categories' 
                                to="/sport"
                                onClick={()=>{goToCategory()}}
                            >
                                Sport
                            </Link>
                        </li>
                        <li>
                            <Link 
                                className='categories' 
                                to="/elegant"
                                onClick={()=>{goToCategory()}}
                            >
                                Elegant
                            </Link>
                        </li>
                        <li>
                            <Link 
                                className='categories' 
                                to="/formal"
                                onClick={()=>{goToCategory()}}
                                >
                                    Formal
                            </Link>
                        </li>
                    </ul>
                    <div className="actionContainer">
                        <p className="emailMobile">{email}</p>
                        {
                            renderButtonLogOut()
                        }
                    </div>
                </div>
        </div>
    )
}

export {CategoryMobile}