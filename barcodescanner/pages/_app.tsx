import { AppProps } from "next/app";
import "../styles/globals.css";
import React, { useState, useRef, useEffect } from "react";

const App = ({}: AppProps) => {
  const videoRef = useRef(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [transactionNumber, setTransactionNumber] = useState("");
  const handleBarcodeScan = (result: any) => {
    if (result && result.text) {
      setTransactionNumber(result.text);
      stopBarcodeScanner();
    }
  };
  const stopBarcodeScanner = () => {
    setIsCameraActive(false);
  };
  const startBarcodeScanner = () => {
    setIsCameraActive(true);
  };

  return (
    <>
      <div className="text-center">
        <h1 className="block text-gray-700 font-semibold mb-2">
          CAM BARCODE SCANNER
        </h1>
        <div className="mt-10 mb-10 relative ml-6 pl-8 pr-8 items-center justify-center border-2  border-blue-600">
          <video ref={videoRef} className="w-full opacity-50 " />
          {isCameraActive && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-96 h-32">
                <div className="absolute inset-0 border-2  border-blue-600 bg-black opacity-50" />
                <div className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-full h-full border-4 border-blue-600 rounded-lg" />
                </div>
              </div>
            </div>
          )}
          <button
            onClick={isCameraActive ? stopBarcodeScanner : startBarcodeScanner}
            className="absolute bottom-4 right-4 bg-blue-600 text-white py-2 px-4 rounded"
          >
            {isCameraActive ? "SCAN Off" : "SCAN ON"}
          </button>
        </div>
        <div className="mb-8">
          <label className="block text-gray-700 font-semibold mb-2">
            CODE SCANNER <span className="text-blue-400">*</span>
          </label>
          <input
            className="shadow bg-gray-100 appearance-none border-0 rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:ring-0"
            type="text"
            placeholder=" "
            value={transactionNumber}
          />
        </div>
      </div>
    </>
  );
};

export default App;
