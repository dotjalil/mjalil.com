const Contact = () => {
  return (
    <section className="mt-28">
      <p className="font-videotype">
        3 <span className="text-whitebc">/ 3</span>
      </p>
      <h2 className="font-videotype mt-5 text-4xl">contact me</h2>
      <form className="grid grid-cols-3 gap-[50px] mt-8">
        <div>
          <label htmlFor="name" className="block">
            name
            <input
              className="w-full bg-[#171717] border border-solid border-[#3A3A3A] h-[65px] rounded-lg p-4 mt-3"
              name="name"
              id="name"
              placeholder="Your name..."
            />
          </label>
          <label htmlFor="email" className="mt-4 block">
            email
            <input
              className="w-full bg-[#171717] border border-solid border-[#3A3A3A] h-[65px] rounded-lg p-4 mt-3"
              name="email"
              id="email"
              placeholder="Your email..."
            />
          </label>
        </div>
        <label htmlFor="message" className="col-span-2">
          message
          <textarea
            className="w-full bg-[#171717] border border-solid border-[#3A3A3A] h-[182px] rounded-lg p-4 mt-3"
            name="message"
            id="message"
            placeholder="Your message..."
          />
        </label>
      </form>
    </section>
  );
};

export default Contact;
