
import { useNavigate } from 'react-router-dom'

export const Error = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center h-screen mt-8 text-center text-gray-600">
      <h1 className="text-4xl font-semibold">Something went wrong!</h1>
      <button
        onClick={() => navigate('/')}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg mt-6 font-semibold"
      >
        Shop now
      </button>
    </div>
  )
}


