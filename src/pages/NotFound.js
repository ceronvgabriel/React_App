import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NotFound extends Component {
    render() {
        return (
            <div>
                <div style={{fontSize: 50}}>404!</div>
                <div>Page Not Found.</div>
                <br/>
                <Link to="/"><button class='button'>Volver</button></Link>
            </div>
        )
    }
}
