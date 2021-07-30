import React from 'react'
import Search from '../../images/Vector.png'

const Filters = () => {
    return (
        <div className='filters'>
            <div className="filters__search">
                <img src={Search} alt="" />
                <input type="text" placeholder='Search'/>
            </div>
            <select name="" id="">
                <option value="">Release Date</option>
            </select>
            <select name="" id="">
                <option value="">Descending</option>
            </select>
        </div>
    )
}

export default Filters
