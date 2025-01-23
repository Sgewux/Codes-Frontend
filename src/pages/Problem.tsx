import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { useState } from "react";
import ProblemDisplayInfo from "../types/ProblemDisplayInfo";

// Render markdown
import Markdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

function Problem(){
  const dummyProblem: ProblemDisplayInfo = {
    name: "Hello Madness",
    author: "equisde",
    timeLimit: 2,
    statement: ` You are given 3 numbers $a,b,c$ and you are asked to ouput $max(a,b,c)$ i.e. the biggest one. Can you do it? \n
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n

### Input \n
Three numbers $1\\le a,b,c\\le10^9$ \n
### Output \n
A single number $max(a,b,c)$. \n
### Example \n
**Input**: 1 3 2 \n
**output**: 3
`
  };
  const { id } = useParams();
  const [problem, setProblem] = useState<ProblemDisplayInfo>(dummyProblem);

  return (
    <>
      <Nav logged={true} role="contestant"/>
      <div className="w-[100vw] min-h-[calc(100vh-80px)] bg-white flex flex-col items-center py-[30px]">
        <div className="h-[300px] flex flex-col items-center justify-around">
          <div className="w-[200px] py-[5px] border-solid border-black border-[1px] rounded-[5px] text-center">
            <h3 className="font-[400] text-[20px]">By <span className="font-[700]">{problem.author}</span></h3>
          </div>
          <h1 className="font-[400] text-[50px]">{problem.name}</h1>
          <div className="text-center">
            <h3 className="font-[700] text-[20px]">Time Limit:</h3>
            <span className="font-[20px]">{`${problem.timeLimit} Second${problem.timeLimit > 1 ? "s" : ""}`}</span>
          </div>
          <svg width={60} height={3}>
            <rect x={0} y={0} width={60} height={3} fill="#959393"/>
          </svg>
          <div className="w-[330px] text-center">
            <p className="font-[700] text-[12px] text-[#ABABAB]">Problem editorial and submit pages can be found at the bottom of this page</p>
          </div>
        </div>
        <div className="w-[70vw] my-[30px]">

            <Markdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}
              components={{
                h1: ({ children }) => <h1 className="text-3xl font-semibold">{children}</h1>,
                h2: ({ children }) => <h2 className="text-2xl font-semibold">{children}</h2>,
                h3: ({ children }) => <h3 className="text-xl font-semibold">{children}</h3>,
                p: ({ children }) => <p className="mb-4">{children}</p>,
              }}>
              {problem.statement}
            </Markdown>

        </div>
        <div className="flex justify-around w-[50vw]">
            <button className="bg-main w-[250px] h-[45px] text-center rounded-[8px]" onClick={() => {}}>
              <span className="font-[700] text-white text-[20px]">Need a Hint?</span>
            </button>
            <button className="bg-main w-[250px] h-[45px] text-center rounded-[8px]" onClick={() => {}}>
              <span className="font-[700] text-white text-[20px]">Submit</span>
            </button>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Problem;