import React from "react";
import PaginationiconProps from "../types";
import { clicked } from "../Middleware";

function DoubleLeftArrowPaginationIcon({ disabled, handleClick }: PaginationiconProps) {
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
                         d="M15.4419 16.5622L8.38388 8.67125L15.4419 1.43788"
                         stroke={disabled ? "#C4C4C4" : "black"}
                         strokeWidth="2"
                         strokeLinecap="round"
                         strokeLinejoin="round"
                    />
                    <path
                         d="M8.44189 16.5622L1.38388 8.67125L8.44189 1.43788"
                         stroke={disabled ? "#C4C4C4" : "black"}
                         strokeWidth="2"
                         strokeLinecap="round"
                         strokeLinejoin="round"
                    />
               </svg>
          </>
     );
}

export default DoubleLeftArrowPaginationIcon;
