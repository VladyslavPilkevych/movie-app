import styled from "styled-components";
import { ColorEnum } from "../../assets/styles";
import zIndex from "@mui/material/styles/zIndex";
// import FormInput from "../../components/FormInput";
// import { ColorEnum } from "../../assets/styles";

export const CustomBackgroundContainer = styled.section`
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

export const formInputsSX = {
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: ColorEnum.WHITE,
    },
    '&:hover fieldset': {
      borderColor: ColorEnum.WHITE,
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
// export const CustomFormInput = styled(FormInput)({
//   '& .MuiOutlinedInput-root': {
//     '& fieldset': {
//       borderColor: ColorEnum.WHITE,
//     },
//     '&:hover fieldset': {
//       borderColor: ColorEnum.WHITE,
//     },
//     '&.Mui-focused fieldset': {
//       borderColor: ColorEnum.WHITE,
//     },
//   },
//   '& .MuiInputLabel-outlined': {
//     color: ColorEnum.WHITE,
//   },
//   '& .MuiInputBase-input': {
//     color: ColorEnum.WHITE,
//   },
// });
