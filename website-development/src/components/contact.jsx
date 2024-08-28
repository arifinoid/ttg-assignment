const Map = () => {
  return (
    <div id="map" class="h-screen w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.782791115678!2d112.75073827637743!3d-7.26554239274129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f9edc2f6fd79%3A0x7781748546e229ed!2sNew%20Gubeng%20Train%20Station!5e0!3m2!1sen!2sid!4v1724838786591!5m2!1sen!2sid"
        width="100%"
        height="80%"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

function Contact() {
  return (
    <section id="contact" class="text-center relative">
      <Map />
      <div class="flex items-center w-full justify-around absolute top-[80%] bg-gray-600 text-white p-14">
        <div>
          <h1 class="uppercase font-normal text-4xl mb-4">Have Questions?</h1>
          <h1 class="uppercase font-normal text-4xl mb-4">We Have Answers.</h1>
        </div>
        <button class="text-green-400 p-3 rounded-md outline outline-green-400 w-32 uppercase">
          Contact
        </button>
      </div>
    </section>
  );
}

export default Contact;
