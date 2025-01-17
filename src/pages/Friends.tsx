import { useState } from "react";
import Nav from "../components/Nav";
import SecondLevelMenu from "../components/SecondLevelMenu";
import Footer from "../components/Footer";

function Friends() {
  const [filter, setFilter] = useState<"all" | "friends">("all");
  const users: Array<{handle: string, lastSubmission: number, numSubmissions: number, acSubmissions: number}> = [
    {handle: "hollycow", lastSubmission: 3, numSubmissions:100, acSubmissions: 12}, 
    {handle: "asdasd", lastSubmission: 3, numSubmissions:100, acSubmissions: 12},
    {handle: "asdsadow", lastSubmission: 1, numSubmissions:100, acSubmissions: 12},
    {handle: "dfsddfow", lastSubmission: 2, numSubmissions:100, acSubmissions: 12}
  ]

  return (
    <>
      <Nav logged={true} activeTab="friends" role="contestant"/>
      <div className="h-[100px] w-[100vw] bg-white text-center align-middle pt-[10px]">
        <h1 className="font-[500] text-[30px] leading-[100px]">Add Friends</h1>
      </div>
      
      <div className="w-[100vw] h-[80px] bg-white">
        <div className="w-[60vw]">
          <SecondLevelMenu options={["all", "friends"]} labels={["All Users", "Friends"]} selected={filter} select={setFilter}/>
        </div>
        <div className="w-[40vw] h-[80px] float-right flex justify-center items-center" >
          <input id="search-bar" type="search" className="border-solid border-[#B8B8B8] border-[3px] rounded-[10px] w-[200px] h-[35px] p-[3px] placeholder:text-center" 
          placeholder="Search..."/>
        </div>
      </div>

      <div className="w-[100vw] bg-[#D9D9D9] min-h-[calc(100vh - 260px)] py-[30px]">
        <div className="flex flex-col justify-around gap-[20px] items-center">
          {users.map(u => {
            return(
            <div className="bg-white shadow-[1px_2px_4px_#00000040] rounded-[8px] w-[750px] h-[100px] flex justify-around items-center">
              <div className="w-[200px]">
                <h3 className="font-[700] text-[18px]">{u.handle}</h3>
                <p><span className="text-[#19BF6E]">{u.acSubmissions}</span>/{u.numSubmissions}</p>
              </div>
              <div className="text-[#464646]">
                <h3 className="font-[700] text-[15px]">Last Submission</h3>
                <p>{u.lastSubmission} days ago</p>
              </div>
              <button className="bg-main w-[85px] h-[35px] rounded-[8px]">
                <span className="text-white font-[500] ">Add </span>
              </button>
             </div>
            );
          })}
        </div>
      </div>

      <Footer/>
    </>
  );
}

export default Friends;
