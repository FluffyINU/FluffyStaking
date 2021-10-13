import React, { FC } from 'react'
import { Col, Row } from 'react-bootstrap'
import { FluffyCard } from '../components/FluffyCard'
import { PawButton } from '../components/PawButton'


export interface HomeProps { }

export const Home: FC<HomeProps> = (props) => {
    return (
        <>
            <hr />
            <h1><b>🐕 $FLOOF Products</b></h1>
            <hr />

            <Row>
                <Col sm={3} md={3} xs={3}>
                    <FluffyCard>
                        <h2>🦮NFT Marketplace</h2>
                    </FluffyCard>
                </Col>
                <Col md={6} sm={6} xs={6}>
                    <FluffyCard>
                        <h4>
                            For support animals around the world we're opened NFT marketplace.
                            <br />
                            All $FLOOF received from NFT sells will be used help animals.
                        </h4>
                    </FluffyCard>
                </Col>
                <Col md={3} sm={3} xs={3}>
                    <FluffyCard>
                        <div className="d-grid gap-2">
                            <PawButton variant="outline-dark">
                                Trade NFT now
                            </PawButton>
                        </div>
                    </FluffyCard>
                </Col>
            </Row>

            <Row>
                <Col sm={3} md={3} xs={3}>
                    <FluffyCard>
                        <h2>🦮$FLOOF LP staking</h2>
                    </FluffyCard>
                </Col>
                <Col md={6} sm={6} xs={6}>
                    <FluffyCard>
                        <h4>
                            You can stake your $FLOOF LP and earn more $FLOOF

                        </h4>
                    </FluffyCard>
                </Col>
                <Col md={3} sm={3} xs={3}>
                    <FluffyCard>
                        <div className="d-grid gap-2">
                            <PawButton variant="outline-dark">
                                Stake $FLOOF
                            </PawButton>
                        </div>
                    </FluffyCard>
                </Col>
            </Row>

        </>
    )
}