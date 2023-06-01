import React from "react";
import PaginationiconProps from "../types";
import { clicked } from "../Middleware";

function SingleLeftArrowPaginationIcon({
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
                         d="M8.5 15.5621L1.44198 8.19292L8.5 1.43782"
                         stroke={disabled ? "#C4C4C4" : "black"}
                         strokeWidth="2"
                         strokeLinecap="round"
                         strokeLinejoin="round"
                    />
               </svg>
          </>
     );
}

export default SingleLeftArrowPaginationIcon;
