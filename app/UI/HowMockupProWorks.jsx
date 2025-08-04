'use client';
import { useState } from "react";

export default function HowMockupProWorks() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [activeMockup, setActiveMockup] = useState("iphone");

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => setUploadedImage(reader.result);
    reader.readAsDataURL(file);
  };

  // Reset upload
  const resetUpload = () => setUploadedImage(null);

  return (
    <section className="py-6 bg-gray-50 mt-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
              MockupPro
            </span>{" "}
            Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create stunning mockups in just 3 simple steps
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Upload Zone */}
          <div className="relative h-[500px]">
            <div className="absolute inset-0 bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-dashed border-gray-200 hover:border-purple-300 transition-all flex flex-col items-center justify-center p-8 text-center">
              {!uploadedImage ? (
                <>
                  <div className="w-20 h-20 mb-6 bg-purple-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-cloud-upload-alt text-purple-600 text-3xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Upload Your Design
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Drag & drop your image or click to browse
                  </p>
                  <label
                    htmlFor="upload-input"
                    className="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-medium cursor-pointer transition"
                  >
                    Select File
                  </label>
                  <input
                    id="upload-input"
                    type="file"
                    accept=".png, .jpg, .jpeg, .svg"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <p className="text-sm text-gray-500 mt-4">
                    PNG, JPG, or SVG • Max 20MB
                  </p>
                </>
              ) : (
                <div className="flex flex-col h-full w-full">
                  <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                    <h4 className="font-medium text-gray-900">
                      Your Design Preview
                    </h4>
                    <button
                      className="text-gray-500 hover:text-gray-700"
                      onClick={resetUpload}
                      aria-label="Change uploaded image"
                    >
                      <i className="fas fa-redo mr-1"></i> Change
                    </button>
                  </div>
                  <div className="flex-1 flex items-center justify-center p-8 bg-gray-50">
                    <img
                      src={uploadedImage}
                      alt="Uploaded design"
                      className="max-h-full max-w-full object-contain rounded-lg"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mockup Showcase */}
          <div>
            <div className="mb-10">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 mr-5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <i className="fas fa-mobile-alt text-white text-2xl"></i>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Real-Time Mockup Preview
                </h3>
              </div>
              <p className="text-lg text-gray-600 mb-8">
                See your design perfectly applied to professional mockups with
                automatic fitting and perspective correction.
              </p>

              {/* Mockup Selector */}
              <div className="grid grid-cols-4 gap-3 mb-8">
                {[
                  { key: "iphone", icon: "fas fa-mobile-alt", label: "iPhone" },
                  { key: "macbook", icon: "fas fa-laptop", label: "MacBook" },
                  { key: "tshirt", icon: "fas fa-tshirt", label: "T-Shirt" },
                  { key: "mug", icon: "fas fa-mug-hot", label: "Coffee Mug" },
                ].map(({ key, icon, label }) => (
                  <button
                    key={key}
                    onClick={() => setActiveMockup(key)}
                    className={`px-4 py-3 rounded-lg flex flex-col items-center transition ${
                      activeMockup === key
                        ? "bg-gray-900 text-white"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    <i className={`${icon} mb-1`}></i>
                    <span className="text-xs mt-1">{label}</span>
                  </button>
                ))}
              </div>

              {/* Mockup Frame Container */}
              <div className="relative bg-gray-50 rounded-2xl p-8 shadow-sm w-full max-w-md mx-auto">
                {/* iPhone Mockup */}
                <div
                  className={`${
                    activeMockup === "iphone" ? "block" : "hidden"
                  }`}
                >
                  <div className="relative mx-auto w-[180px] h-[370px] bg-gray-900 rounded-[40px] p-2 shadow-lg">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-gray-900 rounded-b-lg z-10"></div>
                    <div className="relative w-full h-full overflow-hidden rounded-[36px] bg-white">
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                        {uploadedImage ? (
                          <img
                            src={uploadedImage}
                            alt="Design on iPhone"
                            className="max-h-full max-w-full object-contain"
                          />
                        ) : (
                          <p className="text-gray-400 text-center px-4">
                            Your design will appear here
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* MacBook Mockup */}
                <div
                  className={`${
                    activeMockup === "macbook" ? "block" : "hidden"
                  }`}
                >
                  <div className="relative mx-auto w-[300px] h-[180px] bg-gray-800 rounded-t-lg p-1 shadow-lg">
                    <div className="relative w-full h-full overflow-hidden rounded-t bg-white flex items-center justify-center">
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                        {uploadedImage ? (
                          <img
                            src={uploadedImage}
                            alt="Design on MacBook"
                            className="max-h-full max-w-full object-contain"
                          />
                        ) : (
                          <p className="text-gray-400 text-center px-4">
                            Your design will appear here
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="absolute -bottom-[15px] left-0 right-0 h-[15px] bg-gray-800 rounded-b-lg"></div>
                    <div className="absolute -bottom-[25px] left-1/2 transform -translate-x-1/2 w-3/4 h-[10px] bg-gray-700 rounded-b-lg"></div>
                  </div>
                </div>

                {/* T-Shirt Mockup */}
                <div
                  className={`${
                    activeMockup === "tshirt" ? "block" : "hidden"
                  } relative mx-auto w-[220px]`}
                >
                  <img
                    src="https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="T-shirt template"
                    className="w-full h-auto object-cover rounded-lg shadow"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    {uploadedImage ? (
                      <img
                        src={uploadedImage}
                        alt="Design on T-shirt"
                        className="max-h-[60%] max-w-[60%] object-contain"
                      />
                    ) : (
                      <p className="text-gray-400 text-center px-4 bg-white bg-opacity-80 py-2 rounded">
                        Your design here
                      </p>
                    )}
                  </div>
                </div>

                {/* Coffee Mug Mockup */}
                <div
                  className={`${
                    activeMockup === "mug" ? "block" : "hidden"
                  } relative mx-auto w-[180px] h-[180px]`}
                >
                  <img
                    src="https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Coffee mug template"
                    className="absolute inset-0 w-full h-full object-cover rounded-full shadow-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    {uploadedImage ? (
                      <img
                        src={uploadedImage}
                        alt="Design on Coffee Mug"
                        className="max-h-[50%] max-w-[50%] object-contain"
                      />
                    ) : (
                      <p className="text-gray-400 text-center px-4 bg-white bg-opacity-80 py-2 rounded">
                        Your design here
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-12 px-4">
          {/* Feature Card Template */}
          {[
            {
              icon: "fas fa-robot",
              title: "Precision AI Fitting",
              description:
                "Our neural networks analyze depth and perspective to perfectly adapt your designs to any surface with pixel-perfect accuracy.",
              colorFrom: "from-purple-600",
              colorTo: "to-fuchsia-500",
              badge: "Pro Feature",
              badgeColor: "text-purple-600",
            },
            {
              icon: "fas fa-lightbulb",
              title: "Dynamic Lighting",
              description:
                "Real-time ray tracing creates photorealistic shadows and reflections tailored to your scene's lighting conditions.",
              colorFrom: "from-blue-600",
              colorTo: "to-cyan-500",
              badge: "Pro Feature",
              badgeColor: "text-blue-600",
            },
            {
              icon: "fas fa-bolt",
              title: "8K Ultra HD",
              description:
                "Export cinema-quality mockups with 32-bit depth for professional print and digital media production.",
              colorFrom: "from-green-600",
              colorTo: "to-emerald-500",
              badge: "Enterprise Feature",
              badgeColor: "text-green-600",
            },
          ].map(
            ({
              icon,
              title,
              description,
              colorFrom,
              colorTo,
              badge,
              badgeColor,
            }) => (
              <div
                key={title}
                className="relative p-10 bg-white rounded-3xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 overflow-hidden group isolate"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${colorFrom} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>
                <div
                  className={`absolute -right-10 -top-10 w-40 h-40 rounded-full ${colorFrom.replace(
                    "from-",
                    ""
                  )}/10 blur-xl`}
                ></div>
                <div
                  className={`absolute -left-4 -bottom-4 w-24 h-24 rounded-full ${colorTo.replace(
                    "to-",
                    ""
                  )}/10 blur-lg`}
                ></div>

                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 mb-8 bg-gradient-to-br ${colorFrom} ${colorTo} rounded-xl flex items-center justify-center shadow-lg shadow-${colorFrom.replace(
                      "from-",
                      ""
                    )}-200/50 group-hover:shadow-${colorFrom.replace(
                      "from-",
                      ""
                    )}-300/70 transition-all duration-500 group-hover:-translate-y-1`}
                  >
                    <i className={`${icon} text-white text-2xl`}></i>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-gray-900 tracking-tight">
                    {title}
                  </h3>
                  <p className="text-gray-600/90 leading-relaxed font-light">
                    {description}
                  </p>

                  <div className="mt-8 pt-5 border-t border-gray-100/50 flex justify-between items-center">
                    <span
                      className={`text-xs font-medium tracking-wide uppercase ${badgeColor}/90`}
                    >
                      {badge}
                    </span>
                    <button
                      className={`flex items-center text-sm font-medium text-gray-900/80 hover:${badgeColor} transition-colors`}
                    >
                      Explore
                      <svg
                        className={`ml-2 w-4 h-4`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
