import SyntaxHighligther from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Nav from "../components/Nav";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";

function SubmissionDetail() {
  const { id } = useParams();
  const submission = {
    id: id,
    problemName: "Wonderful",
    status: "WA",
    date: "2025-01-07",
    executionTime: 0.25,
    contestant: "JohnDoe03",
    code: `#include <bits/stdc++.h>
#define ll long long

using namespace std;

void solve(){
    ll n; ll m;
    cin>>n>>m;
    cout<<max(n,m) + 1<<'\\n';
}

int main(){
    std::ios_base::sync_with_stdio(0);
    std::cin.tie(0);
    std::cout.tie(0);

    long long t;
    std::cin>>t;

    while(t--){
        solve();
    }

    return 0;
}`,
  };

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

  return (
    <>
      <div>
        <div className="flex flex-col justify-around items-center">
          <Nav logged={false} role={"guest"} />
          <div className="h-[80px] w-[100vw] bg-white text-center align-middle ">
            <h1 className="font-[500] text-[30px] leading-[80px]">
              Submission: {submission.id}
            </h1>
          </div>
          
          <table className="border-collapse w-[80%] shadow-[0_1px_4px_#00000040] rounded-[15px] bg-white">
            <tr className="border-solid border-[#f3f3f3] border-b-[3px]">
              <th className="text-[#4E80C4] text-[18px] w-[200px] h-[50px]">
                <span>Contestant</span>
              </th>
              <th className="text-[#4E80C4] text-[18px] w-[200px] h-[50px]">
                <span>Problem Name</span>
              </th>
              <th className="text-[#4E80C4] text-[18px] w-[200px] h-[50px]">
                <span>Veredict</span>
              </th>
              <th className="text-[#4E80C4] text-[18px] w-[200px] h-[50px]">
                <span>Execution time</span>
              </th>
              <th className="text-[#4E80C4] text-[18px] w-[200px] h-[50px]">
                <span>Date</span>
              </th>
            </tr>

            <tr>
              <th className="font-[400] text-[15px] w-[200px] h-[50px]">
                <span>{submission.contestant}</span>
              </th>
              <th className="font-[400] text-[15px] w-[200px] h-[50px]">
                <span>{submission.problemName}</span>
              </th>
              <th className="font-[400] text-[15px] w-[200px] h-[50px]">
                <span>{statusMessage(submission.status)}</span>
              </th>
              <th className="font-[400] text-[15px] w-[200px] h-[50px]">
                <span>{submission.executionTime} s</span>
              </th>
              <th className="font-[400] text-[15px] w-[200px] h-[50px]">
                <span>{submission.date}</span>
              </th>
            </tr>
          </table>
          

          <div className="w-[70vw] border-solid border-[1px] border-[#c2c2c2] rounded-[10px]  mt-[30px] ">
            <div className="border-solid border-b-[1px] border-[#c2c2c2] h-[35px] px-[10px] py-[4px]">
              <div className="float-left">
                <h3 className="text-[#4E80C4] text-[18px] font-[650]">Submission Code:</h3>
              </div>
              <div className="float-right">
                <button className=" h-[25px] w-[50px] rounded-[5px] bg-[#f3f3f3] hover:bg-[#D9D9D9]"
                onClick={() => {navigator.clipboard.writeText(submission.code)}}>Copy</button>
              </div>
            </div>
            <SyntaxHighligther language={"cpp"} style={docco}>
              {submission.code}
            </SyntaxHighligther>
          </div>
        </div>
      </div>
      
      <Footer/>
    </>

  );
}

export default SubmissionDetail;
