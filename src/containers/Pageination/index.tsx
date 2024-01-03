import React from "react";

type Props = {};

const Pagesection = () => {
  return (
    <div className="border-b border-t border-solid border-slate-300 px-4 py-4 mt-10">
      <div className="row flex flex-wrap -mr-4 -ml-4">
        <div className="col-section basis-1/2 relative w-full min-h-1 pr-4 pl-4">
          <p>Showing Result 1-12 of 30</p>
        </div>
        <div className="col-section basis-1/2 relative w-full min-h-1 pr-4 pl-4">
          <ul className="page-box flex justify-end m-0 p-0 box-border">
            <li className="mb-1 inline-block mx-1 hover:text-orange-600 cursor-pointer">Prev </li>
            <li className="mb-1 inline-block mx-1 hover:text-orange-600 cursor-pointer">1 </li>
            <li className="mb-1 inline-block mx-1 hover:text-orange-600 cursor-pointer">2 </li>
            <li className="mb-1 inline-block mx-1 hover:text-orange-600 cursor-pointer">3 </li>
            <li className="mb-1 inline-block mx-1 hover:text-orange-600 cursor-pointer">Next</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pagesection;
