import axios from 'axios';
import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import UpdataFav from './UpdataFav';
 class Favorite extends Component {


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


    deleteFav = async (value , indx , event )=>{
        event.preventDefault();
        const idDrink = value.idDrink ;
        await axios.delete(`${this.state.url}/favorite${idDrink}`).then(response=>{
            this.state({
                apiData:response.data
            })
        })

    }

    updateFav = async (event , value , indx , userInput , img)=>{
        event.preventDefault();
        const idDrink = value.idDrink ;
        const reqBody = {
            strDrinkThumb:img ,
            strDrink:userInput ,
        }

        await axios.put(`${this.state.url}/favorite${idDrink}`,reqBody).then(response =>{
            this.setState ({
                apiData:response.data 
            })
        })

    }

    render() {
        return (

            this.state.apiData.map((value , indx)=>{

                <div>
                    return (<Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={value.strDrinkThumb} />
                    <Card.Body>
                      <Card.Title>{value.strDrink}</Card.Title>
                     
                      <Button variant="primary" onClick={(event)=>this.deleteFav(value,indx,event)}></Button>
                    </Card.Body>
                  </Card>)
                <UpdataFav 
                value={value}
                indx={indx}
                updateFav={this.updateFav}
                />
                </div>

            }
        ))
    }
}

export default Favorite
