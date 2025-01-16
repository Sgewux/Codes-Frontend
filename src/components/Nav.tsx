import { Link } from 'react-router-dom';

interface NavProps {
    logged: boolean; // True if user is logged in
    activeTab?: "problems" | "friends" | "problemsetter";
    role: "contestant" | "admin" | "problemsetter" | "guest";
}   

function Nav({ logged, activeTab, role }: NavProps) {
    return (
        <div className="h-[80px] w-[100vw] sticky bg-white shadow-[0_2px_4px_#00000040] top-0">
            <div className="flex flex-row">
                <div className="text-center h-[80px] w-[12vw] align-middle leading-[80px]">
                    <span className="text-[30px] font-[500]"><span className="text-main">C</span>od<span className="text-main">es</span></span>
                </div>

                <div className="h-[80px] w-[76vw] flex flex-row justify-around align-middle leading-[80px] text-center">
                    <div className={`h-[80px] ${activeTab == "problems" ? "border-solid border-[#4E80C4] border-b-[3px]" : ""}`}>
                        <Link to={"/problems"}>
                            <span className={`text-[18px] cursor-pointer ${activeTab == "problems" ? "text-[#4E80C4] font-[500]" : "font-[300]"} transition-[0.3s] hover:text-[#235598]`}>
                                Problems
                            </span>
                        </Link>

                    </div>

                    <div className={`h-[80px] ${activeTab == "friends" ? "border-solid border-[#4E80C4] border-b-[3px]" : ""}`} >
                        <span className={`text-[18px] cursor-pointer  ${activeTab == "friends" ? "text-[#4E80C4] font-[500]" : "font-[300]"} transition-[0.3s] hover:text-[#235598]`}>
                            Friends
                        </span>
                    </div>

                    { (role == "admin" || role == "problemsetter") ? 
                            (<div className={`h-[80px] ${activeTab == "problemsetter" ? "border-solid border-[#4E80C4] border-b-[3px]" : ""}`}>
                                <span className={`text-[18px] cursor-pointer ${activeTab == "problemsetter" ? "text-[#4E80C4] font-[500]" : "font-[300]"} transition-[0.3s] hover:text-[#235598]`}>
                                    Problemsetter
                                </span>
                            </div>) : <></>
                    }
        
                </div>

                <div className="text-center h-[80px] w-[12vw] align-middle leading-[80px]">
                    <span className="text-[15px] ">Enter | Register</span>
                </div>

            </div>

        </div>
    );
}

export default Nav;