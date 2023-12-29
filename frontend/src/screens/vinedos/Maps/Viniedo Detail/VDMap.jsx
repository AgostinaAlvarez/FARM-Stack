
import React from 'react'
import { Circle, CircleMarker, MapContainer, Marker, Polygon, Polyline, Popup, Rectangle, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import { Icon } from 'leaflet';
import { FaLocationDot } from "react-icons/fa6";


const VDMap = () => {
  const center = [51.505, -0.09]

  const position = [-33.6134042, -69.2297888];

  const locationIcon = new Icon({
    iconUrl: FaLocationDot,
    iconSize: [40, 40],
  });

  
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

  const purpleOptions = { color: 'purple' }


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
        }
        <Polygon pathOptions={purpleOptions} positions={polygon} />
      </MapContainer>
    </>
  )
}

export default VDMap