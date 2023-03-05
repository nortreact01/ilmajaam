function DetailVaade({koht}) {

    if (!koht || !koht.andmed) {
        return <div>Laen ...</div>
    }
    
    return (
        <div className="detail-vaade">
            <h1>{koht.nimi}</h1>
            <div>
                <div>Aeg: {koht.andmed.current_weather.time}</div>
                <div>Temperatuur: {koht.andmed.current_weather.temperature}</div>
                <div>Tuule kiirus : {koht.andmed.current_weather.windspeed}</div>
                <div>Ilm : {koht.andmed.current_weather.weathercode}</div>
            </div>

        </div>
    )
}

export default DetailVaade