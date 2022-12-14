import React from 'react'
import { Row, Col } from 'react-bootstrap'
import "./style.css"

export const Footer = () => {
    return (
        <div>
            <footer>
                <Row>
                    <Col className='container fixed bottom-0 text-center py-3' data-testid='copyright-footer' aria-label='Copyright Minera Enegenharia'>Copyright &copy; SIGUS/Minera Engenharia</Col>
                </Row>
            </footer>
        </div>
    )
}