import { useState } from "react";
import fileIcon from "../static/file_icon.png";
import DropFile from "./DropFile";

function CreateProblemForm() {
  const [name, setName] = useState<string | null>(null);
  const [timeLimit, setTimeLimit] = useState<number | null>(null);
  const [memoryLimit, setmemoryLimit] = useState<number | null>(null);
  const [statementContent, setStatementContent] = useState<string | null>(null);
  const [testCasesContent, setTestCasesContent] = useState<string | null>(null);
  const [expectedOutContent, setExpectedOutContent] = useState<string | null>(null);
  const [editorialContent, setEditorialContent] = useState<string | null>(null);

  const handleSubmit = () => {
    console.log(editorialContent);
  };

  return(
    <div className="bg-white w-[1000px] border-solid border-[#B8B8B8] border-[1px] rounded-[15px] p-[25px] flex flex-col items-center shadow-[1px_2px_4px_#00000040]">
      <div className="w-[800px]">
        <h1 className="font-[500] text-[30px]">Create Problem</h1>
        <div className="pl-[30px] border-solid border-l-[4px] border-[#3B3B3B] h-[150px] flex flex-col justify-center my-[20px]">
          <p className="font-[400] text-[20px] w-[700px]">
            Be carefull! You will not be able to edit the test cases or expected output in the future. 
            It is also reccomended to provide a clear and complete explanation of the input constraints and output format (with expamples if possible) 
            within the problem statement
            </p>
        </div>
      </div>
      
      <div className="w-[900px] flex flex-col items-center gap-[20px]">
        <div className="flex justify-around w-[inherit]">
          <div className="flex flex-col gap-[20px]">
              <div className="">
              <p>Name</p>
              <input type="text" className="w-[350px] h-[45px] border-solid border-[#B8B8B8] border-[1px] rounded-[5px] pl-[5px]" 
                onChange={(e) => {setName(e.target.value)}}
              />
            </div>
            <div>
              <p>Statement (.md file)</p>
              <div 
                className="w-[350px] h-[150px] border-solid border-[#B8B8B8] border-[1px] rounded-[5px]">
                  <DropFile contentSetter={setStatementContent} fileExtention=".md"/>
              </div>
            </div>

            <div>
              <p>TestCases (.txt file)</p>
              <div 
                className="w-[350px] h-[150px] border-solid border-[#B8B8B8] border-[1px] rounded-[5px]">
                  <DropFile contentSetter={setTestCasesContent} fileExtention=".txt"/>
              </div>
            </div>
            
          </div>
          <div className="flex flex-col justify-end gap-[20px]">
            <div>
              <p>TimeLimit (s)</p>
              <input type="number" className="w-[350px] h-[45px] border-solid border-[#B8B8B8] border-[1px] rounded-[5px] pl-[5px]" 
                onChange={(e) => {setTimeLimit(parseInt(e.target.value))}}
              />
            </div>

            <div>
              <p>MemoryLimit (MB)</p>
              <input type="number" className="w-[350px] h-[45px] border-solid border-[#B8B8B8] border-[1px] rounded-[5px] pl-[5px]" 
                onChange={(e) => {setmemoryLimit(parseInt(e.target.value))}}
              />
            </div>

            <div>
              <p>Expected output (.txt file)</p>
              <div 
                className="w-[350px] h-[150px] border-solid border-[#B8B8B8] border-[1px] rounded-[5px]">
                  <DropFile contentSetter={setExpectedOutContent} fileExtention=".txt"/>
              </div>
            </div>

          </div>
        </div>
        <div>
          <p>Editorial (.md file)</p>
          <div 
            className="w-[800px] h-[150px] border-solid border-[#B8B8B8] border-[1px] rounded-[5px]">
              <DropFile contentSetter={setEditorialContent} fileExtention=".md"/>
          </div>
        </div>
        <button className="bg-main w-[250px] h-[30px] rounded-[8px]" onClick={() => handleSubmit()}>
          <span className="font-[500] text-[20px] text-white">Add problem</span>
        </button>
      </div>
    </div>
  );
}

export default CreateProblemForm;
