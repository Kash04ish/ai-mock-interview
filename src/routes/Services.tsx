const Services = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 text-gray-800">
      <h1 className="text-4xl font-extrabold mb-8 text-indigo-600">Our Services</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="border p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-3">Interview Preparation</h2>
          <p>
            Personalized mock interviews powered by AI to simulate real interview scenarios, provide instant feedback, and help you improve with each session.
          </p>
        </div>

        <div className="border p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-3">Career Coaching</h2>
          <p>
            One-on-one coaching sessions to help you strategize your career path, build confidence, and sharpen your professional skills.
          </p>
        </div>

        <div className="border p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-3">Resume Building</h2>
          <p>
            Expert resume reviews and AI-powered optimizations to ensure your CV stands out and opens doors to your dream roles.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
