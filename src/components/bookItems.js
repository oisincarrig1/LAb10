import React from "react";
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export class BookItems extends React.Component{

    constructor(){
        super();
        this.DeleteBook = this.DeleteBook.bind(this);
    }
    /*delete book*/
    DeleteBook(e){
        e.preventDefault();

        axios.delete('http://localhost:4000/api/book/'+ this.props.book._id)
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
            <Card.Header>{this.props.book.title}</Card.Header>
            <Link to ={'/edit/' + this.props.book._id }className = "btn btn-primary">Edit</Link>
            <Button variant='danger' onClick={this.DeleteBook}>Delete</Button>
            </Card>
            <h3>{this.props.book.title}</h3>
            <img src={this.props.book.cover} width="200" height="200"></img>
            <h5>{this.props.book.author}</h5>
            </div>
        )
    }
}