export default function Contact() {
  return (
    <form
      action="https://getform.io/f/aejljwwb"
      method="POST"
      className="max-w-6xl p-5 md:p-12"
      id="form"
    >
      <p className="text-gray-100 font-bold text-xl mb-4">Let’s connect!</p>

      <input
        type="text"
        id="name"
        placeholder="Your Name ..."
        name="name"
        required
        className="mb-4 w-full rounded-md border border-purple-600 py-2 pl-3 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
      />

      <input
        type="email"
        id="email"
        placeholder="Your Email ..."
        name="email"
        required
        className="mb-4 w-full rounded-md border border-purple-600 py-2 pl-3 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
      />

      <textarea
        name="message"
        id="textarea"
        cols="30"
        rows="4"
        placeholder="Your Message ..."
        required
        className="mb-4 w-full rounded-md border border-purple-600 py-2 pl-3 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
      ></textarea>

      <input type="hidden" name="_gotcha" style={{ display: 'none' }} />
      <input type="hidden" name="_redirect" value="/thank-you" />

      <button
        type="submit"
        className="w-full py-3 rounded-md text-white font-semibold text-xl bg-purple-600 hover:bg-purple-700 transition-colors duration-300"
      >
        Send Message
      </button>
    </form>
  );
}