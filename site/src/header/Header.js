import React from "react";
import { Icon } from "@iconify/react";
import "./Header.css";

export default function header() {
  return (
    <div className="Header">
      <div className="logo">
        <Icon icon="noto:paw-prints" className="logo-img" />
        <span className="logo-name">Woof</span>
      </div>
      <ul>
        <li>Home</li>
        <li>Plan afspraak</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
