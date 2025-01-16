import { Link } from "react-router-dom";

interface SubmissionsTableProps {
  submissions: Array<{
    id: number;
    problem_name: string;
    status: string;
    date: string;
  }>;
}

function SubmissionsTable() {
  const submissions = [
    { id: 121312, problem_name: "Wonderful", status: "WA", date: "2025-01-07" },
    {
      id: 121312,
      problem_name: "Counting Stuff",
      status: "AC",
      date: "2025-01-07",
    },
    {
      id: 121312,
      problem_name: "Counting Stuff",
      status: "CE",
      date: "2025-01-07",
    },
    { id: 121312, problem_name: "A + B", status: "AC", date: "2025-01-07" },
  ]; //Should recieve this as a prop in the future

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
                {s.date}
              </th>
            </tr>
          );
        })}
      </table>
    );
  }
}

export default SubmissionsTable;
