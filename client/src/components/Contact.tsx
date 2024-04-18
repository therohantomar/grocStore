

const Contact = () => {
  return (<section className="h-[100dvh] flex items-center justify-center">
    <div className="max-w-md mx-auto  p-8 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Contact GrocStore Owner</h2>
      <div className="flex items-center mb-4">
        <svg
          className="w-6 h-6 mr-2 text-gray-500"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
        <p className="text-gray-600">Contact Number: 8976543210</p>
      </div>
    </div>
    </section>
    
  );
};

export default Contact;
