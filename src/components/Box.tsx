import React from 'react'

interface StyleSheet {
    fontFamily: string
}

interface BoxProps {
    tag: any, // A resolver
    children: React.ReactNode,
    styleSheet: StyleSheet,
}

export default function Box({ children, styleSheet, tag }){
    const Tag = tag || 'div'
    return(
        <Tag style={styleSheet}>
            { children }
        </Tag>
    )
}