'use client'

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface MapProps {
  center: [number, number];
  zoom?: number;
  markerPosition?: [number, number];
  
}

const MapComponent: React.FC<MapProps> = ({
  center,
  zoom = 13,
  markerPosition,
}) => {
  return (
    <MapContainer 
        center={center}
        zoom={zoom}
        style={{ height: '300px', width: '600px' }
        }>
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markerPosition && (
          <Marker position={markerPosition}>
          </Marker>
        )}
    </MapContainer>
  );
};

export default MapComponent;