interface SecondLevelMenuProps {
  options: Array<string>; // Available options
  labels: Array<string>;
  selected: string; // Currently selected option
  select: (o: any) => any; // Setter function for change the option (useState setter funciton)
};

function SecondLevelMenu({options, labels,  selected, select}: SecondLevelMenuProps){
  return (
    <div className="flex flex-row justify-around align-middle leading-[80px] text-center float-left h-[80px] w-[inherit]">
      {options.map((o, i) => {
        return (
          <div className={`h-[80px] ${o == selected ? "border-solid border-[#4E80C4] border-b-[3px]" : ""}`}>
            <span className={`text-[18px] cursor-pointer ${o == selected ? "text-[#4E80C4] font-[500]" : "font-[300]"} transition-[0.3s] hover:text-[#235598]`} onClick={() => select(o)}>{labels[i]}</span>
          </div>
        );
      })}

    </div>
  );
}

export default SecondLevelMenu;