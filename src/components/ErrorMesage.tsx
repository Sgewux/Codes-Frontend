interface ErrorMessageProps {
  active: boolean;
  message: string;
};

function ErrorMessage({ active, message}: ErrorMessageProps){
  return(
    <div className={`${active ? "" : "hidden"} bg-[#fae5e5] w-[inherit] h-[35px] px-[10px] leading-[35px]`}>
      <p className="text-[#b30000] text-[15px]">{`Error: ${message}`}</p>
    </div>
  );
}

export default ErrorMessage;