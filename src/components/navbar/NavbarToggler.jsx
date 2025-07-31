import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../state/menuSlice";

const NavbarToggler = () => {
  const dispatch = useDispatch();

  const setToggleMenu = (e) => {
    // Add animation class
    const btn = e.currentTarget;
    btn.classList.add("animate-tap");
    setTimeout(() => btn.classList.remove("animate-tap"), 500);
    dispatch(toggleMenu());
  };
  return (
    <button
      className="text-2xl p-3 border border-grey rounded-full transition-transform"
      onClick={setToggleMenu}
    >
      <GiHamburgerMenu />
    </button>
  );

};

export default NavbarToggler;
