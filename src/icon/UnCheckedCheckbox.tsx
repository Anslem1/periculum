import React from "react";
import { RadioIconProps } from "../types";

function UnCheckedCheckbox({ handleClick, identifier }: RadioIconProps) {
     return (
          <>
               <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => handleClick(identifier)}
               >
                    <g filter="url(#filter0_d_1_2103)">
                         <rect x="2" width="20" height="20" fill="white" />
                         <rect
                              x="2.5"
                              y="0.5"
                              width="19"
                              height="19"
                              stroke="#407BFF"
                         />
                    </g>
                    <defs>
                         <filter
                              id="filter0_d_1_2103"
                              x="0"
                              y="0"
                              width="24"
                              height="24"
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB"
                         >
                              <feFlood
                                   flood-opacity="0"
                                   result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                   in="SourceAlpha"
                                   type="matrix"
                                   values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha"
                              />
                              <feOffset dy="2" />
                              <feGaussianBlur stdDeviation="1" />
                              <feColorMatrix
                                   type="matrix"
                                   values="0 0 0 0 0.96 0 0 0 0 0.96 0 0 0 0 0.96 0 0 0 1 0"
                              />
                              <feBlend
                                   mode="normal"
                                   in2="BackgroundImageFix"
                                   result="effect1_dropShadow_1_2103"
                              />
                              <feBlend
                                   mode="normal"
                                   in="SourceGraphic"
                                   in2="effect1_dropShadow_1_2103"
                                   result="shape"
                              />
                         </filter>
                    </defs>
               </svg>
          </>
     );
}

export default UnCheckedCheckbox;
