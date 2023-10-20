import { BanknotesIcon } from "@heroicons/react/24/solid"
import { XMarkIcon } from "@heroicons/react/24/solid"

import "./styles.css"

const OrderCard = props => {
    const {
        id,
        title,
        price,
        handleDelete,
    } = props
    return (
        <>
            <div className="orderContainer">
                <figure className="figureOrderCard">
                    <BanknotesIcon className="figureOrderCardIcon"/>
                </figure>
                <div className="orderDetails">
                    <div className="detailsOrderCard">
                        <p className="titleOrderCard">{title}</p>
                        <p className="priceOrderCard">$ {price}</p>
                    </div>
                    <div className="removeProduct">
                        <XMarkIcon 
                            onClick={() => {handleDelete(id)}} 
                            className="removeProductIcon"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export {OrderCard}