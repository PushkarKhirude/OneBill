import React, { useContext, useEffect, useRef } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "./MyDocument";
import FormDataContext from "../utils/FormDataContext";

const PreviewPane = () => {
  const data = useContext(FormDataContext);
  const count = useRef(0);

  useEffect(() => {
    count.current++;
  });

  //console.log(data);
  return (
    <div className="preview-container flex-col h-[90vh]">
      <h1 className="font-bold text-lg py-3 text-blue-900 opacity-50 bg-blue-50">
        Preview
      </h1>

      <PDFViewer style={{ width: "100%", height: "92%" }} key={count.current}>
        <FormDataContext.Provider value={{ ...data }}>
          <MyDocument data={data} />
        </FormDataContext.Provider>
      </PDFViewer>
    </div>
  );
};

export default PreviewPane;
