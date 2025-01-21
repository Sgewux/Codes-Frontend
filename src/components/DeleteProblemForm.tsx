import { useState } from "react";

function DeleteProblemForm() {
  const [placeholderName, setPlaceholderName] = useState<boolean>(true);
  const [placeholderId, setPlaceholderId] = useState<boolean>(true);

  const handleDelete = () => {};

  return(
    <div className="bg-white w-[1000px] border-solid border-[#B8B8B8] border-[1px] rounded-[15px] p-[25px] shadow-[1px_2px_4px_#00000040] flex flex-col justify-between items-center">
      <div className="w-[800px]">
        <h1 className="font-[500] text-[30px]">Delete Problem</h1>
      </div>

      <div className="flex justify-around w-[840px]">
        <select 
          className={`w-[350px] h-[45px] border-solid border-[#B8B8B8] border-[1px] rounded-[5px] pl-[5px] ${placeholderName ? "text-[#848484]" : ""} `}
          onChange={() => setPlaceholderName(false)}>
          <option value={""} disabled={true} selected={true} hidden={true}>Name</option>
          <option value={""} className="text-black">MaxP</option>

        </select>
        <div className="h-[45px] align-middle text-center">
          <span className="text-[#848484] leading-[45px]">Or</span>
        </div>
        <select 
          className={`w-[350px] h-[45px] border-solid border-[#B8B8B8] border-[1px] rounded-[5px] pl-[5px] ${placeholderId ? "text-[#848484]" : ""} `}
          onChange={() => setPlaceholderId(false)}>
          <option value={""} disabled={true} selected={true} hidden={true} >Id</option>
          <option value={""} className="text-black">2332</option>
        </select>
      </div>

      <button className="bg-main w-[250px] h-[30px] rounded-[8px]" onClick={() => handleDelete()}>
        <span className="font-[500] text-[20px] text-white">Delete</span>
      </button>
    </div>
  );
}

export default DeleteProblemForm;
