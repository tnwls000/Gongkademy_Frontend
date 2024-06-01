const QUESTION_LIST = {
  nickName: {
    name: "닉네임",
    placeholder: "닉네임은 1년에 1번 수정할 수 있어요.",
    btnText: " 중복확인",
    successMessage: "사용가능한 닉네임이에요.",
    errorMessage: "누군가 먼저 사용하고 있는 닉네임이에요.",
  },
  email: {
    name: "이메일",
    placeholder: "로그인 할 때 쓰일 예정이에요",
    btnText: "이메일 인증",
    successMessage: "이제 이메일 인증을 눌러주세요",
    errorMessage: "유효한 메일 형식이 아닙니다.",
  },
  authNum: {
    placeholder: "인증번호",
    successMessage: "올바른 인증번호 입니다.",
    errorMessage: "인증번호가 올바르지 않습니다.",
  },
  password: {
    name: "비밀번호",
    placeholder: "비밀번호를 알려주세요",
    successMessage: "사용가능한 비밀번호입니다.",
    errorMessage:
      "비밀번호는 8자리 이상의 알파벳, 숫자 및 특수문자의 조합입니다.",
  },
  passwordConfirm: {
    name: "비밀번호 확인",
    placeholder: "한 번 더 비밀번호를 체크할게요",
    successMessage: "비밀번호가 똑같아요.",
    errorMessage: "비밀번호가 같지 않습니다.",
  },
  birthday: {
    name: "생년월일",
    placeholder: "생일을 알려주세요",
    successMessage: "올바른 생년월일 형식 입니다.",
    errorMessage: "생년월일이 올바르지 않은 것 같습니다.",
  },
};

export default QUESTION_LIST;
