import { Link } from 'react-router-dom'

interface Props {
  onBack: () => void
  onSubmit: () => void
  data: any
}

const ReviewInfo: React.FC<Props> = ({ onBack, data }) => {
  const handleSubmit = () => {
    alert('Form submitted successfully')
    console.log('Form Data:', data)
  }

  return (
    
    <main className="min-h-screen bg-white px-4 py-6 max-w-md mx-auto">
      <h2 className='text-lg font-bold text center text -gray-800'>KYC Verification</h2>
      <div className='mt-2 text-sm text-center text-gray-500'>
        <span>3 of 3</span>-<span className='text-blue-600 font-medium'>100% Complete</span>
      </div>
      <div className='w-full h-1 bg-gray-200 rounded-full mt-2'>
        <div className='h-1 bg-blue-600 rounded-full w-full'></div>
      </div>
        <h2 className="text-smtext-gray-800">Review Your Information</h2>
        <p className='text-sm text-gray-500'>Confirm your information before submitting</p>

        {/* Personal Info */}
        <section  className="px-4 sm:px-6 py-4 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-blue-400 mb-4 pb-2 border-b border-gray-200">
            Basic Information
          </h3>
          <div className="divide-y divide-gray-200">
            <div className="py-2 flex items-center space-x-2">
              <span className="font-medium text-gray-600 w-32 sm:w-40">Name:</span> {data.firstName}{' '}
              {data.lastName}
            </div>
            <div className="py-2 flex items-center space-x-2">
              <span className="font-medium text-gray-600 w-32 sm:w-40">Date of Birth:</span>
              <span className="text-gray-800" ></span>{data.dob}
            </div>
            <div className="py-2 flex items-center space-x-2">
              <span className="font-medium text-gray-600 w-32 sm:w-40">Email:</span> {data.email}
            </div>
            <div className="py-2 flex items-center space-x-2">
              <span className="font-medium text-gray-600 w-32 sm:w-40">Phone Number:</span> {data.phoneNumber}
            </div>
            <div className="py-2 flex items-center space-x-2">
              <span className="font-medium text-gray-600 w-32 sm:w-40">Address:</span> {data.address},{' '}
              {data.town}, {data.state}
            </div>
          </div>
        </section>

        {/* Identity Info */}
        <section>
          <h3 className="text-xl font-semibold text-blue-400 mb-4 pb-2 border-b border-gray-200">
            Identity Document
          </h3>
          <div className='py-2 flex items-center space-x-2'>
            <p><span className='font-medium'>identityNumber:</span>5394-2678-4245-0618</p>
          </div>
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
                  className="rounded-md border`"
                />
                <p className="text-xm text-gray-500 mb-1">Front ID</p>
              </div>
            )}
            {data.backIdImage && (
              <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm p-2">
                <img
                  src={data.backIdImage}
                  alt="Back ID"
                  className="rounded-md border"
                />
                <p className="text-xm text-gray-500 mb-1">Back ID</p>
              </div>
            )}
          </div>
        </section>

        {/* Buttons */}
        <div className="flex justify-between mt-4">
          <button
            className="w-[48%] border border-gray-400 text-gray-700 font-medium py-2 rounded-md"
            onClick={onBack}
          >
            Back
          </button>

          <Link to="/dashboard">
           
            <button
              className="w-[48%] bg-blue-600 text-white font-medium py-2 rounded-md"
              style={{ backgroundColor: '#1c2964' }}
              onClick={handleSubmit}
            >
              Submit
            </button>
          </Link>
        </div>
      </main>
    
  )
}

export default ReviewInfo;