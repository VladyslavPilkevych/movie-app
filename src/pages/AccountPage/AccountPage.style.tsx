import styled from "styled-components";
import { ColorEnum } from "../../assets/styles";
import { Button } from "@mui/material";

export const CustomFormSection = styled.div`
  width: 80%;
  margin: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

export const CustomButtonContainer = styled.div`
  width: 80%;
  margin: 20px;
  display: flex;
  gap: 20px;
`;

export const CustomFormPasswordSection = styled.div`
  width: 40%;
  margin: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CustomButton = styled(Button)`
  color: ${ColorEnum.WHITE} !important;
  border-color: ${ColorEnum.WHITE} !important;
  :hover {
    border-color: ${ColorEnum.WHITE};
    background-color: rgba(256, 256, 256, 0.1) !important;
  },
`;

