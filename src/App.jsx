import { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import InvoiceForm from "./components/InvoiceForm";
import PreviewPane from "./components/PreviewPane";
import formDataObj from "./utils/formDataObject";
import FormDataContext from "./utils/FormDataContext";
import { usePDF } from "@react-pdf/renderer";
import MyDocument from "./components/MyDocument";

function App() {
  const [formData, setFormData] = useState(formDataObj);
  const calcAmount = () => {
    const amt = formData.items.reduce(
      (total, p) => total + Number(p.price) * Number(p.quantity),
      0
    );
    setFormData({ ...formData, amount: amt });
  };

  useEffect(() => {
    calcAmount();
  }, [formData.items]);

  //const [instance, updateInstance] = usePDF({ MyDocument });
  //console.log(formData);
  return (
    <>
      <FormDataContext.Provider value={{ ...formData }}>
        <Header setFormData={setFormData} />
        <div className="app-container my-10 md:my-1 md:flex md:justify-between ">
          <div className="left-pane  md:w-6/12 overflow-auto md:h-[90vh] scrollbar scrollbar-thumb-blue-900 scrollbar-track-blue-100 text-center ">
            <InvoiceForm formData={formData} setFormData={setFormData} />
          </div>
          <div className="right-pane my-10 md:my-0 md:w-6/12 text-center">
            <PreviewPane />
          </div>
        </div>
      </FormDataContext.Provider>
    </>
  );
}

export default App;
