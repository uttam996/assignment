import React from 'react'

export default function MovingStocks() {

const stockData = new Array(10).fill(0).map((_, i) => {
  return {
    id: i,
    name: `Stock ${i}`,
    price: Math.random() * 100,
  }
})

  return (
    <div 
    className="bg-black text-white text-2xl font-bold text-center "
    >
      <marquee>
        
        {stockData.map((stock) => {
          //return a span tag for each stock
          return <span>{stock.name} : {stock.price}</span>
        }
        )}
      </marquee>
    </div>
  )
}
