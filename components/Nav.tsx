import Link from "next/link";
import styled from "styled-components";

export interface NavProps {}

const Nav: React.FC<NavProps> = () => {
  return (
    <StyledNav>
      <div className="nav-container">
        <div className="site-title">Coffee Log</div>
        <div className="link-container">
          <Link href="/dashboard">
            <a>Dashboard</a>
          </Link>
          <Link href="/coffee-logs">
            <a>Coffee Logs</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>
      </div>
    </StyledNav>
  );
};

export default Nav;

const StyledNav = styled.nav`
  width: 100%;
  background-color: tan;
  .nav-container {
    width: 80%;
    max-width: 960px;
    margin: 0rem auto;
    padding: 0.5rem 0rem;
    display: flex;
    justify-content: space-between;
    .site-title {
      font-family: "Kaushan Script", cursive;
      font-size: 2rem;
    }
    .link-container {
      display: flex;

      a {
        margin-left: 0.75rem;
        font-size: 1.15rem;
        margin-top: auto;
        border-bottom: 1px solid black;
      }
    }
  }
`;
