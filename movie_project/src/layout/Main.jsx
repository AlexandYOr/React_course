import { Cards } from '../components/Cards'
import { Preloader } from '../components/Preloader'
import { Search } from '../components/Search'
import React from 'react'

export class Main extends React.Component {
    state = {
        cards: [],
        loading: true
    }
    
    componentDidMount = () => {
        fetch(`http://www.omdbapi.com/?apikey=da43ba8c&s=Matrix&type=`)
        .then((response) => response.json())
        .then(data => 
            this.setState((state) => {
            return {
                ...state,
                cards: data.Search ?? [],
                loading: false   
            }
        }))
    }

    handleSearch = (searchValue, type) => {
        this.setState({loading: true})
        fetch(`http://www.omdbapi.com/?apikey=da43ba8c&s=${searchValue}&type=${type === 'All' ? '' : type}`)
        .then((response) => response.json())
        .then(data => 
            this.setState((state) => {
            return {
                ...state,
                cards: data.Search ?? [],
                loading: false   
            }
        }))
    }

    
    render() {
        return <main className="container">
        <Search handleSearch={this.handleSearch}/>
        <div className="content">
            {this.state.loading ? (<Preloader/>) : (<Cards cards={this.state.cards}/>) }
        </div>
    </main>
    }
    
}

