import LoginSignupForm, {
  ILoginSignupForm,
} from "../../commons/combine/loginSignupForm";

export default function SignupContainer() {
  const onSubmit = (data: ILoginSignupForm) => {
    console.log(data);
  };

  return <LoginSignupForm isSignup={true} onSubmit={onSubmit} />;
}
