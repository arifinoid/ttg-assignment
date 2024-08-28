import logo from "../assets/logo-768x225.png";
import { infoLinks, links, supportLinks } from "../constants";

function Footer() {
  return (
    <footer class="flex flex-col items-center">
      <div class="flex p-5 justify-center align-middle w-full gap-20">
        <div>
          <h1 class="uppercase font-normal text-xl mb-4 underline decoration-green-400">
            Quick Links
          </h1>
          <ul class="list-disc ml-5">
            <For each={links}>
              {(l) => (
                <li class="my-1 text-gray-400">
                  <a href={l.link} class="capitalize">
                    {l.name}
                  </a>
                </li>
              )}
            </For>
          </ul>
        </div>

        <div>
          <h1 class="uppercase font-normal text-xl mb-4 underline decoration-green-400">
            Support
          </h1>
          <ul class="list-disc ml-5">
            <For each={supportLinks}>
              {(l) => (
                <li class="my-1 text-gray-400">
                  <a href={l.link} class="capitalize">
                    {l.name}
                  </a>
                </li>
              )}
            </For>
          </ul>
        </div>

        <div class="flex flex-col items-center justify-center">
          <img src={logo} alt="logo" class="mr-12 w-[200px] h-auto" />
        </div>

        <div>
          <h1 class="uppercase font-normal text-xl mb-4 underline decoration-green-400">
            More Info
          </h1>
          <ul class="list-disc ml-5">
            <For each={infoLinks}>
              {(l) => (
                <li class="my-1 text-gray-400">
                  <a href={l.link} class="capitalize">
                    {l.name}
                  </a>
                </li>
              )}
            </For>
          </ul>
        </div>

        <div class="w-[20%]">
          <h1 class="uppercase font-normal text-xl mb-4 underline decoration-green-400">
            Contact
          </h1>
          <ul class="ml-5">
            <li class="my-1 text-gray-400 flex items-center gap-3">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.49996 1.80002C4.35194 1.80002 1.79996 4.352 1.79996 7.50002C1.79996 10.648 4.35194 13.2 7.49996 13.2C10.648 13.2 13.2 10.648 13.2 7.50002C13.2 4.352 10.648 1.80002 7.49996 1.80002ZM0.899963 7.50002C0.899963 3.85494 3.85488 0.900024 7.49996 0.900024C11.145 0.900024 14.1 3.85494 14.1 7.50002C14.1 11.1451 11.145 14.1 7.49996 14.1C3.85488 14.1 0.899963 11.1451 0.899963 7.50002Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
                <path
                  d="M13.4999 7.89998H1.49994V7.09998H13.4999V7.89998Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
                <path
                  d="M7.09991 13.5V1.5H7.89991V13.5H7.09991zM10.375 7.49998C10.375 5.32724 9.59364 3.17778 8.06183 1.75656L8.53793 1.24341C10.2396 2.82218 11.075 5.17273 11.075 7.49998 11.075 9.82724 10.2396 12.1778 8.53793 13.7566L8.06183 13.2434C9.59364 11.8222 10.375 9.67273 10.375 7.49998zM3.99969 7.5C3.99969 5.17611 4.80786 2.82678 6.45768 1.24719L6.94177 1.75281C5.4582 3.17323 4.69969 5.32389 4.69969 7.5 4.6997 9.67611 5.45822 11.8268 6.94179 13.2472L6.45769 13.7528C4.80788 12.1732 3.9997 9.8239 3.99969 7.5z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
                <path
                  d="M7.49996 3.95801C9.66928 3.95801 11.8753 4.35915 13.3706 5.19448 13.5394 5.28875 13.5998 5.50197 13.5055 5.67073 13.4113 5.83948 13.198 5.89987 13.0293 5.8056 11.6794 5.05155 9.60799 4.65801 7.49996 4.65801 5.39192 4.65801 3.32052 5.05155 1.97064 5.8056 1.80188 5.89987 1.58866 5.83948 1.49439 5.67073 1.40013 5.50197 1.46051 5.28875 1.62927 5.19448 3.12466 4.35915 5.33063 3.95801 7.49996 3.95801zM7.49996 10.85C9.66928 10.85 11.8753 10.4488 13.3706 9.6135 13.5394 9.51924 13.5998 9.30601 13.5055 9.13726 13.4113 8.9685 13.198 8.90812 13.0293 9.00238 11.6794 9.75643 9.60799 10.15 7.49996 10.15 5.39192 10.15 3.32052 9.75643 1.97064 9.00239 1.80188 8.90812 1.58866 8.9685 1.49439 9.13726 1.40013 9.30601 1.46051 9.51924 1.62927 9.6135 3.12466 10.4488 5.33063 10.85 7.49996 10.85z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <p class="whitespace-normal">
                105069 Schoger Dr. Unit 23 Nopevhio, II 60564
              </p>
            </li>
            <li class="my-1 text-gray-400 flex items-center gap-3">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 2C0.447715 2 0 2.44772 0 3V12C0 12.5523 0.447715 13 1 13H14C14.5523 13 15 12.5523 15 12V3C15 2.44772 14.5523 2 14 2H1ZM1 3L14 3V3.92494C13.9174 3.92486 13.8338 3.94751 13.7589 3.99505L7.5 7.96703L1.24112 3.99505C1.16621 3.94751 1.0826 3.92486 1 3.92494V3ZM1 4.90797V12H14V4.90797L7.74112 8.87995C7.59394 8.97335 7.40606 8.97335 7.25888 8.87995L1 4.90797Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <p>sales@myguysknowhow.com</p>
            </li>
          </ul>
        </div>
      </div>

      <div class="bg-gray-600 p-16 w-full text-center">
        <span class="uppercase text-white">
          &copy; {new Date().getFullYear()}{" "}
          <span class="text-green-400">My Guys Know How</span>. All Rights
          Reserved
        </span>
      </div>
    </footer>
  );
}

export default Footer;
