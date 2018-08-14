// import React from 'react';
//
// import {
//   XYPlot,
//   XAxis,
//   YAxis,
//   VerticalGridLines,
//   HorizontalGridLines,
//   AreaSeries,
//   GradientDefs
// } from 'react-vis';
//
// export default class Example extends React.Component {
//
//   render() {
//     const gradient = (<GradientDefs>
//       <linearGradient
//           id="myGradient"
//           gradientUnits="userSpaceOnUse"
//           x1="0" y1="0" x2="200" y2="200">
//           <stop offset="10%" stopColor="#c6e48b" />
//           <stop offset="33%" stopColor="#7bc96f" />
//           <stop offset="66%" stopColor="#239a3b" />
//           <stop offset="90%" stopColor="red" />
//       </linearGradient>
//     </GradientDefs>);
//
//     return (
//       <XYPlot
//         width={300}
//         height={300}
//       >
//         <VerticalGridLines />
//         <HorizontalGridLines />
//         <XAxis />
//         <YAxis />
//         <AreaSeries
//           className="area-series-example"
//           curve="curveNatural"
//           // fill="linear-gradient(180deg, rgba(106, 177, 66, 0.15) 51.93%, rgba(106, 177, 66, 0) 100%)"
//           // color={gradient}
//           data={[
//             {x: 1, y: 10},
//             {x: 2, y: 0},
//             {x: 3, y: 15}
//           ]}>
//             {gradient}
//           </AreaSeries>
//       </XYPlot>
//     );
//   }
// }

// import React, { Component } from 'react';
// // import  from '';
// import {Line, Bar} from 'react-chartjs-2';
//
// class SS extends Component {
//
//   render() {
//     return (
//       <Bar
//         width={300}
//         height={300}
//         data={[{x:1, y:2}]}
//         options={{
//           maintainAspectRatio: false
//         }}
//       />
//     );
//   }
//
// }
//
// export default SS;
//
// import React from 'react';
// import {Line} from 'react-chartjs-2';
//
// const data = {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//   datasets: [
//     {
//       label: 'My First dataset',
//       fill: false,
//       lineTension: 0.1,
//       backgroundColor: 'rgba(75,192,192,0.4)',
//       borderColor: 'rgba(75,192,192,1)',
//       borderCapStyle: 'butt',
//       borderDash: [],
//       borderDashOffset: 0.0,
//       borderJoinStyle: 'miter',
//       pointBorderColor: 'rgba(75,192,192,1)',
//       pointBackgroundColor: '#fff',
//       pointBorderWidth: 1,
//       pointHoverRadius: 5,
//       pointHoverBackgroundColor: 'rgba(75,192,192,1)',
//       pointHoverBorderColor: 'rgba(220,220,220,1)',
//       pointHoverBorderWidth: 2,
//       pointRadius: 1,
//       pointHitRadius: 10,
//       data: [65, 59, 80, 81, 56, 55, 40]
//     }
//   ]
// };
//
// export default class SS extends React.Component {
//   // displayName: 'LineExample',
//
//   render() {
//     return (
//       <div>
//         <h2>Line Example</h2>
//         <Line data={data} dysplayName={'Dadsada'}/>
//       </div>
//     );
//   }
// };


//
// import React from 'react';
// import { AreaClosed, Line, Bar } from '@vx/shape';
// import { appleStock } from '@vx/mock-data';
// import { curveMonotoneX } from '@vx/curve';
// import { LinearGradient } from '@vx/gradient';
// import { GridRows, GridColumns } from '@vx/grid';
// import { scaleTime, scaleLinear } from '@vx/scale';
// import { withTooltip, Tooltip } from '@vx/tooltip';
// import { localPoint } from '@vx/event';
// import { extent, max, bisector } from 'd3-array';
// import { timeFormat } from 'd3-time-format';
//
// const stock = appleStock.slice(800);
// const formatDate = timeFormat("%b %d, '%y");
//
// // accessors
// const xStock = d => new Date(d.date);
// const yStock = d => d.close;
// const bisectDate = bisector(d => new Date(d.date)).left;
//
// class Area extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleTooltip = this.handleTooltip.bind(this);
//   }
//   handleTooltip({ event, data, xStock, xScale, yScale }) {
//     const { showTooltip } = this.props;
//     const { x } = localPoint(event);
//     const x0 = xScale.invert(x);
//     const index = bisectDate(data, x0, 1);
//     const d0 = data[index - 1];
//     const d1 = data[index];
//     let d = d0;
//     if (d1 && d1.date) {
//       d = x0 - xStock(d0.date) > xStock(d1.date) - x0 ? d1 : d0;
//     }
//     showTooltip({
//       tooltipData: d,
//       tooltipLeft: x,
//       tooltipTop: yScale(d.close),
//     });
//   }
//   render() {
//     const {
//       width,
//       height,
//       margin,
//       showTooltip,
//       hideTooltip,
//       tooltipData,
//       tooltipTop,
//       tooltipLeft,
//       events,
//     } = this.props;
//     if (width < 10) return null;
//
//     // bounds
//     const xMax = width - margin.left - margin.right;
//     const yMax = height - margin.top - margin.bottom;
//
//     // scales
//     const xScale = scaleTime({
//       range: [0, xMax],
//       domain: extent(stock, xStock),
//     });
//     const yScale = scaleLinear({
//       range: [yMax, 0],
//       domain: [0, max(stock, yStock) + yMax / 3],
//       nice: true,
//     });
//
//     return (
//       <div>
//         <svg ref={s => (this.svg = s)} width={width} height={height}>
//           <rect
//             x={0}
//             y={0}
//             width={width}
//             height={height}
//             fill="#32deaa"
//             rx={14}
//           />
//           <defs>
//             <linearGradient
//               id="gradient"
//               x1="0%"
//               y1="0%"
//               x2="0%"
//               y2="100%"
//             >
//               <stop
//                 offset="0%"
//                 stopColor="#FFFFFF"
//                 stopOpacity={1}
//               />
//               <stop
//                 offset="100%"
//                 stopColor="#FFFFFF"
//                 stopOpacity={0.2}
//               />
//             </linearGradient>
//           </defs>
//           <GridRows
//             lineStyle={{ pointerEvents: 'none' }}
//             scale={yScale}
//             width={xMax}
//             strokeDasharray="2,2"
//             stroke="rgba(255,255,255,0.3)"
//           />
//           <GridColumns
//             lineStyle={{ pointerEvents: 'none' }}
//             scale={xScale}
//             height={yMax}
//             strokeDasharray="2,2"
//             stroke="rgba(255,255,255,0.3)"
//           />
//           <AreaClosed
//             data={stock}
//             xScale={xScale}
//             yScale={yScale}
//             x={xStock}
//             y={yStock}
//             strokeWidth={1}
//             stroke={'url(#gradient)'}
//             fill={'url(#gradient)'}
//             curve={curveMonotoneX}
//           />
//           <Bar
//             x={0}
//             y={0}
//             width={width}
//             height={height}
//             fill="transparent"
//             rx={14}
//             data={stock}
//             onTouchStart={data => event =>
//               this.handleTooltip({
//                 event,
//                 data,
//                 xStock,
//                 xScale,
//                 yScale,
//               })}
//             onTouchMove={data => event =>
//               this.handleTooltip({
//                 event,
//                 data,
//                 xStock,
//                 xScale,
//                 yScale,
//               })}
//             onMouseMove={data => event =>
//               this.handleTooltip({
//                 event,
//                 data,
//                 xStock,
//                 xScale,
//                 yScale,
//               })}
//             onMouseLeave={data => event => hideTooltip()}
//           />
//           {tooltipData && (
//             <g>
//               <Line
//                 from={{ x: tooltipLeft, y: 0 }}
//                 to={{ x: tooltipLeft, y: yMax }}
//                 stroke="rgba(92, 119, 235, 1.000)"
//                 strokeWidth={2}
//                 style={{ pointerEvents: 'none' }}
//                 strokeDasharray="2,2"
//               />
//               <circle
//                 cx={tooltipLeft}
//                 cy={tooltipTop + 1}
//                 r={4}
//                 fill="black"
//                 fillOpacity={0.1}
//                 stroke="black"
//                 strokeOpacity={0.1}
//                 strokeWidth={2}
//                 style={{ pointerEvents: 'none' }}
//               />
//               <circle
//                 cx={tooltipLeft}
//                 cy={tooltipTop}
//                 r={4}
//                 fill="rgba(92, 119, 235, 1.000)"
//                 stroke="white"
//                 strokeWidth={2}
//                 style={{ pointerEvents: 'none' }}
//               />
//             </g>
//           )}
//         </svg>
//         {tooltipData && (
//           <div>
//             <Tooltip
//               top={tooltipTop - 12}
//               left={tooltipLeft + 12}
//               style={{
//                 backgroundColor: 'rgba(92, 119, 235, 1.000)',
//                 color: 'white',
//               }}
//             >
//               {`$${yStock(tooltipData)}`}
//             </Tooltip>
//             <Tooltip
//               top={yMax - 14}
//               left={tooltipLeft}
//               style={{
//                 transform: 'translateX(-50%)',
//               }}
//             >
//               {formatDate(xStock(tooltipData))}
//             </Tooltip>
//           </div>
//         )}
//       </div>
//     );
//   }
// }
//
// export default withTooltip(Area);


import React, { Component } from 'react';
import Stat from './Stat';

class Main extends Component {

  render() {
    return (
      <div className="">

      </div>
      <Stat
        margin={{
          left: 0,
          top: 0,
          bottom: 0,
          right: 0,
        }}
        width={1000}
        height={400}
        // tooltipTop={220}
        // tooltipLeft={500}
      />
    );
  }

}

export default Main;
