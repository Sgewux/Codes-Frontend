import { useState } from "react";
import ProblemsetterProblemRow from "../types/ProblemsetterProblemRow";

function ProblemsetterProblemsTable(){
  const dummyProblems = [
    {id: 123, name:"Madness", publishDate: "2025-03-05", acceptedSubmissions: 12, numberOfSubmissions: 200},
    {id: 153, name:"Carrot", publishDate: "2025-03-05", acceptedSubmissions: 12, numberOfSubmissions: 200},
    {id: 133, name:"Moose", publishDate: "2025-03-05", acceptedSubmissions: 12, numberOfSubmissions: 200},
    {id: 123, name:"Madness", publishDate: "2025-03-05", acceptedSubmissions: 12, numberOfSubmissions: 200},

  ];

  const [problems, setProblems] = useState<Array<ProblemsetterProblemRow>>(dummyProblems);

  return(
    <div className="bg-white w-[1000px]  border-solid border-[#B8B8B8] border-[1px] rounded-[15px] p-[25px] shadow-[1px_2px_4px_#00000040] flex flex-col items-center gap-[30px]">
      <div className="w-[800px]">
        <h1 className="font-[500] text-[30px]">My problems</h1>
      </div>
      
      
      <table className="border-collapse w-[800px] shadow-[0_1px_4px_#00000040] rounded-[15px] bg-white">
        <tr className="border-solid border-[#f3f3f3] border-b-[3px]">
          <th className="text-[#4E80C4] text-[18px] w-[200px] h-[50px]">
            <span>Id</span>
          </th>
          <th className="text-[#4E80C4] text-[18px] w-[200px] h-[50px]">
            <span>Problem Name</span>
          </th>
          <th className="text-[#4E80C4] text-[18px] w-[200px] h-[50px]">
            <span>Editorial</span>
          </th>
          <th className="text-[#4E80C4] text-[18px] w-[200px] h-[50px]">
            <span>Publish Date</span>
          </th>
          <th className="text-[#4E80C4] text-[18px] w-[200px] h-[50px]">
            <span><span className="text-[#19BF6E]">Accepted</span> / Submissions</span>
          </th>
        </tr>
        {problems.map((p) => {
            return (
              <tr className={``}>
                <th className={`font-[400] text-[15px] w-[200px] h-[50px] `}>
                  <span className="transition-[0.3s] hover:text-[#235598] cursor-pointer underline">{p.id}</span>
                </th>
                <th className=" font-[400] text-[15px] w-[200px] h-[50px]">
                  {p.name}
                </th>
                <th className="font-[400] text-[15px] w-[200px] h-[50px] ">
                  {"Editorial Link"}
                </th>
                <th className={`font-[400] text-[15px] w-[200px] h-[50px] `}>
                  {p.publishDate}
                </th>
                <th className={`font-[400] text-[15px] w-[200px] h-[50px] `}>
                    <span className="text-[#19BF6E]">{p.acceptedSubmissions}</span> / {p.numberOfSubmissions}
                </th>
              </tr>
            );
          })}
      </table>
    </div>
  );
}

export default ProblemsetterProblemsTable;