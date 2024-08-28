function Hero() {
  return (
    <div
      id="home"
      class="bg-hero h-screen bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center"
    >
      <div class="border-4 border-green-400 w-full max-w-[90%] md:max-w-[66%] lg:max-w-[50%] flex flex-col items-center justify-center relative p-4">
        <h1 class="text-black text-3xl md:text-5xl font-bold uppercase p-2 text-center">
          <span class="block">Explore,</span>
          <span class="block">Dream &amp; Create</span>
        </h1>
        <span class="text-black text-sm md:text-base lg:text-lg text-center absolute bottom-[-12px] bg-blue-50 px-2">
          Our services offer countless possibilities.
        </span>
      </div>
      <button class="bg-green-400 p-2 md:p-3 mt-4 md:mt-8 rounded-lg w-24 md:w-32">
        Read more
      </button>
    </div>
  );
}

export default Hero;
