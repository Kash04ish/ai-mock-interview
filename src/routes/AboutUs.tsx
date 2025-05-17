
const AboutUs = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20 text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">What is MockZenAI?</h1>
        <p className="text-lg mb-6">MockZenAI combines “Mock” (practice/interview), “Zen” (calm, clarity), and “AI” — suggesting calm, focused, intelligent interview preparation.
</p>
        <h2 className="text-4xl font-bold mb-6">About Us</h2>
        <p className="text-lg mb-4">
          <strong>MockZenAI</strong> is on a mission to help job seekers unlock their full potential using the
          power of <strong>Artificial Intelligence</strong> and targeted <strong>mock interview practice</strong>.
        </p>
        <p className="text-lg mb-6">
          We know interviews can be stressful. That is why we have built a platform that brings <strong>calm</strong>,
          <strong> clarity</strong>, and <strong>confidence</strong> to your preparation journey.
        </p>
      </div>

      <div className="max-w-5xl mx-auto mt-10 grid md:grid-cols-3 gap-8 text-left">
        <div className="bg-gray-50 rounded-lg p-6 shadow">
          <h3 className="text-xl font-semibold text-indigo-600 mb-2">Mock</h3>
          <p>Practice makes perfect. Real-time mock interviews tailored to your goals and job role.</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-6 shadow">
          <h3 className="text-xl font-semibold text-green-600 mb-2">Zen</h3>
          <p>We help you stay calm and composed, so you can perform your best under pressure.</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-6 shadow">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">AI</h3>
          <p>Smart AI tools deliver personalized feedback and insights to boost your interview skills.</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto text-center mt-12">
        <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
        <p className="text-lg">
          To redefine interview preparation with intelligent, stress-free tools that empower users to stand out and succeed.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
