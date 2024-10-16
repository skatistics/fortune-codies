import React, { useState, useEffect } from "react";
import QuoteContainer from "./components/QuoteContainer";

function App() {
  const [data, setData] = useState({ id: "", author: "", en: "" });
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/skolakoda/programming-quotes-api/master/Data/quotes.json"
    )
      .then((res) => res.json())
      .then((res) => setData(res[Math.floor(Math.random() * 501)]));
  }, []);

  return (
    <div className="min-h-dvh flex flex-col justify-center">
      <QuoteContainer data={data} />
    </div>
  );
}

export default App;
