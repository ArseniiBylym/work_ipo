
import React from 'react';
import { AreaClosed, Line, Bar } from '@vx/shape';
import { appleStock } from '@vx/mock-data';
import { curveMonotoneX } from '@vx/curve';
import { LinearGradient } from '@vx/gradient';
import { GridRows, GridColumns } from '@vx/grid';
import { scaleTime, scaleLinear } from '@vx/scale';
import { withTooltip, Tooltip } from '@vx/tooltip';
import { localPoint } from '@vx/event';
import { extent, max, bisector } from 'd3-array';
import { timeFormat } from 'd3-time-format';

// const stock = appleStock.slice(800);
// console.log(stock);

const data = [
  {
    "id": "7",
    "investor_id": 1,
    "project_id": 1,
    "purchase_date": "2010-06-10T07:00:00.000Z",
    "status_id": 4,
    "unit_count": Math.random() * 1000,
    "unit_price": 10,
    "po_doc": ""
  },
  {
    "id": "7",
    "investor_id": 1,
    "project_id": 1,
    "purchase_date": "2010-06-11T07:00:00.000Z",
    "status_id": 4,
    "unit_count": Math.random() * 1000,
    "unit_price": 10,
    "po_doc": ""
  },
  {
    "id": "7",
    "investor_id": 1,
    "project_id": 1,
    "purchase_date": "2010-06-12T07:00:00.000Z",
    "status_id": 4,
    "unit_count": Math.random() * 1000,
    "unit_price": 10,
    "po_doc": ""
  },
  {
    "id": "7",
    "investor_id": 1,
    "project_id": 1,
    "purchase_date": "2010-06-13T07:00:00.000Z",
    "status_id": 4,
    "unit_count": Math.random() * 1000,
    "unit_price": 10,
    "po_doc": ""
  },
  {
    "id": "7",
    "investor_id": 1,
    "project_id": 1,
    "purchase_date": "2010-06-14T07:00:00.000Z",
    "status_id": 4,
    "unit_count": Math.random() * 1000,
    "unit_price": 10,
    "po_doc": ""
  },
  {
    "id": "7",
    "investor_id": 1,
    "project_id": 1,
    "purchase_date": "2010-06-15T07:00:00.000Z",
    "status_id": 4,
    "unit_count": Math.random() * 1000,
    "unit_price": 10,
    "po_doc": ""
  },
  {
    "id": "7",
    "investor_id": 1,
    "project_id": 1,
    "purchase_date": "2010-06-16T07:00:00.000Z",
    "status_id": 4,
    "unit_count": Math.random() * 1000,
    "unit_price": 10,
    "po_doc": ""
  },
  {
    "id": "7",
    "investor_id": 1,
    "project_id": 1,
    "purchase_date": "2010-06-17T07:00:00.000Z",
    "status_id": 4,
    "unit_count": Math.random() * 1000,
    "unit_price": 10,
    "po_doc": ""
  },
]

const stock = data.map( obj => {
  // debugger
  return {
    close: obj.unit_count,
    date: obj.purchase_date,
  }
})

// const stock = [{close: 10, date: '2010-06-10T07:00:00.000Z'}];
// debugger
  // {
  //   close: 10,
  //   date: "2010-06-10T07:00:00.000Z",
  // },
  // {
  //   close: 13,
  //   date: "2010-06-14T07:00:00.000Z",
  // },
  // {
  //   close: 30,
  //   date: "2010-06-18T07:00:00.000Z",
  // },

const formatDate = timeFormat("%b %d, '%y");

// accessors
const xStock = d => new Date(d.date);
const yStock = d => d.close;
const bisectDate = bisector(d => new Date(d.date)).left;

class Area extends React.Component {
  constructor(props) {
    super(props);
    this.handleTooltip = this.handleTooltip.bind(this);
  }
  handleTooltip({ event, data, xStock, xScale, yScale }) {
    const { showTooltip } = this.props;
    const { x } = localPoint(event);
    const x0 = xScale.invert(x);
    const index = bisectDate(data, x0, 1);
    const d0 = data[index - 1];
    const d1 = data[index];
    let d = d0;
    if (d1 && d1.date) {
      d = x0 - xStock(d0.date) > xStock(d1.date) - x0 ? d1 : d0;
    }
    showTooltip({
      tooltipData: d,
      tooltipLeft: x,
      tooltipTop: yScale(d.close),
    });
  }
  render() {
    const {
      width,
      height,
      margin,
      showTooltip,
      hideTooltip,
      tooltipData,
      tooltipTop,
      tooltipLeft,
      events,
    } = this.props;
    if (width < 10) return null;

    // bounds
    const xMax = width - margin.left - margin.right;
    const yMax = height - margin.top - margin.bottom;

    // scales
    const xScale = scaleTime({
      range: [0, xMax],
      domain: extent(stock, xStock),
    });
    const yScale = scaleLinear({
      range: [yMax, 0],
      domain: [0, max(stock, yStock) + yMax / 3],
      nice: true,
    });

    return (
      <div>
        <svg ref={s => (this.svg = s)} width={width} height={height}>
          <rect
            x={0}
            y={0}
            width={width}
            height={height}
            fill="#fff"
            rx={14}
          />
          <defs>
            <linearGradient
              id="gradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="80%"
            >
              <stop
                offset="0%"
                stopColor="rgba(106,177,66, 0.4)"
                stopOpacity={1}
              />
              <stop
                offset="100%"
                stopColor="rgba(106, 177, 66, 0)"
                stopOpacity={0.2}
              />
            </linearGradient>
          </defs>
          <GridRows
            lineStyle={{ pointerEvents: 'none' }}
            scale={yScale}
            width={xMax}
            strokeDasharray="2,2"
            stroke="#C4C4C4"
          />
          <GridColumns
            lineStyle={{ pointerEvents: 'none' }}
            scale={xScale}
            height={yMax}
            strokeDasharray="2,2"
            stroke="rgba(255,255,255,0.3)"
          />
          <AreaClosed
            data={stock}
            xScale={xScale}
            yScale={yScale}
            x={xStock}
            y={yStock}
            strokeWidth={4}
            stroke={'#6AB142'}
            fill={'url(#gradient)'}
            curve={curveMonotoneX}
          />
          <Bar
            x={0}
            y={0}
            width={width}
            height={height}
            fill="transparent"
            rx={14}
            data={stock}
            onTouchStart={data => event =>
              this.handleTooltip({
                event,
                data,
                xStock,
                xScale,
                yScale,
              })}
            onTouchMove={data => event =>
              this.handleTooltip({
                event,
                data,
                xStock,
                xScale,
                yScale,
              })}
            onMouseMove={data => event =>
              this.handleTooltip({
                event,
                data,
                xStock,
                xScale,
                yScale,
              })}
            onMouseLeave={data => event => hideTooltip()}
          />
          {tooltipData && (
            <g>
              {/* <Line
                from={{ x: tooltipLeft, y: 0 }}
                to={{ x: tooltipLeft, y: yMax }}
                stroke="rgba(92, 119, 235, 1.000)"
                strokeWidth={2}
                style={{ pointerEvents: 'none' }}
                strokeDasharray="2,2"
              /> */}
              {/* <circle
                cx={tooltipLeft}
                cy={tooltipTop + 1}
                r={4}
                fill="red"
                fillOpacity={0.1}
                stroke="black"
                strokeOpacity={0.1}
                strokeWidth={2}
                style={{ pointerEvents: 'none' }}
              /> */}
              <circle
                cx={tooltipLeft}
                cy={tooltipTop}
                r={12}
                fill="#fff"
                stroke="#36436B"
                strokeWidth={5}
                style={{ pointerEvents: 'none' }}
              />
            </g>
          )}
        </svg>
        {tooltipData && (
          <div>
            <Tooltip
              top={tooltipTop - 12}
              left={tooltipLeft + 24}
              style={{
                // left: 570,
                backgroundColor: '#fff',
                color: '#36436B',
                fontSize: 15,
                fontWeight: 600,
                lineHeight: 1.5,
                padding: '8px 13px',
                boxShadow: '0 0 2px 2px rgba(0, 0, 0, 0.1)'
              }}
            >
              {`${Math.floor(yStock(tooltipData) )}\n ILS`}
            </Tooltip>
            {/* <Tooltip
              top={yMax - 14}
              left={tooltipLeft}
              style={{
                transform: 'translateX(-50%)',
                // width: 40,
              }}
            >
              {formatDate(xStock(tooltipData))}
            </Tooltip> */}
          </div>
        )}
      </div>
    );
  }
}

export default withTooltip(Area);
