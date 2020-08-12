import React, { useState } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import swal from 'sweetalert';

const MapContainer = () => {
   const data = [
        {name: 'AVC', challans: 100, lat: 28.6920351, lng: 77.1571684}, {name: 'MTC', challans: 200, lat: 28.7407102, lng: 77.0577435}, 
        {name: 'PTC', challans: 300, lat: 28.6248184, lng: 77.2115817}, {name: 'NRL', challans: 234, lat: 28.8447626, lng: 77.0682855}, 
        {name: 'BRD', challans: 534, lat: 28.7509614, lng: 77.1788562}, {name: 'RHN', challans: 400, lat: 28.5501211, lng: 77.1882317},
        {name: 'BNA', challans: 323, lat: 28.8030756, lng: 77.0364009}, {name: 'MGP', challans: 423, lat: 28.691489, lng: 77.0790922}, 
        {name: 'CLC', challans: 244, lat: 28.6817385, lng: 77.2040498},  {name: 'SBC', challans: 400, lat: 28.5977617, lng: 77.1267896},
    ]  
   const displayMarkers = () => {
      return this.state.stores.map((store, index) => {
        return <Marker key={index} id={index} position={{
         lat: store.latitude,
         lng: store.longitude,
         label: 50,
       }}
       onClick={() => console.log("You clicked me!")} />
      })
    }

    const handleMarkerClick = (item) => {
        console.log(item)
        swal({
            text: `Circle Name: ${item.name} 
            Total Challans: ${item.challans}`
        })
    }
    return (
          <div
              style= {{
                  display: "flex",

                  flexDirection:"row",
                  width: '60%', height: 300 }}>
          <Map
            google={google}
            zoom={11}
            style={mapStyles}
            initialCenter={{ lat: 28.6139, lng: 77.2090}}
          >
        {data.map((item, index) => {
            return (
                <Marker key={index} position={{ lat: item.lat, lng: item.lng}} label={item.challans.toString()} name={item.name} onClick={() => {handleMarkerClick(item)}} />              
            );
        })}
        </Map>
              </div>
      );
    }

  const mapStyles = {
    width: '40%',
    height: '12%',
  };

  export default GoogleApiWrapper({
    apiKey: 'AIzaSyDmac8GBPMLJWPru5MaiXVQdzPa3X2QdhA'
  })(MapContainer);