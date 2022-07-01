import React, { Component } from 'react'
import SpotifyPlayer from 'react-spotify-web-playback'
export default class Player extends Component {

  render() {
    return (
      <SpotifyPlayer 
      token={this.props.accessToken}
      uris={this.props.trackUri ? [this.props.trackUri] : []}
      magnifySliderOnHover={true}
      autoPlay={true}
      play={this.props.play}
      styles={{
        activeColor: '#fff',
        bgColor: '#333',
        color: '#fff',
        loaderColor: '#fff',
        sliderColor: '#1cb954',
        trackArtistColor: '#ccc',
        trackNameColor: '#fff',
      }}
      />
    )
  }
}

