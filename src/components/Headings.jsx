import React from 'react'
import "./Headings.scss"

export const H1 = ({children}) => {
    return (
        <h1 className="H1">
            {children}
        </h1>
    )
}

export const H2 = ({children}) => {
    return (
        <h2 className="H2">
            {children}
        </h2>
    )
}

export const H3 = ({children}) => {
    return (
        <h3 className="H3">
            {children}
        </h3>
    )
}

