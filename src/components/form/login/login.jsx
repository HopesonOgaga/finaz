import { Link } from "react-router-dom";
import Footer from "../../constanst/footer";
import Inside from "../../constanst/footer/info";
import LinksFooter from "../../constanst/footer/links";
import NavBar from "../../constanst/navbarr/navbar";

export default function Login() {
  return (
    <>
      <NavBar></NavBar>
      <section className="w-screen h-full">
        {/* Card Box */}
        <div className="flex justify-center items-center w-full h-full px-4 md:px-0">
          <div className="w-full max-w-5xl bg-white p-8 rounded-lg shadow-lg">
            <div className="w-full h-full justify-start mb-4 flex gap-4 flex-col">
              <p className="text-navblue font-medium text-3xl text-center md:text-left">
                Welcome
              </p>
              <p className="text-sm font-light text-navblue hidden md:block">
                Please check your entry
              </p>
            </div>
            <div className="w-full h-full flex flex-col md:flex-row gap-8 md:gap-16">
              <div className="w-full md:w-2/3">
                <form className="w-full">
                  <div className="flex flex-col gap-4 w-full">
                    {/* Email / Username */}
                    <div className="w-full">
                      <input
                        type="email"
                        placeholder="Email address or username"
                        required
                        className="w-full h-10 rounded-md shadow-sm border border-blue-400 hover:border-blue-300 active:border-blue-600 pl-4 placeholder-navblue capitalize"
                      />
                    </div>
                    {/* Password */}
                    <div className="w-full">
                      <input
                        type="password"
                        placeholder="Password"
                        required
                        className="w-full h-10 rounded-md shadow-sm border border-blue-400 hover:border-blue-300 active:border-blue-600 pl-4 placeholder-navblue"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 mt-6">
                    {/* Register Button */}
                    <div className="mt-6">
                      <Link to={'/register'} className="w-full h-full">
                        {" "}
                        <button className="bg-navgreen text-white font-medium capitalize text-center w-full h-10 rounded-md shadow-sm hover:bg-green-300 hover:scale-110 transition">
                          Register
                        </button>
                      </Link>
                    </div>
                    {/* Google Button */}
                    <div>
                      <button className="border-navgreen font-medium capitalize text-center w-full h-10 rounded-md shadow-sm hover:bg-green-300 hover:scale-110 transition">
                        Continue with Google
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
                <div>
                  <img
                    src="/img/premium-trading-desk.avif"
                    alt="Relevant visual representation"
                    className="w-full max-w-md mb-8 md:mb-0"
                  />
                </div>
                <div className="w-full">
                  <p className="text-lg font-medium capitalize text-navblue text-center md:text-left">
                    New to finanzen.net?
                  </p>
                  <p className="text-base font-medium text-center md:text-left">
                    <a
                      href="."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navblue hover:underline"
                    >
                      Register today and enjoy numerous benefits free of charge
                    </a>
                  </p>
                  <div className="mt-4">
                    <Link to={"/register"} className="w-full h-full">
                      {" "}
                      <button className="border-navgreen text-navgreen font-medium capitalize text-center w-full h-10 rounded-md shadow-sm hover:bg-navblue active:text-white hover:text-white hover:scale-110 transition">
                        Create a free account now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LinksFooter></LinksFooter>
      <Footer></Footer>
      <Inside></Inside>
    </>
  );
}
