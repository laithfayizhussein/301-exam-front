import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';

class UpdataFav extends Component {



    constructor(props) {
        super(props);
        this.state = {
            apiData: [],
            show: false,
            userInput: '',
            img: ''

        }
    }

// i have no time i got a little lost but i can resolve it 
    render() {
        return (

            <>
                <Button variant="primary" onClick={() => this.state(({ show: true }))}></Button>
                <Modal.Dialog show={this.state.show}>
                    <Modal.Header closeButton>
                        <Modal.Title>updata name </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="nname" placeholder="name" onChange={(e)=>{this.setState({userInput:e.target.value})}} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control type="nname" placeholder="name" onChange={(e)=>{this.setState({img:e.target.value})}} />
                            </Form.Group>
                        </Form>                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary">Close</Button>
                        <Button variant="primary">Save changes</Button>
                    </Modal.Footer>
                </Modal.Dialog>

            </>


        )
    }
}

export default UpdataFav
