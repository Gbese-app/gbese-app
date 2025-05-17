interface Props {
  onNext: () => void
  onUpdate: (data: any) => void
  data: any // data can be potentially undefined
}

const PersonalInfoForm: React.FC<Props> = ({ onNext, onUpdate, data }) => {
  const safeData = data || {
    firstName: '',
    lastName: '',
    dob: '',
    email: '',
    phoneNumber: '',
    address: '',
    town: '',
    state: '',
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdate({ [e.target.name]: e.target.value })
  }

  return (
    <main className="min-h-screen bg-white px-4 py-6 max-w-md mx-auto">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-center">KYC Verification</h2>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-blue-600 h-2.5 rounded-full w-1/3"></div>
        </div>
        <h1 className="text-xl font-bold mb-4">Personal Information</h1>
        <p className='text-sm text-gray-500'>please provide your basic personal details</p>
         <div className="grid grid-cols-2 gap-2"></div>
        <form className="space-y-6 text-lg">
          <div>
            <label className="block mb-2 font-medium">First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="e.g John"
              className=" border rounded p-2 rounded"
              value={safeData.firstName}
              onChange={handleChange}
            />
            
          </div>
          <div>
            <div className="grid grid-cols-2 gap-2"></div>
            <label className="block mb-2 font-medium">Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="e.g Doe"
              className=" border rounded p-2 rounded"
              value={safeData.lastName}
              onChange={handleChange}
            />
            
          </div>
          <div>
            <div className="grid grid-cols-2 gap-2"></div>
            <label className="block mb-2 font-medium">Date of Birth</label>
            <input
              type="date"
              name="dob"
              className="w-full border rounded-lg p-3 text-base"
              value={safeData.dob}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                name="email"
                placeholder="e.g john@example.com"
                className=" border rounded p-2 rounded"
                value={safeData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <div className="grid grid-cols-2 gap-2"></div>
              <label className="block mb-2 font-medium">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="+234 8000000"
                className=" border rounded p-2 rounded"
                value={safeData.phoneNumber}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block mb-2 font-medium">Address</label>
              <input
                type="text"
                name="address"
                placeholder="Street Address"
                className=" border rounded p-2 rounded"
                value={safeData.address}
                onChange={handleChange}
              />
            </div>
            <div>
              <div className="grid grid-cols-2 gap-2"></div>
              <label className="block mb-2 font-medium">Town</label>
              <input
                type="text"
                name="town"
                placeholder="e.g. Lagos"
                className=" border rounded p-2 rounded"
                value={safeData.town}
                onChange={handleChange}
              />
            </div>
            <div>
              <div className="grid grid-cols-2 gap-2"></div>
              <label className="block mb-2 font-medium">State</label>
              <input
                type="text"
                name="state"
                placeholder="e.g. Lagos"
                className=" border rounded p-2 rounded"
                value={safeData.state}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="text-right">
            <button
              type="button"
              className="w-full bg-blue-600 text-white py-2 rounded mt-4"
              onClick={onNext}
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}

export default PersonalInfoForm
