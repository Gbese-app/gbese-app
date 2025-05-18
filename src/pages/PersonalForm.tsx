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
    number: '',
    street: '',
    town: '',
    state: '',
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdate({ [e.target.name]: e.target.value })
  }

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="bg-white p-12 rounded-3xl shadow-xl max-w-4xl w-full">
        <h1 className="text-3xl font-bold mb-8 text-center">Personal Information</h1>
        <form className="space-y-6 text-lg">
          <div>
            <label className="block mb-2 font-medium">First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="e.g John"
              className="w-full border rounded-lg p-3 text-base"
              value={safeData.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="e.g Doe"
              className="w-full border rounded-lg p-3 text-base"
              value={safeData.lastName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Date of Birth</label>
            <input
              type="date"
              name="dob"
              className="w-full border rounded-lg p-3 text-base"
              value={safeData.dob}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                name="email"
                placeholder="e.g john@example.com"
                className="w-full border rounded-lg p-3 text-gray-500 "
                value={safeData.email}
                disabled={true}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="+234 8000000"
                className="w-full border rounded-lg p-3 text-base"
                value={safeData.phoneNumber}
                onChange={handleChange}
              />
            </div>
          </div>
          <fieldset className="border border-gray-300 px-4 py-2 rounded-md flex flex-wrap *:basis-1/3 *:grow gap-6">
            <legend className="px-2">Address</legend>
            <div>
              <label className="block mb-2 font-medium">Number</label>
              <input
                type="text"
                name="number"
                placeholder="e.g 23"
                className="w-full border rounded-lg p-3 text-base"
                value={safeData.number}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Street</label>
              <input
                type="text"
                name="street"
                placeholder="Street Address"
                className="w-full border rounded-lg p-3 text-base"
                value={safeData.street}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Town</label>
              <input
                type="text"
                name="town"
                placeholder="e.g. Lagos"
                className="w-full border rounded-lg p-3 text-base"
                value={safeData.town}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">State</label>
              <input
                type="text"
                name="state"
                placeholder="e.g. Lagos"
                className="w-full border rounded-lg p-3 text-base"
                value={safeData.state}
                onChange={handleChange}
              />
            </div>
          </fieldset>
          <div className="text-right">
            <button
              type="button"
              className="bg-[#1c2964] hover:bg-[#111827] text-white font-bold py-3 px-8 text-lg rounded-lg"
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
