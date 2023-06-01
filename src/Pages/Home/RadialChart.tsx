import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

interface RadialChartProps {
    data: number[];
    labels: string[];
}

const RadialChart: React.FC<RadialChartProps> = ({ data, labels }) => {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const chartInstanceRef = useRef<Chart<"polarArea", number[], string> | null>(null);

    useEffect(() => {
        if (chartRef.current && chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
            chartInstanceRef.current = null;
        }

        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');
            if (ctx) {
                chartInstanceRef.current = new Chart(ctx, {
                    type: 'polarArea',
                    data: {
                        labels,
                        datasets: [
                            {
                                data,
                                backgroundColor: [
                                    'rgba(75, 192, 192, 0.6)',
                                    'rgba(255, 99, 132, 0.6)',
                                    'rgba(54, 162, 235, 0.6)',
                                    'rgba(255, 206, 86, 0.6)',
                                    'rgba(153, 102, 255, 0.6)',
                                ], // Customize the bar colors
                            },
                        ],
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                    },
                });
            }
        }
    }, [data, labels]);

    return <canvas ref={chartRef} />;
};

export default RadialChart;
