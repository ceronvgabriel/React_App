import React, { Component } from 'react';

const API_KEY = '4287ad07'

export class SearchForm extends Component {
    state ={inputMovie: ''}

    _handleChange = (e) => {
        this.setState({ inputMovie: e.target.value })
    }

    _handleSubmit = (e) => {
        e.preventDefault()
        var { inputMovie } = this.state
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
        .then(res => res.json()).then(results => {
            console.log(results.Search)
            this.props.onResults(results.Search)
        })
    }

    render() {
        return (
            <form onSubmit={this._handleSubmit}>
                <div class="field has-addons">
                    <div class="control">
                        <input class="input" onChange = {this._handleChange} type="text" placeholder="Find a movie" />
                    </div>
                    <div class="control">
                        <button class="button is-info">
                        Search
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}