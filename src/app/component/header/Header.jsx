"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export const Header = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
      if (open) {
        document.body.classList.add("dark-mode");
      } else {
        document.body.classList.remove("dark-mode");
      }
    }, [open]);
  
    const togglePopup = () => {
      setOpen(!open);
    };

 
  return (
    <header>
    <div className="container">
        <div className="inner-header custom-justify-align-items">
        <div className="header-logo">
            <Link href="#" title="Securesing">
              <img src={`/images/${open==false ? "securlogo.png" : "white-logo.png"}`} alt="Securesing" />
            </Link>
          </div>
            <div className="header-logo-polkadot-light custom-justify-align-items">
            <div
              className={`light-dark-mode custom-justify-align-items ${
                open == false ? "active-mode" : ""
              }`}
              onClick={() => togglePopup()}
            >
              <div className={`white-icon`}>
                <img src="/images/lightmode.png" alt="light-mode" />
              </div>
              <div className={`black-icon`}>
                <img src="/images/lightmodeicon.png" alt="light-mode" />
              </div>
            </div>
                <div className="logo-polkadot">
                    <Link href="#" title="polkadot"><img src="/images/polkadotlogo.png" alt="polkadot" /></Link>
                </div>

            </div>
        </div>
    </div>
</header>
  )
}
