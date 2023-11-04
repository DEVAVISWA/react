import React from 'react'
import products from './Proudcts'

function Section({ count, incrementHandler, decHandler, addToCart, removeFromCart, cartProducts }) {
  console.log(products)
  
  return (    
    <div>
       {products.map( product => (
      <div key={product.id} className="col mb-5">
        <div className="card h-100">
          {/* <!-- Sale badge--> */}
          <div className="badge bg-dark text-white position-absolute" >Sale</div>
          {/* <!-- Product image--> */}
          <img className="card-img-top" src="" alt="..." />
          {/* <!-- Product details--> */}
          <div className="card-body p-4">
            <div className="text-center">
              {/* <!-- Product name--> */}
              <h5 className="fw-bolder"> {product.name} </h5>
              {/* <!-- Product reviews--> */}
              <div className="d-flex justify-content-center small text-warning mb-2">
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
              </div>
              {/* <!-- Product price--> */}
              <span className="text-muted text-decoration-line-through">$20.00</span>
              $18.00
            </div>
          </div>
          {/* <!-- Product actions--> */}
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              {
                cartProducts[product.id] ? (<button className="btn btn-outline-dark mt-auto"
                onClick={()=>removeFromCart(product)}
                 >Remove From Cart</button>) : <button className="btn btn-outline-dark mt-auto"
                 onClick={()=>addToCart(product)}
                  >Add to cart</button>
              }
            </div>
          </div>
        </div>
      </div>
      ) ) }
    </div>
    
  )
}

export default Section