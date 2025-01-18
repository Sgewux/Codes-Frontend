import { useState } from "react";
import Nav from "../components/Nav";
import SecondLevelMenu from "../components/SecondLevelMenu";
import Footer from "../components/Footer";

function Problemsetter(){
  const [option, setOption] = useState<"Create" | "Read" | "Update" | "Delete">("Create");
  return (
    <>
      <Nav logged={true} activeTab="problemsetter" role="problemsetter"/>
      <div className="h-[100px] w-[100vw] bg-white text-center align-middle pt-[10px]">
        <h1 className="font-[500] text-[30px] leading-[100px]">Problemsetter</h1>
      </div>

      <div className="w-[100vw] h-[80px]">
        <SecondLevelMenu options={["Create", "Read", "Update", "Delete"]} labels={["Create", "Read", "Update", "Delete"]} selected={option} select={setOption}/>
      </div>

      <div className="w-[100vw] bg-[#D9D9D9] min-h-[calc(100vh-260px)] py-[30px]">

      </div>

      <Footer/>
    </>
  );
}

export default Problemsetter;