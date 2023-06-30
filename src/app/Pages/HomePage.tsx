import React from 'react'
import Header from '../components/Header'
import FeaturedCompanies from '../components/FeaturedCompanies'
import MovingStocks from '../components/MovingStocks'
import DiscussionForm from '../components/DiscussionForm'

export default function HomePage() {
  return (
    <div>
      <Header />
      <MovingStocks />
      <FeaturedCompanies/>
      <DiscussionForm/>

    </div>
  )
}
