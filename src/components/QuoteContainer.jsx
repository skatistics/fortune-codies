import React from "react";

function QuoteContainer({ data }) {
  return (
    <div onClick={() => window.location.reload()}>
      {data && (
        <div
          key={data.id}
          className="flex flex-col justify-center items-center "
        >
          <div className=" flex justify-center p-2 font-bold">
            {data.author}
          </div>
          <div className=" flex justify-center p-2 font-medium">{data.en}</div>
        </div>
      )}
    </div>
  );
}

export default QuoteContainer;
