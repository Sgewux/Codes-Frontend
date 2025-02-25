import { Link } from "react-router-dom";

interface ProblemsTableProps {
  problems: Array<ProblemRow>;
};

function ProblemsTable({ problems }:ProblemsTableProps ){
  const statusMessage = (s: string ) => {
    if (s == "AC") {
      return "Accepted";
    } else if (s == "WA") {
      return "Wrong Answer";
    } else if (s == "TL") {
      return "Time Limit Exceeded";
    } else if (s == "RT") {
      return "Runtime Error";
    } else if (s == "CE") {
      return "Compilation Error";
    } else {
      return "Not tried";
    }
  };
  return(
    <table className="border-collapse w-[80%] shadow-[0_1px_4px_#00000040] rounded-[15px] bg-white">
      <tr className="border-solid border-[#f3f3f3] border-b-[3px]">
        <th className="text-[#4E80C4] text-[18px] w-[200px] h-[50px]">
          <span>Id</span>
        </th>
        <th className="text-[#4E80C4] text-[18px] w-[200px] h-[50px]">
          <span>Problem Name</span>
        </th>
        <th className="text-[#4E80C4] text-[18px] w-[200px] h-[50px]">
          <span>Status</span>
        </th>
        <th className="text-[#4E80C4] text-[18px] w-[200px] h-[50px]">
          <span>Author</span>
        </th>
        <th className="text-[#4E80C4] text-[18px] w-[200px] h-[50px]">
          <span>Solved by</span>
        </th>
      </tr>
      {problems.map((p, i) => {
          return (
            <tr className={`${p.status == "AC" ? "bg-[#19BF6E] text-white" : ""}`}>
              <th className={`font-[400] text-[15px] w-[200px] h-[50px] ${i == (problems.length - 1) ? "rounded-bl-[15px]" : ""}`}>
                <Link to={`/problems/${p.id}`} target="_blank">
                  <span className="transition-[0.3s] hover:text-[#235598] cursor-pointer underline">{p.id}</span>
                </Link>
              </th>
              <th className=" font-[400] text-[15px] w-[200px] h-[50px]">
                {p.name}
              </th>
              <th className="font-[400] text-[15px] w-[200px] h-[50px] ">
                {statusMessage(p.status)}
              </th>
              <th className={`font-[400] text-[15px] w-[200px] h-[50px] `}>
                {p.author}
              </th>
              <th className={`font-[400] text-[15px] w-[200px] h-[50px] ${i == (problems.length - 1) ? "rounded-br-[15px]" : ""}`}>
                  {p.times_solved}
              </th>
            </tr>
          );
        })}
    </table>
  );
}

export default ProblemsTable;