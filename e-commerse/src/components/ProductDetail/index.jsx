import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"

import { XMarkIcon } from '@heroicons/react/24/solid'

import './styles.css'
const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)
    return (
        <>
            <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} productDetail`}>
                <div className='headerProductDetail'>
                    <h2>DETAIL:</h2>
                    <XMarkIcon className='xMarkIcon' onClick={() => {
                        context.closeProductDetail()
                    }}/>
                </div>
                <div>
                    <p>{context.count}</p>
                    <p>{context.count}</p>
                </div>
            </aside>
        </>
    )
}

export {ProductDetail}