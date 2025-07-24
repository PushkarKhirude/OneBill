import Header from "./components/Header";
import InvoiceForm from "./components/InvoiceForm";
import PreviewPane from "./components/PreviewPane";

function App() {
  return (
    <>
      <Header />
      <div className="app-container flex justify-between">
        <div className="left-pane border-r w-6/12 overflow-auto h-[90vh] text-center ">
          <InvoiceForm />
        </div>
        <div className="right-pane w-6/12 text-center">
          <PreviewPane />
        </div>
      </div>
    </>
  );
}

export default App;
