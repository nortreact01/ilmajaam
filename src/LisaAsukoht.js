import {useState} from 'react'
function LisaAsukoht({lisaUusAsukoht, muudaAktiivset}) {
    // Loo kolm sisestusvälja (nimi, latitude, longitude)
    // Loo kolm reacti muutujat sisestusväljade väärtuste hoidmiseks
    // Seo reacti muutujad sisestusväljadega
    // Kui vajutatakse nupule Lisa käivitatakse funktsioon mis teeb järgmist:
    // - loob uue objekti, millel on sarnased võtmed ülejäänud asukohtadega
    // - kutsu välja funktsioon lisaUusAsukoht andes sellele  parameetrina uus loodud objekt
    const [nimetus, setNimetus] = useState('')
    const [lat, setLat] = useState('')
    const [long, setLong] = useState('')

    const lisaKlikk = () => {
        const uusAsukoht = {nimi: nimetus, lat, long, andmed: null}

        //setNimetus("")
        //setLat("")
        //setLong("")
        lisaUusAsukoht(uusAsukoht)
    }
    
    return (
        <div className="lisa-asukoht">
            <h3>Lisa asukoht</h3>
                <form className="lisa-asukoht-vorm">
                    <label> Nimetus:
                        <input 
                            className="m-left-10 " 
                            type="text"  
                            onChange={(e)=>setNimetus(e.target.value)}
                            value={nimetus}
                        />
                        <br />
                    </label>
                    <label> Koordinaadid:
                        <input 
                            className="m-left-10 koordinaadid" 
                            type="text" 
                            placeholder="lat"
                            onChange={(e)=>setLat(e.target.value)}
                            value={lat}  
                        />
                        <input 
                            className="m-left-10 koordinaadid" 
                            type="text" 
                            placeholder="long"  
                            onChange={(e)=>setLong(e.target.value)}
                            value={long}  
                        />
                    </label>
                    <div className="nupud_rida">
                        <button 
                            className="nupp ok-nupp" 
                            type="button"
                            onClick={()=>lisaKlikk()}
                        >
                            Lisa
                        </button>
                        <button 
                            className="nupp katkesta-nupp m-left-10" 
                            type="button"
                            onClick={()=>{muudaAktiivset(0)}}
                        >
                            Katkesta
                        </button>
                    </div>
                </form>

        </div>

    )
}

export default LisaAsukoht