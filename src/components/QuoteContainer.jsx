import React from "react";

function QuoteContainer({ data }) {
  return (
    <div>
      {data && (
        <div
          key={data.id}
          className=" flex flex-col justify-center items-center "
        >
          <div className=" flex justify-center p-2 font-bold">
            {data.author}
          </div>
          <div className=" flex justify-center p-2 font-medium">{data.en}</div>
          <button
            onClick={() => window.location.reload()}
            className="border-2 border-slate-500  rounder-full w-24 h-12 hover:bg-gray-600 hover:text-yellow-100 mt-4"
          >
            New Quote
          </button>
        </div>
      )}
    </div>
  );
}

export default QuoteContainer;
