import { For } from "solid-js";

import { workingAreaData } from "../constants";

function Services() {
  return (
    <section
      id="services"
      class="flex flex-col h-screen items-center bg-black w-full"
    >
      <h1 class="uppercase font-bold text-4xl text-white my-48">
        Working areas
      </h1>

      <div class="flex">
        <For each={workingAreaData}>
          {(w) => (
            <div class="max-w-sm mx-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img
                class="rounded-t-lg h-48 w-full object-cover"
                src={w.image}
                alt={w.imgAlt}
                height="200"
              />
              <div class="p-5 flex flex-col items-center justify-center">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white uppercase">
                  {w.name}
                </h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 px-1e text-center">
                  {w.description}
                </p>
                <a class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-400 rounded-lg hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-500 dark:focus:ring-green-500">
                  Learn About
                </a>
              </div>
            </div>
          )}
        </For>
      </div>
    </section>
  );
}

export default Services;
