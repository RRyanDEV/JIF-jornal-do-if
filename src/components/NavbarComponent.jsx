import Link from "next/link";
import { Dropdown, DropdownItem, Navbar } from "flowbite-react";

export default function NavbarComponent() {
  return (
    <Navbar className="bg-bgNav" fluid>
      <Navbar.Brand className="lg:px-11" as={Link} href="#sobre">
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
          JIF - Jornal do IF
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="lg:px-11">
        <Navbar.Link id="navbar-element">
          <div id="dropdown">
            <Dropdown label="Noticias" inline>
              <DropdownItem as="a" href="https://google.com.br" target="_blank">
                Esportes
              </DropdownItem>
              <DropdownItem as="a">Meio Ambiente</DropdownItem>
              <DropdownItem as="a">Mecânica</DropdownItem>
            </Dropdown>
          </div>
        </Navbar.Link>
        <Navbar.Link id="navbar-element" as={Link} href="#">
          Sobre Nós
        </Navbar.Link>
        <Navbar.Link id="navbar-element" href="#">
          Contato
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
