import { useState, useEffect } from "react";
import QuoteContainer from "./QuoteContainer";
import CookieLeft from "../assets/img/cookieLeft.png";
import CookieRight from "../assets/img/cookieRight.png";

const Cookie = ({ data }) => {
  const [opened, setOpened] = useState(false);

  const handleClick = () => {
    console.log("clicked");
    setOpened(!opened);
  };

  useEffect(() => {
    const cookieOpener = document.getElementById("cookie-opener");

    cookieOpener.addEventListener("click", handleClick, { once: true });
  }, []);

  useEffect(() => {
    if (opened) {
      const leftCookie = document.getElementById("left-cookie");
      const rightCookie = document.getElementById("right-cookie");

      var x = window.matchMedia("(min-width: 1280px)");
      if (x.matches) {
        console.log("add anim xl");
        leftCookie.classList.add("animate-break-left-xl");
        rightCookie.classList.add("animate-break-right-xl");
      } else {
        console.log("add anim");
        leftCookie.classList.add("animate-break-left");
        rightCookie.classList.add("animate-break-right");
      }
    }
  }, [opened]);

  return (
    <button
      id="cookie-opener"
      className={
        ` block mb-0 mx-auto w-full h-[500px] focus:outline-transparent relative ` +
        (opened ? "" : " pop-in")
      }
      type="button"
    >
      <div id="left-cookie" className={"absolute top-0 right-[50%] z-10"}>
        <img src={CookieLeft} alt="Cookie" className="w-[250px]" />
      </div>
      <div id="right-cookie" className={"absolute top-0 left-[50%] z-10"}>
        <img src={CookieRight} alt="Cookie" className="w-[250px]" />
      </div>
      <div className="flex justify-center">
        <div
          className={
            `absolute  min-h-[2em] w-[80%] xl:w-[1200px] mt-[80px] top-0 text-[#333333] flex flex-col justify-center origin-top py-[0.75em] px-[1.5em] text-center scale-x-0 scale-y-0 ` +
            (opened ? " animate-fold-out" : "")
          }
        >
          <QuoteContainer data={data} />
        </div>
      </div>
    </button>
  );
};

export default Cookie;
