import luxuryBedroom from "../assets/luxury-bedroom.png";

function About() {
  return (
    <section
      id="about"
      class="flex flex-col h-screen items-center justify-center"
    >
      <div class="flex p-7 w-4/5 border-gray-100 border-8">
        <div class="ml-14">
          <img src={luxuryBedroom} width="1000" height="auto" />
        </div>
        <div class="p-7">
          <h1 class="text-5xl uppercase">We are the home technology expert</h1>
          <p class="text-md leading-10 text-gray-600 mt-6">
            At MY GUYS KNOW HOW, we like entertainment that is easy to access,
            equipment that is reliable and audio-video systems that just work.
            Not a lot to ask for, or so we thought. Before we know it, we had a
            lot of other folks asking us if we wouldhelp them in their home.
            Thus MY GUYS KNOW HOW was born.
          </p>

          <button class="text-green-400 p-3 rounded-lg outline outline-green-400 w-32 uppercase">
            Read more
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
