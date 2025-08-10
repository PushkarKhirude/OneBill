import React, { useContext, useEffect, useRef } from "react";
import formDataObj from "../utils/formDataObject";
import MyDocument from "./MyDocument";
import { PDFDownloadLink } from "@react-pdf/renderer";
import FormDataContext from "../utils/FormDataContext";

const Header = ({ setFormData, setShowPreview, showPreview }) => {
  const data = useContext(FormDataContext);

  //this is to render a new instance of PDFDownloadLink every single time
  //so every render, a new instance of pdf is generated behing the scene.
  //if this is not done then the app crashes when deleting elements from pdf
  const count = useRef(0);
  useEffect(() => {
    count.current++;
  });

  //handler for preview button, to toggle preview on and off
  const handlePreview = () => {
    const flag = !showPreview;
    setShowPreview(flag);
  };

  //set color of preview button based on state of preview.
  const previewBg = showPreview ? "bg-amber-200" : "bg-blue-200";

  return (
    <div className="header  flex justify-between border-b bg-blue-50 border-blue-800 sticky top-0 z-30 ">
      <button
        className="border hover:shadow-xl p-2 rounded-lg font-bold mx-auto my-5 cursor-pointer hover:bg-red-300 active:bg-red-500 bg-blue-200"
        onClick={() => setFormData(formDataObj)}
      >
        Clear All ✖
      </button>
      <PDFDownloadLink
        key={count.current}
        document={<MyDocument data={data} />}
        fileName={`${formDataObj.id}.pdf`}
        className="border hover:shadow-xl p-2 rounded-lg font-bold mx-auto my-5 cursor-pointer hover:bg-green-300 active:bg-green-500 bg-blue-200"
      >
        {({ blob, url, loading, error }) =>
          loading ? "Download ⬇" : "Download ⬇"
        }
      </PDFDownloadLink>

      <button
        className={`border p-2 rounded-lg font-bold mx-auto my-5 cursor-pointer hover:bg-amber-300 active:bg-blue-100 ${previewBg} hover:shadow-xl`}
        onClick={handlePreview}
      >
        Preview
      </button>
    </div>
  );
};

export default Header;
