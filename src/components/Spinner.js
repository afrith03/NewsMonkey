import React from 'react'
import loading from '../assets/doggo-spinning.gif'

const Spinner = ()=> {
        return (
            <div className="text-center">
                <img className="my-3 imgages"  src={loading} alt="loading" />
            </div>
        )
}

export default Spinner
