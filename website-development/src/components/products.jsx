import { For } from "solid-js";
import { Slider } from "solid-slider";

import { productsData, productTabs } from "../constants";
import "solid-slider/slider.css";

export function NavigationButton({ type, className }) {
  if (type === "next") {
    return (
      <button class={`border-green-400 border-2 h-[36px] p-2 ${className}`}>
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    );
  }

  return (
    <button class={`border-green-400 border-2 h-[36px] p-2 ${className}`}>
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z"
          fill="currentColor"
          fill-rule="evenodd"
          clip-rule="evenodd"
        />
      </svg>
    </button>
  );
}

function Star({ ammount = 5 }) {
  return (
    <div class="flex gap-2 text-green-400 items-center justify-center">
      {[...Array(ammount).keys()].map((_) => (
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.97942 1.25171L6.9585 1.30199L5.58662 4.60039C5.54342 4.70426 5.44573 4.77523 5.3336 4.78422L1.7727 5.0697L1.71841 5.07405L1.38687 5.10063L1.08608 5.12475C0.820085 5.14607 0.712228 5.47802 0.914889 5.65162L1.14406 5.84793L1.39666 6.06431L1.43802 6.09974L4.15105 8.42374C4.23648 8.49692 4.2738 8.61176 4.24769 8.72118L3.41882 12.196L3.40618 12.249L3.32901 12.5725L3.25899 12.866C3.19708 13.1256 3.47945 13.3308 3.70718 13.1917L3.9647 13.0344L4.24854 12.861L4.29502 12.8326L7.34365 10.9705C7.43965 10.9119 7.5604 10.9119 7.6564 10.9705L10.705 12.8326L10.7515 12.861L11.0354 13.0344L11.2929 13.1917C11.5206 13.3308 11.803 13.1256 11.7411 12.866L11.671 12.5725L11.5939 12.249L11.5812 12.196L10.7524 8.72118C10.7263 8.61176 10.7636 8.49692 10.849 8.42374L13.562 6.09974L13.6034 6.06431L13.856 5.84793L14.0852 5.65162C14.2878 5.47802 14.18 5.14607 13.914 5.12475L13.6132 5.10063L13.2816 5.07405L13.2274 5.0697L9.66645 4.78422C9.55432 4.77523 9.45663 4.70426 9.41343 4.60039L8.04155 1.30199L8.02064 1.25171L7.89291 0.944609L7.77702 0.665992C7.67454 0.419604 7.32551 0.419604 7.22303 0.665992L7.10715 0.944609L6.97942 1.25171ZM7.50003 2.60397L6.50994 4.98442C6.32273 5.43453 5.89944 5.74207 5.41351 5.78103L2.84361 5.98705L4.8016 7.66428C5.17183 7.98142 5.33351 8.47903 5.2204 8.95321L4.62221 11.461L6.8224 10.1171C7.23842 9.86302 7.76164 9.86302 8.17766 10.1171L10.3778 11.461L9.77965 8.95321C9.66654 8.47903 9.82822 7.98142 10.1984 7.66428L12.1564 5.98705L9.58654 5.78103C9.10061 5.74207 8.67732 5.43453 8.49011 4.98442L7.50003 2.60397Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          />
        </svg>
      ))}
    </div>
  );
}

function Products() {
  const generateClass = (active) =>
    active
      ? "border-green-400 text-green-400"
      : "border-transparent hover:border-green-200 hover:bg-green-200";

  return (
    <section class="flex flex-col h-screen items-center justify-center bg-gray-100">
      <h1 class="uppercase font-normal text-4xl">Our Products</h1>
      <ul class="flex my-8">
        <For each={productTabs}>
          {(t) => (
            <li class="mr-3">
              <a
                class={`inline-block border uppercase rounded py-1 px-3 ${generateClass(t.active)}`}
              >
                {t.name}
              </a>
            </li>
          )}
        </For>
      </ul>

      <div class="relative w-full">
        <NavigationButton
          type="prev"
          className="absolute top-28 left-12 z-10"
        />
        <Slider
          class="flex justify-center items-center"
          options={{ loop: true, slides: { perView: 3 } }}
        >
          <For each={productsData}>
            {(p) => (
              <div class="w-1/3 flex-shrink-0 p-4 relative group">
                <div class="h-auto text-center">
                  <div class="relative">
                    <img
                      src={p.image}
                      alt={p.alt}
                      class="h-48 w-auto mx-auto"
                    />
                    <div class="absolute top-0 right-0 bg-green-400 text-white text-xs font-bold px-2 py-1 rounded-bl-lg rounded-br-lg">
                      15% OFF
                    </div>

                    <div class="absolute bottom-0 left-0 right-0 bg-green-400 text-white text-sm py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div class="flex gap-3 text-center items-center justify-center">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          class="text-center"
                        >
                          <path
                            d="M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z"
                            fill="currentColor"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <span>Quick View</span>
                      </div>
                    </div>
                  </div>

                  <h1 class="uppercase text-lg my-2">{p.name}</h1>
                  <Star />
                  <p class="my-2">{p.price}</p>
                </div>
              </div>
            )}
          </For>
        </Slider>
        <NavigationButton
          type="next"
          className="absolute top-28 right-12 z-10"
        />
      </div>
    </section>
  );
}

export default Products;
