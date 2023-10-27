import { useState, useEffect, useContext } from "react"
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'

import { ShoppingCartContext } from '../../Context'

import "./styles.css"

const Elegant = () => {
    const url = 'http://localhost:5173/elegant' //Here we are calling the api, in this case the api is local.
    const [products, setProducts] = useState()
    const fetchApi = async () => {  // We create an asynchronous function, where we wait for the data
    const response = await fetch(url) // These data is saved in response
    
    const responseJSON = await response.json()
    setProducts(responseJSON)
}

    useEffect(() => {
        fetchApi()
    }, [])

    
    const context = useContext(ShoppingCartContext)
    
    const showProduct = (product) => { /*We pass the data by props of function showProducts*/
    context.openProductDetail()
    context.setProductToShow(product) /*And here is where we need the data*/
    }

    const addProductToCart = (produtData) =>{
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, produtData])
        updateValueAdded(produtData) 
    }

    const renderIcon = (product, id) => {

        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0
        localStorage.setItem('item', JSON.stringify(context.cartProducts))
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
    const updateValueAdded =(id)=>{
        let valueId = {
            id: id.id
        }
        let valuesJSON = JSON.stringify(valueId)
            fetch("http://localhost:5173/update-value-added", {
                method: 'post',
                body: valuesJSON
            })
    }

    return (
        <>
            <section id='elegant'>
                    { !products ? 'Cargando' : products.map((product, key) => {
                    return  (
                        <div className='allArticles' key={product.id}>
                            <article className="articleContainer" key={product.id} onClick={() => showProduct(product)}>   
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
                    )})}
                
            </section>
        </>
    )
}

export {Elegant}