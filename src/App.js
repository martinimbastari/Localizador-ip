import React, {useState, useEffect} from 'react';
import style from  './App.module.css';
import arrow from './assets/icon-arrow.svg'

function App() {
const [ip, setIp] = useState('');
const [location, setLocation] = useState('');
const [timezone, setTimezone] = useState('');
const [isp, setIsp] = useState('');
console.log(ip)
console.log(location)

const url = 'https://geo.ipify.org/api/v2/country,city?apiKey=at_DCOFJA1D6QwoGZyzuW6Z4oOUCio9h'
let ubicacion = '';

useEffect(() => {
  (async function () {
    let data = await fetch(url).then((res) => res.json());
    setIp(data.ip);
    ubicacion = data.location.city + ', ' + data.location.region;
    setLocation(ubicacion)
    setTimezone(data.location.timezone)
    setIsp(data.isp)
  })();
}, [url]);

  return (
    <div className={style.container}>
      <div className={style.contenedorInput}>
        <h1>Localizador IP</h1>
        <input/>
        <button> <img src={arrow}/> </button>
      </div>
      <div className={style.contenedorInfo}>
        <div>
          <p>direccion ip</p>
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
    {/* <Mapview/> */}
    </div>
  );
}

export default App;
