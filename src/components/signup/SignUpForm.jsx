import { SignUpFormBlock } from "./SignUpForm.style";
import { useState, useRef } from "react";
import {
  checkBirthday,
  checkEmail,
  checkPassword,
  checkPasswordConfirm,
} from "@utils/validator";
import QUESTION_LIST from "./Constants";
import { isAxiosError } from "axios";
import { useValidateInput } from "@hooks/useValidateInput";

import {
  checkAuthNum,
  join,
  sendEmail,
  validateDuplicateNickname,
} from "@apis/members/membersApi";
import { useNavigate } from "react-router-dom";
import { useInput } from "@hooks/useInput";
import Button from "@components/common/button/Button";
import { PwdInputGroup } from "@components/common/input/PwdInputGroup";
import { InputGroup } from "@components/common/input/InputGroup";
import { NormalInputGroup } from "@components/common/input/NormalInputGroup";
import { AuthNumInputGroup } from "@components/common/input/AuthNumInputGroup";
// 이거 한번에 할당할수 있지않나
const NICKNAME = QUESTION_LIST.nickName;
const EMAIL = QUESTION_LIST.email;
const PASSWORD = QUESTION_LIST.password;
const PASSWORD_CONFIRM = QUESTION_LIST.passwordConfirm;
const BIRTHDAY = QUESTION_LIST.birthday;
const AUTH_NUM = QUESTION_LIST.authNum;

const SignUpForm = () => {
  const [email, isEmailValid, handleEmailChange] = useValidateInput(
    "",
    checkEmail
  );
  const [authNum, handleAuthNumChange] = useInput("");
  const [isAuthNumValid, setIsAuthNumValid] = useState(false);
  const [password, isPasswordValid, handlePasswordChange] = useValidateInput(
    "",
    checkPassword
  );
  const [passwordConfirm, isPasswordConfirmValid, handlePasswordConfirmChange] =
    useValidateInput("", checkPasswordConfirm, password);
  const [birthday, isBirthdayValid, handleBirthdayChange] = useValidateInput(
    "",
    checkBirthday
  );

  const [nickname, setNickname] = useState("");
  const nicknameInput = useRef(null);
  const [isNicknameValid, setIsNicknameValid] = useState(false);
  const navigate = useNavigate();

  const handleDuplicateBtnClick = async (e) => {
    e.preventDefault();
    const newNickname = nicknameInput.current.value;
    setNickname(newNickname);
    try {
      await validateDuplicateNickname(newNickname);
      setIsNicknameValid(true);
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response?.status === 409) {
          setIsNicknameValid(false);
        }
      }
    }
  };
  const handleSendEmailBtn = async (e) => {
    //TODO: 이메일 형식 안맞을때 누르면 에러메세지
    e.preventDefault();
    try {
      await sendEmail(email);
    } catch (error) {
      if (isAxiosError(error)) {
        //TODO:error handling 해야함.
        alert(error);
      }
    }
  };

  const handleAuthNumConfirmBtn = async (e) => {
    e.preventDefault();
    try {
      const response = await checkAuthNum(email, authNum);
      if (response.data === "ok") {
        setIsAuthNumValid(true);
      } else {
        setIsAuthNumValid(false);
      }
    } catch (error) {
      if (isAxiosError(error)) {
        alert(error);
      }
    }
  };

  const handleAuthNumResendBtn = async (e) => {
    e.preventDefault();
    try {
      const response = await sendEmail(email);
      //TODO: 메일 다시 보낼때 로직 생각
    } catch (error) {
      if (isAxiosError(error)) {
        alert(error);
      }
    }
  };

  const handleJoinBtnClick = async (e) => {
    e.preventDefault();
    try {
      const response = await join(email, nickname, password, birthday);
      //TODO: 이전 페이지로 가서 로그인 모달 등장
      console.log(response);
      navigate("/");
    } catch (error) {
      if (isAxiosError(error)) {
        //TODO: ERROR 핸들링 생각해야함
        alert(error);
      }
    }
  };

  return (
    <SignUpFormBlock>
      {/* 닉네임 */}
      <label htmlFor="nickname">{NICKNAME.name}</label>
      <NormalInputGroup
        auth="signup"
        state={nickname ? (isNicknameValid ? "success" : "error") : "default"}
        field={NICKNAME}
        onClick={handleDuplicateBtnClick}
      />

      {/* 이메일 */}
      <label htmlFor="email">{EMAIL.name}</label>
      <NormalInputGroup
        auth="signup"
        state={email ? (isEmailValid ? "success" : "error") : "default"}
        field={EMAIL}
        onChange={handleEmailChange}
        onClick={handleSendEmailBtn}
      />

      {/* 이메일 인증 */}
      <AuthNumInputGroup
        auth="signup"
        state={authNum ? (isAuthNumValid ? "success" : "error") : "default"}
        field={AUTH_NUM}
        onChange={handleAuthNumChange}
        onOutLinedBtnClick={handleAuthNumResendBtn}
        onFillBtnClick={handleAuthNumConfirmBtn}
      />

      {/* 비밀번호*/}
      <label htmlFor="password">{PASSWORD.name}</label>
      <PwdInputGroup
        auth="signup"
        state={password ? (isPasswordValid ? "success" : "error") : "default"}
        field={PASSWORD}
        onChange={handlePasswordChange}
      />

      {/* 비밀번호 확인 */}
      <label htmlFor="passwordConfirm">{PASSWORD_CONFIRM.name}</label>
      <PwdInputGroup
        auth="signup"
        state={
          passwordConfirm
            ? isPasswordConfirmValid
              ? "success"
              : "error"
            : "default"
        }
        field={PASSWORD_CONFIRM}
        onChange={handlePasswordConfirmChange}
      />

      {/* 생년월일 */}

      <label htmlFor="birthday">{BIRTHDAY.name}</label>
      <InputGroup
        auth="signup"
        state={birthday ? (isBirthdayValid ? "success" : "error") : "default"}
        field={BIRTHDAY}
        onChange={handleBirthdayChange}
      />

      <Button
        type="cta"
        shape="filledBold"
        disabled={
          !(
            isNicknameValid &&
            isEmailValid &&
            isAuthNumValid &&
            isPasswordValid &&
            isPasswordConfirmValid &&
            isBirthdayValid
          )
        }
        onClick={handleJoinBtnClick}
      >
        가입하기
      </Button>
    </SignUpFormBlock>
  );
};

export default SignUpForm;
