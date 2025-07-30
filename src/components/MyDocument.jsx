import React, { useContext, useEffect, useRef } from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import FormDataContext from "../utils/FormDataContext";
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "col",
    backgroundColor: "#ffffff",
    padding: 30,
  },
  row: {
    flexDirection: "row",
  },
  col: {
    flexDirection: "col",
    padding: 10,
    flexGrow: 1,
    border: "0",
  },
  heading: {
    fontSize: "20",
    fontWeight: "bold",
  },
});

// Create Document Component
const MyDocument = ({ data }) => {
  //const data = useContext(FormDataContext);
  console.log(data);

  return (
    <Document singlePage>
      <Page size="A4" style={styles.page}>
        {/**
         *
         * header row
         *
         */}
        <View style={{ ...styles.row, ...styles.heading }}>
          <View style={{ ...styles.col, width: "80%" }}>
            <Text>{data.billFrom.companyName || "[Company Name]"}</Text>
          </View>
          <View style={styles.col}>
            <Text style={{ marginLeft: "auto", color: "#a3a3a3" }}>
              INVOICE
            </Text>
          </View>
        </View>
        {/**
         *
         * company and ivoice details row
         *
         */}
        <View style={styles.row}>
          <View
            style={{
              ...styles.col,
              width: "60%",
              fontSize: "12",
              paddingTop: "0",
            }}
          >
            <Text style={{ paddingBottom: "3" }}>
              {data.billFrom.streetAddress || "[Street Address]"}
            </Text>
            <Text style={{ paddingBottom: "3" }}>{`${
              data.billFrom.city || "City "
            }, ${data.billFrom.country || "Country "}, ${
              data.billFrom.postCode || "PO"
            }`}</Text>
            <Text style={{ paddingBottom: "3" }}>Phone Number</Text>
          </View>
          {/**
           *
           * ivoice details table
           *
           */}
          <View style={{ ...styles.col, border: "0", width: "50%" }}>
            <View
              style={{
                ...styles.row,
                backgroundColor: "#bababa",
                fontWeight: "bold",
                fontSize: "14",
              }}
            >
              <View
                style={{
                  ...styles.col,
                  width: "50%",
                  border: "1",
                  paddingTop: "3",
                  paddingBottom: "3",
                }}
              >
                <Text style={{ textAlign: "center" }}>INVOICE #</Text>
              </View>
              <View
                style={{
                  ...styles.col,
                  width: "50%",
                  border: "1",
                  paddingTop: "3",
                  paddingBottom: "3",
                }}
              >
                <Text style={{ textAlign: "center" }}>DATE</Text>
              </View>
            </View>
            <View
              style={{
                ...styles.row,
                fontSize: "12",
              }}
            >
              <View
                style={{
                  ...styles.col,
                  width: "50%",
                  border: "1",
                  paddingTop: "3",
                  paddingBottom: "3",
                }}
              >
                <Text style={{ textAlign: "center" }}>{data.id}</Text>
              </View>
              <View
                style={{
                  ...styles.col,
                  width: "50%",
                  border: "1",
                  paddingTop: "3",
                  paddingBottom: "3",
                }}
              >
                <Text style={{ textAlign: "center" }}>{data.invoiceDate}</Text>
              </View>
            </View>
          </View>
        </View>
        {/**
         *
         * Bill To Row
         *
         */}
        <View style={{ ...styles.row, marginTop: 50 }}>
          <View
            style={{
              ...styles.col,
              fontSize: "12",
            }}
          >
            <View
              style={{
                ...styles.row,
                backgroundColor: "#bababa",
                fontWeight: "bold",
                fontSize: "14",
                width: "50%",
                border: "1",
                padding: 6,
                paddingTop: 3,
                paddingBottom: 3,
              }}
            >
              <Text>BILL TO</Text>
            </View>
            <Text style={{ paddingBottom: "3" }}>
              {data.billTo.clientName || "[Client Name]"}
            </Text>
            <Text style={{ paddingBottom: "3" }}>
              {data.billTo.clientEmail || "[Email]"}
            </Text>
            <Text style={{ paddingBottom: "3" }}>
              {data.billTo.streetAddress || "[Street Address]"}
            </Text>
            <Text style={{ paddingBottom: "3" }}>{`${
              data.billTo.city || "City "
            }, ${data.billTo.country || "Country "}, ${
              data.billTo.postCode || "PO"
            }`}</Text>
            <Text style={{ paddingBottom: "3" }}>
              {data.billTo.phoneNumber || "[Phone Number]"}
            </Text>
          </View>
        </View>
        {/**
         *
         * Item Details Row
         *
         */}
        <View
          style={{
            ...styles.row,
            marginTop: 50,
            fontWeight: "bold",
            fontSize: "14",
            paddingHorizontal: "10",
          }}
        >
          <View
            style={{
              ...styles.col,
              border: "1",
              backgroundColor: "#bababa",
              width: "70%",
            }}
          >
            <Text>DESCRIPTION</Text>
          </View>
          <View
            style={{
              ...styles.col,
              border: "1",
              backgroundColor: "#bababa",
              width: "30%",
            }}
          >
            <Text style={{ textAlign: "center" }}>PRICE</Text>
          </View>
        </View>
        {/**
         *
         * Items
         *
         */}

        {data.items.map((item, ind) => {
          return (
            <View
              style={{
                ...styles.row,
                fontSize: "12",
                paddingHorizontal: "10",
              }}
              key={ind}
            >
              <View
                style={{
                  ...styles.col,
                  borderLeft: "1",
                  width: "70%",
                  paddingTop: "3",
                  paddingBottom: "3",
                }}
              >
                <Text>
                  {item.itemName} ({item.quantity})
                </Text>
              </View>
              <View
                style={{
                  ...styles.col,
                  borderLeft: "1",
                  borderRight: "1",
                  width: "30%",
                  paddingTop: "3",
                  paddingBottom: "3",
                }}
              >
                <Text style={{ textAlign: "right" }}>{item.price}</Text>
              </View>
            </View>
          );
        })}

        <View
          style={{
            ...styles.row,
            fontSize: "12",
            paddingHorizontal: "10",
          }}
        >
          <View
            style={{
              ...styles.col,
              borderLeft: "1",
              width: "70%",
              paddingTop: "3",
              paddingBottom: "3",
            }}
          >
            <Text> </Text>
          </View>
          <View
            style={{
              ...styles.col,
              borderLeft: "1",
              borderRight: "1",
              width: "30%",
              paddingTop: "3",
              paddingBottom: "3",
            }}
          >
            <Text style={{ textAlign: "right" }}> </Text>
          </View>
        </View>

        {/**
         *
         * Total ROW
         *
         */}
        <View
          style={{
            ...styles.row,
            fontSize: "12",
            paddingHorizontal: "10",
          }}
        >
          <View
            style={{
              ...styles.col,
              border: "1",
              width: "60%",
            }}
          >
            <Text style={{ textAlign: "center", fontStyle: "italic" }}>
              Thank You for you Business!
            </Text>
          </View>
          <View
            style={{
              ...styles.col,
              border: "1",
              width: "40%",
            }}
          >
            <View style={{ ...styles.row, fontSize: "14", fontWeight: "bold" }}>
              <Text>TOTAL </Text>
              <Text> Rs. {data.amount || "0"}</Text>
            </View>
          </View>
        </View>

        {/**
         *
         * Contact Details Row
         *
         */}
        <View style={{ ...styles.row, marginVertical: "auto" }}>
          <View
            style={{
              ...styles.col,
              textAlign: "center",
              fontStyle: "italic",
              fontSize: "12",
            }}
          >
            <Text>
              If you have any questions about this invoice, please contact
            </Text>
            <Text>[Name, Phone, Email@address.com]</Text>
          </View>
        </View>
        {/**
         *
         * Footer row
         *
         */}
      </Page>
    </Document>
  );
};

export default MyDocument;
