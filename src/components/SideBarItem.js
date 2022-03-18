import "./SideBarItem.css";
import { MdOutlineLocationCity } from "react-icons/md";

const SideBarItem = (props) => {
  return (
    <main className="side-bar-option-container">
      <div className="side-bar-option">
        {props.icon}
        <p className="side-bar-title">{props.title}</p>
      </div>
    </main>
  );
};

export default SideBarItem;
