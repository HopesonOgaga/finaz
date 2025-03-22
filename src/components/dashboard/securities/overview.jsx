import { Link } from "react-router-dom";

export default function Security() {
  return (
    <section className=" w-full h-full flex justify-between flex-col p-6 ">
      <div className="flex flex-col gap-2 ">
        <p className="capitalize font-semibold text-lg text-left ">
          finanzen.net securities accounts
        </p>
        <p className="text-sm md:max-w-2xl w-full  text-left">
          You can also view your finanzen.net portfolios under "My Securities
          Portfolios." Simply click here . Help with integrating ZERO can be
          found here .
        </p>
      </div>
      <div>
        <div></div>
        {/* button  */}
        <div className="mt-6 ">
          <Link to={"/crypto"} className="w-full h-full">
            <button className="capitalize text-navblue hover:text-white hover:bg-navblue font-semibold text-base text-sm h-10 w-44 rounded-md border-2 border-solid border-navblue hover:to-blue-300  active:bg-blue-200">
              to the deposit ⏩
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
