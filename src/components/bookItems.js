import React from "react";
import Card from 'react-bootstrap/Card';

export class BookItems extends React.Component{
    render(){
        return(
            <div>
                {/*create card fro fromatting*/}
            <Card style={{ width: '30rem' }}>
            <Card.Header>{this.props.book.title}</Card.Header>
            </Card>
            <h3>{this.props.book.title}</h3>
            <img src={this.props.book.cover} width="200" height="200"></img>
            <h5>{this.props.book.author}</h5>
            </div>
        )
    }
}