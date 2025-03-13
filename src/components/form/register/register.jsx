import Footer from "../../constanst/footer";
import LinksFooter from "../../constanst/footer/links";
import NavBar from "../../constanst/navbarr/navbar";

export default function Register() {
  const registerInfo = [
    {
      title: "Portfolios & Watchlists",
      description: [
        "Link my portfolios and keep an eye on them in real time",
        "Follow exciting watchlists, such as Warren Buffett’s portfolio",
        "Create virtual model portfolios and watchlists",
        "Also accessible via the stock market apps from finanzen.net",
      ],
    },
    {
      title: "Tools & Services for Investors",
      description: [
        "Use the trading desk free of charge",
        "News page about stocks I follow",
        "Use comprehensive newsletter offer for traders, investors and savers",
        "Use and link free stock market apps",
      ],
    },
    {
      title: "finanzen.net zero | Online brokers",
      description: [
        "Trading without order fees (plus standard market spreads)",
        "More than 900,000 stocks, certificates, funds, and ETFs",
        "Free stock and ETF savings plans",
        "Trade real cryptocurrencies 24/7 at top conditions",
        "No custody fees, third-party costs, or trading venue fees",
      ],
    },
  ];

  return (
    <>
      <NavBar></NavBar>
      <section className="bg-gray-50 flex justify-center items-center h-screen">
        <div className="w-full max-w-6xl flex flex-col md:flex-row gap-6 p-6 border-2 shadow-md rounded-md">
          {/* Left Section: Features */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <p className="text-navblue font-semibold text-xl capitalize">
              Register for free and use all features
            </p>
            <div>
              {registerInfo.map((section, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-md shadow-md mb-4"
                >
                  <p className="text-lg text-navblue font-medium capitalize mb-2">
                    {section.title}
                  </p>
                  <ul className="list-disc pl-6 text-sm text-gray-700">
                    {section.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section: Registration Form */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <form className="w-full max-w-md flex flex-col gap-4">
              <p className="text-lg font-semibold mb-4">Create Account</p>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full h-10 rounded-md shadow-sm border border-blue-400 hover:border-blue-300 focus:border-blue-500 pl-4 placeholder-gray-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full h-10 rounded-md shadow-sm border border-blue-400 hover:border-blue-300 focus:border-blue-500 pl-4 placeholder-gray-500"
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full h-10 rounded-md shadow-sm border border-blue-400 hover:border-blue-300 focus:border-blue-500 pl-4 placeholder-gray-500"
                />
              </div>
              {/* checkbox */}

              <div className="w-full h-full flex flex-col gap-4">
                <div className="flex gap-2">
                  <input type="checkbox" id="check"></input>
                  <p>
                    {" "}
                    By registering you accept the
                    <span className="underline"> terms and conditions .</span>
                    <br></br>Yes, I agree that finanzen.net GmbH may send me
                    information about financial and media offers via email,
                  </p>
                </div>
                <div className="flex gap-2">
                  <input type="checkbox" id="check"></input>
                  <p>
                    {" "}
                    e.g., selected investment products (funds, ETFs,
                    derivatives, etc.) or topics such as brokerage, asset
                    management, robo-advisory, cryptocurrencies, etc. This
                    consent can be revoked at any time.
                  </p>
                </div>
              </div>
              <div className=" flex gap-4 flex-col mt-4">
                <button
                  type="submit"
                  className="bg-navblue w-full text-white font-medium capitalize text-center h-10 rounded-md shadow-sm hover:bg-blue-700 hover:scale-105 transition"
                >
                  create a free network
                </button>
                <button className="border-navgreen font-medium capitalize text-center w-full h-10 rounded-md shadow-sm hover:bg-green-300 hover:scale-110 transition">
                  Continue with Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <LinksFooter></LinksFooter>
      <Footer></Footer>
    </>
  );
}
