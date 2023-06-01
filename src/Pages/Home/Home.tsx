import React from "react";
import "./Home.css";
import Select from "../../Components/Select/Select";
import Chart from "react-google-charts";
import AverageComponent from "./Components/AverageComponent";
import MonthlyBalanceComponent from "./Components/MonthlyBalanceComponent";
import RadialChart from "./RadialChart";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import BarChart from "./BarChart/BarChart";

const data = [100, 92, 75, 50, 80];
const labels = [
     "The Corporates",
     "The Micro Techs",
     "The Loyalists",
     "Agric Client",
     "The Retail Tech",
];

const Home: React.FC = () => {
     const pieChartData = useSelector(
          (state: RootState) => state.homeData.pieChartData
     );
     const chartOptions = useSelector(
          (state: RootState) => state.homeData.chartOptions
     );
     const averageDataInNumbers = useSelector(
          (state: RootState) => state.homeData.averageDataInNumbers
     );
     const averageDataInCredits = useSelector(
          (state: RootState) => state.homeData.averageDataInCredits
     );

     return (
          <>
               <body className="home-container">
                    <div>
                         <div>
                              <h1>Welcome to your dashboard</h1>
                         </div>

                         <Select />

                         <div className="chart-container">
                              <div>
                                   <h1> Total Population </h1>

                                   <div>
                                        <Chart
                                             chartType="PieChart"
                                             data={pieChartData}
                                             options={chartOptions}
                                             width="100%"
                                             height="100%"
                                        />
                                   </div>
                              </div>
                              <div>
                                   <h1>
                                        Active Clients <span>(percentage)</span>
                                   </h1>
                                   <div>
                                        <RadialChart
                                             data={data}
                                             labels={labels}
                                        />
                                   </div>
                              </div>
                         </div>
                         <div className="average-component-container">
                              <AverageComponent
                                   header={"Averege Age"}
                                   headerSpan={"in years"}
                                   averageData={averageDataInNumbers}
                              />

                              <AverageComponent
                                   header={"Average Transactional Value"}
                                   headerSpan={"Credit"}
                                   averageData={averageDataInCredits}
                              />
                         </div>

                         <div className="monthly-balance-container">
                              <h1>AVERAGE MONTHLY BALANCE</h1>
                              <MonthlyBalanceComponent />
                         </div>
                         <div className="pillar-distribution-container">
                              <h1>PILLAR DISTRIBUTION</h1>
                              <div>
                                   <BarChart text={"The Agric Client"} />
                                   <BarChart text={"The Micro Techs"} />
                                   <BarChart text={" The Corporates"} />
                                   <BarChart text={"The Retail Tech"} />
                                   <BarChart text={" The Loyalists"} />
                              </div>
                         </div>
                    </div>
               </body>
          </>
     );
};

export default Home;
