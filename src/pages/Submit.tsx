import { useState } from "react";
import fileIcon from "../static/file_icon.png";

function Submit() {
  const [uploadedCode, setUploadedCode] = useState<string | null>(null);
  const [pastedCode, setPastedCode] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const dropHandler = (e: React.DragEvent) => {
    e.preventDefault();
    const [file, _] = e.dataTransfer.files;
    const reader = new FileReader();

    if (file && file.type == "text/plain" && file.name.slice(-4) == ".cpp") {
      reader.readAsText(file);

      reader.onload = () => {
        if (typeof reader.result == "string") {
          setUploadedCode(reader.result);
          setFileName(file.name);
        }
      };
    } else {
      alert("Upload a proper C++ file");
    }
  };

  const dragOverHandler = (e: React.DragEvent) => {
    console.log("in drop zone");
    e.preventDefault();
  };

  const handleSubmit = () => {
    if (uploadedCode) {
      console.log(uploadedCode);
    } else if (pastedCode) {
      console.log(pastedCode);
    } else {
      alert("You must either paste a code or upload a C++ file.");
    }
  };

  return (
    <div className="h-[100vh] w-[100vw] ">
      <div className="h-[60vh] flex flex-col  items-center bg-white">
        <div className="w-[90vw] text-left mt-[20px]">
          <h3 className="text-main font-[300] text-[15px]">Submit</h3>
          <h1 className="text-[20px] font-[500]">Problem Name</h1>
        </div>

        <div className="text-left">
          <h3 className="text-main font-[300] text-[20px]">
            Paste your code here
          </h3>
          <div className="w-[1000px] h-[265px] bg-[#B8B8B8] rounded-[15px] flex justify-center items-center">
            <textarea
              className="h-[245px] w-[980px] p-[10px] rounded-[15px]"
              onChange={(e) => setPastedCode(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="h-[40vh] flex flex-col items-center justi  bg-main ">
        <div className="text-left ">
          <h3 className="text-white font-[300] text-[20px]">
            Or drop your file here
          </h3>
          <div
            className="bg-[#F3F3F3] h-[150px] w-[1000px] rounded-[15px] shadow-[0_1px_4px_#00000040] flex justify-center items-center"
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => {
              dropHandler(e);
            }}
          >
            {!fileName ? (
              <img src={fileIcon} className="h-[35px] w-[35px]" />
            ) : (
              <p>{fileName}</p>
            )}
          </div>
          <div className="flex justify-center items-center my-[20px]">
            <button className="bg-[#F3F3F3] w-[100px] h-[30px] rounded-[18px]">
              <span className="text-main" onClick={() => handleSubmit()}>
                Good Luck!
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Submit;
