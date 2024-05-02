"use client";

import React from "react";

const DownloadButton = ({ fileLink }: { fileLink: string }) => {
  const handleDownload = () => {
    window.open(fileLink, "_blank");
  };
  return (
    <button
      onClick={handleDownload}
      className="bg-[#0096E1] px-3 py-2 w-36  text-center rounded-2xl cursor-pointer font-bold mt-10 hover:bg-[#007ce1]"
    >
      Download
    </button>
  );
};

export default DownloadButton;
