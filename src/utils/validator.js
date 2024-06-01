export const checkEmail = (email) => {
  const regExp =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[comA-Z]{2,3}$/;

  return regExp.test(email);
};

export const checkPassword = (password) => {
  const regExp = /(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/; //8자리 이상의 알파벳 소문자, 숫자 및 특수문자의 조합, 연속된 숫자는?

  return regExp.test(password);
};

export const checkPasswordConfirm = (password, passwordConfirm) => {
  return password === passwordConfirm;
};

export const checkBirthday = (newDate) => {
  const [year, mon, day] = [
    Number(newDate.substr(0, 4)),
    Number(newDate.substr(4, 2)),
    Number(newDate.substr(6, 2)),
  ];
  if (!(mon >= 1 && mon <= 12)) return false;

  if (!(day >= 1 && day <= 31)) return false;

  if (newDate.length === 8 && year && mon && day) {
    const today = new Date();
    const _birthday = new Date(year, mon - 1, day);
    const minDate = new Date(today.getFullYear() - 110, mon - 1, day);
    return (
      minDate.getTime() <= _birthday.getTime() &&
      _birthday.getTime() <= today.getTime()
    );
  }
  return false;
};
