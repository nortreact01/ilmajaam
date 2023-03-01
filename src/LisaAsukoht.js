function LisaAsukoht({lisaUusAsukoht}) {
    // Loo kolm sisestusvälja (nimi, latitude, longitude)
    // Loo kolm reacti muutujat sisestusväljade väärtuste hoidmiseks
    // Seo reacti muutujad sisestusväljadega
    // Kui vajutatakse nupule Lisa käivitatakse funktsioon mis teeb järgmist:
    // - loob uue objekti, millel on sarnased võtmed ülejäänud asukohtadega
    // - kutsu välja funktsioon lisaUusAsukoht andes sellele  parameetrina uus loodud objekt
    return (
        <div>
        <h3>Lisa asukoht</h3>

            <div className="nupud_rida">
                <button type="button">Lisa</button>
                <button type="button">Katkesta</button>
            </div>
        </div>

    )
}

export default LisaAsukoht