import { BaseComponent } from '@src/theme/BaseComponent'
import StyleSheet from '@src/theme/StyleSheet'
import React from 'react'

interface BoxProps {
    tag?: 'main' | string,
    children?: React.ReactNode,
    styleSheet?: StyleSheet,
}

export default function Box({ children, styleSheet, tag, ...props }: BoxProps){
    return(
        <BaseComponent as={tag || 'div'} styleSheet={styleSheet} {...props}>
            { children }
        </BaseComponent>
    )
}