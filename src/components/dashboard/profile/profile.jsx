import Footer from "../../constanst/footer";
import LinksFooter from "../../constanst/footer/links";
import DashNav from "../dashnav";
import ProfileCrds from "../securities/cards";
import ServicesOption from "../securities/futherservices";
import Security from "../securities/overview";

export default function Profile() {
  return <section className="">
    <DashNav></DashNav>
    <Security></Security>
    <ProfileCrds></ProfileCrds>
    <ServicesOption></ServicesOption>
    <LinksFooter/>
    <Footer></Footer>
  </section>;
}
