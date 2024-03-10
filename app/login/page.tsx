import FormButton from "./FormButton";
import FormInput from "./FormInput";

export default async function LoginPage() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <form className="w-96 flex flex-col gap-2">
        <h1 className="text-4xl font-semibold mb-3">Login</h1>
        <FormInput
          type="email"
          name="email"
          placeholder="Email address"
          autoComplete="off"
        />
        <FormInput type="password" name="password" placeholder="Password" />
        <FormButton>Login</FormButton>
      </form>
      <div className="w-96 h-px bg-slate-700 my-5" />
      <form className="w-96 flex flex-col gap-2">
        <h1 className="text-4xl font-semibold mb-3">Sign up</h1>
        <FormInput
          type="email"
          name="email"
          placeholder="Email address"
          autoComplete="off"
        />
        <FormInput type="password" name="password" placeholder="Password" />
        <FormButton>Sign up</FormButton>
      </form>
    </div>
  );
}
