import SignUpForm from "@components/signup/SignUpForm";
import { PageTitle } from "@components/common/page/PageTitle";
// import { Lock&key } from "@assets/svg/titles";
import { PageBlock } from "@components/common/page/PageBlock";

const SignUpPage = () => {
  return (
    <PageBlock>
      <PageTitle>
        {/* <Lock /> */}
        <h2>회원가입</h2>
      </PageTitle>
      <SignUpForm />
    </PageBlock>
  );
};

export default SignUpPage;
