const AtsScorePage = () => {
  return (
    <div className="p-6">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-slate-600">
        What is an ATS Score?
      </h1>

      <p>
        An ATS Score is a measure of how well your resume is optimized to pass through an Applicant Tracking System (ATS) — the software many companies use to screen job applications. These systems scan resumes for relevant keywords, formatting, job titles, skills, and other criteria before a human ever sees them.
      </p>

      <h3 className="text-2xl font-bold mb-4 text-blue-950 mt-6">
        Why is the ATS Score Important?
      </h3>

      <ul className="mt-4 text-lg text-gray-700 list-disc pl-6 space-y-2">
        <li>
           <strong>Beat the bots:</strong> Over 95% of Fortune 500 companies use ATS to screen applicants.
        </li>
        <li>
          <strong>Keyword optimization:</strong> Ensures your resume contains job-relevant terms and skills.
        </li>
        <li>
          <strong>Formatting check:</strong> Detects issues that may prevent your resume from being read correctly.
        </li>
        <li>
          <strong>Detailed insights:</strong> Get suggestions to improve your resume’s performance.
        </li>
      </ul>

      <p className="mt-4">
        Our ATS Checker helps you evaluate how well your resume performs against Applicant Tracking Systems (ATS) used by top employers. By analyzing formatting, keywords, and structure, it gives you a clear score that reflects your resume’s compatibility with automated screening tools. Whether you're applying for your first job or looking to switch careers, our tool ensures your resume gets noticed by both recruiters and software. Optimize your chances of landing interviews with real-time feedback and expert insights.
      </p>

      <p className="text-2xl font-bold mt-6">Checkout ➡</p>

      <a
        href="https://www.jobscan.co"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Go to ATS Checker Site
      </a>
    </div>
  );
};

export default AtsScorePage;
