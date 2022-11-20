import instituicoes from '../data/instituicoes';
import React, { useState } from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';


const Map = () => {

  const [userPosition, setUserPosition] = useState({})

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "COLE SUA KEY AQUI"
  })

  function getLocation() {
    navigator.geolocation.getCurrentPosition(showPosition);
  }

  function showPosition(position) {
    setUserPosition({
      lat: position.coords.latitude,
      lng: position.coords.longitude
    })
  }

  getLocation()

  return (
    <div className='Map'>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{
            width: "100vw",
            height: "100%"
          }}
          center={userPosition}
          zoom={13.5}
        >
          <Marker position={userPosition} options={{
            label: {
              text: "Você",
              className: "marker"
            }
          }} />
          <Marker position={instituicoes[0].position} options={{
            label: {
              text: instituicoes[0].nome,
              className: "marker"
            }
          }} />
          <Marker position={instituicoes[1].position} options={{
            label: {
              text: instituicoes[1].nome,
              className: "marker"
            }
          }} />
          <Marker position={instituicoes[2].position} options={{
            label: {
              text: instituicoes[2].nome,
              className: "marker"
            }
          }} />
          <Marker position={instituicoes[3].position} options={{
            label: {
              text: instituicoes[3].nome,
              className: "marker"
            }
          }} />
          <></>
        </GoogleMap>
      ) : <></>}
    </div>
  )
}

export default Map