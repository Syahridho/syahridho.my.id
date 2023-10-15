import { BiPaste } from "react-icons/bi";
import { useState } from "react";

const CodePaste = ({ code }) => {
  const handleCopy = () => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        console.log("berhasil");
      })
      .catch((error) => {
        console.error("Gagal menyalin kode: ", error);
      });
  };
  return (
    <div className="bg-stone-800 text-white rounded flex items-center justify-between py-2 px-5 font-mono">
      <span className="codeToCopy">{code}</span>
      <button
        className="border border-white rounded hover:bg-white hover:text-stone-900 p-2"
        onClick={handleCopy}
      >
        <BiPaste />
      </button>
    </div>
  );
};

export default CodePaste;
