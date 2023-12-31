import { createContext, useState, useEffect } from "react"

export const ShoppingCartContext = createContext ()
export const ShoppingCartProvider = ({children}) => {

    //Shopping Cart - Increment quantity
    const [count, setCount] = useState(0)

    //Product Detail - Open / Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    //Checkout Side Menu - Open / Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    //Checkout button login / view / hidden
    const [bttLogin, setBttLogin] = useState(JSON.parse(localStorage.getItem('state')) ||false)
    const [viewSettings, setViewSettings] = useState(false)
    const openViewSettings = () => setViewSettings(true)
    const closeViewSettings = () => setViewSettings(false)

    const [seeCategories, setSeeCategories] = useState(false)
    const openSeeCategories = () => setSeeCategories(true)
    const closeSeeCategories = () => setSeeCategories(false)

    //Create Account - Open / Close
    const [isCreateAccountOpen, setIsCreateAccountOpen] = useState(true)
    const openCreateAccount = () => setIsCreateAccountOpen(true)
    const closeCreateAccount = () => setIsCreateAccountOpen(false)

    // Product Detail - Show Product
    const [productToShow, setProductToShow] = useState({})

    //Shopping Cart - Add Product to cart
    const [cartProducts, setCartProducts] = useState(JSON.parse(localStorage.getItem('item')) || [])

    //Get Products
    const [products, setProducts] = useState()
    const url = 'http://localhost:5173' //Here we are calling the api, in this case the api is local.
    const fetchApi = async () => {  // We create an asynchronous function, where we wait for the data
    const response = await fetch(url) // These data is saved in response
    
    const responseJSON = await response.json()
    setProducts(responseJSON)
    }
    
    useEffect(() => {
        fetchApi()
    }, [])

    
    return (
        <>
            <ShoppingCartContext.Provider value={{
                count,
                setCount,
                openProductDetail,
                closeProductDetail,
                isProductDetailOpen,
                isCheckoutSideMenuOpen,
                openCheckoutSideMenu,
                closeCheckoutSideMenu,
                productToShow,
                setProductToShow,
                cartProducts,
                setCartProducts,
                products,
                setProducts,
                isCreateAccountOpen,
                openCreateAccount,
                closeCreateAccount,
                bttLogin,
                setBttLogin,
                viewSettings,
                openViewSettings,
                closeViewSettings,
                seeCategories,
                openSeeCategories,
                closeSeeCategories
            }}>
                {children}
            </ShoppingCartContext.Provider>
        </>
    )
}