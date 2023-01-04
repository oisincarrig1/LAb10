import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
export function Edit(props) {
    // The useParams hook returns an object of key/value pairs of
    // the dynamic params from the current URL that were matched by
    //the <Route path>.
    let { id } = useParams();
    // update arrays using the React useState()
    // and without the Array object's push() method
    const [title, setTitle] = useState("");
    const [score, setScore] = useState("");
    const [year, setYear] = useState("");
    // useNavigate return a function that we can use to navigate
    const navigate = useNavigate();
    //useEffect Hook is similar componentDidMount
    useEffect(() => {
        //axios is a promised based web client
        //make a HTTP Request with GET method and pass as part of the
        //url.
        axios.get('http://localhost:4000/api/game/' + id)


            .then((res) => {
                // Assign Response data to the arrays using useState.
                setTitle(res.data.title);
                setScore(res.data.score);
                setYear(res.data.year);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);
    const handleSubmit = (event) => {
        event.preventDefault();
        const editGame = {
            id: id,
            title: title,
            score: score,
            year: year
        };
        axios.put('http://localhost:4000/api/game/' + id, editGame)
            .then((res) => {
                console.log(res.data);
                navigate('/review');
            });
            
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Add Game Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Add Release Year: </label>
                    <input type="text"
                        className="form-control"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Add score out of 100: </label>
                    <input type="text"
                        className="form-control"
                        value={score}
                        onChange={(e) => setScore(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input type="submit" value="Edit Game" className="btn btn-primary" />
                </div>
            </form>
        </div>
    );
}