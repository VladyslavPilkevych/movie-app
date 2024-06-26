import styled from "styled-components";

export const CustomAccountContainer = styled.section`
padding: 20px 0;
  padding-bottom: 40px;
  background-color: ${(props) => props.theme.colors.background};
`;
export const CustomDarkBg = styled.div`
  position: fixed;
  top: 0;
  right: 0px;
  bottom: 0;
  z-index: 1;
  width: 1px;
  background-color: rgba(0, 0, 0, 1);
  box-shadow: 0px 0 50px 40px rgba(0, 0, 0, 1);
`;
