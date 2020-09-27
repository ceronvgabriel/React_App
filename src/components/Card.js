import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export class Card extends Component {
    render() {
        return (
        <div className="card MoviesList-item">
          <Link to={`detail/${this.props.movie.imdbID}`}>
            <div class="card-image">
              <figure class="image">
                <img src={this.props.movie.Poster} alt="Placeholder image" />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">{this.props.movie.Title}</p>
                <p class="subtitle is-6">Year: {this.props.movie.Year}</p>
                </div>
              </div>
            </div>
            </Link>
        </div>
        )
    }
}
