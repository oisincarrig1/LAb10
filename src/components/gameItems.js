import React from "react";
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export class GameItems extends React.Component{

    constructor(){
        super();
        this.DeleteGame = this.DeleteGame.bind(this);
    }
    /*delete game*/
    DeleteGame(e){
        e.preventDefault();

        axios.delete('http://localhost:4000/api/game/'+ this.props.game._id)
        .then((res)=>{
            this.props.ReloadData();
        })
        .catch();
    }

    render(){
        return(
            <div>
                {/*create card fro fromatting*/}
            <Card style={{ width: '30rem' }}>
            <Card.Header>{this.props.game.title}</Card.Header>
            <Link to ={'/edit/' + this.props.game._id }className = "btn btn-primary">Edit</Link>
            <Button variant='danger' onClick={this.DeleteGame}>Delete</Button>
            </Card>
            <h3>{this.props.game.title}</h3>
            <img src={this.props.game.score} width="200" height="200"></img>
            <h5>{this.props.game.year}</h5>
            </div>
        )
    }
}