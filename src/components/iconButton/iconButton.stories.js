import "./iconButton.css";
import iconButtonNotification from "./iconButton-notification.html";
import iconButtonMenu from "./iconButton-menu.html";

export default {
  title: "Components/Buttonbell",
  parameters: { layout: "fullscreen" },
};

export const Notification = () => iconButtonNotification;
export const Menu = () => iconButtonMenu;
