import React, { Component } from 'react'
import { SearchForm } from '../components/SearchForm'
import { Card } from '../components/Card'

export class Home extends Component {

    state = { results: []}

    _handleResults = (results) => {
      this.setState({ results })
    }

    render() {
        return (
            <div>
                <div className="App">
                    <h1 class='title'>Movie Searcher</h1>
                    <div class='SearchFormWrapper'>
                        <SearchForm onResults={this._handleResults} />
                    </div>
                    <br />
                    <div className='MoviesList'>
                        {this.state.results !== undefined ?
                            this.state.results.map((mov) => <Card movie={mov}></Card>) :
                            <p>Movie doesnt exist</p>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
