import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const API_KEY = '4287ad07'

export class Detail extends Component {

  state = { results: [] }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${this.props.match.params.id}&plot=full`)
      .then(res => res.json()).then(results => {
        console.log(results)
        this.setState({ results })
      })
  }

  render() {

    const { Title, Year, Genre, Plot, Poster, Production } = this.state.results

    return (
      <div>
        <Link to="/"><button class='button'>Volver</button></Link>
        
        <div className="outer">

          <div className="imageContainer">
            <figure className='image2' >
              <img src={Poster} alt="Placeholder image" />
            </figure>
          </div>

          <div className="textContainer">
            <p className='title'>{Title}</p>
            <p className='subtitle'>Year: {Year}</p>
            <p className='subtitle'>Genre: {Genre}</p>
            <p className='subtitle'>Production: {Production}</p>
            <p className='subtitle'>Plot: {Plot}</p>
          </div>

        </div>
      </div>
    )
  }
}

