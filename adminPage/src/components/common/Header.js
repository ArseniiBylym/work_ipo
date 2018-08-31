import React, { Component } from 'react';
import ls from 'local-storage';
import { Container, Row, Col, Button } from 'reactstrap'

class HeaderComponent extends Component {
    render() {
        return (
            <header>
                <Container className="header">
                    <Row>
                        <Col xs="6" className="text-left">
                            Header
                        </Col>
                        <Col xs="6" className="text-right">
                            <Button onClick={() => {
                                ls.remove("token")
                                this.props.history.push('/login')
                            }}>Log out</Button>
                        </Col>
                    </Row>
                </Container>
            </header>
        );
    }
}

export default HeaderComponent;