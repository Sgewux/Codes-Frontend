import { useState } from "react";

function ActivityGraph(){
    const [activity, setActivity] = useState<Array<{date:string, num: number}>>([{"date":"2024-01-21", "num":1},{"date":"2025-01-01", "num":15},{"date":"2025-01-07", "num":1}]);


    const generateSquares = () => {
        const today = new Date(Date.now());
        const numDays = 52*7 + (today.getDay());
        let currDate = new Date();
        currDate.setDate(today.getDate() - numDays);
        let k = 0;

        const eq = (a:Date, b:Date) => {
            return (a.getFullYear() == b.getFullYear() ) && (a.getMonth() == b.getMonth()) && (a.getDate() == b.getDate());
        }

        let buffer = [];
        for(let i = 0; i < 52; i++){

            let col = [];
            for(let j = 0; j<7; j++){
                if(activity[k] !== undefined && eq(currDate, new Date(Date.parse(activity[k].date + "T00:00:00")))){
                    let color:string;
                    if(activity[k].num > 8){
                        color = "#216E39"
                    } else if(activity[k].num > 5){
                        color = "#30A14E";
                    } else if(activity[k].num > 2){
                        color = "#40C463";
                    } else {
                        color="#8bdc99";
                    }

                    col.push(<rect  width={11} height={11} y={13*j} fill={color}/>);
                    k++;
                } else {
                    col.push(<rect  width={11} height={11} y={13*j} fill="rgba(235, 237, 240, 1)"/>);
                }

                currDate.setDate(currDate.getDate() + 1);
            }

            buffer.push(
                <g transform={`translate(${13*i},0)`}>
                    {col}
                </g>
            );
        }

        let col = [];
        for(let j = 0; j<=today.getDay(); j++){
                if(activity[k] !== undefined && eq(currDate, new Date(Date.parse(activity[k].date + "T00:00:00")))){
                    let color:string;
                    if(activity[k].num > 8){
                        color = "#216E39"
                    } else if(activity[k].num > 5){
                        color = "#30A14E";
                    } else if(activity[k].num > 2){
                        color = "#40C463";
                    } else {
                        color="#8bdc99";
                    }

                    col.push(<rect  width={11} height={11} y={13*j} fill={color}/>);
                    k++;
                } else {
                    col.push(<rect  width={11} height={11} y={13*j} fill="rgba(235, 237, 240, 1)"/>);
                }
                
                currDate.setDate(currDate.getDate() + 1);
        }

        buffer.push(
            <g transform={`translate(${13*52},0)`}>
                {col}
            </g>
        );
        return buffer;
    }

    const generateLabels = () => {
        let buffer = [];
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let currMonth = new Date().getMonth();

        for(let i = 0; i < 13; i++){
            buffer.push(<text x ={i*55} y={-5} className="text-[#000000] text-[10px]" >{months[currMonth]}</text>);
            currMonth = (currMonth + 1) % 12;
        }

        buffer.push(<text x ={-22} y={22} className="text-[#000000] text-[10px]" >Mon</text>);
        buffer.push(<text x ={-22} y={48} className="text-[#000000] text-[10px]" >Wed</text>);
        buffer.push(<text x ={-22} y={74} className="text-[#000000] text-[10px]" >Fri</text>);

        return buffer;

    }
    return (
        <div>
            <svg viewBox="-22 -20 721 200" width={1000} >
                <g>
                    {generateSquares()}
                    {generateLabels()}
                </g>
            </svg>
        </div>

    );
}

export default ActivityGraph;