import React, { Component } from 'react';
import { Container } from 'reactstrap'

class FooterComponent extends Component {
    render() {
        return (
            <footer>
                <Container className="footer text-center">
                    2018 copyright
                </Container>
            </footer>
        );
    }
}

export default FooterComponent;