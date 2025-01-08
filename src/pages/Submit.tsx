import { useState } from "react";
import fileIcon from "../static/file_icon.png";

function Submit() {
  const [code, setCode] = useState<string>();
  const [fileName, setFileName] = useState<string | null>(null);

  const dropHandler = (e: React.DragEvent) => {
    e.preventDefault();
    const [file, _] = e.dataTransfer.files;
    const reader = new FileReader();

    if(file && file.type == "text/plain" && file.name.slice(-4) == ".cpp"){
      reader.readAsText(file);

      reader.onload = () => {
        if(typeof(reader.result) == "string"){
          console.log(reader.result);
          setCode(reader.result);
          setFileName(file.name);
        }
      }
    } else {
      alert("Upload a proper C++ file");
    }
  };

  const dragOverHandler = (e: React.DragEvent) => {
    console.log("in drop zone");
    e.preventDefault();
  };

  return (
    <div className="h-[100vh] w-[100vw] ">
      <div className="h-[45vh] flex flex-col  items-center bg-white">
        <div className="w-[90vw] text-left mt-[20px]">
          <h3 className="text-main font-[300] text-[15px]">Submit</h3>
          <h1 className="text-[20px] font-[500]">Problem Name</h1>
        </div>
        <div className="text-left ">
          <h3 className="text-main font-[300] text-[20px]">Drop your file here</h3>
          <div className="bg-[#F3F3F3] h-[150px] w-[1000px] rounded-[15px] shadow-[0_1px_4px_#00000040] flex justify-center items-center"
          onDragOver={(e) => dragOverHandler(e)}
          onDrop={(e) => {dropHandler(e)}}
          >
            {!fileName ? <img src={fileIcon} className="h-[35px] w-[35px]" /> : <p>{fileName}</p>}
            
          </div>
        </div>
        <h3 className="text-main font-[300] text-[20px] mt-[30px]">Or</h3>
      </div>

      {/* <div className="h-[55vh] flex flex-col items-center  bg-main ">
      
        <div className="w-[1000px] mt-[30px] ">
          <h3 className="text-white font-[300] text-[20px]">Paste your code here</h3>
          <textarea className="h-[300px] w-[1000px] p-[10px] rounded-[15px]"/>
        </div>
        
      </div> */}
    </div>
  );
}

export default Submit;
