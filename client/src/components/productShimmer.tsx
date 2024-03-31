

export const ProductShimmer = () => (
  <div className="my-10 overflow-hidden bg-white rounded-lg w-72 p-4">
    <div className="w-full h-32 bg-gray-300 animate-pulse rounded-md"></div>
    <div className="mt-4 w-full h-12 bg-gray-300 animate-pulse rounded-md mb-4"></div>
    {/* <div className="mt-4 w-full h-12 bg-gray-300 animate-pulse rounded-md"></div> */}
    <div className="mt-4 h-8 w-20  bg-gray-300 animate-pulse rounded-md mx-auto"></div>
    <div className="mt-4 flex items-center justify-center">
      <div className="h-12 w-full bg-gray-300 animate-pulse rounded-md"></div>
    </div>
  </div>
);

