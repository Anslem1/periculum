import React from "react";
import CloseIcon from "../../icon/CloseIcon";
import OpenIcon from "../../icon/OpenIcon";

interface CustomerInfoComponentProps {
     showProfileInfo: boolean;
     handleClick: (header: string) => void;
     data: string;
     header: string;
     borderStyle?: string;
}

function CustomerInfoComponent({
     showProfileInfo,
     handleClick,
     data,
     header,
     borderStyle,
}: CustomerInfoComponentProps) {
     return (
          <>
               <div className={`info-container`}>
                    <div className={`${borderStyle}`}>
                         <p>{header}</p>
                         {showProfileInfo ? (
                              <CloseIcon
                                   handleClickIcon={() => handleClick(header)}
                              />
                         ) : (
                              <OpenIcon
                                   handleClickIcon={() => handleClick(header)}
                              />
                         )}
                    </div>
                    {showProfileInfo && <p className="status-info">{data}</p>}
               </div>
          </>
     );
}

export default CustomerInfoComponent;
