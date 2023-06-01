import React, { useEffect, useRef } from "react";
import "./BarChart.css";
import Chart, { ChartConfiguration, ChartTypeRegistry } from "chart.js/auto";
import { data } from "./data";

interface BarProps {
     text: string;
}

function ChartComponent({ text }: BarProps) {
     const chartRef = useRef<HTMLCanvasElement>(null);
     const chartInstanceRef = useRef<Chart>();

     useEffect(() => {
          if (chartRef.current) {
               // Destroy existing chart instance if it exists
               if (chartInstanceRef.current) {
                    chartInstanceRef.current.destroy();
               }

               const config: ChartConfiguration<"bar", number[], string> = {
                    type: "bar",
                    data,
                    options: {
                         scales: {
                              y: {
                                   beginAtZero: true,
                              },
                         },
                    },
               };

               chartInstanceRef.current = new Chart(chartRef.current, config);
          }
     }, []);

     return (
          <>
               <div>
                    <div className="chartMenu">
                         <p>
                              <h1>{text}</h1>
                              <span id="chartVersion"></span>
                         </p>
                    </div>
                    <div className="chartCard">
                         <div className="chartBox">
                              <canvas ref={chartRef} id="myChart"></canvas>
                         </div>
                    </div>
               </div>
          </>
     );
}

export default ChartComponent;
