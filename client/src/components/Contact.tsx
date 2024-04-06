import Ecommerce from "../assets/Ecommerce.webp";

const Contact = () => {
  return (
    <div>
      <div className="p-6 mt-10 bg-blue-50">
        <h1 className="text-5xl uppercase pitagon-400">CONTACT US</h1>
      </div>
      <div className="flex flex-wrap items-center justify-between">
        <div>
          <h4 className="w-3/4 p-5 text-5xl">GENERAL CONTACT INFORMATION</h4>
          <h4 className="p-5 text-2xl font-light">
            255 Corporate Woods Parkway, Vernon Hills IL, 60061
          </h4>
          <a
            href="mailto:nikhilnalavde53@gmail.com"
            className="p-5 text-xl text-pink-700 hover:text-blue-600"
          >
            nikhilnalavde53@gmail.com
          </a>
        </div>
        <div className="p-10">
          <img src={Ecommerce} alt="Ecommerce Image" height={600} width={600} />
        </div>
      </div>
      <div>
        <h4 className="mt-10 text-5xl text-center text-gray-600">
          Send us your Message
        </h4>
        <form>
          <div className="flex items-center justify-center gap-5 mt-5">
            <div className="w-1/3">
              <div className="flex flex-col">
                <label className="ml-5 text-pink-600">Account Id #</label>
                <input
                  type="text"
                  className="mt-1 border-2 border-gray-300 rounded-full h-14"
                />
              </div>
              <div className="flex flex-col mt-2">
                <label className="ml-5 text-pink-600">Full Name *</label>
                <input
                  type="text"
                  className="mt-1 border-2 border-gray-300 rounded-full h-14"
                />
              </div>
              <div className="flex flex-col mt-2">
                <label className="ml-5 text-pink-600">Email Address *</label>
                <input
                  type="text"
                  className="mt-1 border-2 border-gray-300 rounded-full h-14"
                />
              </div>
            </div>
            <div className="flex flex-col w-1/3">
              <label className="ml-5 text-pink-600">Message</label>
              <textarea
                rows={10}
                className="h-full mt-1 border-2 border-gray-300 rounded-lg"
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button className="px-10 py-3 mt-5 text-white bg-pink-600 rounded-full">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
