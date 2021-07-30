import React from 'react'

const Button = ({exe}) => {
    return <button disabled={exe}>{exe ? 'installed' : 'Install' }</button>
}

export default Button
