import React from "react";
import { GameItems } from "./gameItems";

export class Games extends React.Component{
    render(){
        {/*create each game segment*/}
        return this.props.games.map(
            (game)=>{
                return <GameItems game={game} key={game._id} ReloadData = {this.props.ReloadData}></GameItems>
            }
        );
       
    }
}