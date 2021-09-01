import React from 'react'

const Form = ({inputEvent}) => {
    return (
        <section className="form">
            <h2>Get the latest real estate video with YOUR branding</h2>
            <form >
                <label htmlFor="full-name"> Full Name</label>
                <input 
                type="text"  
                id="full-name" 
                name="fullname" 
                onChange={inputEvent}
                placeholder="Your Name Here"
                 />
                <label htmlFor="ph-num">Phone Number</label>
                <input 
                type="tel"  
                id="ph-num" 
                name="phnum" 
                onChange={inputEvent}
                placeholder="555 5555 555"
                />
                <label htmlFor="brok-name">Brokerage Name</label>
                <input 
                type="text" 
                id="brok-name" 
                name="brkname" 
                onChange={inputEvent}
                placeholder="Your Realty Here"
                />
                <button>Get Your Video for FREE <span><i className="fas fa-arrow-right"></i></span></button>
            </form>
           <small>Browse hundreds of videos like this</small>
        </section>
    )
}

export default Form
