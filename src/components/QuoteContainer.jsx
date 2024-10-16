import React from "react";

function QuoteContainer({ data }) {
  return (
    <div>
      {data && (
        <div key={data.id} className="bg-red-500">
          <div>{data.author}</div>
          <div>{data.en}</div>
        </div>
      )}
    </div>
  );
}

export default QuoteContainer;
