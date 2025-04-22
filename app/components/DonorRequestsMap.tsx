'use client'

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface MapProps {
  center: [number, number];
  zoom?: number;
  markerPosition?: [number, number];
  markerPopup?: string;
}

const MapComponent: React.FC<MapProps> = ({
  center,
  zoom = 13,
  markerPosition,
  markerPopup,
}) => {
  return (
    <MapContainer 
        center={center}
        zoom={zoom}
        style={{ height: '400px', width: '100%' }
    }>
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markerPosition && (
        <Marker position={markerPosition}>
        {markerPopup && <Popup>{markerPopup}</Popup>}
        </Marker>
        )}
    </MapContainer>
  );
};

export default MapComponent;