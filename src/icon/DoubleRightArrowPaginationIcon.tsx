import React from "react";
import PaginationiconProps from "../types";
import { clicked } from "../Middleware";

function DoubleRightArrowPaginationIcon({ disabled, handleClick }: PaginationiconProps) {
     return (
          <>
               <svg
                    width="17"
                    height="18"
                    viewBox="0 0 17 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                      onClick={() => clicked(disabled, handleClick)}
               >
                    <path
                         d="M1.55811 16.5622L8.61612 8.67125L1.55811 1.43788"
                         stroke={disabled ? "#C4C4C4" : "black"}
                         stroke-width="2"
                         stroke-linecap="round"
                         stroke-linejoin="round"
                    />
                    <path
                         d="M8.55811 16.5622L15.6161 8.67125L8.55811 1.43788"
                         stroke={disabled ? "#C4C4C4" : "black"}
                         stroke-width="2"
                         stroke-linecap="round"
                         stroke-linejoin="round"
                    />
               </svg>
          </>
     );
}

export default DoubleRightArrowPaginationIcon;
