import React, { useEffect } from "react";
import {isSafari} from 'react-device-detect';
// components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import FooterSmall from "components/Footers/FooterSmall.js";


export default function Auth({ children }) {
  return (
    <>
      <IndexNavbar fixed />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
            {isSafari ? (
                <div
                    className="absolute top-0 w-full h-full bg-gray-900 bg-no-repeat mt-16 bg-full"
                ></div>
            ):(
                <div
                    className="absolute top-0 w-full h-full bg-gray-900 bg-no-repeat mt-16 bg-full"
                    style={{
                        backgroundImage:
                            "url(" + require("assets/img/register_bg_2.png") + ")",
                    }}
                ></div>
            )}

          {children}
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
