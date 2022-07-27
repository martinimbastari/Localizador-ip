import React from 'react'
import { Map, TileLayer } from 'leaflet'
import 'leaflet/dist/leaflet.css'

export default function Mapview() {
  return (
    <>
    <Map center={{lat: '51.52437', lng: '13.41053'}} zoom={10}>
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'>

        </TileLayer>
    </Map>
    </>
    
  )
}
