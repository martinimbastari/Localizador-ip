import React, {useState, useEffect} from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import style from  './App.module.css';
import 'leaflet/dist/leaflet.css'
import arrow from './assets/icon-arrow.svg'
import icon from './assets/icon-location.svg'



function App() {
const [ip, setIp] = useState('');
const [location, setLocation] = useState('');
const [timezone, setTimezone] = useState('');
const [isp, setIsp] = useState('');
const [lat, setLat] = useState('');
const [lng, setLng] = useState('');
let valorIngresado = '';



const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_IbVBG1ro8zey9jOQv6IzKP1MXOpYb&ipAddress=${ip}`
let ubicacion = '';

useEffect(() => {
  (async function () {
    let data = await fetch(url).then((res) => res.json());
    setIp(data.ip);
    ubicacion = data.location.city + ', ' + data.location.region;
    setLocation(ubicacion)
    console.log(ubicacion)
    setTimezone(data.location.timezone)
    setIsp(data.isp)
    setLat(data.location.lat)
    setLng(data.location.lng)
  })();
}, [url]);


const handleChange = e => {
  e.preventDefault();
   return valorIngresado = e.target.value;
}

const handleSubmit = (e) => {
  e.preventDefault();
  setIp(valorIngresado)
}

  return (
    <>
    <div className={style.container}>
      <div className={style.contenedorInput}>
        <h1>Localizador IP</h1>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='ingrese una direccion ip'  onChange={handleChange} />
          <button type='submit' ><img src={arrow}/></button>
        </form>
      </div>
      <div className={style.contenedorInfo}>
        <div>
          <p>Direccion ip</p>
          <h2>{ip}</h2>
        </div>
        <div>
          <p>Ubicacion</p>
          <h2>{location}</h2>
        </div>
        <div>
          <p>Zona horaria</p>
          <h2>{timezone}</h2>
        </div>
        <div>
          <p>Compañia internet</p>
          <h2>{isp}</h2>
        </div>
      </div>
      </div>
      
      <MapContainer center={{lat,lng}} style={{width:'100%', height: '80vh'}} zoom={5} scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={{lat, lng}} >
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
    </>
    
  );
}

export default App;
