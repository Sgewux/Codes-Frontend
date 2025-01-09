import ActivityGraph from "../components/ActivityGraph";
import Nav from "../components/Nav";
import SubmissionsTable from "../components/SubmissionsTable";
import UserStats from "../components/UserStats";
import { Link, useParams } from "react-router-dom";

function Profile() {
  const { handle } = useParams();

  return (
    <>
      <Nav logged={true} role="admin" />
      <div className="flex flex-col items-center justify-around gap-[20px]">
        <div className="text-center mt-[15px]">
          <h3 className="text-main font-[300] text-[20px]">Welcome Back!</h3>
          <h1 className="text-[30px] font-[500]">{handle}</h1>
        </div>
        <div className="w-[1000px]">
          <UserStats />
        </div>
        <div className="w-[1000px] bg-[#F3F3F3] py-[30px] text-center flex items-center flex-col rounded-[30px] shadow-[1px_2px_4px_#00000040]">
          <h1 className="font-[500] text-[35px] py-[15px] ">
            Last Submissions
          </h1>
          <SubmissionsTable />
          
            <span className="mt-[20px] cursor-pointer text-[20px] text-main transition-[0.3s] hover:text-[#235598] ">
              <Link to={`/users/${handle}/submissions`} target="_blank">See all submissions</Link>
            </span>
          
        </div>

        <div className="w-[100vw] h-[220px] flex items-start justify-center">
          <ActivityGraph />
        </div>
      </div>
    </>
  );
}

export default Profile;
