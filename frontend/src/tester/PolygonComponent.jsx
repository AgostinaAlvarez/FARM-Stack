
import React from 'react';

const wktPolygon = "POLYGON((-69.1277077 -33.5844884,-69.1281368 -33.5808417,-69.1274502 -33.5806272,-69.127536 -33.5800194,-69.1256048 -33.5798763,-69.1261198 -33.5712593,-69.1184379 -33.5709375,-69.1172792 -33.5840594,-69.1275789 -33.5845242,-69.1277077 -33.5844884))";

const extractCoordinates = (wktString) => {
  const coordinatesString = wktString.substring(9, wktString.length - 2);
  const coordinates = coordinatesString.split(',').map(coord => {
    const [lon, lat] = coord.trim().split(' ');
    return [parseFloat(lon), parseFloat(lat)];
  });
  return coordinates;
};

const PolygonComponent = () => {
  const polygonPoints = extractCoordinates(wktPolygon);

  const pointsString = polygonPoints.map(point => point.join(',')).join(' ');

  return (
    <svg width="500px" height="500px" viewBox="-69.13 -33.59 0.02 0.04">
      <polygon points={pointsString} fill="none" stroke="red" strokeWidth="0.0002" />
    </svg>
  );
};

export default PolygonComponent;



