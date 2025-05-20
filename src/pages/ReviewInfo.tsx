import { Loader2Icon } from "lucide-react"

interface Props {
  onBack: () => void
  onSubmit: () => void
  isPending: boolean
  data: any
}

const ReviewInfo: React.FC<Props> = ({ onBack, onSubmit, isPending, data }) => {
  console.log(data)
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-3xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center text-gray-800">Review Your Information</h2>

        {/* Personal Info */}
        <section>
          <h3 className="text-xl font-semibold text-blue-400 mb-4 pb-2 border-b border-gray-200">
            Basic Information
          </h3>
          <div className="divide-y divide-gray-200">
            <div className="py-2">
              <span className="font-medium text-gray-600">Name:</span> {data.firstName}{' '}
              {data.lastName}
            </div>
            <div className="py-2">
              <span className="font-medium text-gray-600">Date of Birth:</span> {data.dob}
            </div>
            <div className="py-2">
              <span className="font-medium text-gray-600">Email:</span> {data.email}
            </div>
            <div className="py-2">
              <span className="font-medium text-gray-600">Phone Number:</span> {data.phoneNumber}
            </div>
            <div className="py-2">
              <span className="font-medium text-gray-600">Address:</span>{' '} {data.address.town}, {data.address.state}, {data.address.number}
            </div>
          </div>
        </section>

        {/* Identity Info */}
        <section>
          <h3 className="text-xl font-semibold text-blue-400 mb-4 pb-2 border-b border-gray-200">
            Identity Document
          </h3>
          <div className="text-gray-800 divide-y divide-gray-200">
            <div className="py-2">
              <span className="font-medium text-gray-600">Document Type:</span> {data.documentType}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4 divide-x-0 sm:divide-x sm:divide-gray-200">
            {data.frontIdImage && (
              <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm p-2">
                <img
                  src={data.frontIdImage}
                  alt="Front ID"
                  className="w-full h-48 object-cover rounded-md"
                />
                <p className="text-sm text-center mt-2 text-gray-500">Front ID</p>
              </div>
            )}
            {data.backIdImage && (
              <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm p-2">
                <img
                  src={data.backIdImage}
                  alt="Back ID"
                  className="w-full h-48 object-cover rounded-md"
                />
                <p className="text-sm text-center mt-2 text-gray-500">Back ID</p>
              </div>
            )}
          </div>
        </section>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 pt-4 border-t border-gray-200">
          <button
            className="w-full sm:w-auto bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2.5 px-6 rounded-md transition-shadow shadow-sm"
            onClick={onBack}
          >
            Back
          </button>

          <button
            className="w-full sm:w-auto text-white font-semibold py-2.5 px-6 rounded-md transition-shadow shadow-md"
            style={{ backgroundColor: '#1c2964' }}
            onClick={onSubmit}
            disabled={isPending}
          >
            {isPending ? <Loader2Icon className="animate-spin" /> : 'Submit'}
          </button>
        </div>
      </div>
    </main>
  )
}

export default ReviewInfo