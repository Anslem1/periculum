import React, { MouseEventHandler } from "react";
import { OpenAndCloseIconProps } from "../types";

function CloseIcon({ handleClickIcon }: OpenAndCloseIconProps) {
     //   const handleClickEvent: MouseEventHandler<SVGSVGElement> = () => {
     //        let isShow = false; // Replace with your logic to determine the value of isShow

     //        handleClickIcon.bind(null, isShow)
     //   };

     return (
          <>
               <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={handleClickIcon}
               >
                    <path
                         fillRule="evenodd"
                         clipRule="evenodd"
                         d="M19.7754 9.35943C19.6316 9.50154 19.437 9.58019 19.2348 9.57784V9.56025C18.8122 9.56025 18.4697 9.21767 18.4697 8.79507V6.2533C18.4697 3.20141 16.7986 1.53034 13.7555 1.53034H6.2533C3.2102 1.53034 1.53034 3.2102 1.53034 6.2533V13.7555C1.53034 16.7898 3.2102 18.4697 6.2533 18.4697H13.7555C16.7986 18.4697 18.4697 16.7898 18.4697 13.7555C18.4697 13.3329 18.8122 12.9903 19.2348 12.9903C19.6574 12.9903 20 13.3329 20 13.7555C20 17.6077 17.6077 20 13.7555 20H6.2533C2.39226 20 0 17.6077 0 13.7555V6.2533C0 2.39226 2.39226 0 6.2533 0H13.7555C17.5901 0 20 2.39226 20 6.2533V8.82146C20 9.0236 19.9191 9.21733 19.7754 9.35943ZM7.625 9C7.07272 9 6.625 9.44772 6.625 10C6.625 10.5523 7.07272 11 7.625 11H13.375C13.9273 11 14.375 10.5523 14.375 10C14.375 9.44772 13.9273 9 13.375 9H7.625Z"
                         fill="#407BFF"
                    />
               </svg>
          </>
     );
}

export default CloseIcon;
