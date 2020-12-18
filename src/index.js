import React, { Component } from "react";
import { createRoot } from "react-dom";
import firebase from "firebase";
import "./style.css";
import {
  FirebaseAppProvider,
  useFirestoreDocData,
  useFirestore,
  SuspenseWithPerf,
} from "reactfire";
import Rating from "./Rating";
import ReactTable from "./components/ReactTable";

const firebaseConfig = {
  apiKey: "AIzaSyAinTsYkeyD4STOSvAJKpUoW15W1K67e0c",
  authDomain: "docs-ratings.firebaseapp.com",
  databaseURL: "https://docs-ratings.firebaseio.com",
  projectId: "docs-ratings",
  storageBucket: "docs-ratings.appspot.com",
  messagingSenderId: "647155909533",
  appId: "1:647155909533:web:87efb305836d0ca35da574",
  measurementId: "G-20XS5365B9",
};

function App() {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <SuspenseWithPerf
        fallback={<p>loading ratings...</p>}
        traceId={"load-rating-status"}
      >
        <Rating />
        <ReactTable />
      </SuspenseWithPerf>
    </FirebaseAppProvider>
  );
}

// Enable Concurrent Mode
// https://reactjs.org/docs/concurrent-mode-adoption.html#enabling-concurrent-mode
createRoot(document.getElementById("root")).render(<App />);
