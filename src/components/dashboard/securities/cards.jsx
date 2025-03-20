import React from 'react';

function ModelPortfolioCard() {
  return (
    <div className="md:w-3/5 w-full h-full border-2 border-solid rounded-md shadow-md p-4 flex gap-6  flex-col">
      <p className="text-navblue font-medium text-xl capitalize">Model portfolios</p>
      <div className="flex justify-between w-full h-full">
        <p className="md:text-lg text-sm capitalize md:font-medium font-normal ">name</p>
        <p className="md:text-lg text-sm capitalize md:font-medium font-normal">current value</p>
        <p className="md:text-lg text-sm capitalize md:font-medium font-normal">perfect today</p>
        <p className="md:text-lg text-sm capitalize md:font-medium font-normal">total performance</p>
      </div>
      <div className="w-full underline border border-solid"></div>
      <div>
        <p className="text-sm capitalize font-medium">No sample portfolios are available!</p>
      </div>
      <div className="w-full underline border border-solid"></div>
      <div>
        <a href="#" target="_blank" className="text-navblue font-thin">
          show all
        </a>
      </div>
    </div>
  );
}

export default function ProfileCrds() {
  return (
    <section className="p-6 flex md:justify-between gap-10 md:flex-row flex-col w-full h-full">
      <ModelPortfolioCard />
      <ModelPortfolioCard />
    </section>
  );
}
