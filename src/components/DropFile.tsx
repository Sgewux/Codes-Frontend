import { useState } from "react";
import fileIcon from "../static/file_icon.png";

interface DropFileProps {
  contentSetter: (c: string) => void; // setter to retrieve dropped file content
  fileExtention: string; // expected extention
}

function DropFile({ contentSetter, fileExtention }: DropFileProps) {
  const [filename, setFilename] = useState<string | null>(null);
  
  const dropHandler = (e: React.DragEvent) => {
    e.preventDefault();
    const [file, _] = e.dataTransfer.files;
    const reader = new FileReader();

    if (file && file.name.slice(-1*(fileExtention.length)) == fileExtention) {
      reader.readAsText(file);

      reader.onload = () => {
        if (typeof reader.result == "string") {
          contentSetter(reader.result);
          setFilename(file.name);
        }
      };
    } else {
      alert(`Please upload a proper ${fileExtention} file.`);
    }
  };

  const dragOverHandler = (e: React.DragEvent) => {
    console.log("in drop zone");
    e.preventDefault();
  };

  return (
    <div 
      className="w-[inherit] h-[inherit] flex justify-center items-center"
      onDragOver={(e) => dragOverHandler(e)}
      onDrop={(e) => dropHandler(e)}
      >
        {!filename ? <img src={fileIcon} className="h-[35px] w-[35px]" /> : <p>{filename}</p>}
    </div>
  );
}

export default DropFile;