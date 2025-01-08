import { useState } from "react";
import Nav from "../components/Nav";
import ProblemsTable from "../components/ProblemsTable";

function Problems(){
  const[filter, setFilter] = useState<"all" | "accepted" | "tried">("all"); //according to this fetch data with useEffect
  const problems: Array<{id: number, problemName: string, status: "AC" | "TL" | "WA" | "CE" | "RT" | undefined, author: string}> = [
    {id: 1231, problemName: "Max problem", status:undefined, author: "John Doe"},
    {id: 1231, problemName: "Max problem", status:"AC", author: "John Doe"},
    {id: 1231, problemName: "Max problem", status:"WA", author: "John Doe"},
    {id: 1231, problemName: "Max problem", status:undefined, author: "John Doe"},
  ];

  return(
    <div className="w-[100vw] h-[100vh] bg-[#D9D9D9]">
      <Nav activeTab={"problems"} logged={false} role="guest"/>
      {/* <div className="h-[100px] w-[100cw] bg-white text-left align-middle leading-[50px] px-[50px]">
        <h1 className="font-[500] text-[30px]">Problems</h1>
      </div> */}
      <div className="h-[80px] w-[100vw] bg-white">
          <div className="flex flex-row justify-around w-[60vw] align-middle leading-[80px] text-center float-left h-[80px]">
              <div className={`h-[80px] ${filter == "all" ? "border-solid border-[#4E80C4] border-b-[3px]" : ""}`}>
                  <span className={`text-[18px] cursor-pointer ${filter=="all" ? "text-[#4E80C4] font-[500]" : "font-[300]"} transition-[0.3s] hover:text-[#235598]`} onClick={() => setFilter("all")}>All problems</span>
              </div>
              <div className={`h-[80px] ${filter == "accepted" ? "border-solid border-[#4E80C4] border-b-[3px]" : ""}`}>
                  <span className={`text-[18px] cursor-pointer ${filter=="accepted" ? "text-[#4E80C4] font-[500]" : "font-[300]"} transition-[0.3s] hover:text-[#235598]`} onClick={() => setFilter("accepted")}>Accepted</span>
              </div>
              <div className={`h-[80px] ${filter == "tried" ? "border-solid border-[#4E80C4] border-b-[3px]" : ""}`}>
                  <span className={`text-[18px] cursor-pointer ${filter=="tried" ? "text-[#4E80C4] font-[500]" : "font-[300]"} transition-[0.3s] hover:text-[#235598]`}onClick={() => setFilter("tried")}>Tried</span>
              </div>
          </div>

          <div className="w-[40vw] h-[80px] float-right flex justify-center items-center" >
              <input type="search" className="border-solid border-[#B8B8B8] border-[3px] rounded-[10px] w-[200px] h-[35px] p-[3px] placeholder:text-center" 
              placeholder="Search..."/>
          </div>
      </div>

      <div className="flex justify-center items-center mt-[30px]">
        <ProblemsTable problems={problems}/>
      </div>
      
    </div>
  );
}

export default Problems;