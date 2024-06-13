import SignUpForm from "@components/signup/SignUpForm";
import { PageTitle } from "@components/common/page/PageTitle";
// import { Lock&key } from "@assets/svg/titles";
import PageLayout from "../../components/common/page/PageLayout";
const SignUpPage = () => {
  return (
    <PageLayout>
      <PageTitle>
        {/* <Lock /> */}
        <h2>회원가입</h2>
      </PageTitle>
      <SignUpForm />
    </PageLayout>
  );
};

export default SignUpPage;
