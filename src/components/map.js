import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class Map extends Component {
   render() {
   const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 43.6524425, lng: -79.3820484 } }
        defaultZoom = { 13 }
      >
        <Marker
          position = { { lat: 43.6524425, lng: -79.3820484 } }
        />

      </GoogleMap>
   ));
   return(
      <GoogleMapExample
        containerElement={ <div style={{ height: '500px', width: '800px', margin: '0 auto'}} /> }
        mapElement={ <div style={{ height: '100%' }} /> }
      />
   );
   }
};
export default Map;