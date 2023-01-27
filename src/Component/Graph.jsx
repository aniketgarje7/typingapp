import React from 'react'
import {Line} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
const type = ''

const Graph = ({graph,labeld}) => {
   
  return (
    <div>
         <Line 
            data={
                {
                    labels: graph.map(i=>(type==='date')?(i[0].toDate().toLocaleString().split(',')[0]):(i[0]+1)),
                    datasets: [
                        {
                            data: graph.map(i=>i[1]),
                            label: `${labeld}`,
                            borderColor:'black'
                        }
                    ]
                }
            }   
        />
    </div>
  )
}

export default Graph