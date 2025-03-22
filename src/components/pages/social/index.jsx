import { NavLink } from "react-router-dom";
import NavBar from "../../constanst/navbarr/navbar";
import Footer from "../../constanst/footer";
import StockFooter from "../../constanst/links/lndex";

export default function SocialMedia() {
  const socialInfo = [
    {
      title: "Instagram",
      image: "/img/icons/instagram (1).png",
      information: "Always stay up to date and don’t miss any more news.",
      button: "To Instagram",
      link: "https://www.instagram.com/finanzennet/",
    },
    {
      title: "Facebook",
      image: "/img/icons/facebook.png",
      information:
        "Don’t miss any more financial news and follow us on Facebook.",
      button: "To Facebook",
      link: "https://web.facebook.com/finanzen.net?_rdc=1&_rdr#",
    },
    {
      title: "WhatsApp",
      image: "/img/icons/social (3).png",
      information: "Get the top news as a message via WhatsApp.",
      button: "To WhatsApp",
      link: "https://www.whatsapp.com",
    },
    {
      title: "X",
      image: "/img/icons/twitter (1).png",
      information:
        "You can also find all relevant financial news on our X channel.",
      button: "To X",
      link: "FinanzenNet",
    },
    {
      title: "YouTube",
      image: "/img/icons/youtube.png",
      information:
        "You can find valuable financial knowledge on our YouTube channel.",
      button: "To YouTube",
      link: "https://www.youtube.com",
    },
    {
      title: "LinkedIn",
      image: "/img/icons/linkedin.png",
      information: "To receive regular company updates, follow us on LinkedIn",
      button: "To LinkedIn",
      link: "https://de.linkedin.com/company/finanzen-net",
    },
  ];

  return (
    <section className="bg-gray-50 py-8">
      <NavBar></NavBar>
      <div className="max-w-7xl mx-auto px-6 mt-6">
        <h2 className="mb-6 border-solid border border-t-navblue border-t-4 rounded-md shadow-md p-4 ">
          <span className="text-lg capitalize"> Hello, users!</span> <br></br>
          Are you active on social media and not following our channels yet?
          Then check out Instagram, YouTube, and other social media channels now
          to make sure you don't miss any more financial news.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {socialInfo.map((social, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 border rounded-lg shadow-lg bg-white"
            >
              <div className="mb-4">
                <img
                  src={social.image}
                  alt={social.title}
                  className="w-16 h-16 object-contain mb-4"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {social.title}
              </h3>
              <p className="text-gray-600 text-center mt-2">
                {social.information}
              </p>
              <div className="w-full h-full mt-4">
                <a href={social.link} target="_blank" rel="noopener noreferrer">
                  <button className="w-full h-12 border border-2 rounded-md bg-navblue shadow-md text-white capitalize font-semibold hover:bg-navblue-dark transition-all duration-300">
                    {social.button}
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <StockFooter></StockFooter>
      <Footer></Footer>
    </section>
  );
}
