import './App.css';
import Asukohad from './Asukohad';
import DetailVaade from './DetailVaade';
import {useEffect, useState} from 'react'
import LisaAsukoht from './LisaAsukoht';

function App() {
  const [aktiivne, setAktiivne] = useState(1)
  const [avatudDetail, setAvatudDetail] = useState('DetailVaade')
  const laeIlmaAndmed = async () => {
    const koht = ilmaAndmed[aktiivne]

    if (koht.andmed) {
      return;
    }

    const paring = `https://api.open-meteo.com/v1/forecast?latitude=${koht.lat}&longitude=${koht.long}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`
    const result = await fetch(paring)
    const andmed = await result.json()

    const uuedAndmed = { ...ilmaAndmed[aktiivne], andmed: andmed }
    console.log(andmed)
    
    setIlmaAndmed( (vana) => {
      const uus = [...vana]
      uus[aktiivne] = uuedAndmed
      return uus
    } )
  }

  const lisaUusAsukoht = (asukohtObj) => {
    //lisa asukohtObj ilmaAndmed massiivi funktsiooni setIlmaAndmed abil. Kasuta parameeterfunktsiooni
    //muuda muutuja aktiivne väärtust nii et see oleks võrdne ilmaAndmete massiivi pikkusega + 1
    //muuda muutuja avatudDetail väärtust nii et ilma aktiivse ilma andmed oleksid näha
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

  const muudaAktiivset = (uusAktiivne) => {
    setAktiivne(uusAktiivne)
    setAvatudDetail('DetailVaade')
  }

  useEffect(() => {laeIlmaAndmed()}, [aktiivne])

  return (
    <div className="konteiner">
      <h1>Ilmajaam</h1>
      <div className="leht">
        <Asukohad 
          ilmaAndmed={ilmaAndmed} 
          aktiivne={aktiivne} 
          muudaAktiivset={muudaAktiivset} 
          setAvatudDetail={setAvatudDetail}
        />
        { avatudDetail === 'DetailVaade' && <DetailVaade koht={ilmaAndmed[aktiivne]} />}
        { avatudDetail === 'LisaAsukoht' && <LisaAsukoht lisaUusAsukoht={lisaUusAsukoht} />}
      </div>
    </div>
  );
}

export default App;
