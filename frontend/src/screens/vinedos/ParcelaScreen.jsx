import React from 'react'
import { Circle, CircleMarker, MapContainer, Polygon, Polyline, Popup, Rectangle, TileLayer } from 'react-leaflet';

import "leaflet/dist/leaflet.css";


const ParcelaScreen = () => {
  const center = [51.505, -0.09]

  const polyline = [
  [51.505, -0.09],
  [51.51, -0.1],
  [51.51, -0.12],
  ]

  const multiPolyline = [
  [
    [51.5, -0.1],
    [51.5, -0.12],
    [51.52, -0.12],
  ],
  [
    [51.5, -0.05],
    [51.5, -0.06],
    [51.52, -0.06],
  ],
  ]

  const polygon = [
    [
      -33.6041471,
      -69.2328787
    ],
    [
      -33.6052552,
      -69.2251539
    ],
    [
      -33.6240896,
      -69.2269135
    ],
    [
      -33.623089,
      -69.2344236
    ],
  ]

  const multiPolygon = [
  [
    [51.51, -0.12],
    [51.51, -0.13],
    [51.53, -0.13],
  ],
  [
    [51.51, -0.05],
    [51.51, -0.07],
    [51.53, -0.07],
  ],
  ]

  const rectangle = [
    [51.49, -0.08],
    [51.5, -0.06],
  ]

  const fillBlueOptions = { fillColor: 'blue' }
  const blackOptions = { color: 'black' }
  const limeOptions = { color: 'lime' }
  const purpleOptions = { color: 'purple' }
  const redOptions = { color: 'red' }


  return (
    <>
      
      <MapContainer center={[-33.6134042,-69.2297888]} zoom={14}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {
            /*
            <Circle center={center} pathOptions={fillBlueOptions} radius={200} />
            <CircleMarker center={[51.51, -0.12]} pathOptions={redOptions} radius={20}>
              <Popup>Popup in CircleMarker</Popup>
            </CircleMarker>
            <Polyline pathOptions={limeOptions} positions={polyline} />
            <Polyline pathOptions={limeOptions} positions={multiPolyline} />
            <Rectangle bounds={rectangle} pathOptions={blackOptions} />  
            <Polygon pathOptions={purpleOptions} positions={multiPolygon} />
            
            */
           <Polygon pathOptions={purpleOptions} positions={polygon} />
          }
      </MapContainer>
    </>
    
  )
}

export default ParcelaScreen