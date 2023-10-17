import React, { useContext} from 'react'
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'

import { ShoppingCartContext } from '../../Context'

import "./styles.css"

const Home = () => {

    const context = useContext(ShoppingCartContext)

    const showProduct = (productDetails) => { /*We pass the data by props of function showProducts*/
        context.openProductDetail()
        context.setProductToShow(productDetails) /*And here is where we need the data*/
    }

    const addProductToCart = (produtData) =>{
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, produtData])
    }

    const renderIcon = (product, id) => {

        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0
        if(isInCart){
            return (
                <div className="plusIconContainer " >
                    <CheckIcon className="checkIcon" alt='buy dress' />
                </div>
            )
        } else {
            return (
                <div className="plusIconContainer " >
                    <PlusIcon className="plusIcon" alt='buy dress' onClick={() => {addProductToCart(product)}}/>
                </div>
        )}
    }   

    return (
        <>
            <section id='home'>
            
                    { !context.products ? 'Cargando' : context.products.map((product) => {
                        return  (
                            <> 
                                <div className='allArticles' >
                                    <article className="articleContainer"  onClick={() => showProduct(product)} >  {/* Here i send product for props of the function, because later we're will need when send the data */}
                                        <div className="imgContainer">
                                            <img src={product.img_product} alt="personaje" className="img" />
                                        </div>
                                        <div className="details"> 
                                            <h1 className="productTtitle">{product.title_product}</h1> 
                                            <div className='buySection'>
                                                <p className='price'>${product.price}</p>
                                            </div>
                                        </div>
                                    </article>  
                                    {
                                        renderIcon(product, product.id)
                                    }
                                </div>
                            </>
                    )})}
            </section>
        </>
    )
}

export {Home}