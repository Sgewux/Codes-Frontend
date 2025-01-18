import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import ProblemsTable from "../components/ProblemsTable";
import ProblemRow from "../types/ProblemRow";
import { getProblems, getProblemsByName } from "../api/problems";
import PageSelector from "../components/PageSelector";
import Footer from "../components/Footer";
import SecondLevelMenu from "../components/SecondLevelMenu";

function Problems(){
  const [filter, setFilter] = useState<"all" | "accepted" | "tried" >("all"); //according to this fetch data with useEffect
  const [problems, setProblems] = useState<Array<ProblemRow>>();
  const [page, setPage] = useState<number>(1);
  const [numOfPages, setNumOfPages] = useState<number>(0);
  const [search, setSearch] = useState<string|null>(null);
  const pageLenght = 10;

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
      <>

      <Nav activeTab={"problems"} logged={false} role="guest"/>
      <div className="h-[100px] w-[100vw] bg-white text-center align-middle pt-[10px]">
        <h1 className="font-[500] text-[30px] leading-[100px]">Problemset</h1>
      </div>
      <div className="h-[80px] w-[100vw] bg-white">

          <div className="w-[60vw]">
            <SecondLevelMenu options={["all", "accepted", "tried"]} labels={["All", "Accepted", "Tried"]} selected={filter} select={changeFilter}/>
          </div>

          <div className="w-[40vw] h-[80px] float-right flex justify-center items-center" >
              <input id="search-bar" type="search" className="border-solid border-[#B8B8B8] border-[3px] rounded-[10px] w-[200px] h-[35px] p-[3px] placeholder:text-center" 
              placeholder="Search..." onChange={e => handleSearchBar(e)}/>
          </div>
      </div>

      
      <div className="flex flex-col  items-center  bg-[#D9D9D9] py-[30px] w-[100vw] min-h-[calc(100vh-260px)]" >
          <ProblemsTable problems={problems}/>
          <div className="mt-[30px]">
            <PageSelector numOfPages={numOfPages} currentPage={page} setPage={setPage}/>
          </div>
      </div>

      <Footer/>
      </>
    );
  } else {
    return <p>Loading...</p>
  }

}

export default Problems;