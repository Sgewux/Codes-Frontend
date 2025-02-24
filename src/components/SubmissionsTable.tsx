import { Link } from "react-router-dom";
import SubmissionRow from "../types/SubmissionRow";


interface SubmissionsTableProps {
  submissions: Array<SubmissionRow>;
}

function SubmissionsTable({ submissions }: SubmissionsTableProps) {
 
  const statusMessage = (s: string) => {
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
    }
  };
  if (submissions.length == 0) {
    return <span>{"You haven't submitted any code :c"}</span>;
  } else {
    return (
      <table className="border-collapse w-[80%] shadow-[0_1px_4px_#00000040] rounded-[15px] bg-white">
        <tr className="border-solid border-[#f3f3f3] border-b-[3px]">
          <th className="text-[#4E80C4] text-[18px] w-[200px] h-[50px]">
            <span>Id</span>
          </th>
          <th className="text-[#4E80C4] text-[18px] w-[200px] h-[50px]">
            <span>Problem Name</span>
          </th>
          <th className="text-[#4E80C4] text-[18px] w-[200px] h-[50px]">
            <span>Veredict</span>
          </th>
          <th className="text-[#4E80C4] text-[18px] w-[200px] h-[50px]">
            <span>Date</span>
          </th>
        </tr>
        {submissions.map((s, i) => {
          const formattedDate = new Date(s.date).toLocaleString("es-ES", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          });
          return (
            <tr className={`${s.status == "AC" ? "bg-[#19BF6E] text-white" : ""}`}>
              <th className={`font-[400] text-[15px] w-[200px] h-[50px] ${i == (submissions.length - 1) ? "rounded-bl-[15px]" : ""}`}>
                <Link to={`/submissions/${s.id}`} target="_blank">
                  <span className="transition-[0.3s] hover:text-[#235598] cursor-pointer underline">{s.id}</span>
                </Link>
              </th>
              <th className=" font-[400] text-[15px] w-[200px] h-[50px]">
                {s.problem_name}
              </th>
              <th className="font-[400] text-[15px] w-[200px] h-[50px] ">
                {statusMessage(s.status)}
              </th>
              <th className={`font-[400] text-[15px] w-[200px] h-[50px] ${i == (submissions.length - 1) ? "rounded-br-[15px]" : ""}`}>
                {formattedDate}
              </th>
            </tr>
          );
        })}
      </table>
    );
  }
}

export default SubmissionsTable;
