import React from 'react'

export default function CartItem({item,increment,decrement,remove}) {
  return (
    <React.Fragment>
      <div className="col-10 col-md-2 p-2"><p className="text-primary">{item.name}</p></div>
      <div className="col-10 col-md-2 p-2">
        <img src={item.img} alt="" style={{
          'maxHeight':"15vh",
          'maxWodth':"15vw"
        }}/>
      </div>
      <div className="col-10 col-md-2 p-2">{item.price}</div>
      <div className="col-10 col-md-2 p-2">
        <div className="row d-flex">
          <div className="col-4 text-right">
            <button className="btn btn-sm btn-outline-primary" onClick={() => decrement(item.id)}>-</button>
          </div>
          <div className="col-4 text-center">
            <p>{item.count}</p>
          </div>  
          <div className="col-4 text-left">
            <button className="btn btn-outline-primary btn-sm" onClick={() => increment(item.id)}>+</button>
          </div>
        </div>
      </div>
      <div className="col-10 col-md-2 p-2 text-uppercase">
        {item.category}
      </div>
      <div className="col-10 col-md-2 p-2" onClick={()=>remove(item.id)}>
        <i className="fas fa-trash text-primary"></i>
      </div>
      
    </React.Fragment>
  )
}
