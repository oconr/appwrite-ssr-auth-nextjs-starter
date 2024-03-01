import FormButton from "./login/FormButton";

export default async function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-semibold mb-3">Logged in as</h1>
      <h2 className="text-xl font-medium mb-8"></h2>
      <form>
        <FormButton>Logout</FormButton>
      </form>
    </div>
  );
}
