import { useState } from "react";

function UserStats(){
    const [solvedProblems, setSolvedProblems] = useState<number>(192);
    const [solvedLastMonth, setSolvedLastMonth] = useState<number>(53);
    const[submissions, setSubmissions] = useState<number>(245);
    return (
        <></>
    );
}

export default UserStats;