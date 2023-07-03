"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import FeaturedCompanies from "../components/FeaturedCompanies";
import MovingStocks from "../components/MovingStocks";
import DiscussionForm from "../components/DiscussionForm";
import MarketStories from "../components/MarketStories";
import Sidebar from "../components/Sidebar";
import { UseMediaQueryHook } from "../useMediaQueryHook";

export default function HomePage() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showDiscussionForm, setShowDiscussionForm] = useState(false);
  const mobi = UseMediaQueryHook("(max-width: 640px)");
  return (
    <div>
      <Header />
      <MovingStocks />
      <FeaturedCompanies />
      {mobi && (
        <div
          className="flex space-x-2 w-[100%] bg-[#143B64] h-[50px]  "
          aria-label="Tabs"
          role="tablist"
        >
          <button
            onClick={() => setShowDiscussionForm(true)}
            type="button"
            className={
              showDiscussionForm
                ? "w-[50%] font-semibold border-red-600 border-b-[3px] text-white"
                : "w-[50%] font-semibold  text-white"
            }
            id="tabs-with-underline-item-1"
            data-hs-tab="#tabs-with-underline-1"
            aria-controls="tabs-with-underline-1"
            role="tab"
          >
            Discussion Form
          </button>
          <button
            onClick={() => setShowDiscussionForm(false)}
            type="button"
            className={
              !showDiscussionForm
                ? "w-[50%] font-semibold border-red-600 border-b-[3px] text-white"
                : "w-[50%] font-semibold  text-white"
            }
            id="tabs-with-underline-item-2"
            data-hs-tab="#tabs-with-underline-2"
            aria-controls="tabs-with-underline-2"
            role="tab"
          >
            Market Stories
          </button>
        </div>
      )}

      <div className="flex">
        <Sidebar
          open={showSidebar}
          close={() => setShowSidebar(!showSidebar)}
        />
        {mobi &&
          (showDiscussionForm ? (
            <DiscussionForm />
          ) : (
            <MarketStories open={showSidebar} />
          ))}
        {!mobi && (
          <>
            <DiscussionForm />
            <MarketStories open={showSidebar} />
          </>
        )}
      </div>
    </div>
  );
}
