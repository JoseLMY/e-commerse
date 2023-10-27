import { useContext } from "react"
import { XMarkIcon } from '@heroicons/react/24/solid'

import { ShoppingCartContext } from "../../Context"
import { OrderCard } from "../OrderCard"
import { totalPrice } from "../../utils"

import './styles.css'

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) =>{
        const filteredProducts = context.cartProducts.filter(product => product.id !== id)
        context.setCartProducts(filteredProducts)
        updateValueRemoved(id)
    }

    const updateValueRemoved =(id)=>{
        let valueId = {
            id
        }
        let valuesJSON = JSON.stringify(valueId)
            fetch("http://localhost:5173/update-value-removed", {
                method: 'post',
                body: valuesJSON
            })
    }

    const buy = () => {
        if (context.bttLogin) {
            window.location.href = "http://localhost:3000/pay"
        } else {
            window.location.href = "http://localhost:3000/login"
        }
    }

    
    return (
        <>
            <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkoutSideMenu`}>
                <div className="headerMyOrder">
                    <h1>MY ORDER: </h1>
                    <XMarkIcon className='xMarkIcon' onClick={() => {
                        context.closeCheckoutSideMenu()
                    }}/>
                </div>
                <div className="allProductsOrder">
                {
                    context.cartProducts.map(product => (
                        <OrderCard 
                            id={product.id}
                            key={product.id}
                            imageUrl={product.img_product}
                            title={product.title_product}
                            price={product.price}
                            handleDelete={handleDelete}
                        />
                    ))
                }

                </div>
                <div className="detailsCheckoutMenu">
                    <p className="total">TOTAL:</p>
                    <p className="totalPrice">$ {totalPrice(context.cartProducts)}</p>
                </div>
                <button 
                    className="bttConfirmBuy"
                    onClick={()=>{buy()}}
                >
                    PAY
                </button>
            </aside>
        </>
    )
}

export {CheckoutSideMenu}