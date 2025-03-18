import React from 'react';

function ModelPortfolioCard() {
  return (
    <div className="w-3/5 border-2 border-solid rounded-md shadow-md p-4 flex gap-6  flex-col">
      <p className="text-navblue font-medium text-xl capitalize">Model portfolios</p>
      <div className="flex justify-between w-full h-full">
        <p className="text-lg capitalize font-medium">name</p>
        <p className="text-lg capitalize font-medium">current value</p>
        <p className="text-lg capitalize font-medium">perfect today</p>
        <p className="text-lg capitalize font-medium">total performance</p>
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
