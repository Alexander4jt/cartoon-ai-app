"use client";
import { useState } from "react";

export default function Home() {
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center p-6">
      <header className="w-full max-w-5xl flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-purple-700">🎨 Cartoon AI</h1>
        <nav className="space-x-6 text-gray-600 font-medium">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-lg w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Convert Your Sketch into a Cartoon 🎯
        </h2>
        <p className="text-gray-500 text-center mb-6">
          Upload your drawing and watch AI turn it into a colorful cartoon!
        </p>

        <div className="flex flex-col items-center">
          <label className="cursor-pointer bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full transition font-medium">
            Upload Sketch
            <input
              type="file"
              onChange={handleFileChange}
              className="hidden"
              accept="image/*"
            />
          </label>

          {preview && (
            <div className="mt-6">
              <p className="text-gray-600 mb-2 text-center">Preview:</p>
              <img
                src={preview}
                alt="Preview"
                className="max-w-xs rounded-lg shadow-md"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

