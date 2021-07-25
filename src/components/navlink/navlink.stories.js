import "./navlink.css";
import navlinkregular from "./navlink-regular.html";
import navlinkactive from "./navlink-active.html";

export default {
  title: "Components/navlink",
  parameters: { layout: "fullscreen" },
};

export const regular = () => navlinkregular;
export const active = () => navlinkactive;
