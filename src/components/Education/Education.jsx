import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'CS Coursework and Performance Overview',
      },
    },
  };
  
  const labels = ['Programming for Problem Solving', 'Data Structures and Algorithms', 'Computer Networks', 
    'Relational DataBase Management Systems', 'Machine Learning & Introduction to Python', 'Object Oriented Programming Concept using C++',
     'Operating Systems', 'Ad Hoc Networks & Security', 'Big Data and Intelligent Web'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Grade (out of 10)',
        data: [10,10,10,10,9,10,10,10,10],
        borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
        backgroundColor: ['rgba(255, 99, 132, 0.5)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
        ],
        borderWidth: 1
      }]
  };

export function Education(){
    return (
        <div>
            <div>Education</div>
            <div className="grid grid-cols-3">
                <div className='col-span-1'>
                    <ol className="relative border-s border-gray-200 dark:border-gray-700 ml-8 mt-8">                  
                        <li className="mb-10 ms-6">            
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                </svg>
                            </span>
                            <div>2021-2025</div>
                            <div>Bachelor of Technology</div>
                            <div>Electronics and Communication Engineering</div>
                            <div>Heritage Institute of Technology</div>
                            <div>CGPA: 9.02/10</div>
                        </li>
                    </ol>
                </div>
                <div className='col-span-2'>
                    <Bar options={options} data={data} />
                </div> 
            </div>
            <hr/>
        </div>
    )
}