import { links, social } from "../data";
import { AiOutlineClose } from "react-icons/ai";
import { useGlobalContext } from "./context";

const Sidebar = () => {
  const { handleCloseSidebar, showSidebar } = useGlobalContext();

  return (
    <aside className={showSidebar ? "show-aside" : ""}>
      <div className="links">
        <div className="links-header">
          <h2 className="logo">
            coding <span>doc</span>{" "}
          </h2>
          <AiOutlineClose onClick={handleCloseSidebar} className="close" />
        </div>
        <ul>
          {links.map((link) => {
            const { id, url, text, icon } = link;
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="social-icons">
        <ul>
          {social.map((list) => {
            const { id, url, icon } = list;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
