import React from "react";
import axios from "axios";

export class Upload extends React.Component {

    /*new instance of events*/
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeGameTitle = this.onChangeGameTitle.bind(this);
        this.onChangeGameYear = this.onChangeGameYear.bind(this);
        this.onChangeScore = this.onChangeScore.bind(this);
        this.state = {
            title: '',
            year:'',
            score:''
        }
    }

    handleSubmit(e) {
        /*prevent calling multiple times*/
        e.preventDefault();
        /*log new values*/
        console.log(`${this.state.title},${this.state.score},${this.state.year}`);
        
        /*game object*/
        const game = {
            title: this.state.title,
            cover: this.state.score,
            author: this.state.year
        }

        axios.post('http://localhost:4000/api/games',game)
        .then()
        .catch();
        /*set initial value*/
        this.setState({
            title:'',
            year:'',
            score:''
        })
        
    }
    /*event change game title*/
    onChangeGameTitle(e) {
        this.setState({
            title: e.target.value
        })
    }

    /*event change game year*/
    onChangeGameYear(e) {
        this.setState({
            year: e.target.value
        })
    }

    /*event change game score*/
    onChangeScore(e) {
        this.setState({
            score: e.target.value
        })
    }

    render() {
        return (
            /*update form*/
            <div>
                <h3>Hello from my Upload Component!</h3>
                <form onSubmit={this.handleSubmit}>
                    {/* add title bar*/}
                    <div className="form-group">
                        <label>Add Game Title: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeGameTitle}
                        />
                    </div>
                    {/*create an add year bar*/}
                    <div className="form-group">
                        <label>Add Year: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.year}
                            onChange={this.onChangeGameYear}
                        />
                    </div>
                    {/*create a change score bar*/}
                    <div className="form-group">
                        <label>Score out of 100: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.score}
                            onChange={this.onChangeScore}
                        />
                    </div>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}