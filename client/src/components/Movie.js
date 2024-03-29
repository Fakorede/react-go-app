import React, { Component } from 'react'

export default class Movie extends Component {
  state = {
    movie: {}
  };

  componentDidMount() {
    this.setState({
      movie: {
        id: this.props.match.params.id,
        title: "Some Movie",
        runtime: 150,
      }
    });
  }

  render() {
    return (
      <>
        <h2>Movie: {this.state.movie.title}</h2>
        <table className="table table-compact table-striped mt-3">
          <thead></thead>
          <tbody>
            <tr>
              <td><strong>Title:</strong></td>
              <td>{this.state.movie.title}</td>
            </tr>
            <tr>
              <td><strong>Runtime:</strong></td>
              <td>{this.state.movie.runtime} minutes</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}
