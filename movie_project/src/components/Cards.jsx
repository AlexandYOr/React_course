import React, { Component } from "react";
import { Card } from "./Card";

export class Cards extends Component {
    state = {
        cards: [],
    }
    
    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=da43ba8c&s=Matrix&page=1')
        .then((response) => response.json())
        .then(data => 
            this.setState((state) => {
            return {
                ...state,
                cards: data.Search           
            }
        }))
        
    }
    render() {
        return (
            <React.Fragment>
                {this.state.cards.map((card) => <Card key={card.imdbID} data={card}/>)}
            </React.Fragment>
        )
    }
}