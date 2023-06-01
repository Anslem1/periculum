import React from "react";
import { RadioIconProps } from "../types";

function RadioActiveIcon({ handleClick, identifier }: RadioIconProps) {
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
                         x="2.5"
                         y="2.5"
                         width="15"
                         height="15"
                         rx="7.5"
                         fill="white"
                    />
                    <rect
                         x="2.5"
                         y="2.5"
                         width="15"
                         height="15"
                         rx="7.5"
                         stroke="#1162DC"
                         stroke-width="5"
                    />
               </svg>
          </>
     );
}

export default RadioActiveIcon;
