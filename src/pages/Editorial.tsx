import { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { useParams } from "react-router-dom";

// Render markdown
import Markdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";



function Editorial(){
  const { id } = useParams();
  const [text, setText] = useState<string|null>();
  const [visiblePercentage, setVisiblePercentage] = useState<number>(25);
  const [contentHeight, setContentHeight] = useState<number>(0);
  const divRef = useRef<HTMLDivElement | null>(null);
  const textD = `## The Role of Mathematics in Problem Solving  

Mathematics plays a crucial role in solving real-world problems, from engineering to economics. One of the most fundamental concepts is optimization, where we seek to maximize or minimize a function given certain constraints. For example, in machine learning, we often minimize a **loss function** $L(\theta)$ to improve model accuracy:  

$$
\\theta^* = \\arg\\min_{\\theta} L(\\theta)
$$  

Another essential area is combinatorics, which helps in counting possibilities and analyzing complexity. The number of ways to arrange $n$ distinct objects is given by the factorial function:  

$$
n! = n \\times (n-1) \\times (n-2) \\times \\dots \\times 1
$$  

## The Power of Mathematical Thinking  

Mathematical thinking is not just about numbers; it's about **logical reasoning and abstraction**. Consider graph theory, where we model relationships using nodes and edges. A common problem is finding the shortest path between two points, often solved using **Dijkstra's Algorithm**, which efficiently finds the minimum cost path in a weighted graph.  

Probability theory also plays a role in decision-making. The **Bayes' theorem** helps update beliefs based on new evidence:  

$$
P(A \\mid B) = \\frac{P(B \\mid A) P(A)}{P(B)}
$$  

These mathematical tools allow us to approach problems systematically, ensuring accuracy and efficiency in a wide range of fields.  
`;

  useEffect(() => {
    setText(textD);
  }, []);

  useEffect(() => {
    //Scroll height is the height of everything that is inside the div (even if it overflows)
    console.log(divRef.current?.scrollHeight);
    if(divRef.current?.scrollHeight){
      setContentHeight(divRef.current.scrollHeight);
    } else {
      setContentHeight(0);
    }
  }, [text]);

  const increaseVisibility = () => {
    setVisiblePercentage(Math.min(100, visiblePercentage + 25));
  };

  if(text){
    return(
      <>
        <Nav/>
        <div className="w-[100vw] min-h-[calc(100vh-80px)] py-[30px] px-[100px] flex flex-col items-center gap-[30px]">
          <div className="flex flex-col items-center">
            <h3 className="text-main font-[300] text-[20px]">Editorial</h3>
            <h1 className="font-[500] text-[30px]">Problem Name</h1>
          </div>
  
          <div className="border-solid border-l-[3px] border-main px-[15px] overflow-hidden h-[396px]"
            ref={divRef}
            style={{
              height: `${Math.ceil(visiblePercentage*contentHeight/100)}px`,
              WebkitMaskImage:
              visiblePercentage < 100
                ? "linear-gradient(to bottom, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0))"
                : "none",
            }}
            >
            <Markdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}
              components={{
                h1: ({ children }) => <h1 className="text-3xl font-semibold">{children}</h1>,
                h2: ({ children }) => <h2 className="text-2xl font-semibold">{children}</h2>,
                h3: ({ children }) => <h3 className="text-xl font-semibold">{children}</h3>,
                p: ({ children }) => <p className="mb-4">{children}</p>,
              }}>
              {text}
            </Markdown>
          </div>
          {visiblePercentage < 100 
            ? <span className="text-main font-[500] text-[20px] cursor-pointer" onClick={increaseVisibility}>Read more...</span> 
            : ''}
          {visiblePercentage < 100 
            ? <button className="w-[130px] h-[38px] bg-main text-white rounded-[25px] text-[20px]" 
              onClick={() => setVisiblePercentage(100)}>Show All</button> 
            : ''}
        </div>
        <Footer/>
      </>
    );
  } else {
    return <p>Loading...</p>;
  }

}

export default Editorial;