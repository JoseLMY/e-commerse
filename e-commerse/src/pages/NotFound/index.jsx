import './styles.css'
const NotFound = () => {
    const returnHome = () => {
        window.location.href = "http://localhost:3000/"
    }
    return (
        <div className='cardNotFountContainer'>
            <div className="cardNotFound">
                <div className="headerNotFound">
                    <div className="imageNotFound">
                        <svg aria-hidden="true" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" fill="none">
                            <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" strokeLinejoin="round" strokeLinecap="round"></path>
                        </svg>
                    </div>
                    <div className="contentNotFound">
                        <span className="titleNotFound">SORRY, PAGE NOT FOUND</span>
                        <p className="messageNotFound">Come back to see more products</p>
                    </div>
                    <div className="actionsNotFound">
                        <button 
                            className="desactivateNotFound" 
                            type="button"
                            onClick={() => {returnHome()}}
                        >
                            Return
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {NotFound}