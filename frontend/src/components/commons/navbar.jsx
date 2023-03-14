import { Link } from "react-router-dom";
import styled from "styled-components";

function NavigationBar() {
  const listObj = [
    {
      name: "24/7 소개",
      path: "/aboutus",
    },
    {
      name: "가정폭력이란?",
      path: "/aboutdomesticviolence",
    },
    {
      name: "이야기 광장",
      path: "/comunity",
    },
    {
      name: "상담소 찾기",
      path: "/counselingcenter",
    },
    {
      name: "캠페인",
      path: "/campaigns",
    },
  ];

  return (
    <NavContainer>
      <div>
        <Link to="/">logo here</Link>
      </div>
      <ListContainer>
        {listObj.map(({ name, path }) => (
          <Link to={path}>
            <div key={name}>{name}</div>
          </Link>
        ))}
      </ListContainer>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-between;
`;

const ListContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export default NavigationBar;
