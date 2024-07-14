import React from 'react'

const ProductData = () => {
  return (
    fetch('https://my-json-server.typicode.com/benirvingplt/products/products')
    .then((Response)=>{
        if(!Response.ok) throw new Error("Error")
        return Response.json()
    })
    .then((data)=>{
        return data
    })
    
  )
}

export default ProductData
