import React from "react";
import '../results/results.css';
import { Line, Doughnut, Bar } from 'react-chartjs-2';


import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    DoughnutController,
    ArcElement,
    BarElement,
    BarController
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    DoughnutController,
    ArcElement,
    BarElement,
    BarController
);
const barChartData = {

    labels: ['Solar Irradiance', 'Cloud Coverage', 'Temperature (Avg)', 'Wind Speed'],

    datasets: [

        {

            label: 'Environmental Metrics',

            data: [6.4, 22, 21, 4.8], // Sample data based on your text (adjust as needed)

            backgroundColor: [

                '#2E5F99',

                'rgba(54, 162, 235, 0.7)',

                '#2C8BB9',

                '#41B8D6',

            ],

            borderColor: [

                '#2E5F99',

                'rgba(54, 162, 235, 1)',

                '#2C8BB9',

                '#41B8D6',

            ],

            borderWidth: 1,

            borderRadius: 10, // This creates the rounded corners

            borderSkipped: false, // Ensures all corners are rounded

        },

    ],

};

const barChartOptions = {

    responsive: true,

    plugins: {

        legend: {

            display: false, // Hides the legend for a cleaner look

        },

        title: {

            display: true,

            text: 'Key Environmental Metrics', // Chart title

        },

        tooltip: {

            callbacks: {

                label: function (context) {

                    let label = context.dataset.label || '';

                    if (label) {

                        label += ': ';

                    }

                    if (context.parsed.y !== null) {

                        // Adds units to the tooltip for clarity

                        if (context.label === 'Solar Irradiance') return label + context.parsed.y + ' kWh/m²/day';

                        if (context.label === 'Cloud Coverage') return label + context.parsed.y + '%';

                        if (context.label === 'Temperature (Avg)') return label + context.parsed.y + '°C';

                        if (context.label === 'Wind Speed') return label + context.parsed.y + ' m/s';

                        return label + context.parsed.y;

                    }

                    return label;

                }

            }

        }

    },

    scales: {

        x: {

            beginAtZero: true,

            grid: {

                display: false // Hides x-axis grid lines

            }

        },

        y: {

            beginAtZero: true,

            grid: {

                display: true // Shows y-axis grid lines

            },

        },

    },

};

const donutChartData = {
    labels: ['Flat', 'Hills', 'Valley', 'Others'],
    datasets: [
        {
            label: 'Topography Distribution',
            data: [50, 20, 15, 15],
            backgroundColor: ['#2E5F99', '#2C8BB9', '#41B8D6', '#4BC0C0'],
            hoverBackgroundColor: ['#FF5A5F', '#5A9BD4', '#FFCA5C', '#48B2B2']
        }
    ]
};

const donutChartOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        tooltip: {
            callbacks: {
                label: function (tooltipItem) {
                    return tooltipItem.raw + '%';
                }
            }
        }
    }
};


const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    datasets: [
        {
            label: 'Energy Production (kWh)',
            data: [120, 150, 180, 57, 200, 78, 154, 254, 198, 95, 249, 198],
            borderColor: '#9DCD66',
            backgroundColor: 'rgba(62, 149, 205, 0.2)',
            pointBackgroundColor: '#9DCD66',
            tension: 0.4,
            fill: true,
        },
    ],
};

const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: true,
            position: 'top',
        },
        title: {
            display: false,
        },
    },
    scales: {
        y: {
            beginAtZero: true,
        },
    },
};

const Results = () => {
    return (
        <div className="results">
            <header className="navbar">
                <div className="logo">
                    <img src="/assets/logo.png" alt="IonSpark Logo" />
                    <div class="logo-text">
                    </div>
                </div>
                <nav className="nav-links">
                    <a href="/">Home</a>
                    <a href="/services">Services</a>
                    <a href="/results">Results</a>
                    <a href="/contact">Contact</a>
                </nav>
            </header>
            <div id="particles-js"></div>

            <section className="results-section">
                <div className="card chart-card">
                    <p class="top-left-text">Your results</p>
                    <h4>Monthly Energy Production</h4>
                    <div className="chart-container">
                        <Line data={lineChartData} options={lineChartOptions} />
                    </div>
                </div>
            </section>

            <section className="data-section">
                <h3>Data analysis:</h3>
                <div className="data-cards top-row">
                    <div className="cardchart1">
                        <h4>Topography of the terrain</h4>
                        <Doughnut data={donutChartData} options={donutChartOptions} />
                    </div>


                    <div className="cardchart2">
                        <h4>Environmental and solar data</h4>
                        <p><b>Average Solar Irradiance:</b> 6.4 kWh/m²/day</p>
                        <p><b>Cloud Coverage:</b> 22%</p>
                        <p><b>Temperature Range:</b> 8°C – 34°C</p>
                        <p><b>Wind Speed:</b> 4.8 m/s</p>
                    </div>

                </div>

                <div className="data-cards text-grid">
                    <div className="card1">
                        <h4>Site location information:</h4>
                        <p><b>Project Name:</b> Solar Feasibility – Green Valley Plot</p>
                        <p><b>Coordinates:</b> 36.7783° N, 119.4179° W</p>
                        <p><b>Total Area:</b> 15 hectares (150,000 m²)</p>
                        <p><b>Terrain Slope:</b> 5–12% (South-facing)</p>
                        <p><b>Elevation:</b> 450 m above sea level</p>
                    </div>

                    <div className="cardchart3">
                        <h4>Environmental Conditions</h4>
                        <Bar data={barChartData} options={barChartOptions}></Bar>
                    </div>

                    <div className="cardchart4">
                        <h4>Technical analysis</h4>
                        <p><b>Usable Area:</b> 12.5 hectares</p>
                        <p><b>Shading Zones:</b> 1.2 hectares</p>
                        <p><b>Panel Tilt:</b> 25°</p>
                        <p><b>Estimated Production:</b> 2.1 GWh/year</p>
                        <p><b>Distance to Grid:</b> 1.4 km</p>
                    </div>

                    <div className="cardchart5">
                        <h4>Economic Fasibility</h4>
                        <p><b>Cost:</b> $1.75 million</p>
                        <p><b>ROI:</b> 6.2 years</p>
                        <p><b>Savings:</b> $275,000/year</p>
                        <p><b>Incentives:</b> ITC (26%)</p>
                        <p><b>Comparison:</b> 3.8x more cost-effective than diesel</p>
                    </div>

                    <div className="cardchart7">
                        <h4>Recommendations</h4>
                        <ul>
                            <li>Install 2.5 MW solar system</li>
                            <li>Monitor vegetation growth</li>
                            <li>Use MPPT string inverters</li>
                            <li>Install peak-hour battery</li>
                        </ul>
                    </div>
                </div>
            </section >
            <footer className="footer">
                <div className="footer-info">
                    <div>
                        <h4>IonSpark</h4>
                        <p>renewable energies</p>
                        <p>@IonSpark_sv</p>
                        <p>ion.spark12@gmail.com</p>
                    </div>
                    <div>
                        <h4>Links</h4>
                        <ul>
                            <li>Contact us</li>
                            <li>Quote price</li>
                            <li>Energies</li>
                            <li>Services</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-map">
                    <img src="/assets/mapa.png" alt="Map" />
                </div>
            </footer>

        </div>
    );
};
export default Results;