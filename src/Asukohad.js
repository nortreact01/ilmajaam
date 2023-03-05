function Asukohad({ilmaAndmed, aktiivne, muudaAktiivset, setAvatudDetail}) {
    const klikkReal = (index) => {
        muudaAktiivset(index)
    }

    return (
        <div className="navigatsioonipaan">
            <div className="asukoht">
            {ilmaAndmed.map(
                (asukoht, index) => {
                    let navigatsioon = "nav_row"
                    if (index === aktiivne) {
                        navigatsioon += " aktiivne"
                    }

                    return (
                            <div 
                                className={navigatsioon} 
                                key={index}
                                onClick={() => klikkReal(index)}
                            >
                                {asukoht.nimi}
                            </div>
                )}
            )}
            </div>
            <div className="nupp" onClick={() => {setAvatudDetail('LisaAsukoht')}}>Lisa</div>
        </div>
    )
}

export default Asukohad