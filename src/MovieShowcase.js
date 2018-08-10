import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
     return movieData.map( oneMovie => <MovieCard key={oneMovie.title} title={oneMovie.title} IMDBRating={oneMovie.IMDBRating} genres={oneMovie.genres} poster={oneMovie.poster} /> )      
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}


// mapRappers(){
//   // this.props.rapperList.map(rapper => {
//   //     return <Rapper rapper={this.props.rapper}/>
//   // })

//   this.props.rapperList.map(musicPerson => <Rapper rapper={musicPerson} />)
//   // wrapper componnent's job will be to display all info anbout 1 rappers, 
//   // is the reason why we would not need to splice the information out.
// }



// class RapperContainer extends Component
