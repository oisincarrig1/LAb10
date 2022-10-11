import React from "react";
import { BookItems } from "./bookItems";

export class Books extends React.Component{
    render(){
        {/*create each book segment*/}
        return this.props.books.map(
            (book)=>{
                return <BookItems book={book} key={book.isbn}></BookItems>
            }
        );
       
    }
}