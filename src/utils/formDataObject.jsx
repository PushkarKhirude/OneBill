import { format } from "date-fns";
const formDataObj = {
  id: `INV${Math.floor(Math.random() * 10000)}`,
  status: "pending",
  billFrom: {
    companyName: "",
    streetAddress: "",
    city: "",
    postCode: "",
    country: "",
    phoneNumber: "",
  },
  billTo: {
    clientName: "",
    clientEmail: "",
    streetAddress: "",
    city: "",
    postCode: "",
    country: "",
    phoneNumber: "",
  },
  items: [],
  invoiceDate: format(new Date(), "yyyy-MM-dd"),
  amount: 0,
};

export default formDataObj;
