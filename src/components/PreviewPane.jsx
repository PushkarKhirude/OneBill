import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "./MyDoc";

const PreviewPane = () => {
  return (
    <div className="preview-container border flex-col  h-[90vh] ">
      <h1 className="font-bold text-lg my-3 text-gray-400">Preview</h1>
      <PDFViewer style={{ width: "100%", height: "100%" }}>
        <MyDocument />
      </PDFViewer>
    </div>
  );
};

export default PreviewPane;
