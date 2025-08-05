import React, { useContext, useEffect, useRef, useState } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "./MyDocument";
import FormDataContext from "../utils/FormDataContext";
import PreviewPage from "./PreviewPage";

const PreviewPane = ({ showPreview }) => {
  const data = useContext(FormDataContext); //user's data which they filled in form.

  //this is to render a new instance of PDFViewer every single time
  //if this is not done then the app crashes when deleting elements from pdf
  const count = useRef(0);
  useEffect(() => {
    count.current++;
  });

  return (
    <div className="preview-container overflow-auto flex-col h-[90vh] mr-2">
      <h1 className="font-bold text-lg py-3 text-blue-900 opacity-50 bg-blue-50">
        Preview
      </h1>

      {showPreview ? (
        /**
         * rendering actual PDF
         */
        <PDFViewer style={{ width: "100%", height: "92%" }} key={count.current}>
          <FormDataContext.Provider value={{ ...data }}>
            <MyDocument data={data} />
          </FormDataContext.Provider>
        </PDFViewer>
      ) : (
        /**
         * rendering virtual PDF.
         * this is just representation of how actual pdf will look like
         */
        <PreviewPage data={data} />
      )}
    </div>
  );
};

export default PreviewPane;
