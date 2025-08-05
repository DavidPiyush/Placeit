"use client";
import { useState, useRef } from "react";
import {
  FaUpload,
  FaExchangeAlt,
  FaMobileAlt,
  FaLaptop,
  FaTshirt,
  FaMugHot,
  FaMagic,
  FaSpinner,
  FaDownload,
  FaUndo,
  FaPalette,
  FaCheck,
  FaTimes,
  FaBoxOpen,
} from "react-icons/fa";

export default function MockupGenerator() {
  // State management
  const [uploadedImage, setUploadedImage] = useState(null);
  const [activeMockup, setActiveMockup] = useState("iphone");
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [downloadsLeft, setDownloadsLeft] = useState(5);
  const [designSize, setDesignSize] = useState(100);
  const [rotation, setRotation] = useState(0);
  const [opacity, setOpacity] = useState(100);
  const [background, setBackground] = useState("white");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [customBgColor, setCustomBgColor] = useState("#ffffff");

  const fileInputRef = useRef(null);

  // Mockup types
  const mockupTypes = [
    { key: "iphone", icon: <FaMobileAlt />, label: "Phone" },
    { key: "macbook", icon: <FaLaptop />, label: "Laptop" },
    { key: "tshirt", icon: <FaTshirt />, label: "Apparel" },
    { key: "mug", icon: <FaMugHot />, label: "Mug" },
    { key: "packaging", icon: <FaBoxOpen />, label: "Box" },
  ];

  // Background options
  const bgOptions = [
    { value: "white", label: "White", color: "bg-white" },
    { value: "gray", label: "Gray", color: "bg-gray-200" },
    {
      value: "gradient",
      label: "Gradient",
      color: "bg-gradient-to-r from-blue-50 to-purple-50",
    },
    { value: "custom", label: "Custom", icon: <FaPalette /> },
  ];

  // Handle file operations
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 20 * 1024 * 1024) {
      alert("File size exceeds 20MB limit");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => setUploadedImage(reader.result);
    reader.readAsDataURL(file);
  };

  // Drag and drop handlers
  const handleDrag = {
    enter: (e) => {
      e.preventDefault();
      setIsDragging(true);
    },
    leave: (e) => {
      e.preventDefault();
      setIsDragging(false);
    },
    over: (e) => e.preventDefault(),
    drop: (e) => {
      e.preventDefault();
      setIsDragging(false);
      if (e.dataTransfer.files.length) {
        fileInputRef.current.files = e.dataTransfer.files;
        handleFileChange({ target: fileInputRef.current });
      }
    },
  };

  // Reset design
  const resetDesign = () => {
    setDesignSize(100);
    setRotation(0);
    setOpacity(100);
    setBackground("white");
  };

  // AI Enhance simulation
  const aiEnhance = () => {
    if (!uploadedImage) return;
    setIsProcessing(true);
    setTimeout(() => {
      setDesignSize(90 + Math.floor(Math.random() * 20));
      setRotation(-5 + Math.floor(Math.random() * 10));
      setOpacity(95);
      setIsProcessing(false);
    }, 1500);
  };

  // Download mockup
  const downloadMockup = () => {
    if (!uploadedImage) {
      alert("Please upload a design first");
      return;
    }
    if (downloadsLeft <= 0) {
      alert("Daily download limit reached (5/day)");
      return;
    }
    setDownloadsLeft(downloadsLeft - 1);
    alert(`Mockup downloaded! ${downloadsLeft - 1} downloads left today.`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Control Panel - Left Side */}
          <div className="p-6 border-r border-gray-200">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">
              Premium Mockup Generator
            </h1>

            {/* Upload Section */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-3 text-gray-700">
                1. Upload Design
              </h2>
              <div
                className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
                  isDragging
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300 hover:border-purple-400"
                } ${uploadedImage ? "hidden" : "block"}`}
                onClick={() => fileInputRef.current.click()}
                onDragEnter={handleDrag.enter}
                onDragLeave={handleDrag.leave}
                onDragOver={handleDrag.over}
                onDrop={handleDrag.drop}
              >
                <FaUpload className="mx-auto text-3xl text-purple-500 mb-3" />
                <p className="text-gray-600 mb-1">
                  {isDragging
                    ? "Drop your file here"
                    : "Drag & drop or click to browse"}
                </p>
                <p className="text-sm text-gray-500">
                  PNG, JPG, SVG (Max 20MB)
                </p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>

              {uploadedImage && (
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <img
                      src={uploadedImage}
                      alt="Preview"
                      className="w-10 h-10 object-cover rounded mr-3"
                    />
                    <span className="text-sm font-medium text-gray-700 truncate max-w-[160px]">
                      {fileInputRef.current?.files[0]?.name || "uploaded-image"}
                    </span>
                  </div>
                  <button
                    onClick={() => fileInputRef.current.click()}
                    className="text-sm text-blue-600 cursor-pointer hover:text-blue-800 flex items-center"
                  >
                    <FaExchangeAlt className="mr-1" /> Change
                  </button>
                </div>
              )}
            </div>

            {/* Mockup Type Selection */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-3 text-gray-700">
                2. Mockup Type
              </h2>
              <div className="grid grid-cols-5 gap-2">
                {mockupTypes.map(({ key, icon, label }) => (
                  <button
                    key={key}
                    onClick={() => setActiveMockup(key)}
                    className={`p-2 rounded-lg flex flex-col cursor-pointer items-center transition-all cursor-pointer ${
                      activeMockup === key
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                    }`}
                  >
                    <span className="text-lg">{icon}</span>
                    <span className="text-xs mt-1">{label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Customization Controls */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-3 text-gray-700">
                3. Customize
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Size: {designSize}%
                  </label>
                  <input
                    type="range"
                    min="50"
                    max="150"
                    value={designSize}
                    onChange={(e) => setDesignSize(e.target.value)}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Rotation: {rotation}°
                  </label>
                  <input
                    type="range"
                    min="-45"
                    max="45"
                    value={rotation}
                    onChange={(e) => setRotation(e.target.value)}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Opacity: {opacity}%
                  </label>
                  <input
                    type="range"
                    min="50"
                    max="100"
                    value={opacity}
                    onChange={(e) => setOpacity(e.target.value)}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Background
                  </label>
                  <div className="flex space-x-2">
                    {bgOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          if (option.value === "custom") {
                            setShowColorPicker(!showColorPicker);
                          } else {
                            setBackground(option.value);
                            setShowColorPicker(false);
                          }
                        }}
                        className={`w-8 h-8 rounded-full cursor-pointer border-2 flex items-center justify-center ${
                          background === option.value ||
                          (option.value === "custom" &&
                            background.startsWith("#"))
                            ? "border-purple-500 ring-1 ring-purple-200"
                            : "border-gray-300"
                        } ${option.color || "bg-white"}`}
                        style={
                          option.value === "custom" &&
                          background.startsWith("#")
                            ? { backgroundColor: background }
                            : {}
                        }
                      >
                        {option.icon || ""}
                      </button>
                    ))}
                  </div>
                  {showColorPicker && (
                    <div className="mt-2">
                      <input
                        type="color"
                        value={customBgColor}
                        onChange={(e) => {
                          setCustomBgColor(e.target.value);
                          setBackground(e.target.value);
                        }}
                        className="cursor-pointer"
                      />
                      <span className="ml-2 text-sm text-gray-600">
                        {customBgColor}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3">
              <button
                onClick={aiEnhance}
                disabled={!uploadedImage || isProcessing}
                className={`flex-1 py-2 cursor-pointer rounded-lg font-medium flex items-center justify-center ${
                  !uploadedImage
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : isProcessing
                    ? "bg-blue-200 text-blue-800"
                    : "bg-blue-100 hover:bg-blue-200 text-blue-700"
                }`}
              >
                {isProcessing ? (
                  <>
                    <FaSpinner className="animate-spin mr-2" /> Enhancing...
                  </>
                ) : (
                  <>
                    <FaMagic className="mr-2" /> AI Enhance
                  </>
                )}
              </button>
              <button
                onClick={resetDesign}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 cursor-pointer text-gray-700 rounded-lg font-medium flex items-center justify-center"
              >
                <FaUndo className="mr-2" /> Reset
              </button>
            </div>
          </div>

          {/* Preview Panel - Right Side */}
          <div className="p-6 bg-gray-50">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-700">
                Live Preview
              </h2>
              <div className="flex items-center">
                <span className="text-sm bg-purple-100 text-purple-800 px-2 py-1 rounded">
                  Downloads left: {downloadsLeft}/5
                </span>
              </div>
            </div>

            <div className="flex items-center justify-center h-[400px] md:h-[500px] relative">
              <div
                className={`w-full h-full flex items-center justify-center rounded-xl transition-colors ${
                  background === "white"
                    ? "bg-white"
                    : background === "gray"
                    ? "bg-gray-100"
                    : background === "gradient"
                    ? "bg-gradient-to-r from-blue-50 to-purple-50"
                    : "bg-transparent"
                }`}
                style={
                  background.startsWith("#")
                    ? { backgroundColor: background }
                    : {}
                }
              >
                {/* iPhone Mockup */}
                {activeMockup === "iphone" && (
                  <div className="relative w-[150px] h-[300px] bg-gray-900 rounded-[30px] p-1.5 shadow-xl">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/4 h-4 bg-gray-900 rounded-b-md"></div>
                    <div className="relative w-full h-full overflow-hidden rounded-[26px] bg-white">
                      {uploadedImage ? (
                        <img
                          src={uploadedImage}
                          alt="Design preview"
                          className="absolute inset-0 object-contain"
                          style={{
                            width: `${designSize}%`,
                            transform: `rotate(${rotation}deg)`,
                            opacity: `${opacity}%`,
                            left: "50%",
                            top: "50%",
                            transformOrigin: "center",
                            transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
                          }}
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                          Design Preview
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* MacBook Mockup */}
                {activeMockup === "macbook" && (
                  <div className="relative w-[250px] h-[150px] bg-gray-800 rounded-t-lg p-1 shadow-xl">
                    <div className="relative w-full h-full overflow-hidden rounded-t bg-white">
                      {uploadedImage ? (
                        <img
                          src={uploadedImage}
                          alt="Design preview"
                          className="absolute inset-0 object-contain"
                          style={{
                            width: `${designSize}%`,
                            transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
                            opacity: `${opacity}%`,
                            left: "50%",
                            top: "50%",
                          }}
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                          Screen Design
                        </div>
                      )}
                    </div>
                    <div className="absolute -bottom-[12px] left-0 right-0 h-[12px] bg-gray-800 rounded-b-lg"></div>
                  </div>
                )}

                {/* T-Shirt Mockup */}
                {activeMockup === "tshirt" && (
                  <div className="relative w-[180px]">
                    <img
                      src="https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                      alt="T-shirt template"
                      className="w-full h-auto rounded shadow"
                    />
                    {uploadedImage ? (
                      <img
                        src={uploadedImage}
                        alt="Design preview"
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain"
                        style={{
                          width: `${designSize}%`,
                          transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
                          opacity: `${opacity}%`,
                        }}
                      />
                    ) : (
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/80 px-3 py-1 rounded text-sm text-gray-500">
                        Your Design
                      </div>
                    )}
                  </div>
                )}

                {/* Mug Mockup */}
                {activeMockup === "mug" && (
                  <div className="relative w-[140px] h-[140px]">
                    <img
                      src="https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                      alt="Mug template"
                      className="w-full h-full object-cover rounded-full shadow"
                    />
                    {uploadedImage ? (
                      <img
                        src={uploadedImage}
                        alt="Design preview"
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain"
                        style={{
                          width: `${designSize}%`,
                          transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
                          opacity: `${opacity}%`,
                        }}
                      />
                    ) : (
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/80 px-3 py-1 rounded text-sm text-gray-500">
                        Your Logo
                      </div>
                    )}
                  </div>
                )}

                {/* Packaging Mockup */}
                {activeMockup === "packaging" && (
                  <div className="relative w-[160px] h-[200px]">
                    <div className="absolute inset-0 bg-gray-100 rounded shadow-lg flex items-center justify-center">
                      <div className="w-[90%] h-[90%] bg-white border border-gray-200 flex items-center justify-center">
                        {uploadedImage ? (
                          <img
                            src={uploadedImage}
                            alt="Design preview"
                            className="object-contain"
                            style={{
                              width: `${designSize}%`,
                              transform: `rotate(${rotation}deg)`,
                              opacity: `${opacity}%`,
                            }}
                          />
                        ) : (
                          <div className="text-gray-400 text-sm">
                            Product Label
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={downloadMockup}
              disabled={downloadsLeft <= 0}
              className={`w-full mt-4 py-3 rounded-lg font-medium cursor-pointer flex items-center justify-center ${
                downloadsLeft <= 0
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:opacity-90"
              }`}
            >
              <FaDownload className="mr-2" />
              {downloadsLeft > 0 ? "Download Mockup" : "Daily Limit Reached"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
