import Footer from "../../../constanst/footer";
import LinksFooter from "../../../constanst/footer/links";
import DashNav from "../../dashnav";

export default function ProfileData() {
    return (
     <>
     <DashNav></DashNav>
      <section className="py-8 px-4 sm:px-6 md:px-8">
        <form className="max-w-4xl mx-auto space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <select className="w-full px-4 py-2 border rounded-md">
                <option value="select">Select</option>
                <option value="woman">Woman</option>
                <option value="mister">Mister</option>
                <option value="miscellaneous">Miscellaneous</option>
              </select>
            </div>
            <div>
              <input
                type="text"
                placeholder="House No"
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Username"
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="City"
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
          </div>
        </form>
      </section>
      <LinksFooter></LinksFooter>
      <Footer></Footer>
      </>
    );
    
  }
  