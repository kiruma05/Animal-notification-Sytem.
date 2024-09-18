import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  HiBarsArrowUp,
  HiChartBar,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiChevronRight,
  HiOutlineUsers,
} from "react-icons/hi2";
import { useState } from "react";

// Styled components for the navigation list and links
const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  position: relative;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-100);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

// DropdownToggle styled component, now fully matching StyledNavLink
const DropdownToggle = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  color: var(--color-grey-600);
  font-size: 1.6rem;
  font-weight: 500;
  padding: 1.2rem 2.4rem;
  transition: all 0.3s;
  cursor: pointer;

  &:hover,
  &:active {
    color: var(--color-grey-800);
    background-color: var(--color-grey-100);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg {
    color: var(--color-brand-600);
  }
`;

// DropdownMenu styled component for the dropdown content
const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  z-index: 1000;
  list-style-type: none;
  margin: 0;
  width: 100%;
`;

// MainNav component
function MainNav() {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isTransactionsOpen, setIsTransactionsOpen] = useState(false);

  const toggleCategoriesDropdown = () => {
    setIsCategoriesOpen((prevIsOpen) => !prevIsOpen);
  };

  const toggleTransactionsDropdown = () => {
    setIsTransactionsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/dashboard">
            <HiOutlineHome />
            <span>Home</span>
          </StyledNavLink>
        </li>

        <li style={{ position: "relative" }}>
          <DropdownToggle onClick={toggleCategoriesDropdown}>
            <HiChartBar />
            <span>Categories</span>
            <HiChevronRight />
          </DropdownToggle>

          {isCategoriesOpen && (
            <DropdownMenu>
              <StyledNavLink to="/categories/add-subcategory">
                Add Subcategories
              </StyledNavLink>
              <StyledNavLink to="/categories/add-category">
                Add Categories
              </StyledNavLink>
            </DropdownMenu>
          )}
        </li>

        <li style={{ position: "relative" }}>
          <DropdownToggle onClick={toggleTransactionsDropdown}>
            <HiBarsArrowUp />
            <span>Transactions</span>
            <HiChevronRight />
          </DropdownToggle>

          {isTransactionsOpen && (
            <DropdownMenu>
              <StyledNavLink to="/transaction/slaughter">Slaughter</StyledNavLink>
              <StyledNavLink to="/transaction/sales">Sales</StyledNavLink>
              <StyledNavLink to="/transaction/transfer">Transfer</StyledNavLink>
              <StyledNavLink to="/transaction/recovery">Recovery</StyledNavLink>
              <StyledNavLink to="/transaction/deathLoses">
                Death and Losses
              </StyledNavLink>
            </DropdownMenu>
          )}
        </li>

        <li>
          <StyledNavLink to="/cattles">
            <HiOutlineHomeModern />
            <span>Cattles</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/users">
            <HiOutlineUsers />
            <span>Users</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/ranchies">
            <HiOutlineUsers />
            <span>Ranchies</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/settings">
            <HiOutlineCog6Tooth />
            <span>Settings</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
