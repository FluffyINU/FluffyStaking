import React, {FC} from 'react'
import { Col, Container } from 'react-bootstrap'

export interface FluffyCardProps {
    title?: string
}

export const FluffyCard:FC<FluffyCardProps> = ({title, children}) => {
    return (
        <>
            {title && <>
                <div className="mt-3 fluff-border fluff-block-title">
                    {title}
                </div>
            </>}
            <div className ="mt-3 fluff-border fluff-block-content">
                <Container fluid style={{height:'15vh'}}>
                    {children}
                </Container>
            </div>
        </>
    )
}