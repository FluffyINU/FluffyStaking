import React, { FC } from 'react'
import { Container } from 'react-bootstrap'
import { Header } from './Header'

export const LayoutBase: FC<{}> = (props) => {
    return (

        <Container className="fluff-wrapper">
            <Header />
            {props.children}
        </Container>

    )
}