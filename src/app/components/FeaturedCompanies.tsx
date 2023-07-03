import Image from "next/image";
import React from "react";
import { UseMediaQueryHook } from "../useMediaQueryHook";

const companylogo = require("../Dummydata/companylogo.json");

export default function FeaturedCompanies() {
  interface Company {
    CompanyName: string;
    ImageURL: string;
  }

  const mobile = UseMediaQueryHook("(max-width: 640px)");

  return (
    <div>
      {
        !mobile && (
          <section className="text-red-600 p-2 bg-white">
          <h1 className="text-xl text-red-500 font-medium ">
            FEATURED COMPANIES
          </h1>
        </section>
  
        )
      }
     
      <div className="flex p-2 bg-blue-100 justify-around items-center overflow-x-hidden	w-full	 ">
        {companylogo.map((company: Company) => {
          return (
            <div key={company.ImageURL}>
            <Image
       
              src={company?.ImageURL}
              alt={company?.CompanyName}
              width={100}
              height={100}
              className= {
mobile ? "rounded-full mix-blend-multiply border-2 border-red-500 mx-2 h-[50px] w-[50px]" : "mix-blend-multiply	"
              }
            />
            </div>
          );
        })}
      </div>
    </div>
  );
}
