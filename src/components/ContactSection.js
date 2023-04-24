import { useState } from "react";

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submissionMessage, setSubmissionMesage] = useState("");

  // Handles the submit event on form submit.
  async function handleSubmit(event) {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      msg: event.target.message.value,
    };

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = "/api/form";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    event.target.name.value = "";
    event.target.email.value = "";
    event.target.message.value = "";
    setSubmissionMesage(result.data);
    setFormSubmitted(true);
  }

  return (
    <section className="mt-28">
      <p className="font-videotype">
        2 <span className="text-whitebc">/ 2</span>
      </p>
      <h2 className="font-videotype mt-5 text-4xl">contact me</h2>
      {!formSubmitted && (
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-[50px] md:gap-y-[25px] mt-8"
        >
          <div>
            <label htmlFor="name" className="block">
              name
              <input
                className="w-full bg-[#171717] border border-solid border-[#3A3A3A] h-[65px] rounded-lg p-4 mt-3"
                name="name"
                id="name"
                placeholder="Your name..."
                required
              />
            </label>
            <label htmlFor="email" className="mt-4 block">
              email
              <input
                className="w-full bg-[#171717] border border-solid border-[#3A3A3A] h-[65px] rounded-lg p-4 mt-3"
                name="email"
                id="email"
                placeholder="Your email..."
                required
              />
            </label>
          </div>
          <label htmlFor="message" className="md:col-span-2">
            message
            <textarea
              className="w-full bg-[#171717] border border-solid border-[#3A3A3A] h-[182px] rounded-lg p-4 mt-3"
              name="message"
              id="message"
              placeholder="Your message..."
              required
            />
          </label>
          <button
            className="w-full bg-[#3A3A3A] border border-solid border-[#171717] h-[65px] rounded-lg p-4 mt-3 md:col-end-4 "
            type="submit"
          >
            Submit
          </button>
        </form>
      )}
      {formSubmitted && <p className="text-center py-4">{submissionMessage}</p>}
    </section>
  );
};

export default Contact;
