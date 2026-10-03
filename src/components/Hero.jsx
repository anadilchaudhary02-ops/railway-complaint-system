export default function Hero() {
  return (
    <section className="text-center py-12 sm:py-16 lg:py-20 px-4">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
        Smoother Journeys Start
      </h1>

      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
        With Your Feedback
      </h1>

      <p className="text-gray-500 mt-4 sm:mt-6 text-base sm:text-lg max-w-md sm:max-w-xl mx-auto">
        Your voice matters. Report issues easily and
        track resolution in real-time.
      </p>

      <button className="mt-6 sm:mt-8 bg-blue-900 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl hover:bg-blue-800 text-sm sm:text-base transition">
        Submit a Complaint
      </button>
    </section>
  );
}