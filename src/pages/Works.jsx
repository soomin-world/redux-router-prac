// src/pages/works.js
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Works = () => {
  const location = useLocation();
  console.log("location :>> ", location);
  return (
    <div>
      <button>{`현재 페이지 : ${location.pathname.slice(1)}`}</button>
      <Link to="/contact">contact 페이지로 이동하기</Link>
    </div>
  );
};

export default Works;

// src/pages/works.js
