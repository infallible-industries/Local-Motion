import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react';

export class MapContainer extends Component {
  
  render() {
    const  {loc}  = this.props
    return (
      <div style={{ height: '80vh', width: '100%' }}>
      <Map google={this.props.google} style={{ height: '80vh', width: '100%' }} zoom={17} initialCenter={(loc)?loc: { lat: 37.8717, lng: -122.2732} }>

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>hi</h1>
            </div>
        </InfoWindow>
      </Map>
      </div>
    ); 
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyBZYZbJI_suqw9VC2D1u1Us2e1j0f1mFus")
})(MapContainer)