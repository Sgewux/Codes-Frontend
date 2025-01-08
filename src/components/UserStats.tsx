import { useState } from "react";
import check from '../static/check.png';
import calendar from '../static/calendar.png';
import lightbulb from '../static/lightbulb.png';

function UserStats(){
    const [solvedProblems, setSolvedProblems] = useState<number>(192);
    const [solvedLastMonth, setSolvedLastMonth] = useState<number>(53);
    const[submissions, setSubmissions] = useState<number>(245);
    return (
        <div className="flex flex-row flex-wrap justify-around my-[50px] w-[1000px]">
            <div className="h-[120px] w-[300px] bg-[#f3f3f3] shadow-[1px_2px_4px_#00000040] rounded-[10px] py-[15px] px-[30px]">
                <div>
                    <div className="w-[240px] h-[50px] flex items-center">
                        <img src={check} className="h-[35px] w-[35px]"/>
                        <span className="text-[35px] font-[500] mx-[15px]">{solvedProblems}</span>
                    </div>
                    <span className="font-[300] text-[18px] text-[#7D7C7C]">Problems solved for all time</span>
                </div>
            </div>
            <div className="h-[120px] w-[300px] bg-[#f3f3f3] shadow-[1px_2px_4px_#00000040] rounded-[10px] py-[15px] px-[30px]">
                <div>
                    <div className="w-[240px] h-[50px] flex items-center">
                        <img src={calendar} className="h-[35px] w-[35px]"/>
                        <span className="text-[35px] font-[500] mx-[15px]">{solvedLastMonth}</span>
                    </div>
                    <span className="font-[300] text-[18px] text-[#7D7C7C]">Problems solved the last month</span>
                </div>
            </div>
            <div className="h-[120px] w-[300px] bg-[#f3f3f3] shadow-[1px_2px_4px_#00000040] rounded-[10px] py-[15px] px-[30px]">
                <div>
                    <div className="w-[240px] h-[50px] flex items-center">
                        <img src={lightbulb} className="h-[35px] w-[35px]"/>
                        <span className="text-[35px] font-[500] mx-[15px]">{submissions}</span>
                    </div>
                    <span className="font-[300] text-[18px] text-[#7D7C7C]">Submissions for all time</span>
                </div>
            </div>
        </div>
    );
}

export default UserStats;