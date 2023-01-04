import React from "react";
import { Games } from "./games";
/*http client*/
import axios from "axios";

export class Review extends React.Component {

    constructor(){
        super();
        this.ReloadData=this.ReloadData.bind(this);
    }

     /*content for games*/
     /*lifectcle method*/
     componentDidMount() {

        axios.get('http://localhost:4000/api/games')

     /*lambda expression*/
     /*callback function/accepted path*/
        .then((response)=>{
            this.setState({
                games: response.data
            })
        })
        /*error response/rejected path*/
        .catch(function(error){
            console.log(error);
        });
    }

    ReloadData(){
        axios.get('http://localhost:4000/api/games')

     /*lambda expression*/
     /*callback function/accepted path*/
        .then((response)=>{
            this.setState({
                games: response.data
            })
        })
        /*error response/rejected path*/
        .catch(function(error){
            console.log(error);
        });

    }

    state = {
        games: []
    }
    render() {
        return (
            <div>
                
                <h1>Recent game reviews:</h1>
                <Games games={this.state.games} ReloadData={this.ReloadData}></Games>
            </div>
        );
    }
}