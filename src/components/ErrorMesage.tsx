interface ErrorMessageProps {
  active: boolean;
  message: string;
};

function ErrorMessage({ active, message}: ErrorMessageProps){
  return(
    <div className={`${active ? "" : "hidden"} border border-[#a94646] rounded-[8px] bg-[#fae5e5] w-[inherit] h-[35px] flex justify-center items-center px-[10px] leading-[35px]`}>
      <p className="text-[#b30000] text-[15px]">{`Error: ${message}`}</p>
    </div>
  );

}

export default ErrorMessage;