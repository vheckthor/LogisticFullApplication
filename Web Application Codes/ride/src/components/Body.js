import React from 'react'

function Body() {
    return (
        <div className='bodyDiv'>
            <div className='formDiv'>
                <h1>Select Ride Type</h1>
                <form>
                    <input type='text' placeholder='enter you pick up location' />
                    <input type='text' placeholder='enter you destination'/><br/>
                    <input type='submit' value='order now'/>
                </form>
            </div>
            <div className='maps'>
            <h1>Select Ride Type</h1>
                <form>
                    <input type='text' placeholder='enter you pick up location' />
                    <input type='text' placeholder='enter you destination'/>
                </form>
            </div>
        </div>
    )
}

export default Body
