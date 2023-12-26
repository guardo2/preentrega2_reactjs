import logo from "../../assets/logoheader.png";
import { Link } from "react-router-dom";

const links = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "jordan",
    href: "/productos/jordan",
  },
  {
    label: "adidas",
    href: "/productos/adidas",
  },
  {
    label: "newbalance",
    href: "/productos/newbalance",
  },
  {
    label: "nike",
    href: "/productos/nike",
  },
];

const Navbar = () => {
  return (
    <header className="bg-teal-600">
      <div className="container mx-auto py-6 flex flex-col items-center">
        <img src={logo} alt="Logo" className="w-35 h-16 mb-4" />

        <nav className="flex gap-5">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-white hover:text-lime-200 text-lg uppercase font-semibold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* <CartWidget /> */}
      </div>
    </header>
  );
};

export default Navbar;
