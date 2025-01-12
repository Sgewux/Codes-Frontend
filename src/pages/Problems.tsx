import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import ProblemsTable from "../components/ProblemsTable";
import ProblemRow from "../types/ProblemRow";
import { getProblems, getProblemsByName } from "../api/problems";
import PageSelector from "../components/PageSelector";

function Problems(){
  const [filter, setFilter] = useState<"all" | "accepted" | "tried" >("all"); //according to this fetch data with useEffect
  const [problems, setProblems] = useState<Array<ProblemRow>>();
  const [page, setPage] = useState<number>(1);
  const [numOfPages, setNumOfPages] = useState<number>(0);
  const [search, setSearch] = useState<string|null>(null);
  const pageLenght = 5;

  const changeFilter = (o: "all" | "accepted" | "tried") => {
    setFilter(o);
    setPage(1);
    setSearch(null);
    (document.getElementById("search-bar") as HTMLInputElement).value = "";
  };

  const handleSearchBar = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setPage(1);
  };

  useEffect(() => {
    const get = async () => {
      if(search){
        setFilter("all");
        const res = await getProblemsByName(pageLenght, page, "shollyero", search);
        setProblems(res.data.problems);
        setNumOfPages(res.data.numOfPages);
      } else {
        const res = await getProblems(pageLenght, page, "shollyero", filter);
        setProblems(res.data.problems);
        setNumOfPages(res.data.numOfPages);
      }

    };

    get();
    
  }, [filter, page, search]);

  if(problems){
    return(
      <div className="w-[100vw] h-[100vh] bg-[#D9D9D9]">
        <Nav activeTab={"problems"} logged={false} role="guest"/>
        {/* <div className="h-[100px] w-[100cw] bg-white text-left align-middle leading-[50px] px-[50px]">
          <h1 className="font-[500] text-[30px]">Problems</h1>
        </div> */}
        <div className="h-[80px] w-[100vw] bg-white">
            <div className="flex flex-row justify-around w-[60vw] align-middle leading-[80px] text-center float-left h-[80px]">
                <div className={`h-[80px] ${filter == "all" ? "border-solid border-[#4E80C4] border-b-[3px]" : ""}`}>
                    <span className={`text-[18px] cursor-pointer ${filter=="all" ? "text-[#4E80C4] font-[500]" : "font-[300]"} transition-[0.3s] hover:text-[#235598]`} onClick={() => changeFilter("all")}>All problems</span>
                </div>
                <div className={`h-[80px] ${filter == "accepted" ? "border-solid border-[#4E80C4] border-b-[3px]" : ""}`}>
                    <span className={`text-[18px] cursor-pointer ${filter=="accepted" ? "text-[#4E80C4] font-[500]" : "font-[300]"} transition-[0.3s] hover:text-[#235598]`} onClick={() => changeFilter("accepted")}>Accepted</span>
                </div>
                <div className={`h-[80px] ${filter == "tried" ? "border-solid border-[#4E80C4] border-b-[3px]" : ""}`}>
                    <span className={`text-[18px] cursor-pointer ${filter=="tried" ? "text-[#4E80C4] font-[500]" : "font-[300]"} transition-[0.3s] hover:text-[#235598]`}onClick={() => changeFilter("tried")}>Tried</span>
                </div>
            </div>
  
            <div className="w-[40vw] h-[80px] float-right flex justify-center items-center" >
                <input id="search-bar" type="search" className="border-solid border-[#B8B8B8] border-[3px] rounded-[10px] w-[200px] h-[35px] p-[3px] placeholder:text-center" 
                placeholder="Search..." onChange={e => handleSearchBar(e)}/>
            </div>
        </div>
  
        <div className="flex flex-col justify-center items-center mt-[30px] bg-[#D9D9D9]" >
          <ProblemsTable problems={problems}/>
          <div className="mt-[30px]">
            <PageSelector numOfPages={numOfPages} currentPage={page} setPage={setPage}/>
          </div>
        </div>
        
      </div>
    );
  } else {
    return <p>Loading...</p>
  }

}

export default Problems;