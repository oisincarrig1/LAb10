import React from "react";
import { Books } from "./books";
/*http client*/
import axios from "axios";

export class Read extends React.Component {
     /*content for books*/
     /*lifectcle method*/
     componentDidMount() {

        axios.get('http://localhost:4000/api/books')

     /*lambda expression*/
     /*callback function/accepted path*/
        .then((response)=>{
            this.setState({
                books: response.data.myBooks
            })
        })
        /*error response/rejected path*/
        .catch(function(error){
            console.log(error);
        });
    }
    state = {
        books: []
    }
    render() {
        return (
            <div>
                
                <h1>Hello from my Read component!</h1>
                <Books books={this.state.books}></Books>
            </div>
        );
    }
}