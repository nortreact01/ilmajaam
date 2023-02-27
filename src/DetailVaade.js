function DetailVaade({koht}) {
    if (!koht.andmed) {
        return <div>Laen ...</div>
    }
    
    return (
        <div>
            <h1>{koht.nimi}</h1>
        </div>
    )
}

export default DetailVaade