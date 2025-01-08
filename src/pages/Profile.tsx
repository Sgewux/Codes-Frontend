import ActivityGraph from "../components/ActivityGraph";
import Nav from "../components/Nav"
import SubmissionsTable from "../components/SubmissionsTable";
import UserStats from "../components/UserStats";

function Profile(){
    return (
        <>
            <Nav logged={true} role="admin"/>
            <div className="flex flex-col items-center justify-around gap-[20px]">
                <div className="text-center mt-[15px]">
                    <h3 className="text-main font-[300] text-[20px]">Welcome Back!</h3>
                    <h1 className="text-[30px] font-[500]">Username</h1>
                </div>
                <div><UserStats/></div>
                <div className="w-[1000px] bg-[#F3F3F3] py-[30px] text-center flex items-center flex-col rounded-[30px]">
                    <h1 className="font-[500] text-[35px] py-[15px] ">Last Submissions</h1>
                    <SubmissionsTable/>
                </div>

                <div className="w-[100vw] h-[220px] flex items-start justify-center">
                    <ActivityGraph/>
                </div>
            </div>
            
        </>
    );
}

export default Profile;