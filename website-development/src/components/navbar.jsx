import { createSignal, For } from "solid-js";

import logo from "../assets/MGKH_transparency_inverted-1024x300.png";
import { links } from "../constants";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = createSignal(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen());

  return (
    <nav class="w-full fixed flex p-5 list-none bg-gray-700 justify-between md:justify-center align-middle items-center z-10">
      <button class="text-white md:hidden" onClick={toggleMenu}>
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <img src={logo} alt="logo" width="200" height="auto" class="mr-12" />
      <ul
        class={`flex-col md:flex md:flex-row md:items-center md:gap-5 list-none ${
          isMenuOpen() ? "flex" : "hidden"
        } absolute md:static top-16 left-0 w-full bg-gray-700 p-5 md:p-0 md:w-auto md:bg-transparent`}
      >
        <For each={links}>
          {(l) => (
            <li class="m-2 capitalize text-white align-middle">
              <a href={l.link}>{l.name}</a>
            </li>
          )}
        </For>
      </ul>
      <button class="text-white ml-12">
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </nav>
  );
}

export default Navbar;
