import React from 'react'

const Tags = ({children, bg}) => {
    return (
        <div className='tags' style={{background: bg}}>
                <h5>{children}</h5>
                <span>&times;</span>
        </div>
    )
}

export default Tags
