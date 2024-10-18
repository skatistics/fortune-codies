import { useState } from "react";
import QuoteContainer from "./QuoteContainer";

const Cookie = ({ data }) => {
  const [opened, setOpened] = useState(false);

  const handleClick = () => {
    console.log("clicked");
    setOpened(!opened);
  };

  return (
    <button
      className={
        ` block mt-[4.5em] mb-0 mx-auto w-[30em] h-[17em] focus:outline-transparent relative` +
        (opened ? " w-[26em] h-[6em]" : " pop-in")
      }
      type="button"
      onClick={handleClick}
    >
      {/* left */}
      <div
        className={
          `absolute top-0 w-[8em] h-[18em] z-[2] bg-current text-[#efaa5d]` +
          (opened ? " animate-break-left" : "")
        }
        style={{
          position: "absolute",
          top: "0",
          width: "8em",
          height: "18em",
          zIndex: "2",
          background: "currentColor",
          color: "#efaa5d",
          borderRadius: "7em 1em 1em 7em / 50%",
          boxShadow:
            "0.5em 0 0 inset,0.5em 0.2em 0 inset,1em 0.2em 0 #fff6 inset,-0.75em 0 0 #0002 inset",
          clipPath: "polygon(0% 0%, 68% 0%, 100% 30%, 100% 100%, 0% 100%)",
          WebkitClipPath:
            "polygon(0% 0%, 68% 0%, 100% 30%, 100% 100%, 0% 100%)",
          left: "calc(50% - 5.4em)",
          transform: "rotate(25deg)",
          transformOrigin: "68% 0",
        }}
      ></div>
      {/* right */}
      <div
        className={
          `absolute top-0 w-[8em] h-[18em] z-[2] bg-current text-[#efaa5d]` +
          (opened ? " animate-break-right" : "")
        }
        style={{
          position: "absolute",
          top: "0",
          width: "8em",
          height: "18em",
          zIndex: "2",
          background: "currentColor",
          color: "#efaa5d",
          borderRadius: "1em 7em 7em 1em / 50%",
          boxShadow:
            "-0.5em 0 0 inset,-0.5em 0.2em 0 inset,-1em 0.2em 0 #fff6 inset,0.75em 0 0 #0002 inset",
          clipPath: "polygon(0% 30%, 32% 0%, 100% 0, 100% 100%, 0% 100%)",
          WebkitClipPath: "polygon(0% 30%, 32% 0%, 100% 0, 100% 100%, 0% 100%)",
          right: "calc(50% - 5.4em)",
          transform: "rotate(-25deg)",
          transformOrigin: "32% 0",
        }}
      ></div>
      <div
        className={
          `absolute top-0 left-[calc(50%-0.4em)] w-[0.8em] h-[6em] z-[1]` +
          (opened ? " animate-fall-out" : "")
        }
      >
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={
              `absolute top-0 w-[0.5em] h-[0.5em] rounded-[50%] bg-current text-[#efaa5d]` +
              (i === 0
                ? " top-[4%] left-[15%]"
                : i === 1
                ? " top-[20%] right-[15%]"
                : i === 2
                ? " top-[30%] left-[25%]"
                : i === 3
                ? " top-[45%] right-[25%]"
                : i === 4
                ? " top-[55%] left-[5%]"
                : i === 5
                ? " top-[65%] right-[5%]"
                : i === 6
                ? " top-[75%] left-[30%]"
                : " top-[90%] right-[35%]")
            }
          ></div>
        ))}
      </div>
      <div
        className={
          `absolute top-0 text-[#333333] flex flex-col justify-center py-[0.75em] px-[1.5em] text-center min-h-[10em] left-0 origin-[50%_32%] scale-x-0 scale-y-100 ` +
          (opened ? " animate-fold-out" : "")
        }
      >
        <QuoteContainer data={data} />
      </div>
    </button>
  );
};

export default Cookie;
