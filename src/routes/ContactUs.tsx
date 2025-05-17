const ContactUs = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-4xl font-extrabold mb-6 text-indigo-600">Contact Us</h1>
      <p className="text-lg mb-4">
        Have questions or need assistance? We are here to help! Reach out to the MockZenAI team via any of the following:
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-lg">
        <li><strong>Address:</strong> 123 AI Street, Tech City, 12345</li>
        <li><strong>Email:</strong> <a href="mailto:support@mockzenai.com" className="text-indigo-600 hover:underline">support@mockzenai.com</a></li>
        <li><strong>Phone:</strong> +1 (555) 123-4567</li>
      </ul>

      <p className="text-lg mb-4">
        Or send us a message below:
      </p>

      <form className="space-y-4 max-w-md">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <textarea
          placeholder="Your Message"
          rows={4}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
