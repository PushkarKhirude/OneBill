import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

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
const str = "asdfasdf";
// Create Document Component
const MyDocument = () => (
  <Document singlePage>
    <Page size="A4" style={styles.page}>
      {/**
       *
       * header row
       *
       */}
      <View style={{ ...styles.row, ...styles.heading }}>
        <View style={{ ...styles.col, width: "80%" }}>
          <Text>[Company Name]</Text>
        </View>
        <View style={styles.col}>
          <Text style={{ marginLeft: "auto", color: "#a3a3a3" }}>INVOICE</Text>
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
          <Text style={{ paddingBottom: "3" }}>[Stree Address]</Text>
          <Text style={{ paddingBottom: "3" }}>[city. country. post.]</Text>
          <Text style={{ paddingBottom: "3" }}>[phone]</Text>
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
              <Text style={{ textAlign: "center" }}>[INV123]</Text>
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
              <Text style={{ textAlign: "center" }}>[31/05/2001]</Text>
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
          <Text style={{ paddingBottom: "3" }}>[Client Name]</Text>
          <Text style={{ paddingBottom: "3" }}>[Email]</Text>
          <Text style={{ paddingBottom: "3" }}>[Street Address]</Text>
          <Text style={{ paddingBottom: "3" }}>[city . country . po]</Text>
          <Text style={{ paddingBottom: "3" }}>[Phone Number]</Text>
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
          <Text style={{ textAlign: "center" }}>AMOUNT</Text>
        </View>
      </View>
      {/**
       *
       * Items
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
            borderLeft: "1",
            width: "70%",
            paddingTop: "3",
            paddingBottom: "3",
          }}
        >
          <Text>Items</Text>
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
          <Text style={{ textAlign: "right" }}>AMOUNT</Text>
        </View>
      </View>

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
          <Text>Items</Text>
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
          <Text style={{ textAlign: "right" }}>AMOUNT</Text>
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
            <Text> Rs.400</Text>
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

export default MyDocument;
