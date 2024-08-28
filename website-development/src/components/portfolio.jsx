import { For } from "solid-js";
import { portfolioImages } from "../constants";

function Portfolio() {
  return (
    <section
      id="portfolio"
      class="flex flex-col justify-center items-center gap-5 p-4 min-h-screen"
    >
      <h1 class="uppercase font-normal text-2xl md:text-4xl mb-4">
        Awesome Portfolio
      </h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full sm:w-3/4">
        <For each={portfolioImages}>
          {(img) => (
            <div class="relative overflow-hidden group">
              <img
                src={img}
                class="w-full h-auto transform transition-transform duration-300 group-hover:scale-110"
                alt="portfolio item"
              />
              <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span class="absolute inset-0 flex items-center justify-center text-white text-sm sm:text-lg font-normal opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View
              </span>
            </div>
          )}
        </For>
      </div>
    </section>
  );
}

export default Portfolio;
