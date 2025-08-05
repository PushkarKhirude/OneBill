import React from "react";

function PreviewPage({ data }) {
  return (
    <div className="page border overflow-auto my-2 mx-auto px-5 2xl:w-[21cm] w-[390px] ">
      <div className="header-row justify-between flex text-[16px] mb-1">
        <span className="font-bold w-[80%] text-left  mt-5">
          {data.billFrom.companyName || "[Company Name]"}
        </span>
        <span className="font-bold text-right  mt-5 text-gray-400">
          INVOICE
        </span>
      </div>
      <div className="header-details-row justify-between flex ">
        <div className="company-details  w-[60%] text-left text-[10px]">
          <div>[Street Address]</div>
          <div>{`${data.billFrom.city || "City"}, ${
            data.billFrom.country || "Country"
          }, ${data.billFrom.postCode || "PO"}`}</div>
          <div>Phone Number</div>
        </div>
        <div className="invoice-details  pt-1 w-[40%]">
          <div className="text-[12px] font-semibold text-center flex justify-center">
            <span className="border w-[50%] px-auto bg-gray-300">
              INVOICE #
            </span>
            <span className="border w-[50%] px-auto bg-gray-300">DATE</span>
          </div>
          <div className="text-[10px] text-center flex justify-center">
            <span className="border w-[50%] px-auto ">{data.id}</span>
            <span className="border w-[50%] px-auto ">{data.invoiceDate}</span>
          </div>
        </div>
      </div>
      {/**
       *
       * Bill to
       *
       */}
      <div className="bill-to-row w-[50%] mt-[60px] text-[12px]">
        <div className="border bg-gray-300 w-full text-left font-semibold pl-1">
          BILL TO
        </div>
        <div className="w-full text-left text-[10px] ">
          {data.billTo.clientName || "[Client Name]"}
        </div>
        <div className="w-full text-left text-[10px] ">
          {data.billTo.clientEmail || "[Email]"}
        </div>
        <div className="w-full text-left text-[10px] ">
          {data.billTo.streetAddress || "[Street Address]"}
        </div>
        <div className="w-full text-left text-[10px] ">{`${
          data.billTo.city || "City"
        }, ${data.billTo.country || "Country"}, ${
          data.billTo.postCode || "PO"
        }`}</div>
        <div className="w-full text-left text-[10px] ">
          {data.billTo.phoneNumber || "[Phone Number]"}
        </div>
      </div>

      {/**
       *
       * Items
       *
       */}
      <div className="Items-header flex justify-center text-[12px] font-semibold mt-[60px] bg-gray-300">
        <div className="Items-header w-[70%] border text-left pl-1">
          {" "}
          DESCRIPTION
        </div>
        <div className="Items-header w-[30%] border border-l-0">PRICE</div>
      </div>

      {data.items.map((item, ind) => {
        return (
          <div className="Items-header flex justify-center text-[10px]  ">
            <div className="Items-header w-[70%]  border-x text-left pl-1">
              {item.itemName} ({item.quantity})
            </div>
            <div className="Items-header w-[30%] text-right pr-1 border-r">
              {item.price}
            </div>
          </div>
        );
      })}

      <div className="Items-header flex justify-center text-[10px]  ">
        <div className="Items-header w-[70%]  border-x text-left pl-1">.</div>
        <div className="Items-header w-[30%] text-right pr-1 border-r">
          {` `}
        </div>
      </div>

      <div className="Items-header flex justify-center text-[10px]">
        <div className="Items-header w-[60%]  border text-center  italic py-1">
          {" "}
          Thank You for you Business!
        </div>
        <div className="Items-header w-[40%] border border-l-0 py-1 text-left pl-1 font-semibold">
          TOTAL Rs. {data.amount}
        </div>
      </div>

      {/**
       *
       * footer
       *
       */}

      <div className="footer mt-30 text-[10px] italic text-center">
        If you have any questions about this invoice, please contact
      </div>
      <div className="footer mb-30 text-[10px] italic text-center">
        [Name, Phone, Email@address.com]
      </div>
    </div>
  );
}

export default PreviewPage;
