import React from "react";
import Circle from "../chart/chart";
import "./ChartBlock.css"

const ChartBlock = () => {
    return (
      <div className="chart-block">
        <Circle  listTime={[1, 2,  3, 0, 6, 0, 0, 0, 0, 0, 0, 100, 150, 140, 70, 80, 90, 60, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 122, ]}/>
        <Circle  listTime={[1, 2,  3, 0, 6, 0, 0, 0, 0, 0, 0, 100, 150, 140, 70, 80, 90, 60, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 122, ]}/>
        <Circle  listTime={[1, 2,  3, 0, 6, 0, 0, 0, 0, 0, 0, 100, 150, 140, 70, 80, 90, 60, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 122, ]}/>
        <Circle  listTime={[1, 2,  3, 0, 6, 0, 0, 0, 0, 0, 0, 100, 150, 140, 70, 80, 90, 60, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 122, ]}/>
        <Circle  listTime={[1, 2,  3, 0, 6, 0, 0, 0, 0, 0, 0, 100, 150, 140, 70, 80, 90, 60, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 122, ]}/>
      </div>
    )
};

export default ChartBlock;