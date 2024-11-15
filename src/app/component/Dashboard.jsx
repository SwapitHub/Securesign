"use client";
import React, { useState } from "react";
import { NewMultisig } from "./new_multisig/NewMultisig";
import { MultisigAccounts } from "./multisig_accounts/MultisigAccounts";
import { Extrinsics } from "./extrinsics/Extrinsics";
import { AddressBook } from "./address_book/AddressBook";
import Link from "next/link";

export const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Extrinsics");

  const onchangeTab = (item) => {
    setActiveTab(item);
  };

  const RenderActiveComponent = () => {
    switch (activeTab) {
      case "new_multisig":
        return <NewMultisig />;

      case "multisig_accounts":
        return <MultisigAccounts />;

      case "Extrinsics":
        return <Extrinsics />;

      case "address_book":
        return <AddressBook />;
    }
  };
  return (
    <>
      <section className="Securesing-multisig-bg">
        <div className="container">
          <div className="inner-Securesing-multisig custom-justify-space-between">
            <div className="securesing-multisig-tabs-two custom-justify-space-between">
              <div className="securesing-tab-container">
                <div className="securesing-tab-menu">
                  <ul>
                    <li>
                      <Link
                        href="#"
                        className={`securesing-tab-a ${activeTab=="new_multisig" ? "securesing-active-a" : ""}`}
                        data-id="securesing-tab1"
                        onClick={() => onchangeTab("new_multisig")}
                      >
                        New Multisig
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className={`securesing-tab-a ${activeTab=="multisig_accounts" ? "securesing-active-a" : ""}`}
                        data-id="securesing-tab2"
                        onClick={() => onchangeTab("multisig_accounts")}
                      >
                        Multisig Accounts
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className={`securesing-tab-a ${activeTab=="Extrinsics" ? "securesing-active-a" : ""}`}
                        data-id="securesing-tab3"
                        onClick={() => onchangeTab("Extrinsics")}
                      >
                        Extrinsics
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className={`securesing-tab-a ${activeTab=="address_book" ? "securesing-active-a" : ""}`}
                        data-id="securesing-tab4"
                        onClick={() => onchangeTab("address_book")}
                      >
                        Address Book
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="securesing-tab-main-sec custom-justify-align-items">
                  <div
                    className="securesing-tab tab-active"
                    data-id="securesing-tab1"
                  >
                    <div className={`multisig-icon-four ${activeTab=="new_multisig" ? "active-list" : ""}`}  onClick={() => onchangeTab("new_multisig")}>
                      <img
                        src="/images/multisigicon1.png"
                        alt="multisig-icon"
                      />
                    </div>
                  </div>

                  <div className={`securesing-tab ${activeTab=="multisig_accounts" ? "active-list" : ""}`} data-id="securesing-tab2" >
                    <div className="multisig-icon-four" onClick={() => onchangeTab("multisig_accounts")}>
                      <img
                        src="/images/multisigicon2.png"
                        alt="multisig-icon"
                      />
                    </div>
                  </div>
                  <div
                    className={`securesing-tab ${activeTab=="Extrinsics" ? "active-list" : ""}`}
                    data-id="securesing-tab3"
                  >
                    <div className="multisig-icon-four" onClick={() => onchangeTab("Extrinsics")}>
                      <img
                        src="/images/multisigicon3.png"
                        alt="multisig-icon"
                      />
                    </div>
                  </div>
                  <div className={`securesing-tab ${activeTab=="address_book" ? "active-list" : ""}`} data-id="securesing-tab4">
                    <div className="multisig-icon-four" onClick={() => onchangeTab("address_book")}>
                      <img
                        src="/images/multisigicon4.png"
                        alt="multisig-icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <RenderActiveComponent />
          </div>
        </div>
      </section>

      
    </>
  );
};
