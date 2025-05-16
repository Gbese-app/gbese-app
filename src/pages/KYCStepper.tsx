import { useState } from 'react'
import PersonalInfoForm from './PersonalForm'
import IdentityDocumentForm from './IdentityForm'
import ReviewInfo from './ReviewInfo'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

interface KYCStepperProps {
  onComplete: () => void
}

export const KYCStepper: React.FC<KYCStepperProps> = ({ onComplete }) => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    phone: '',
    email: '',
    address: '',
    identityNumber: '',
    frontID: '',
    backID: '',
    selfie: '',
  })

  const handleNext = () => setStep((prev) => prev + 1)
  const handleBack = () => setStep((prev) => prev - 1)

  const updateFormData = (data: any) => {
    setFormData({ ...formData, ...data })
  }

  const handleSubmit = () => {
    console.log('Final KYC data submitted:', formData)
    onComplete()
  }

  return (
    <div className="min-h-screen flex bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-[100vh] w-full md:w-64 bg-[#021346] text-white pt-6 pb-8 pl-4 pr-4 sticky">
        <img src="./src/assets/Logo Dark BG.png" alt="gbese" className="h-12 w-25" />
        <div className="mb-8">
          <h2 className="text-xl font-semibold tracking-wide">KYC Verification</h2>
        </div>
        <nav className="flex flex-col space-y-6 w-full">
          {/* Step 1 */}
          <div className="flex items-start space-x-3">
            <div className="relative flex flex-col items-center">
              <div className="w-6 h-6 flex items-center justify-center rounded-full border border-white bg-transparent">
                {step > 1 ? (
                  <CheckCircleIcon className="h-4 w-4 text-white" />
                ) : step === 1 ? (
                  <div className="text-xs text-white font-semibold">{step}</div>
                ) : (
                  <div className="text-xs text-white font-semibold">{1}</div>
                )}
              </div>
            </div>
            <div>
              <span className="block text-sm text-white">Step 1</span>
              <span className="block font-semibold text-white text-base">Personal Information</span>
              <span className="block text-xs text-white">Enter your name, email, and phone number.</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start space-x-3">
            <div className="relative flex flex-col items-center">
              <div className="w-6 h-6 flex items-center justify-center rounded-full border border-white bg-transparent">
                {step > 2 ? (
                  <CheckCircleIcon className="h-4 w-4 text-white" />
                ) : step === 2 ? (
                  <div className="text-xs text-white font-semibold">{step}</div>
                ) : (
                  <div className="text-xs text-white font-semibold">{2}</div>
                )}
              </div>
            </div>
            <div>
              <span className="block text-sm text-white">Step 2</span>
              <span className="block font-semibold text-white text-base">Identity Document</span>
              <span className="block text-xs text-white">Upload a valid government ID.</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start space-x-3">
            <div className="relative flex flex-col items-center">
              <div className="w-6 h-6 flex items-center justify-center rounded-full border border-white bg-transparent">
                {step > 3 ? (
                  <CheckCircleIcon className="h-4 w-4 text-white" />
                ) : step === 3 ? (
                  <div className="text-xs text-white font-semibold">{step}</div>
                ) : (
                  <div className="text-xs text-white font-semibold">{3}</div>
                )}
              </div>
            </div>
            <div>
              <span className="block text-sm text-white">Step 3</span>
              <span className="block font-semibold text-white text-base">Review and Submit</span>
              <span className="block text-xs text-white">Confirm your info before submitting.</span>
            </div>
          </div>
        </nav>
      </aside>

      {/* Content area */}
      <div className="flex-1 bg-white shadow-lg">
        {step === 1 && (
          <PersonalInfoForm onNext={handleNext} onUpdate={updateFormData} data={formData} />
        )}
        {step === 2 && (
          <IdentityDocumentForm
            onNext={handleNext}
            onBack={handleBack}
            onUpdate={updateFormData}
            data={formData}
          />
        )}
        {step === 3 && <ReviewInfo onBack={handleBack} onSubmit={handleSubmit} data={formData} />}
      </div>
    </div>
  )
}

export default KYCStepper
