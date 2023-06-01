import React from "react";
import { RadioIconProps } from "../types";

function RadioInactiveIcon({ handleClick, identifier }: RadioIconProps) {
     return (
          <>
               <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => handleClick(identifier)}
               >
                    <rect
                         x="1"
                         y="1"
                         width="18"
                         height="18"
                         rx="9"
                         fill="white"
                    />
                    <rect
                         x="1"
                         y="1"
                         width="18"
                         height="18"
                         rx="9"
                         stroke="#407BFF"
                         stroke-width="2"
                    />
               </svg>
          </>
     );
}

export default RadioInactiveIcon;
