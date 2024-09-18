import { useContext, createContext } from "react";
import styled from "styled-components";

const TableWrapper = styled.div`
  overflow-x: auto; // Enable horizontal scrolling for small devices
  width: 100%; // Full width of the container
`;

const StyledTable = styled.div`
  min-width: 1000px; // Ensure it forces scrolling if the content is wider than the screen
  border: 1px solid var(--color-grey-200);
  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  position: relative; // Required for fixed header

  @media (max-width: 768px) {
    font-size: 1.2rem; // Smaller font size for small devices
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1.3rem; // Adjust font size for tablets
  }

  @media (min-width: 1024px) and (max-width: 1200px) {
    font-size: 1.4rem; // Adjust font size for laptops
  }

  @media (min-width: 1200px) {
    font-size: 1.5rem; // Adjust font size for large screens
  }
`;

const CommonRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr; // Adjust columns as needed
  column-gap: 2.4rem;
  align-items: center;
  transition: none;
  position: relative;

  @media (max-width: 768px) {
    grid-template-columns: 0.6fr 1.5fr 1.5fr 1fr 1fr; // Adjust columns for smaller screens
    column-gap: 1rem; // Increased gap between cells on small devices
  }
`;

const StyledHeader = styled(CommonRow)`
  padding: 1.6rem 2.4rem;
  background-color: var(--color-grey-0);
  border-bottom: 1px solid var(--color-green-700);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);

  @media (max-width: 768px) {
    position: sticky; // Fixes the header on top
    top: 0; // Sticks the header to the top
    background-color: var(--color-grey-50); // Ensure background is solid
    z-index: 1; // Make sure it is on top of other content
  }
`;

const StyledBody = styled.section`
  margin: 0.4rem 0;
`;

const StyledRow = styled(CommonRow)`
  padding: 1.2rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  @media (max-width: 768px) {
    padding: 1rem 1.6rem; // Adjust padding for small devices
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 1.1rem 2rem; // Adjust padding for tablets
  }

  @media (min-width: 1024px) and (max-width: 1200px) {
    padding: 1.2rem 2.2rem; // Adjust padding for laptops
  }

  @media (min-width: 1200px) {
    padding: 1.3rem 2.4rem; // Adjust padding for large screens
  }
`;

const Footer = styled.footer`
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  @media (max-width: 768px) {
    padding: 1rem; // Adjust padding for small devices
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 1.1rem; // Adjust padding for tablets
  }

  @media (min-width: 1024px) and (max-width: 1200px) {
    padding: 1.2rem; // Adjust padding for laptops
  }

  @media (min-width: 1200px) {
    padding: 1.3rem; // Adjust padding for large screens
  }
`;

const Empty = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`;

const TableContext = createContext();

function Table({ columns, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <TableWrapper>
        <StyledTable role="table">{children}</StyledTable>
      </TableWrapper>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <StyledHeader role="row" columns={columns}>
      {children}
    </StyledHeader>
  );
}

function Row({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <StyledRow role="row" columns={columns}>
      {children}
    </StyledRow>
  );
}

function Body({ data, render }) {
  if (!data.length) return <Empty>No data</Empty>;
  return <StyledBody>{data.map(render)}</StyledBody>;
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;

export default Table;
