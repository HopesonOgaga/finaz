const dashLinks = [
  {
    link1: { label: "Overview", url: "/overview" },
    link2: { label: "Security Account", url: "/security-account" },
    link3: { label: "Model Portfolios", url: "/model-portfolios" },
    link4: { label: "Watchlist", url: "/watchlist" },
    link5: { label: "My News", url: "/my-news" },
    link6: { label: "Newsletter", url: "/newsletter" },
    link7: { label: "Profile", url: "/profile" },
  },
];

export default function DashNav() {
  return (
    <section>
      <div className="border-solid rounded-sm shadow-md w-full h-full mt-4 flex gap-8 flex-col p-4">
        <div>
          <p className="text-navblue font-semibold capitalize text-3xl">
            My Finances - <span>username</span>
          </p>
        </div>
        <div>
          <ul className="flex w-full h-full gap-8">
            {Object.keys(dashLinks[0]).map((key, index) => {
              const { label, url } = dashLinks[0][key]; // Destructure label and url
              const isActive = window.location.pathname === url; // Check if the current path matches the link's URL
              return (
                <li key={index}>
                  <a
                    href={url} // Use the correct URL
                    target=""
                    className={`block border-b-2 border-b-navblue hover:border-b-4 ${isActive ? 'border-b-4 font-bold' : ''}`}
                  >
                    {label} {/* Display the label */}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Button */}
        <div>
          <button className="hidden text-lg capitalize font-normal text-navblue border-solid border-2  border-navblue h-10 w-24 rounded-full hover:to-blue-400">
            In Total
          </button>
        </div>
      </div>
    </section>
  );
}
