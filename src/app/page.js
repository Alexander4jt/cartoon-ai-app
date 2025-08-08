"use client";

import { useState } from "react";

export default function Home() {
  const [imageSrc, setImageSrc] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      setImageSrc(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Upload Your Drawing</h1>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {imageSrc && (
        <div style={{ marginTop: "2rem" }}>
          <h2>Preview:</h2>
          <img
            src={imageSrc}
            alt="Uploaded Drawing"
            style={{ maxWidth: "100%", border: "1px solid #ccc" }}
          />
        </div>
      )}
    </main>
  );
}

