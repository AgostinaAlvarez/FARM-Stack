
import React from 'react'
import { Circle, CircleMarker, MapContainer, Marker, Polygon, Polyline, Popup, Rectangle, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import { Icon } from 'leaflet';
import { FaLocationDot } from "react-icons/fa6";


const ViniedosMap = () => {
  const center = [51.505, -0.09]

  const position = [-33.6134042, -69.2297888];

  const locationIcon = new Icon({
    iconUrl: FaLocationDot,
    iconSize: [40, 40],
  });

  return (
    <>
      
      <MapContainer center={[-33.6134042,-69.2297888]} zoom={14}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              Viñedo Vista Andina
            </Popup>
          </Marker>
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
            <Polygon pathOptions={purpleOptions} positions={polygon} />
            
            */
          }
      </MapContainer>
    </>
    
  )
}

export default ViniedosMap