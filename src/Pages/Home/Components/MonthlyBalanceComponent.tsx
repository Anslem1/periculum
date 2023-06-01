import React from "react";
import { formattedCurrency } from "../../../Middleware";
import { RootState } from "../../../store";
import { useSelector } from "react-redux";

function MontlyBalanceComponent() {
     const averageMonthlyBalance = useSelector(
          (state: RootState) => state.homeData.averageMonthlyBalance
     );
     return (
          <>
               <div>
                    {averageMonthlyBalance.map((balance) => (
                         <p>
                              {balance.name}{" "}
                              <span>
                                   {balance.name.includes("Micro")
                                        ? "----" +
                                          formattedCurrency.format(
                                               balance.balance
                                          )
                                        : formattedCurrency.format(
                                               balance.balance
                                          )}
                              </span>
                         </p>
                    ))}
               </div>
          </>
     );
}

export default MontlyBalanceComponent;
