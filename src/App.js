import './App.css';
import Asukohad from './Asukohad';
import DetailVaade from './DetailVaade';
import {useEffect, useState} from 'react'

function App() {
  const [aktiivne, setAktiivne] = useState(1)
  const laeIlmaAndmed = async () => {
    const koht = ilmaAndmed[aktiivne]
    const paring = `https://api.open-meteo.com/v1/forecast?latitude=${koht.lat}&longitude=${koht.long}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`
    const result = await fetch(paring)
    const andmed = await result.json()
    console.log(andmed)
  }
  const [ilmaAndmed, setIlmaAndmed] = useState([
    {
      lat: 58.3780,
      long: 26.7290,
      nimi: 'Tartu',
      andmed: null
    },
    {
      lat: 59.4370,
      long: 24.7536,
      nimi: 'Tallinn',
      andmed: null
    },
    {
      lat: 59.4370,
      long: 24.7536,
      nimi: 'Pärnu',
      andmed: null
    },
  ])

  useEffect(() => {laeIlmaAndmed()}, [])

  return (
    <div className="konteiner">
      <h1>Ilmajaam</h1>
      <div className="leht">
        <Asukohad ilmaAndmed={ilmaAndmed} />
        <DetailVaade koht={ilmaAndmed[aktiivne]} />
      </div>
    </div>
  );
}

export default App;
