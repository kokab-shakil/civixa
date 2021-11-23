import React from "react";
import useWindowSize from "../../../WindowSize";

// function useWindowSize() {
//   const [size, setSize] = useState([0, 0]);
//   useLayoutEffect(() => {
//     function updateSize() {
//       setSize([window.innerWidth, window.innerHeight]);
//     }
//     window.addEventListener("resize", updateSize);
//     updateSize();
//     return () => window.removeEventListener("resize", updateSize);
//   }, []);
//   return size;
// }
export const Test = () => {
  const [width] = useWindowSize();

  return (
    <span>
      {width > 776 ? (
        <h1>Width is greater than 776 </h1>
      ) : (
        <h1>Width is less than 776</h1>
      )}
      {/* Window size: {width} x {height} */}
    </span>
  );
};
