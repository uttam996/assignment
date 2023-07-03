import React from "react";
import { UseMediaQueryHook } from "../useMediaQueryHook";
import Image from "next/image";

export default function DiscussionForm() {
  const generateData = () => {
    const data = [];
    const words = [
      "Lorem",
      "ipsum",
      "dolor",
      "sit",
      "amet",
      "consectetur",
      "adipiscing",
      "elit",
      "sed",
      "do",
      "eiusmod",
      "tempor",
      "incididunt",
      "ut",
      "labore",
      "et",
      "dolore",
      "magna",
      "aliqua",
      // Add more words as needed
    ];
    const Sectors = ["Sector 1", "Sector 2", "Sector 3"];

    for (let i = 1; i <= 15; i++) {
      let postText = "";
      for (let j = 0; j < 32; j++) {
        const randomIndex = Math.floor(Math.random() * words.length);
        postText += words[randomIndex] + " ";
      }

      data.push({
        totalComments: Math.floor(Math.random() * 100),
        totalLikes: Math.floor(Math.random() * 1000),
        totalViews: Math.floor(Math.random() * 5000),
        image: [
          "https://www.equitybulls.com/equitybullsadmin/uploads/Infibeam%20Avenues%20Limited%20-%20New%20Logo%202.jpg",
          null,
          null,
        ][Math.floor(Math.random() * 3)],
      });
    }
    return data;
  };

  const mobile = UseMediaQueryHook("(max-width: 640px)");

  return (
    <div className={mobile ? "w-[90%] ml-5" : "w-[40%] ml-20"}>
      <span className="font-bold">Filters</span>
      <div className=" p-2 bg-white flex justify-around items-center mt-3 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
       <div className={
          mobile ? "flex justify-around w-[80%]" : "flex justify-around w-[50%]"
       } >
       <span className="rounded-full font-medium text-center bg-red-600 text-white w-[80px] ">
          Sector 1
        </span>
        <span className="rounded-full font-medium bg-blue-600 text-center text-white w-[80px]">
          Sector 2
        </span>
        <span className="rounded-full font-medium bg-yellow-600 text-center text-white w-[80px] ">
          Sector 3
      </span>
       </div>
        <input
          className="rounded-full bg-gray-200 px-2 w-[120px]"
          type="text"
          placeholder="Search"
        />
      </div>

      <div className={!mobile ? "overflow-y-auto h-[70vh]  pr-3 " : ""}>
        {generateData().map((el, i) => {
          return (
            // create a div for each discussion
            <div key={i} className="bg-white mt-3 pt-2 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ">
              {el.image && (
                <div className="m-auto text-end w-[95%] font-bold text-blue-500">
                  2 min ago
                </div>
              )}
              {el.image && (
                <div className="w-[80%]  m-auto   h-[300px] ">
                  <Image src={el.image}
                  height={300}
                  width={300}

                    alt="blog"

                  className="w-[100%] h-[100%]" />
                </div>
              )}

              <div className="flex justify-between w-[95%] m-auto pt-4 ">
                <div className="flex">
                  <Image 


                    alt="blog"
                    src="https://dummyimage.com/104x104"
                    className="w-10 h-10 rounded-full flex-shrink-0 object-cover object-center"
                    height={40}
                    width={40}
                  />

                  <span className="title-font ml-5 font-medium text-gray-900">
                    Holden Caulfield
                  </span>
                  <span className="rounded-full ml-5 h-8 text-center font-medium bg-yellow-600 text-white p-1 px-4 ">
                    Sector 3
                  </span>
                </div>
              {
                el.image && (
                  <span className=" text-blue-500 font-bold">2 min ago</span>
                )
              }
              </div>
              <div className="w-[80%]  mt-2 m-auto ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure a
                perferendis, iusto nisi recusandae, qui repudiandae quia
                
              </div>
              <SocialMediaMetrics data={el} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SocialMediaMetrics({ data }: any) {
  const metrics = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
        </svg>
      ),
      text: data.totalLikes + "k",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
          <path
            fillRule="evenodd"
            d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
            clipRule="evenodd"
          />
        </svg>
      ),
      text: data.totalComments + "k",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687"
          />
        </svg>
      ),
      text: "2k comments",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
          />
        </svg>
      ),
      text: "share",
    },
  ];

  return (
    <div className="flex justify-between w-[80%] m-auto mt-2 pb-2">
      {metrics.map((metric, index) => (
        <span className="flex" key={index}>
          {metric.icon}
          &nbsp;&nbsp;
          {metric.text}
        </span>
      ))}
    </div>
  );
}
