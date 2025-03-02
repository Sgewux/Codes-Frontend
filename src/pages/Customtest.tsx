import { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function CustomTest() {
  const [code, setCode] = useState("");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleRun = async () => {
    setOutput("Running...");
    setTimeout(() => {
      setOutput("Execution result will appear here.");
    }, 1000);
  };

  return (
    <>
      <Nav />
      <div className="flex flex-col items-center p-6">
        <h2 className="text-2xl font-semibold mb-4">Custom Test</h2>
        <div className="w-full max-w-4xl flex space-x-6 h-96">
          <div className="w-2/3 flex flex-col space-y-4">
            <textarea
              className="w-full flex-grow p-4 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 font-mono"
              placeholder="Paste your C++ code here"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>
          <div className="w-1/3 flex flex-col space-y-4 h-full">
            <textarea
              className="w-full flex-grow p-4 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 font-mono"
              placeholder="Enter custom input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <div className="w-full flex-grow p-4 border rounded-lg shadow-sm bg-gray-100 font-mono">
              <p className="text-gray-600">{output || "Output will be displayed here."}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="w-[100px] h-[35px] text-white rounded-[8px] bg-main"
          onClick={handleRun}
        >
          Run Code
        </button>
      </div>
      <Footer />
    </>
  );
}
