import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Home = () => {
  const { showSidebar, handleShowSidebar } = useGlobalContext();
  return (
    <main>
      <h1>
        <span>context api</span> practice
      </h1>
      <FaBars onClick={handleShowSidebar} className="icon" />
    </main>
  );
};

export default Home;
