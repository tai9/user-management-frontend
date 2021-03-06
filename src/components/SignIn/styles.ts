import styled from "styled-components";

export const SignInStyled = styled.div`
  display: flex;
  margin-top: 64px;
  align-items: center;
  flex-direction: column;

  a {
    color: inherit;
    text-decoration: none;
    transition: all 200ms ease-in-out;
  }

  a:hover {
    border-bottom: 2px solid;
    padding-bottom: 2px;
  }

  .avatar {
    margin: 8px;
    background: linear-gradient(45deg, #2196f3 30%, #21cbf3 90%);
  }

  .form {
    width: 100%;
    margin-top: 18px;
  }

  .btn_submit {
    margin: 24px 0px 16px;
    background: linear-gradient(
      45deg,
      rgb(33, 150, 243) 30%,
      rgb(33, 203, 243) 90%
    );
    box-shadow: rgba(33, 203, 243, 0.3) 0px 3px 5px 2px;
  }

  .btn_submit:hover {
    box-shadow: rgba(33, 203, 243, 0.3) 0px 5px 10px 2px;
  }

  .checkbox {
    .MuiCheckbox-colorPrimary.Mui-checked {
      color: rgb(33, 150, 243);
    }
  }

  .MuiFormLabel-root.Mui-focused {
    color: rgb(33, 150, 243);
  }

  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: rgb(33, 150, 243);
  }
`;
