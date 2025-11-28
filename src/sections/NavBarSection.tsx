import logo from "@assets/logo.png";
import { NavBarItems } from "@utils/contains.ts";
// import BalanceCard from "../components/BalanceCard";
const NavBar = () => {
  return (
    <section id="navbar-section">
      <div className="mt-8 flex justify-between items-center">
        {/* Logo */}

        <div className=" gap-2 inline-flex items-center">
          <img src={logo} alt="Logo" className="w-5 h-5" />
          <p className="text-xl font-bold">H-IT</p>
        </div>

        {/* NavBar */}
        <ul className="inline-flex gap-10 items-center">
          {NavBarItems.map((item) => {
            return (
              <li
                key={item}
                className="text-lg text-text-2 hover:text-white  cursor-pointer transition-all"
              >
                {item}
              </li>
            );
          })}
        </ul>

        {/* ETH Balance + Address */}
        {/* <BalanceCard /> */}
      </div>
    </section>
  );
};

export default NavBar;
