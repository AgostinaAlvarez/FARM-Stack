import React from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapaColores = () => {
  // Datos de ejemplo (puedes reemplazarlos con tus propios datos)
  const geojsonData = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {
          value: 10 // Valor que determina el color en este ejemplo
        },
        geometry: {
          type: 'Point',
          coordinates: [-74.0060, 40.7128] // Reemplaza con las coordenadas
        }
      },
      // Agrega más features con valores y coordenadas
    ]
  };

  // Función para determinar el color basado en el valor
  const getColor = (value) => {
    // Ejemplo: asignar colores en función de rangos de valores
    return value > 15 ? 'red' :
           value > 10 ? 'orange' :
           value > 5 ? 'yellow' :
           'green';
  };

  // Función para estilizar las características (features) del GeoJSON
  const style = (feature) => {
    return {
      fillColor: getColor(feature.properties.value),
      weight: 1,
      opacity: 1,
      color: 'white',
      fillOpacity: 0.7
    };
  };

  return (
    <MapContainer center={[40.7128, -74.0060]} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* Agrega el GeoJSON al mapa con el estilo */}
      <GeoJSON data={geojsonData} style={style} />
    </MapContainer>
  );
};

export default MapaColores;
