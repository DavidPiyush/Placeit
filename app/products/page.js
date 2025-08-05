"use client";
import { useState, useRef, useEffect } from "react";
import {
  FaArrowLeft,
  FaDownload,
  FaHeart,
  FaRegHeart,
  FaCopy,
  FaShare,
  FaPalette,
  FaTshirt,
  FaImage,
  FaFont,
  FaLayerGroup,
  FaUndo,
  FaRedo,
  FaExpand,
  FaCompress,
  FaSlidersH,
  FaMagic,
  FaSync,
  FaQuestionCircle,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import TooltipWrapper from "../_components/TooltipWrapper";
// import ReactTooltip from "react-tooltip";

export default function MockupEditorPage() {
  // State management
  const [activeTab, setActiveTab] = useState("upload");
  const [isFavorite, setIsFavorite] = useState(false);
  const [showSimilar, setShowSimilar] = useState(false);
  const [color, setColor] = useState("#ffffff");
  const [poseIndex, setPoseIndex] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [textElements, setTextElements] = useState([]);
  const [activeElement, setActiveElement] = useState(null);
  const [showAiOptions, setShowAiOptions] = useState(false);
  const [aiProcessing, setAiProcessing] = useState(false);
  const [recentUploads, setRecentUploads] = useState([]);

  // Refs
  const fileInputRef = useRef(null);
  const canvasRef = useRef(null);

  // Mock data
  const similarMockups = [
    { id: 1, name: "T-Shirt Front View", thumbnail: "/tshirt-front.jpg" },
    { id: 2, name: "T-Shirt Back View", thumbnail: "/tshirt-back.jpg" },
    { id: 3, name: "T-Shirt Side View", thumbnail: "/tshirt-side.jpg" },
    { id: 4, name: "T-Shirt Wrinkled", thumbnail: "/tshirt-wrinkled.jpg" },
  ];

  const colorOptions = [
    { name: "White", value: "#ffffff" },
    { name: "Black", value: "#000000" },
    { name: "Red", value: "#ff0000" },
    { name: "Blue", value: "#0000ff" },
    { name: "Green", value: "#00ff00" },
    { name: "Gray", value: "#808080" },
  ];

  // Tooltip data for icons
  const tooltips = {
    back: "Back to gallery",
    favorite: isFavorite ? "Remove from favorites" : "Add to favorites",
    copy: "Make a copy",
    share: "Share design",
    download: "Download mockup",
    upload: "Upload design",
    text: "Add text",
    graphics: "Add graphics",
    color: "Change color",
    poses: "Change pose",
    undo: "Undo",
    redo: "Redo",
    zoomIn: "Zoom in",
    zoomOut: "Zoom out",
    settings: "Settings",
    ai: "AI Tools",
    reset: "Reset layout",
    help: "Help",
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const newImage = event.target.result;
        setUploadedImage(newImage);
        setRecentUploads((prev) => [newImage, ...prev.slice(0, 5)]);
        addToHistory({ type: "upload", value: newImage });
      };
      reader.readAsDataURL(file);
    }
  };

  // Add text element
  const addTextElement = () => {
    const newText = {
      id: Date.now(),
      content: "Your text here",
      color: "#000000",
      fontSize: 24,
      fontFamily: "Arial",
      x: 50,
      y: 50,
    };
    setTextElements([...textElements, newText]);
    setActiveElement(newText.id);
    addToHistory({
      type: "addText",
      value: {
        elements: [...textElements, newText],
        activeElement: newText.id,
      },
    });
  };

  // Update text element
  const updateTextElement = (id, updates) => {
    const updatedElements = textElements.map((el) =>
      el.id === id ? { ...el, ...updates } : el
    );
    setTextElements(updatedElements);
    addToHistory({
      type: "updateText",
      value: { elements: updatedElements, activeElement: id },
    });
  };

  // Delete text element
  const deleteTextElement = (id) => {
    const updatedElements = textElements.filter((el) => el.id !== id);
    setTextElements(updatedElements);
    setActiveElement(null);
    addToHistory({
      type: "deleteText",
      value: { elements: updatedElements, activeElement: null },
    });
  };

  // History management
  const addToHistory = (action) => {
    const newHistory = [...history.slice(0, historyIndex + 1), action];
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  const undo = () => {
    if (historyIndex >= 0) {
      const action = history[historyIndex];
      revertAction(action);
      setHistoryIndex(historyIndex - 1);
    }
  };

  const redo = () => {
    if (historyIndex < history.length - 1) {
      const action = history[historyIndex + 1];
      applyAction(action);
      setHistoryIndex(historyIndex + 1);
    }
  };

  const revertAction = (action) => {
    switch (action.type) {
      case "color":
        const prevColor = history[historyIndex - 1]?.value || "#ffffff";
        setColor(prevColor);
        break;
      case "pose":
        const prevPose = history[historyIndex - 1]?.value || 0;
        setPoseIndex(prevPose);
        break;
      case "upload":
        const prevImage = history[historyIndex - 1]?.value || null;
        setUploadedImage(prevImage);
        break;
      case "addText":
        setTextElements(action.value.elements.slice(0, -1));
        setActiveElement(null);
        break;
      case "updateText":
        const prevState = history[historyIndex - 1]?.value || {
          elements: [],
          activeElement: null,
        };
        setTextElements(prevState.elements);
        setActiveElement(prevState.activeElement);
        break;
      case "deleteText":
        const nextState = history[historyIndex + 1]?.value;
        if (nextState) {
          setTextElements(nextState.elements);
          setActiveElement(nextState.activeElement);
        }
        break;
      default:
        break;
    }
  };

  const applyAction = (action) => {
    switch (action.type) {
      case "color":
        setColor(action.value);
        break;
      case "pose":
        setPoseIndex(action.value);
        break;
      case "upload":
        setUploadedImage(action.value);
        break;
      case "addText":
        setTextElements(action.value.elements);
        setActiveElement(action.value.activeElement);
        break;
      case "updateText":
        setTextElements(action.value.elements);
        setActiveElement(action.value.activeElement);
        break;
      case "deleteText":
        setTextElements(action.value.elements);
        setActiveElement(action.value.activeElement);
        break;
      default:
        break;
    }
  };

  // Reset layout
  const resetLayout = () => {
    setUploadedImage(null);
    setTextElements([]);
    setColor("#ffffff");
    setPoseIndex(0);
    setZoom(1);
    setHistory([]);
    setHistoryIndex(-1);
    setActiveElement(null);
    setRecentUploads([]);
  };

  // AI Auto Adjust
  const handleAiAutoAdjust = () => {
    setAiProcessing(true);
    setShowAiOptions(false);

    // Simulate AI processing
    setTimeout(() => {
      setAiProcessing(false);
      addToHistory({ type: "aiAdjust", value: "auto-adjusted" });

      // Show a success effect
      if (canvasRef.current) {
        canvasRef.current.style.boxShadow = "0 0 20px rgba(74, 222, 128, 0.7)";
        setTimeout(() => {
          if (canvasRef.current) {
            canvasRef.current.style.boxShadow = "none";
          }
        }, 1000);
      }
    }, 2000);
  };

  // Effect for tooltips
  useEffect(() => {
    // ReactTooltip.rebuild();
  }, [isFavorite, historyIndex, history.length, activeTab, showAiOptions]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Tooltip provider */}
      <TooltipWrapper
        effect="solid"
        place="bottom"
        className="!bg-gray-800 !text-xs !py-1 !px-2"
      />

      {/* Top Navigation Bar */}
      <header className="bg-white shadow-sm py-3 px-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            data-tip={tooltips.back}
            className="text-gray-600 hover:text-purple-600 transition-colors cursor-pointer"
          >
            <FaArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-lg font-semibold text-gray-800">
            T-Shirt Mockup Editor
          </h1>
        </div>

        <div className="flex items-center space-x-3">
          <button
            data-tip={tooltips.favorite}
            onClick={() => setIsFavorite(!isFavorite)}
            className={`p-2 rounded-full ${
              isFavorite ? "text-red-500" : "text-gray-500"
            } hover:bg-gray-100 transition-colors cursor-pointer`}
          >
            {isFavorite ? (
              <FaHeart className="w-5 h-5" />
            ) : (
              <FaRegHeart className="w-5 h-5" />
            )}
          </button>
          <button
            data-tip={tooltips.copy}
            className="p-2 rounded-full text-gray-500 hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <FaCopy className="w-5 h-5" />
          </button>
          <button
            data-tip={tooltips.share}
            className="p-2 rounded-full text-gray-500 hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <FaShare className="w-5 h-5" />
          </button>
          <button
            data-tip={tooltips.download}
            className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity cursor-pointer"
          >
            <FaDownload className="inline mr-2" />
            Download
          </button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar - Editing Tools */}
        <div className="w-16 bg-white shadow-sm flex flex-col items-center py-4 space-y-6">
          <button
            data-tip={tooltips.upload}
            onClick={() => setActiveTab("upload")}
            className={`p-3 rounded-lg ${
              activeTab === "upload"
                ? "bg-purple-100 text-purple-600"
                : "text-gray-500 hover:bg-gray-100"
            } cursor-pointer`}
          >
            <FaImage className="w-5 h-5" />
          </button>
          <button
            data-tip={tooltips.text}
            onClick={() => {
              setActiveTab("text");
              addTextElement();
            }}
            className={`p-3 rounded-lg ${
              activeTab === "text"
                ? "bg-purple-100 text-purple-600"
                : "text-gray-500 hover:bg-gray-100"
            } cursor-pointer`}
          >
            <FaFont className="w-5 h-5" />
          </button>
          <button
            data-tip={tooltips.graphics}
            onClick={() => setActiveTab("graphics")}
            className={`p-3 rounded-lg ${
              activeTab === "graphics"
                ? "bg-purple-100 text-purple-600"
                : "text-gray-500 hover:bg-gray-100"
            } cursor-pointer`}
          >
            <FaLayerGroup className="w-5 h-5" />
          </button>
          <button
            data-tip={tooltips.color}
            onClick={() => setActiveTab("color")}
            className={`p-3 rounded-lg ${
              activeTab === "color"
                ? "bg-purple-100 text-purple-600"
                : "text-gray-500 hover:bg-gray-100"
            } cursor-pointer`}
          >
            <FaPalette className="w-5 h-5" />
          </button>
          <button
            data-tip={tooltips.poses}
            onClick={() => setActiveTab("poses")}
            className={`p-3 rounded-lg ${
              activeTab === "poses"
                ? "bg-purple-100 text-purple-600"
                : "text-gray-500 hover:bg-gray-100"
            } cursor-pointer`}
          >
            <FaTshirt className="w-5 h-5" />
          </button>
          <div className="border-t border-gray-200 w-8 mx-auto"></div>
          <button
            data-tip={tooltips.ai}
            onClick={() => setShowAiOptions(!showAiOptions)}
            className={`p-3 rounded-lg ${
              showAiOptions
                ? "bg-purple-100 text-purple-600"
                : "text-gray-500 hover:bg-gray-100"
            } cursor-pointer`}
          >
            <FaMagic className="w-5 h-5" />
          </button>
          <button
            data-tip={tooltips.reset}
            onClick={resetLayout}
            className="p-3 rounded-lg text-gray-500 hover:bg-gray-100 cursor-pointer"
          >
            <FaSync className="w-5 h-5" />
          </button>
          <button
            data-tip={tooltips.help}
            className="p-3 rounded-lg text-gray-500 hover:bg-gray-100 cursor-pointer"
          >
            <FaQuestionCircle className="w-5 h-5" />
          </button>
        </div>

        {/* Main Content - Editor Panel */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          {/* Editor Tools Panel */}
          <div className="w-full md:w-64 bg-white shadow-sm p-4 overflow-y-auto">
            <AnimatePresence mode="wait">
              {activeTab === "upload" && (
                <motion.div
                  key="upload"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <h3 className="font-medium text-gray-800">Upload Design</h3>
                  <div
                    className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-purple-400 transition-colors"
                    onClick={() => fileInputRef.current.click()}
                  >
                    <div className="mx-auto w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                      <FaImage className="text-gray-400" />
                    </div>
                    <p className="text-sm text-gray-500 mb-2">
                      Drag & drop your image here
                    </p>
                    <p className="text-xs text-gray-400 mb-3">or</p>
                    <button className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors cursor-pointer">
                      Browse Files
                    </button>
                    <p className="text-xs text-gray-400 mt-3">
                      PNG, JPG up to 10MB
                    </p>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleImageUpload}
                      accept="image/*"
                      className="hidden"
                    />
                  </div>
                  {recentUploads.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-gray-700">
                        Recent Uploads
                      </h4>
                      <div className="grid grid-cols-3 gap-2">
                        {recentUploads.map((img, index) => (
                          <img
                            key={index}
                            src={img}
                            alt={`Recent upload ${index}`}
                            className="aspect-square object-cover rounded cursor-pointer hover:ring-2 hover:ring-purple-400 transition-all"
                            onClick={() => {
                              setUploadedImage(img);
                              addToHistory({ type: "upload", value: img });
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              {activeTab === "text" && (
                <motion.div
                  key="text"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <h3 className="font-medium text-gray-800">Text Elements</h3>
                  {textElements.length > 0 ? (
                    <div className="space-y-3">
                      {textElements.map((text) => (
                        <div
                          key={text.id}
                          className={`p-3 border rounded-lg cursor-pointer ${
                            activeElement === text.id
                              ? "border-purple-500 bg-purple-50"
                              : "border-gray-200 hover:border-purple-300"
                          }`}
                          onClick={() => setActiveElement(text.id)}
                        >
                          <div className="flex items-center justify-between">
                            <p
                              className="text-sm truncate"
                              style={{
                                color: text.color,
                                fontFamily: text.fontFamily,
                                fontSize: `${text.fontSize}px`,
                              }}
                            >
                              {text.content}
                            </p>
                            <button
                              className="text-red-500 hover:text-red-700"
                              onClick={(e) => {
                                e.stopPropagation();
                                deleteTextElement(text.id);
                              }}
                            >
                              ×
                            </button>
                          </div>
                          {activeElement === text.id && (
                            <div className="mt-2 space-y-2">
                              <input
                                type="text"
                                value={text.content}
                                onChange={(e) =>
                                  updateTextElement(text.id, {
                                    content: e.target.value,
                                  })
                                }
                                className="w-full p-2 border border-gray-300 rounded text-sm"
                              />
                              <input
                                type="color"
                                value={text.color}
                                onChange={(e) =>
                                  updateTextElement(text.id, {
                                    color: e.target.value,
                                  })
                                }
                                className="w-full h-8 cursor-pointer"
                              />
                              <div className="flex items-center space-x-2">
                                <span className="text-xs text-gray-600">
                                  Size:
                                </span>
                                <input
                                  type="range"
                                  min="10"
                                  max="72"
                                  value={text.fontSize}
                                  onChange={(e) =>
                                    updateTextElement(text.id, {
                                      fontSize: parseInt(e.target.value),
                                    })
                                  }
                                  className="flex-1"
                                />
                                <span className="text-xs w-8 text-right">
                                  {text.fontSize}
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500">
                      No text elements added yet
                    </p>
                  )}
                  <button
                    onClick={addTextElement}
                    className="w-full py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors cursor-pointer"
                  >
                    Add New Text
                  </button>
                </motion.div>
              )}

              {activeTab === "graphics" && (
                <motion.div
                  key="graphics"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <h3 className="font-medium text-gray-800">
                    Graphics & Elements
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {["Logo", "Badge", "Icon", "Shape", "Pattern", "More"].map(
                      (item) => (
                        <div
                          key={item}
                          className="p-3 border border-gray-200 rounded-lg text-center cursor-pointer hover:bg-purple-50 hover:border-purple-200 transition-colors"
                        >
                          <div className="w-8 h-8 bg-gray-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                            <FaLayerGroup className="text-gray-500" />
                          </div>
                          <span className="text-xs text-gray-700">{item}</span>
                        </div>
                      )
                    )}
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-gray-700">
                      My Graphics
                    </h4>
                    <div className="grid grid-cols-3 gap-2">
                      {recentUploads.map((img, index) => (
                        <img
                          key={`graphic-${index}`}
                          src={img}
                          alt={`Graphic ${index}`}
                          className="aspect-square object-cover rounded cursor-pointer hover:ring-2 hover:ring-purple-400 transition-all"
                          onClick={() => {
                            // In a real app, this would add the graphic to the canvas
                            console.log("Adding graphic to design:", img);
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "color" && (
                <motion.div
                  key="color"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <h3 className="font-medium text-gray-800">T-Shirt Color</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {colorOptions.map((option) => (
                      <div
                        key={option.value}
                        onClick={() => {
                          setColor(option.value);
                          addToHistory({ type: "color", value: option.value });
                        }}
                        className={`p-2 border rounded-lg cursor-pointer transition-all flex flex-col items-center ${
                          color === option.value
                            ? "border-purple-500 bg-purple-50"
                            : "border-gray-200 hover:border-purple-300"
                        }`}
                      >
                        <div
                          className="w-full aspect-square rounded mb-1"
                          style={{ backgroundColor: option.value }}
                        ></div>
                        <span className="text-xs text-gray-700">
                          {option.name}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-gray-700">
                      Custom Color
                    </h4>
                    <div className="flex items-center space-x-3">
                      <input
                        type="color"
                        value={color}
                        onChange={(e) => {
                          setColor(e.target.value);
                          addToHistory({
                            type: "color",
                            value: e.target.value,
                          });
                        }}
                        className="w-10 h-10 cursor-pointer"
                      />
                      <input
                        type="text"
                        value={color}
                        onChange={(e) => {
                          setColor(e.target.value);
                          addToHistory({
                            type: "color",
                            value: e.target.value,
                          });
                        }}
                        className="flex-1 p-2 border border-gray-300 rounded-lg"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "poses" && (
                <motion.div
                  key="poses"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <h3 className="font-medium text-gray-800">Model Poses</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {similarMockups.map((mockup, index) => (
                      <div
                        key={mockup.id}
                        onClick={() => {
                          setPoseIndex(index);
                          addToHistory({ type: "pose", value: index });
                        }}
                        className={`border rounded-lg overflow-hidden cursor-pointer transition-all ${
                          poseIndex === index
                            ? "border-purple-500 ring-2 ring-purple-200"
                            : "border-gray-200 hover:border-purple-300"
                        }`}
                      >
                        <div className="aspect-square bg-gray-100 flex items-center justify-center">
                          <span className="text-gray-400 text-sm">
                            {mockup.name}
                          </span>
                        </div>
                        <p className="p-2 text-xs text-gray-700 truncate">
                          {mockup.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* AI Options Panel */}
            {showAiOptions && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200"
              >
                <h3 className="font-medium text-gray-800 mb-3">AI Tools</h3>
                <button
                  onClick={handleAiAutoAdjust}
                  disabled={aiProcessing || !uploadedImage}
                  className="w-full mb-2 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50 cursor-pointer"
                >
                  {aiProcessing ? "Processing..." : "Auto Adjust Design"}
                </button>
                <button
                  disabled={aiProcessing || !uploadedImage}
                  className="w-full py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50 cursor-pointer"
                >
                  {aiProcessing ? "Processing..." : "Remove Background"}
                </button>
                <p className="mt-2 text-xs text-gray-500">
                  AI tools may take a few seconds to process your image
                </p>
              </motion.div>
            )}
          </div>

          {/* Main Canvas Area */}
          <div className="flex-1 bg-gray-100 flex flex-col items-center justify-center p-4 overflow-auto">
            <div
              ref={canvasRef}
              className="relative transition-all"
              style={{
                transform: `scale(${zoom})`,
                transition: "transform 0.2s ease",
              }}
            >
              {/* Mockup Canvas */}
              <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden cursor-move">
                <div className="aspect-square relative">
                  {/* T-shirt base with selected color */}
                  <div
                    className="absolute inset-0 transition-colors duration-300"
                    style={{ backgroundColor: color }}
                  >
                    {/* Uploaded image or placeholder */}
                    {uploadedImage ? (
                      <img
                        src={uploadedImage}
                        alt="Uploaded design"
                        className="absolute inset-0 w-full h-full object-contain p-8"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-gray-400 text-center p-4">
                          <FaImage className="w-12 h-12 mx-auto mb-2" />
                          <p>Upload your design</p>
                        </div>
                      </div>
                    )}

                    {/* Text elements */}
                    {textElements.map((text) => (
                      <div
                        key={text.id}
                        className="absolute p-2 cursor-move"
                        style={{
                          left: `${text.x}%`,
                          top: `${text.y}%`,
                          color: text.color,
                          fontFamily: text.fontFamily,
                          fontSize: `${text.fontSize}px`,
                          transform: "translate(-50%, -50%)",
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveElement(text.id);
                        }}
                      >
                        {text.content}
                        {activeElement === text.id && (
                          <div
                            className="absolute -right-2 -top-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              deleteTextElement(text.id);
                            }}
                          >
                            ×
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Canvas Controls */}
            <div className="mt-4 flex items-center space-x-3 bg-white rounded-full px-4 py-2 shadow-sm">
              <button
                data-tip={tooltips.undo}
                onClick={undo}
                disabled={historyIndex < 0}
                className={`p-2 rounded-full ${
                  historyIndex < 0
                    ? "text-gray-300"
                    : "text-gray-600 hover:bg-gray-100"
                } cursor-pointer`}
              >
                <FaUndo className="w-4 h-4" />
              </button>
              <button
                data-tip={tooltips.redo}
                onClick={redo}
                disabled={historyIndex >= history.length - 1}
                className={`p-2 rounded-full ${
                  historyIndex >= history.length - 1
                    ? "text-gray-300"
                    : "text-gray-600 hover:bg-gray-100"
                } cursor-pointer`}
              >
                <FaRedo className="w-4 h-4" />
              </button>
              <div className="h-6 border-l border-gray-200"></div>
              <button
                data-tip={tooltips.zoomIn}
                onClick={() => setZoom(Math.min(zoom + 0.1, 2))}
                disabled={zoom >= 2}
                className={`p-2 rounded-full ${
                  zoom >= 2
                    ? "text-gray-300"
                    : "text-gray-600 hover:bg-gray-100"
                } cursor-pointer`}
              >
                <FaExpand className="w-4 h-4" />
              </button>
              <button
                data-tip={tooltips.zoomOut}
                onClick={() => setZoom(Math.max(zoom - 0.1, 0.5))}
                disabled={zoom <= 0.5}
                className={`p-2 rounded-full ${
                  zoom <= 0.5
                    ? "text-gray-300"
                    : "text-gray-600 hover:bg-gray-100"
                } cursor-pointer`}
              >
                <FaCompress className="w-4 h-4" />
              </button>
              <div className="h-6 border-l border-gray-200"></div>
              <button
                data-tip={tooltips.settings}
                className="p-2 rounded-full text-gray-600 hover:bg-gray-100 cursor-pointer"
              >
                <FaSlidersH className="w-4 h-4" />
              </button>
              <button
                data-tip="Reset zoom"
                onClick={() => setZoom(1)}
                className="p-2 rounded-full text-gray-600 hover:bg-gray-100 cursor-pointer"
              >
                100%
              </button>
            </div>
          </div>

          {/* Right Sidebar - Similar Mockups */}
          <div
            className={`w-0 md:w-64 bg-white shadow-sm overflow-hidden transition-all duration-300 ${
              showSimilar ? "md:w-64" : "md:w-0"
            }`}
          >
            <div className="p-4 h-full overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-gray-800">
                  You Might Also Like
                </h3>
                <button
                  onClick={() => setShowSimilar(false)}
                  className="md:hidden text-gray-500 hover:text-gray-700 cursor-pointer"
                >
                  &times;
                </button>
              </div>
              <div className="space-y-4">
                {similarMockups.map((mockup) => (
                  <div
                    key={mockup.id}
                    className="border border-gray-200 rounded-lg overflow-hidden cursor-pointer hover:border-purple-300 transition-colors"
                    onClick={() => {
                      setPoseIndex(mockup.id - 1);
                      addToHistory({ type: "pose", value: mockup.id - 1 });
                    }}
                  >
                    <div className="aspect-square bg-gray-100 flex items-center justify-center">
                      <span className="text-gray-400 text-sm">
                        {mockup.name}
                      </span>
                    </div>
                    <div className="p-3">
                      <p className="text-sm font-medium text-gray-800">
                        {mockup.name}
                      </p>
                      <p className="text-xs text-gray-500">T-Shirt Mockup</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Show Similar Mockups Button (Mobile) */}
      {!showSimilar && (
        <button
          data-tip="Show similar mockups"
          onClick={() => setShowSimilar(true)}
          className="md:hidden fixed bottom-4 right-4 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition-colors cursor-pointer"
        >
          <FaTshirt className="w-5 h-5" />
        </button>
      )}

      {/* AI Processing Overlay */}
      {aiProcessing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mx-auto mb-4"></div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">
              AI is working its magic
            </h3>
            <p className="text-gray-600">
              Adjusting your design for the perfect fit...
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
