function Asukohad({ilmaAndmed}) {
    return (
        <div className="asukoht">
           {ilmaAndmed.map(
            (asukoht, index) => (
                <div key={index}>
                    {asukoht.nimi}
                </div>
            )
           )}
        </div>
    )
}

export default Asukohad