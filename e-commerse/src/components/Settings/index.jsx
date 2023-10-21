import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { XMarkIcon } from "@heroicons/react/24/solid"
import swal from "sweetalert"

import './styles.css'
const Settings = () =>{
    let email =  JSON.parse(localStorage.getItem('user'))
    const context = useContext(ShoppingCartContext)
    
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
    return (
        <>
            <div className={`${context.viewSettings ? 'flex' : 'hidden'} settingsContainer`}>
                <div className="settingsHeader">
                    <div className="settingsTitle">
                        <p>Settings:</p>
                    </div>
                    <div className="XMarkIconSettingsContainer">
                        <XMarkIcon 
                            className="XMarkIconSettings"
                            onClick={() => {context.closeViewSettings()}}
                        />
                    </div>
                </div>
                <div className="emailSettingsContainer">
                    <p>-{email}</p>
                </div>
                <div className="bttLogOutContainer">
                    <button onClick={() => {logOut()}}>Log Out</button>
                </div>
            </div>
        </>
    )
}

export {Settings}