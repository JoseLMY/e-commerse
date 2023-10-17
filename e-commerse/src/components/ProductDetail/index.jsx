import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"

import { XMarkIcon } from '@heroicons/react/24/solid'

import './styles.css'
const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)
    const product = context.productToShow

    const addProductToCart = (produtData) =>{
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, produtData])
    }

    const renderButton = (product, id) => {
        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0
        if(isInCart){
            return (
                <p className="cartAlready" >IT'S ALREADY IN YOUR SHOPPING BAG</p>
            )
        } else {
            return (
                <button className="bttAddToCart" onClick={() => {addProductToCart(product)}}>I WANT IT</button>
        )}
    }
    
    return (
        <>
            <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} productDetail`}>
                <div className='headerProductDetail'>
                    <h1>DETAILS: </h1>
                    <XMarkIcon className='xMarkIcon' onClick={() => {
                        context.closeProductDetail()
                    }}/>
                </div>
                <div className="detailsProducts">
                    <figure className="figureImage">
                        <img className="imgProductDetail" src={product.img_product} alt="" />
                    </figure>
                    <div className="allDetails">
                        <p className="titleProduct">{product.title_product}</p>
                        <p className="priceProduct">$ {product.price}</p>
                        <p className="descriptionProduct">{product.description}</p>
                        {
                            renderButton(product, product.id)
                        }
                    </div>
                </div>
            </aside>
        </>
    )
}

export {ProductDetail}