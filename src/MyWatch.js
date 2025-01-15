function myWatch({itemsForSale}) {
  
    return (<div className="products">
        {itemsForSale.map((element => {
            const {id, name, searchTherm, price, image} = element

            return(<div className="product-card" key={id}>
                    <img className="cards" src={image} width='250px' alt="Watches" />
                <div className="product-info">
                    <h3>{name}</h3>
                    <h4>{searchTherm}</h4>
                    <h4>$ {price}</h4>
                </div>
            </div>
            )
        }))}
      </div>
    )
  }
  
  export default myWatch;