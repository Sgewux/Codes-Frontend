import { useState } from "react";
//import "../styles/TwoColorBg.css"
function Register(){
    const [ handle, setHandle ] = useState<string>();
    const [ password, setPassword] = useState<string>();
    const [ confirmedPassword, setConfirmedPassword] = useState<string>();

    const handleSubmit = () => {
        console.log(handle);
        console.log(password);
        console.log(confirmedPassword)
    };

    return(
        <div className="bgx">
            <div className=" h-[100vh] w-[100vw] flex justify-center items-center bg-[linear-gradient(white_50%,#4E80C4_50%)]">
                <div className="h-[525px] w-[460px] shadow-[0_0_8px_#00000040] rounded-[15px] bg-white p-[15px]">
                    <h1 className="text-[45px] font-[500] text-center">Register</h1>

                    <div className="flex flex-col items-center gap-[30px] mt-[30px]">
                        <div>
                            <label className="text-[20px] font-[400] block">Handle</label>
                            <input type="text" className="border-solid border-[2px] border-[#B8B8B8] rounded-[8px] w-[300px] h-[35px] p-1" onChange={(e) => setHandle(e.target.value)}/>
                        </div>

                        <div>
                            <label className="text-[20px] font-[400] block">Password</label>
                            <input type="password" className="border-solid border-[2px] border-[#B8B8B8] rounded-[8px] w-[300px] h-[35px] p-1" onChange={(e) => setPassword(e.target.value)}/>
                        </div>

                        <div>
                            <label className="text-[20px] font-[400] block">Confirm password</label>
                            <input type="password" className="border-solid border-[2px] border-[#B8B8B8] rounded-[8px] w-[300px] h-[35px] p-1" onChange={(e) => setConfirmedPassword(e.target.value)}/>
                        </div>

                        <div>
                            <button className="bg-main w-[145px] h-[38px] rounded-[20px]" onClick={handleSubmit}>
                                <span className="text-white font-[500] text-[20px]">Enter</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Register;