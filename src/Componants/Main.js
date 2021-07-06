import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React, { Component } from 'react'


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            apiData: [],
            url: process.env.REACT_APP_API_KEY
        }
    }

    componentDidMount = async () => {
        await axios.get(`${this.state.url}/favorite`).then(Response => {
            this.setState({
                apiData: Response.data,
            })
        })
    }

    addFav = (value, event) => {
        event.preventDefault();

        const reqBody = {
            strDrink: value.strDrink,
            strDrinkThumb: value.strDrinkThumb,
        };
        axios.post(`${this.state.url}/favorite`, reqBody)

    }
    render() {
        return (
            this.state.apiData.map(value => {

                return (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={value.strDrinkThumb} />
                        <Card.Body>
                            <Card.Title>{value.strDrink}</Card.Title>
                           
                            <Button variant="primary"  onClick={(event)=> this.addFav (value , event)} >add to fav</Button>
                        </Card.Body>
                    </Card>

                )


            })
        )
    }
}

export default Main
