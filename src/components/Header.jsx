import React, { useContext, useEffect, useRef } from "react";
import formDataObj from "../utils/formDataObject";
import MyDocument from "./MyDocument";
import { PDFDownloadLink } from "@react-pdf/renderer";
import FormDataContext from "../utils/FormDataContext";

const Header = ({ setFormData }) => {
  const data = useContext(FormDataContext);
  const count = useRef(0);
  useEffect(() => {
    count.current++;
  });
  return (
    <div className="header  flex justify-between border-b bg-blue-50 border-blue-800">
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

      <button className="border p-2 rounded-lg font-bold mx-auto my-5 cursor-pointer hover:bg-blue-300 active:bg-blue-100 bg-blue-200 hover:shadow-xl">
        Preview
      </button>
    </div>
  );
};

export default Header;
