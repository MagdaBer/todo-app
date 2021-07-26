import "./taskNav.css";
import taskNavregular from "./taskNav-regular.html";
import taskNavactive from "./taskNav-active.html";

export default {
  title: "Components/taskNav",
  parameters: { layout: "centered" },
};

export const regular = () => taskNavregular;
export const active = () => taskNavactive;
