import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface NavProps {
  activeTab?: "problems" | "friends" | "problemsetter";
}

function Nav({ activeTab }: NavProps) {
  const { user } = useAuth();
  const { logout_context } = useAuth();

  const handleLogout = async () => {
    try {
      await logout_context();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const loadLogoutOrRegister = () => {
    if(user){
      return (
        <div className={`w-[18vw] flex justify-around items-center px-[20px] leading-[80px]`} onClick={handleLogout}>
          <span className={`text-[18px] cursor-pointer transition-[0.3s] hover:text-[#235598] font-[300]`}>
            Logout
          </span>
        </div>
      );
    } else {
      return (
        <div className='w-[18vw] flex justify-around items-center px-[20px]'>
          <div className={`h-[80px] align-middle leading-[80px]`}>
            <Link to={"/login"}>
              <span className={`text-[18px] cursor-pointer transition-[0.3s] hover:text-[#235598] font-[300]`}>
                Login
              </span>
            </Link>
          </div>
          <span className="font-[300]">Or</span>
          <div className={`h-[80px] align-middle leading-[80px]`}>
            <Link to={"/register"}>
              <span className={`text-[18px] cursor-pointer transition-[0.3s] hover:text-[#235598] font-[300]`}>
                Register
              </span>
            </Link>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="h-[80px] w-[100vw] sticky bg-white shadow-[0_2px_4px_#00000040] top-0 z-[1000]">
      <div className="flex flex-row">
        <Link to={user ? `/users/${user.handle}` : ''}>
          <div className="text-center h-[80px] w-[12vw] align-middle leading-[80px]">
            <span className="text-[30px] font-[500]"><span className="text-main">C</span>od<span className="text-main">es</span></span>
          </div>
        </Link>

        <div className="h-[80px] w-[70vw] flex flex-row justify-around align-middle leading-[80px] text-center">
          <div className={`h-[80px] ${activeTab == "problems" ? "border-solid border-[#4E80C4] border-b-[3px]" : ""}`}>
            <Link to={"/problems"}>
              <span className={`text-[18px] cursor-pointer ${activeTab == "problems" ? "text-[#4E80C4] font-[500]" : "font-[300]"} transition-[0.3s] hover:text-[#235598]`}>
                Problems
              </span>
            </Link>

          </div>

          {(user?.roles.includes("contestant")) ? 
            (<div className={`h-[80px] ${activeTab == "friends" ? "border-solid border-[#4E80C4] border-b-[3px]" : ""}`} >
              <Link to={"/friends"}>
                <span className={`text-[18px] cursor-pointer  ${activeTab == "friends" ? "text-[#4E80C4] font-[500]" : "font-[300]"} transition-[0.3s] hover:text-[#235598]`}>
                  Friends
                </span>
              </Link>
            </div>) : <></>
          }

          {(user?.roles.includes("problem_setter")) ?
            (<div className={`h-[80px] ${activeTab == "problemsetter" ? "border-solid border-[#4E80C4] border-b-[3px]" : ""}`}>
              <Link to={`/problemsetter/${user.handle}`}>
                <span className={`text-[18px] cursor-pointer ${activeTab == "problemsetter" ? "text-[#4E80C4] font-[500]" : "font-[300]"} transition-[0.3s] hover:text-[#235598]`}>
                  Problemsetter
                </span>
              </Link>
            </div>) : <></>
          }

        </div>
        
        {loadLogoutOrRegister()}

      </div>

    </div>
  );
}

export default Nav;