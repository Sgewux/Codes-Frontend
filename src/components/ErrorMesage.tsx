import { useEffect, useState } from "react";

interface ErrorMessageProps {
  active: boolean;
  message: string;
};

function ErrorMessage({ active, message}: ErrorMessageProps){
  const [visible, setVisible] = useState<boolean>(false);


  useEffect(() => {
    if(active){
      setVisible(true);
    } else {
      setTimeout(() => setVisible(false), 400);
    }
  }, [active]);

  return (
    <>
      {(visible) ? 
      (<div className={`transition-opacity duration-300 ${!active? "opacity-0" : "opacity-100"} border border-[#a94646] rounded-[8px] bg-[#fae5e5] w-[inherit] h-[35px] flex justify-center items-center px-[10px] leading-[35px]`}>
        <p className="text-[#b30000] text-[15px]">{`Error: ${message}`}</p>
      </div>)  : ''
      }

    </>
  );

}

export default ErrorMessage;