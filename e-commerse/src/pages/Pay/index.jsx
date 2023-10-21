import './styles.css'
const Pay = () =>{
    const finishBuy = () => {
        localStorage.removeItem('item')
    }
    return (
            <div className='payContainer'>
                <div className="card">
                    <div className="header">
                        <span className="icon">
                        <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" fillRule="evenodd"></path>
                        </svg>
                        </span>
                        <p className="alert">Congratulation!</p>
                    </div>

                    <p className="message">
                        This is just a test e-commerce, but thanks for buy in our shop. We hope to see you soon
                    </p>

                    <div className="actions">
                        <a className="read" href="/" onClick={() => {finishBuy()}}>
                        I Want to buy more
                        </a>
                    </div>
                </div>
        
            </div>

    )
}

export {Pay}