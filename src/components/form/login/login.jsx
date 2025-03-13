export default function Login() {
  return (
    <section className="w-full h-full">
      <div className=" w-full h-full justify-center items-center">
        <p>welcome</p>
        <p>please check your entry</p>
      </div>
      <div>
        <div>
          <form onSubmit={""}>
            <div><input type="email" name="email" id="email" className="" placeholder="email address or username">email address or username</input></div>
            <div><input type="text" name="password" id="password" placeholder="password">password</input></div>
          </form>
        </div>
        <div></div>
      </div>
    </section>
  );
}
