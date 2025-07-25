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
    border: "1",
  },
  heading: {
    fontSize: "20",
    fontWeight: "30",
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
        <View style={styles.col}>
          <Text>[Stree ADDRESS]</Text>
          <Text>[city. country. post.]</Text>
          <Text>[phone]</Text>
        </View>
        <View style={{ ...styles.col, border: "3" }}>
          <View style={{ ...styles.row, backgroundColor: "#bababa" }}>
            <View style={styles.col}>
              <Text>[INVOICE #]</Text>
            </View>
            <View style={styles.col}>
              <Text>[Date]</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.col}>
              <Text>[INV123]</Text>
            </View>
            <View style={styles.col}>
              <Text>[31/05/2001]</Text>
            </View>
          </View>
        </View>
      </View>
      {/**
       *
       * Bill To Row
       *
       */}
      <View style={styles.row}>
        <View style={styles.col}>
          <Text>BILL TO</Text>
          <Text>[Client Name]</Text>
          <Text>[Email]</Text>
          <Text>[Street Address]</Text>
          <Text>[city . country . po]</Text>
          <Text>[Phone Number]</Text>
        </View>
      </View>
      {/**
       *
       * Item Details Row
       *
       */}
      <View style={styles.row}>
        <View style={styles.col}>
          <Text>ITEMS</Text>
        </View>
        <View style={styles.col}>
          <Text>AMOUNT</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.col}>
          <Text>service fee</Text>
        </View>
        <View style={styles.col}>
          <Text>200</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.col}>
          <Text>service fee</Text>
        </View>
        <View style={styles.col}>
          <Text>200</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.col}>
          <Text>Thank You for you Business!</Text>
        </View>
        <View style={styles.row}>
          <Text>TOTAL </Text>
          <Text>400 </Text>
        </View>
      </View>

      {/**
       *
       * Contact Details Row
       *
       */}
      <View style={styles.row}>
        <View style={styles.col}>
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
