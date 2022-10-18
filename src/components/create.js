import React from "react";

export class Create extends React.Component {

    /*new instance of events*/
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
        this.onChangeBookAuthor = this.onChangeBookAuthor.bind(this);
        this.onChangeCover = this.onChangeCover.bind(this);
        this.state = {
            title: '',
            author:'',
            cover:''
        }
    }

    handleSubmit(e) {
        /*prevent calling multiple times*/
        e.preventDefault();
        /*log new values*/
        console.log(`${this.state.title},${this.state.cover},${this.state.author}`);
        /*set initial value*/
        this.setState({
            title:'',
            author:'',
            cover:''
        })
        
    }
    /*event change book title*/
    onChangeBookTitle(e) {
        this.setState({
            title: e.target.value
        })
    }

    /*event change book author*/
    onChangeBookAuthor(e) {
        this.setState({
            author: e.target.value
        })
    }

    /*event change book cover*/
    onChangeCover(e) {
        this.setState({
            cover: e.target.value
        })
    }

    render() {
        return (
            /*create form*/
            <div>
                <h3>Hello from my Create Component!</h3>
                <form onSubmit={this.handleSubmit}>
                    {/*create an add title bar*/}
                    <div className="form-group">
                        <label>Add Book Title: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeBookTitle}
                        />
                    </div>
                    {/*create an add author bar*/}
                    <div className="form-group">
                        <label>Add Author: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.author}
                            onChange={this.onChangeBookAuthor}
                        />
                    </div>
                    {/*create a change cover bar*/}
                    <div className="form-group">
                        <label>Change Cover: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.front}
                            onChange={this.onChangeCover}
                        />
                    </div>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}