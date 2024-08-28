import luxuryBedroom from "../assets/luxury-bedroom.png";

function About() {
  return (
    <section
      id="about"
      class="flex flex-col h-screen items-center justify-center"
    >
      <div class="flex flex-col md:flex-row p-7 w-full md:w-4/5 border-gray-100 border-8">
        <div class="mb-6 md:mb-0 md:ml-14 flex justify-center">
          <img
            src={luxuryBedroom}
            class="w-full h-auto max-w-md md:max-w-lg lg:max-w-xl"
            alt="Luxury Bedroom"
          />
        </div>

        <div class="p-7 text-center md:text-left">
          <h1 class="text-3xl md:text-5xl uppercase">
            We are the home technology expert
          </h1>
          <p class="text-sm md:text-md leading-7 md:leading-10 text-gray-600 mt-6">
            At MY GUYS KNOW HOW, we like entertainment that is easy to access,
            equipment that is reliable, and audio-video systems that just work.
            Not a lot to ask for, or so we thought. Before we knew it, we had a
            lot of other folks asking us if we would help them in their homes.
            Thus MY GUYS KNOW HOW was born.
          </p>

          <button class="text-green-400 p-3 mt-6 rounded-lg outline outline-green-400 w-32 uppercase">
            Read more
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
