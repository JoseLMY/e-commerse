import React, { useContext} from 'react'
import { XMarkIcon } from "@heroicons/react/24/solid"

import { ShoppingCartContext } from '../../Context'

import "./styles.css"
const LogIn = () => {

    const context = useContext(ShoppingCartContext)

    const openCreateAccount = () =>{
        if (context.isCreateAccountOpen) {
            context.closeCreateAccount()
        } else {
            context.openCreateAccount()
        }
    }

    return (
        <>
           <div className= {`${context.isCreateAccountOpen ? 'ver' : 'ocultar'} loginFormContainer`}>
                <div className='formContainer'>
                    <form action="" method="post" className="form">
                        <div className="headerCreateAccount">
                            <p className="titleCreateAccount"> CREATE ACCOUNT</p>
                            <XMarkIcon className="cancelCreateAccount" onClick={() => {openCreateAccount()}}/>
                        </div>
                        <input type="text" placeholder="Full Name" className="inputs"/>
                        <input type="text" placeholder="Correo:" className="inputs"/>
                        <input type="text" placeholder="Password" className="inputs"/>
                        <button type="submit">Create Account</button>
                    </form>
                </div>
           </div>
        </>
    )
}

export {LogIn}