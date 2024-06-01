import styled from "styled-components";

export const HeaderBlock = styled.div`
  /* margin: auto; */
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100vw;
  height: 72px;

  padding: 8px 24px;
  border-bottom: 1px solid #f7f7f8;
`;

export const Container = styled.div`
  display: flex;
  height: 56px;
  align-items: center;
`;

export const BtnContainer = styled.div`
  display: flex;
  height: 56px;
  align-items: center;
  gap: 8px;
`;

export const NavBarItem = styled.div`
  font: ${({ theme }) => theme.typo.subtitleRg500};
  text-align: center;
  padding: 12px 16px;
  cursor: pointer;
`;

export const SearchBar = styled.input`
  flex-shrink: 1;
  flex-grow: 1;
  width: auto;
  min-width: 200px;
  height: 48px;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.color.gray100};
  padding: 12px 16px;
  border-radius: 8px;
`;
