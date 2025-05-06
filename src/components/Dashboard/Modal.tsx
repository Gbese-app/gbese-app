import { useState } from 'react'

export default function ModalExample() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Open Modal
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          {/* Modal box */}
          <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4">Modal Title</h2>
            <p className="mb-4">This is the modal content in React.</p>
            <button
              onClick={() => setIsOpen(false)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
