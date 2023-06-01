import React from "react";
import { formattedCurrency } from "../../../Middleware";

type AverageData = {
     name: string;
     number: number;
}[];

type AverageProps = {
     header: string;
     headerSpan: string;
     averageData: AverageData;
};

const AverageComponent: React.FC<AverageProps> = ({
     header,
     headerSpan,
     averageData,
}) => {
     return (
          <div>
               <h1>
                    {header} <span>({headerSpan})</span>
               </h1>
               <div className="average-number-container">
                    {averageData.map((average) => (
                         <p key={average.name}>
                              {average.name}
                              <span>
                                   {" "}
                                   {headerSpan === "credit"
                                        ? formattedCurrency.format(
                                               average.number
                                          )
                                        : average.number}
                              </span>
                         </p>
                    ))}
               </div>
          </div>
     );
};

export default AverageComponent;
