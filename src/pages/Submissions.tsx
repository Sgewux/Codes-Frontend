import { useState } from "react";
import Nav from "../components/Nav";
import SubmissionsTable from "../components/SubmissionsTable";
import Footer from "../components/Footer";

function Submissions(){
  const[filter, setFilter] = useState<"all" | "accepted" | "failed">("all"); //according to this fetch data with useEffect

  return(
    <>
      <div className="w-[100vw] h-[100vh] bg-[#D9D9D9]">
        <Nav logged={false} role="guest"/>
        <div className="h-[50px] w-[100vw] bg-white text-center align-middle pt-[10px]">
          <h1 className="font-[500] text-[30px] leading-[50px]">User Submissions</h1>
        </div>

          <div className="flex flex-row justify-around w-[100vw] h-[80px] align-middle leading-[80px] text-center float-left bg-white">
              <div className={`h-[80px] ${filter == "all" ? "border-solid border-[#4E80C4] border-b-[3px]" : ""}`}>
                  <span className={`text-[18px] cursor-pointer ${filter=="all" ? "text-[#4E80C4] font-[500]" : "font-[300]"} transition-[0.3s] hover:text-[#235598]`} onClick={() => setFilter("all")}>All</span>
              </div>
              <div className={`h-[80px] ${filter == "accepted" ? "border-solid border-[#4E80C4] border-b-[3px]" : ""}`}>
                  <span className={`text-[18px] cursor-pointer ${filter=="accepted" ? "text-[#4E80C4] font-[500]" : "font-[300]"} transition-[0.3s] hover:text-[#235598]`} onClick={() => setFilter("accepted")}>Accepted</span>
              </div>
              <div className={`h-[80px] ${filter == "failed" ? "border-solid border-[#4E80C4] border-b-[3px]" : ""}`}>    
                  <span className={`text-[18px] cursor-pointer ${filter=="failed" ? "text-[#4E80C4] font-[500]" : "font-[300]"} transition-[0.3s] hover:text-[#235598]`}onClick={() => setFilter("failed")}>Failed</span>
              </div>
          </div>

          <div className="w-[100vw] flex justify-center items-center pt-[30px]">
            <SubmissionsTable/>
          </div>
        
      </div>

      <Footer/>
    </>

  );
}

export default Submissions;