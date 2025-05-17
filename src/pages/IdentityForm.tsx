import { useState } from 'react'

interface Props {
  onNext: () => void
  onBack: () => void
  onUpdate: (data: any) => void
  data: any
}

const IdentityForm: React.FC<Props> = ({ onNext, onBack, onUpdate, data }) => {
  const [selectedDocumentType, setSelectedDocumentType] = useState<string>('National ID')
  const [frontImage, setFrontImage] = useState<string | null>(null)
  const [backImage, setBackImage] = useState<string | null>(null)

  const handleDocumentTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDocumentType(e.target.value)
    // Reset images when document type changes
    setFrontImage(null)
    setBackImage(null)
    onUpdate({ documentType: e.target.value, frontIdImage: null, backIdImage: null })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, isFront: boolean) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        if (isFront) {
          setFrontImage(reader.result as string)
          onUpdate({ ...data, frontIdImage: reader.result })
        } else {
          setBackImage(reader.result as string)
          onUpdate({ ...data, backIdImage: reader.result })
        }
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <main className="flex items-center justify-center min-h-[90vh] bg-gray-50 p-6">
      {' '}
      {/* Increased the height here */}
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-4xl">
        <h2 className="text-xl font-semibold text-gray-800">Identity Document</h2>
        <p className="text-sm text-gray-600">
          Please upload a valid ID document (passport, driver's license, or national ID card).
        </p>
        <div className="bg-blue-50 text-blue-700 border border-blue-100 rounded-md p-3 mb-4 text-sm leading-relaxed">
          Please upload a clear photo or scan of your ID, ensuring your name, photo, and ID number
          are fully visible without glare, blur, or cropping.
        </div>

        <div className="mb-4">
          <label htmlFor="documentType" className="block text-sm font-medium mb-2 text-gray-700">
            Select Document Type
          </label>
          <div className="relative">
            <select
              id="documentType"
              className="border p-2 rounded w-full -gray-300 rounded-md py-2 pl-3 pr-10 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-300 appearance-none"
              value={selectedDocumentType}
              onChange={handleDocumentTypeChange}
            >
              <option value="National ID">National ID</option>
              <option value="Driver's License">Driver's License</option>
              <option value="Passport">Passport</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="border-dashed border-2 border-gray-300 rounded-md p-4 flex flex-col items-center justify-center">
            <svg
              className="w-6 h-6 text-gray-500 mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0l-4 4m4-4v12"
              />
            </svg>
            <p className="text-gray-500 text-xs mb-1">Upload front</p>
            <p className="text-gray-500 text-xs mb-1">Supported: JPG, PNG, PDF (Max 5MB)</p>
            <input
              type="file"
              className="hidden"
              id="front-upload"
              onChange={(e) => handleFileChange(e, true)}
            />
            <label
              htmlFor="front-upload"
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-1 px-3 rounded-md cursor-pointer text-xs"
            >
              Browse
            </label>
            {frontImage && (
              <div className="mt-2">
                <img src={frontImage} alt="Front ID Preview" className="max-h-16 rounded-md" />
              </div>
            )}
          </div>

          <div className="border-dashed border-2 border-gray-300 rounded-md p-4 flex flex-col items-center justify-center">
            <svg
              className="w-6 h-6 text-gray-500 mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0l-4 4m4-4v12"
              />
            </svg>
            <p className="text-gray-500 text-xs mb-1">Upload back</p>
            <p className="text-gray-500 text-xs mb-1">Supported: JPG, PNG, PDF (Max 5MB)</p>
            <input
              type="file"
              className="hidden"
              id="back-upload"
              onChange={(e) => handleFileChange(e, false)}
            />
            <label
              htmlFor="back-upload"
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-1 px-3 rounded-md cursor-pointer text-xs"
            >
              Browse
            </label>
            {backImage && (
              <div className="mt-2">
                <img src={backImage} alt="Back ID Preview" className="max-h-16 rounded-md" />
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-between gap-4 mt-4">
          <button
            onClick={onBack}
            className=" flex-1 border py-2 rounded  hover:bg-gray-300"
          >
            Back
          </button>
          <button
            onClick={onNext}
            className=" flex-1 bg-[#1c2964] hover:bg-[#111827] text-white py-2 rounded"
            disabled={!frontImage || !backImage} // Disable if both images are not uploaded
          >
            Next
          </button>
        </div>
      </div>
    </main>
  )
}

export default IdentityForm
