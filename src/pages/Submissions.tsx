import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import SubmissionsTable from "../components/SubmissionsTable";
import Footer from "../components/Footer";
import SecondLevelMenu from "../components/SecondLevelMenu";
import PageSelector from "../components/PageSelector";
import { useParams } from "react-router-dom";
import { getUserSubmissionCount, getUserSubmissions } from "../api/user";
import SubmissionRow from "../types/SubmissionRow";

function Submissions(){
  const [filter, setFilter] = useState<"all" | "accepted" | "tried">("all"); //according to this fetch data with useEffect
  const [page, setPage] = useState<number>(1);
  const [numOfPages, setNumOfPages] = useState<number>(-1);
  const[submissions, setSubmissions] = useState<Array<SubmissionRow>>([]);
  const { handle } = useParams();

  useEffect(() => {
    setPage(1); 
    setNumOfPages(-1);
  }, [filter]);
  
  useEffect(() => {
    const fetchSubmissions = async () => {
      if (!handle || typeof handle !== "string") {
        console.error(`Invalid handle: ${handle}`);
        return;
      }
  
      try {
        const response = await getUserSubmissions(handle, 4, page, filter);
        const countSubmissions = await getUserSubmissionCount(handle, filter)
        setSubmissions(response.data.submissions);
        if(numOfPages == -1) setNumOfPages(Math.ceil(countSubmissions.data.submissionCount / response.data.submissions.length))
        
      } catch (error) {
        console.error(`Error fetching submissions`, error);
      }
    };
  
    fetchSubmissions();
  }, [handle, filter, page, numOfPages]);

  return(
    <>
      <Nav logged={false} role="guest"/>
      <div className="h-[100px] w-[100vw] bg-white text-center align-middle pt-[10px]">
        <h1 className="font-[500] text-[30px] leading-[100px]">User Submissions</h1>
      </div>

      <div className="w-[100vw]">
        <SecondLevelMenu options={["all", "accepted", "tried"]} labels={["All", "Accepted", "tried"]} selected={filter} select={setFilter}/>
      </div>
        
      <div className="flex flex-col  items-center  bg-[#D9D9D9] py-[30px] w-[100vw] min-h-[calc(100vh-260px)]">
        <SubmissionsTable submissions={submissions}/>
        <div className="mt-[30px]">
          <PageSelector numOfPages={numOfPages} currentPage={page} setPage={setPage}/>
        </div>
      </div>

      <Footer/>
    </>

  );
}

export default Submissions;