import { useEffect, useState } from "react";
import { Box, Container, Group, Burger, UnstyledButton } from "@mantine/core";
import { IconSearch, IconShoppingCart, IconUser } from "@tabler/icons-react";
import DropdownMenu from "../../common/DropdownMenu";
import { shirtsMenuData } from "../../../data/data";
import headerLogo from "../../assets/images/logoBlack.png";
import TopHead from "../TopHead";

const navLinks = [
  "Shirts",
  "New Arrivals",
  "Best Seller",
  "Customer Review",
  "Return/Exchange",
  "About Us",
];

export default function Header() {
  const [opened, setOpened] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <TopHead />
      <Box
        component="header"
        className={`w-full h-[80px] transition-all duration-300 ease-in-out flex justify-between items-center top-10 md:top-12 ${
          scrolled
            ? "bg-white shadow-[0_2px_10px_rgba(0,0,0,0.1)] py-2"
            : "bg-white py-4"
        }`}
      >
        <Container fluid className="flex items-center justify-between w-full px-6 md:px-8 transition-all duration-300">
          {/* Logo */}
          <div className="text-xl font-bold cursor-pointer font-title text-gray-800">
            {/* <img src={headerLogo} alt="TypeZero" /> */}
            TypeZero
          </div>

          {/* Burger for mobile */}
          <Burger
            opened={opened}
            onClick={() => setOpened(!opened)}
            size="sm"
            color="#000"
            className="sm:hidden"
          />

          {/* Navigation Links */}
          <Group className="hidden sm:flex gap-7">
            <DropdownMenu buttonLabel="Shirts" menuData={shirtsMenuData} />

            {navLinks.slice(1).map((link) => (
              <UnstyledButton
                key={link}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-semibold"
              >
                {link}
              </UnstyledButton>
            ))}
          </Group>

          {/* Right Side Icons */}
          <Group className="flex items-center gap-4">
            <UnstyledButton aria-label="Search" className="hover:text-blue-600">
              <IconSearch size={24} />
            </UnstyledButton>

            <UnstyledButton aria-label="User" className="hover:text-blue-600">
              <IconUser size={24} />
            </UnstyledButton>

            <UnstyledButton
              aria-label="Cart"
              className="relative hover:text-blue-600"
            >
              <IconShoppingCart size={24} />
              <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </UnstyledButton>
          </Group>
        </Container>

        {/* Mobile Menu */}
        {opened && (
          <Box className="sm:hidden bg-white shadow-md w-full absolute left-0 top-[70px] z-40 transition-all">
            <div className="flex flex-col p-4 space-y-3">
              {navLinks.map((link) => (
                <UnstyledButton
                  key={link}
                  className="text-gray-700 hover:text-blue-600 text-lg"
                  onClick={() => setOpened(false)}
                >
                  {link}
                </UnstyledButton>
              ))}
            </div>
          </Box>
        )}
      </Box>
    </div>
  );
}
