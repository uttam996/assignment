import React from 'react'

export default function FeaturedCompanies() {
  let companieslogo = new Array(10).fill(0).map((_, i) => {
    return {
// random company logo
      id: i,
      url: `https://picsum.photos/200/300?random=companieslogo`,
    }
  })
  return (
    <div>
      <section className="text-red-600 body-font">
        FEATURED COMPANIES
      </section>
      // space between the logos


      <div className='flex h-25 bg-blue-400 justify-around items-center	 '>
        {companieslogo.map((company) => {
          return (
          
                <img
                  className="h-20 w-40 rounded w-full object-cover object-center "
                  src={company.url}
                  alt="content"
                />
           
              

          )
        }
        )}

        </div>

    </div>
  )
}
