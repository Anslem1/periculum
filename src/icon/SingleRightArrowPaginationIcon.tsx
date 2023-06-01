import React from "react";
import PaginationiconProps from "../types";
import { clicked } from "../Middleware";

function SingleRightArrowPaginationIcon({
     disabled,
     handleClick,
}: PaginationiconProps) {
     return (
          <>
               <svg
                    width="10"
                    height="17"
                    viewBox="0 0 10 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => clicked(disabled, handleClick)}
               >
                    <path
                         d="M1.5 15.5621L8.55802 8.19292L1.5 1.43782"
                         stroke={disabled ? "#C4C4C4" : "black"}
                         stroke-width="2"
                         stroke-linecap="round"
                         stroke-linejoin="round"
                    />
               </svg>
          </>
     );
}

export default SingleRightArrowPaginationIcon;
