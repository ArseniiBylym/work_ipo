import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, InputGroup, Input, InputGroupAddon, CustomInput, Collapse } from 'reactstrap'

class ConfirmDelete extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.emptyData = {
            branch_name: "",
            doc_template: "",
            fax: "",
            name: "",
        }
        this.reset = this.reset.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            data: !nextProps.data ? this.emptyData : nextProps.data
        })
    }

    handleChange(e, item) {
        const { target } = e
        this.setState((prevState) => ({
            data: {
                ...prevState.data,
                [item]: target.value
            }
        }))
    }

    handleToggle(item, value) {
        console.log(item)
        this.setState((prevState) => ({
            data: {
                ...prevState.data,
                [item]: !value
            }
        }))
    }

    getInputs() {

        console.log('props', this.props)

        let output = [], i = 1
        for (let item in this.state.data) {
            if (item !== 'id' && item !== 'password' && item !== 'signin_token') {
                output.push(
                    <InputGroup className="modal-input" key={i}>
                        {
                            typeof this.state.data[item] === 'boolean' ?
                                <CustomInput
                                    type="checkbox"
                                    id={item}
                                    label={item}
                                    onChange={() => {
                                        this.handleToggle(item, this.state.data[item])
                                    }}
                                    checked={this.state.data[item]}
                                />
                                :
                                this.state.data[item] && typeof this.state.data[item] === 'object' ?
                                    null
                                    :
                                    <React.Fragment>
                                        <InputGroupAddon addonType="prepend">{item}</InputGroupAddon>
                                        <Input value={this.state.data[item] ? this.state.data[item] : ''} onChange={(e) => this.handleChange(e, item)} />
                                    </React.Fragment>
                        }
                    </InputGroup>
                )
            }
            i++
        }
        return output
    }

    reset() {
        this.setState({ data: this.props.data })
    }

    render() {

        console.log('showTableForm', this.props)

        return (
            <Modal
                isOpen={this.props.showTableForm}
                toggle={this.props.toggleTableForm}
                className="wide-modal"
            >
                <ModalHeader toggle={this.props.toggleTableForm}>Edit Form</ModalHeader>
                <ModalBody>
                    {
                        this.state.data ?
                            this.getInputs()
                            :
                            null
                    }
                </ModalBody>
                <ModalFooter>
                    <Button className="float-left" color="success" onClick={() => this.props.saveChanges(this.state.data)}>Confirm</Button>
                    {' '}
                    {
                        this.state.data && this.state.data.id ?
                            <Button className="float-left" color="link" onClick={this.reset}>Reset</Button>
                            :
                            null
                    }
                    {' '}
                    <Button className="float-right" color="secondary" onClick={this.props.toggleTableForm}>Cancel</Button>
                </ModalFooter>
            </Modal>
        );
    };
}

export default ConfirmDelete;