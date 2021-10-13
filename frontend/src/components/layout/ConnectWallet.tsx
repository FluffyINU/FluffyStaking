import React, {FC, useState, useEffect} from "react";
import { PawButton } from "../PawButton";
import {useEthers} from '@usedapp/core'
import config from './../../config'
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

import { Modal, Row,Col } from "react-bootstrap";

export interface ConnectWalletProps {
    onModalClose: () => {},
    outsideOpener: boolean
}

const wallet_connect: WalletConnectConnector = new WalletConnectConnector(
    {
        rpc: { 1: `https://mainnet.infura.io/v3/${config.infura.project_id}` },
        qrcode: true
    }
)

export const ConnectWallet:FC<ConnectWalletProps> = ({onModalClose = () => {}, outsideOpener=false}) => {
    const {account, activate, activateBrowserWallet} = useEthers()
    const [modalActive, setModalActive] = useState<boolean>(false)

    const activateWalletConnect = async () => {
        return await activate(wallet_connect)
    }

    useEffect(() => {
        setModalActive(outsideOpener)
    }, [outsideOpener])


    return (
        <>
        <Modal show={modalActive} fullscreen="sm-down" size="lg" onHide={() => {
                setModalActive(false);
                onModalClose();
            }}>
                <Modal.Header closeButton>
                    <Modal.Title>Wallet connection</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col xs={6}>
                        <   div className="d-grid gap-2">
                                <PawButton variant="primary" onClick={() => activateBrowserWallet()}>Connect via Metamask</PawButton>
                            </div>
                        </Col>
                        <Col xs={6}>
                            <div className="d-grid gap-2">
                                <PawButton variant="primary" onClick={() => activateWalletConnect()}>Connect via WalletConnect</PawButton>
                            </div>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
            <div className="d-grid gap-2">
                <PawButton className="mt-2" onClick={() => setModalActive(true)} variant="outline-success">
                    Connect wallet
                </PawButton>
            </div>
        </>
    )
}