function Hero() {
  return (
    <div
      id="home"
      class="bg-hero h-screen bg-no-repeat bg-cover flex flex-col items-center justify-center"
    >
      <div class="border-4 border-green-400 w-[33%] flex flex-col items-center justify-center relative">
        <h1 class="text-black text-5xl font-bold uppercase p-4 text-center">
          <span class="block">Explore,</span>
          <span class="block">Dream &amp; Create</span>
        </h1>
        <span class="text-black text-center absolute bottom-[-12px] bg-blue-50 px-2">
          Our services offer countless possibilities.
        </span>
      </div>

      <button class="bg-green-400 p-3 mt-8 rounded-lg w-32">Read more</button>
    </div>
  );
}

export default Hero;
