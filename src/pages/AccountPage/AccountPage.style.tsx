import styled from "styled-components";
import { ColorEnum } from "../../assets/styles";
import zIndex from "@mui/material/styles/zIndex";
import { Button } from "@mui/material";
// import FormInput from "../../components/FormInput";
// import { ColorEnum } from "../../assets/styles";

export const CustomBackgroundContainer = styled.section`
  height: 70vh;
  padding: 100px 0;
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

export const CustomFormSection = styled.div`
  width: 80%;
  margin: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

export const formInputsSX = {
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: ColorEnum.WHITE,
    },
    '&:hover fieldset': {
      borderColor: ColorEnum.WHITE,
      backgroundColor: "rgba(256, 256, 256, 0.1)",
    },
    '&.Mui-focused fieldset': {
      borderColor: ColorEnum.ORANGE,
      boxShadow: `0 0 5px 1px ${ColorEnum.ORANGE}`,
    },
  },
  '& .MuiInputLabel-outlined': {
    color: ColorEnum.WHITE,
    '&.Mui-focused': {
      color: ColorEnum.WHITE,
      backgroundColor: ColorEnum.BACKGROUNG,
      padding: "2px 10px",
      marginLeft: "-5px",
      borderRadius: "10px",
    },
  },
  '& .MuiInputBase-input': {
    color: ColorEnum.WHITE,
  },
};

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

