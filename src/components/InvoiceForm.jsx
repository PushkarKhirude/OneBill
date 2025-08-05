import React, { useContext, useEffect, useState } from "react";
import binImg from "../assets/bin.png";
import FormDataContext from "../utils/FormDataContext";

const InvoiceForm = ({ formData, setFormData }) => {
  const [items, setItems] = useState(() => {
    return {
      itemName: "",
      quantity: "",
      price: null,
    };
  });

  //const data = useContext(FormDataContext);
  //console.log(data);
  //console.log(formData);

  return (
    <div className="form-container w-8/12 mx-auto p-3">
      <h1 className="font-bold text-left px-1 text-lg mb-3 text-blue-900">
        Bill From
      </h1>
      <input
        type="text"
        placeholder="Company Name"
        value={formData.billFrom.companyName}
        onChange={(e) =>
          setFormData({
            ...formData,
            billFrom: { ...formData.billFrom, companyName: e.target.value },
          })
        }
        className="border rounded-lg p-2 text-center w-full bg-blue-50 focus:bg-white"
      />
      {/**
       * these are fields for invoice creator's address
       * */}
      <input
        type="text"
        placeholder="Street Address"
        value={formData.billFrom.streetAddress}
        onChange={(e) =>
          setFormData({
            ...formData,
            billFrom: { ...formData.billFrom, streetAddress: e.target.value },
          })
        }
        className="border rounded-lg p-2 text-center w-full bg-blue-50 focus:bg-white my-3"
      />
      <div className="address-container  my-3 flex justify-between">
        <input
          type="text"
          placeholder="City"
          value={formData.billFrom.city}
          onChange={(e) =>
            setFormData({
              ...formData,
              billFrom: { ...formData.billFrom, city: e.target.value },
            })
          }
          className="border w-[30%] mr-3 text-center rounded-lg p-2 bg-blue-50 focus:bg-white"
        />
        <input
          type="text"
          placeholder="Postal Code"
          value={formData.billFrom.postCode}
          onChange={(e) =>
            setFormData({
              ...formData,
              billFrom: { ...formData.billFrom, postCode: e.target.value },
            })
          }
          className="border w-[30%] mr-3 text-center rounded-lg p-2 bg-blue-50 focus:bg-white"
        />
        <input
          type="text"
          placeholder="Country"
          value={formData.billFrom.country}
          onChange={(e) =>
            setFormData({
              ...formData,
              billFrom: { ...formData.billFrom, country: e.target.value },
            })
          }
          className="border w-[30%] text-center rounded-lg p-2 bg-blue-50 focus:bg-white"
        />
      </div>
      <input
        type="tel"
        placeholder="Phone Number"
        value={formData.billFrom.phoneNumber}
        onChange={(e) =>
          setFormData({
            ...formData,
            billFrom: { ...formData.billFrom, phoneNumber: e.target.value },
          })
        }
        className="border rounded-lg text-center p-2 w-full my-2 bg-blue-50 focus:bg-white"
      />
      <input
        type="date"
        value={formData.invoiceDate}
        onChange={(e) =>
          setFormData({
            ...formData,
            invoiceDate: e.target.value,
          })
        }
        className="border rounded-lg text-center p-2 w-full my-2 bg-blue-50 focus:bg-white"
      />
      {/**
       * these are fields for client's details
       * */}
      <h1 className="font-bold text-left px-1 text-lg mt-5  text-blue-900">
        Bill To
      </h1>
      <input
        type="text"
        placeholder="Client's Name"
        value={formData.billTo.clientName}
        onChange={(e) =>
          setFormData({
            ...formData,
            billTo: { ...formData.billTo, clientName: e.target.value },
          })
        }
        className="border rounded-lg text-center p-2 w-full my-2 bg-blue-50 focus:bg-white"
      />
      <input
        type="text"
        placeholder="Client's Email"
        value={formData.billTo.clientEmail}
        onChange={(e) =>
          setFormData({
            ...formData,
            billTo: { ...formData.billTo, clientEmail: e.target.value },
          })
        }
        className="border rounded-lg text-center p-2 w-full my-2 bg-blue-50 focus:bg-white"
      />
      <input
        type="text"
        placeholder="Street Address"
        value={formData.billTo.streetAddress}
        onChange={(e) =>
          setFormData({
            ...formData,
            billTo: { ...formData.billTo, streetAddress: e.target.value },
          })
        }
        className="border rounded-lg text-center p-2 w-full my-2 bg-blue-50 focus:bg-white"
      />
      <div className="address-container-client  my-3 flex justify-between">
        <input
          type="text"
          placeholder="City"
          value={formData.billTo.city}
          onChange={(e) =>
            setFormData({
              ...formData,
              billTo: { ...formData.billTo, city: e.target.value },
            })
          }
          className="border w-[30%] mr-3 text-center rounded-lg p-2 bg-blue-50 focus:bg-white"
        />
        <input
          type="text"
          placeholder="Postal Code"
          value={formData.billTo.postCode}
          onChange={(e) =>
            setFormData({
              ...formData,
              billTo: { ...formData.billTo, postCode: e.target.value },
            })
          }
          className="border w-[30%] mr-3 text-center rounded-lg p-2 bg-blue-50 focus:bg-white"
        />
        <input
          type="text"
          placeholder="Country"
          value={formData.billTo.country}
          onChange={(e) =>
            setFormData({
              ...formData,
              billTo: { ...formData.billTo, country: e.target.value },
            })
          }
          className="border w-[30%] text-center rounded-lg p-2 bg-blue-50 focus:bg-white"
        />
      </div>
      <input
        type="tel"
        placeholder="Phone Number"
        value={formData.billTo.phoneNumber}
        onChange={(e) =>
          setFormData({
            ...formData,
            billTo: { ...formData.billTo, phoneNumber: e.target.value },
          })
        }
        className="border rounded-lg text-center p-2 w-full my-2 bg-blue-50 focus:bg-white"
      />
      {/**
       * these are fields for adding items
       * */}
      <h1 className="font-bold text-left px-1 text-lg mt-5  text-blue-900">
        Item List
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setFormData({ ...formData, items: [...formData.items, items] });
          setItems({ ...items, itemName: "", quantity: "", price: "" });
        }}
      >
        <div className="Items-container flex justify-between my-3">
          <input
            type="text"
            required
            placeholder="Item Name"
            value={items.itemName}
            onChange={(e) =>
              setItems({
                ...items,
                itemName: e.target.value,
              })
            }
            className="border w-[60%] text-center rounded-lg p-2 mr-3 bg-blue-50 focus:bg-white"
          />
          <input
            type="number"
            required
            placeholder="Qty"
            value={items.quantity}
            onChange={(e) =>
              setItems({
                ...items,
                quantity: e.target.value,
              })
            }
            className="border w-[20%] text-center rounded-lg bg-blue-50 focus:bg-white p-2 mr-3      [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
          <input
            type="number"
            required
            placeholder="Price"
            value={items.price}
            onChange={(e) =>
              setItems({
                ...items,
                price: e.target.value,
              })
            }
            className="border w-[20%] text-center rounded-lg bg-blue-50 focus:bg-white p-2    [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
        </div>
        <button
          type="submit"
          className="border rounded-lg text-center p-2 w-full my-2 cursor-pointer hover:bg-blue-300 active:bg-blue-100 bg-blue-200 shadow-lg"
        >
          Add Item ╋
        </button>
      </form>
      <div className="Item-list  pt-1">
        {formData.items.map((item, index) => {
          return (
            <div
              key={index}
              className=" rounded-lg text-center my-2 flex justify-between "
            >
              <p className="p-2 w-10/12 border rounded-lg wrap-anywhere text-left  flex justify-between bg-sky-100 ">
                <div className="mx-3">{item.itemName}</div>
                <div className="mx-3">Qty: {item.quantity}</div>
              </p>
              <button
                className="border rounded-md hover:bg-red-400 cursor-pointer flex justify-center bg-sky-100 shadow-2xl shadow-blue-100"
                onClick={(e) =>
                  setFormData({
                    ...formData,
                    items: formData.items.filter((_, i) => i !== index),
                  })
                }
              >
                <img
                  src={binImg}
                  alt="Trash-image"
                  className=" h-[39px] w-[39px]  p-2"
                />
              </button>
            </div>
          );
        })}
        <div className="md:my-100"></div>
      </div>
    </div>
  );
};

export default InvoiceForm;
