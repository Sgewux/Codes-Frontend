import { useState } from "react";
import DropFile from "./DropFile";

function EditProblemForm(){
  const [placeholderName, setPlaceholderName] = useState<boolean>(true);
  const [placeholderId, setPlaceholderId] = useState<boolean>(true);
  const [editorialContent, setEditorialContent] = useState<string | null>(null);
  const [statementContent, setStatementContent] = useState<string | null>(null);

  const handleSubmit = () => {
    console.log(statementContent);
  };

  return(
    <div className="bg-white w-[1000px] border-solid border-[#B8B8B8] border-[1px] rounded-[15px] p-[25px] flex flex-col items-center shadow-[1px_2px_4px_#00000040]">
      <div className="w-[800px]">
        <h1 className="font-[500] text-[30px]">Edit Problem</h1>
        <div className="pl-[30px] border-solid border-l-[4px] border-[#3B3B3B] h-[100px] flex flex-col justify-center my-[15px]">
          <p className="font-[400] text-[20px] w-[700px]">
          Statement and editorial will be overwritten if a new file is uploaded, otherwise, they will remain the same.  
          </p>
        </div>
      </div>
      
      <div className="h-[150px] flex flex-col items-center justify-around">
        <div className="w-[800px]">
          <h1 className="font-[500] text-[27px]">Search</h1>
        </div>

        <div className="flex justify-center w-[900px] gap-[43px]">
          <select 
            className={`w-[350px] h-[45px] border-solid border-[#B8B8B8] border-[1px] rounded-[5px] pl-[5px] ${placeholderName ? "text-[#848484]" : ""} `}
            onChange={() => setPlaceholderName(false)}>
            <option value={""} disabled={true} selected={true} hidden={true}>Name</option>
            <option value={""} className="text-black">MaxP</option>

          </select>
          <div className="h-[45px] align-middle text-center ">
            <span className="text-[#848484] leading-[45px]">Or</span>
          </div>
          <select 
            className={`w-[350px] h-[45px] border-solid border-[#B8B8B8] border-[1px] rounded-[5px] pl-[5px] ${placeholderId ? "text-[#848484]" : ""} `}
            onChange={() => setPlaceholderId(false)}>
            <option value={""} disabled={true} selected={true} hidden={true} >Id</option>
            <option value={""} className="text-black">2332</option>
          </select>
        </div>

      </div>

      <div className="w-[900px] flex flex-col items-center gap-[20px]">
        <div className="w-[800px]">
          <h1 className="font-[500] text-[27px]">Edit</h1>
        </div>
        <div className="flex justify-around w-[inherit]">
          <div>
            <p>Statement (.md file)</p>
            <div className="w-[350px] h-[200px] border-solid border-[1px] border-[#B8B8B8] rounded-[5px]">
              <DropFile contentSetter={setStatementContent} fileExtention=".md"/>
            </div>
          </div>

          <div>
            <p>Editorial (.md file)</p>
            <div className="w-[350px] h-[200px] border-solid border-[1px] border-[#B8B8B8] rounded-[5px]">
              <DropFile contentSetter={setEditorialContent} fileExtention=".md"/>
            </div>
          </div>
        </div>
        <button className="bg-main w-[250px] h-[30px] rounded-[8px]" onClick={() => handleSubmit()}>
          <span className="font-[500] text-[20px] text-white">Save changes</span>
        </button>
      </div>
    </div>
  );
}

export default EditProblemForm;