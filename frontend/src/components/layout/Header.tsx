import { useEthers } from '@usedapp/core'
import React, { FC } from 'react'
import { Row, Col } from 'react-bootstrap'
import Logo from './../../assets/images/floof.png'
import { ConnectWallet } from './ConnectWallet'
import { StatsBlock } from './StatsBlock'

export interface HeaderProps { }

export const Header: FC<HeaderProps> = (props) => {
    const { account } = useEthers();

    return (
        <div className="mt-3 fluff-header fluff-border p-3">
            <Row>
                <Col sm={2} md={2} xs={2}>
                    <img src={Logo} alt="logo" className="fluff-bounce-no-hover" style={{ maxHeight: '90px', maxWidth: '90px' }} />
                </Col>
                <Col sm={6} md={6} xs={6}>
                    <h1>Fluffy INU</h1>
                    <h4>Community driven token, which aims to <b>help animals</b></h4>
                </Col>
                <Col sm={4} md={4} xs={4}>
                    {!account && <ConnectWallet />}
                    {account && <>Wallet connected</>}
                </Col>
            </Row>
        </div>
    )
}