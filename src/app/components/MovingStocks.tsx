import React from 'react'
import Marquee from 'react-fast-marquee'

const stockData = require('../Dummydata/marketprice.json')


export default function MovingStocks() {

interface Stock {
  symbol: string;
  price: number;
  change_percentage: number;

}

  return (
    <div 
    className="bg-black text-white  text-medium text-center  "
    >
    <Marquee speed={100}>
      
        
        {stockData.map((stock:Stock) => {
          //return a span tag for each stock
          return (
            <div key={Math.random()*10000} className="flex items-center justify-around w-[200px]">
            <span className="text-white">{stock.symbol}</span>
            <span className="text-white">{stock.price}</span>
            <span className={
              stock.change_percentage > 0 ? "text-green-500" : "text-red-500"
            }>{stock.change_percentage}</span>
            </div>
          )
        }
        )}
        </Marquee>
      
    </div>
  )
}
