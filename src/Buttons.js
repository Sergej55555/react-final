function Buttons({filteredWatches}) {
  
    return(<div className="cont">
        <button className="change" onClick={() => filteredWatches('girl')}>GIRL'S</button>
        <button className="change" onClick={() => filteredWatches('man')}>MAN'S</button>
        <button className="change" onClick={() => filteredWatches('any')}>ANY</button>
      </div>
    )
  }

  export default Buttons;