import React from "react";
import { useSelector } from "react-redux";

function Navbar() {
  const count = useSelector((state) => state.counter.value);

  return (
    <>
      <nav className="bg-github-blue h-16">
        <div className="flex items-center bg-github-blue h-16 ">
          <div className="flex ">
            <div className="block text-white text-2xl items-center mr-60 ml-16">
              <h1>Daftar buku perpustakaan menggunakan redux</h1>
            </div>
            <div className="text-white text-2xl items-center">
              <h1>Jumlah Buku : {Number(count)} </h1>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
