import { useEffect, useState } from 'react'
import PersonalInfoForm from './PersonalForm'
import IdentityDocumentForm from './IdentityForm'
import ReviewInfo from './ReviewInfo'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { useGetMyUserDetails } from '../services/queries'
import { KYCForm, UserData } from '../types/general'
import { useUpdateUserMutation } from '../services/mutation'
import { uploadFile } from '../lib/uploads'

interface KYCStepperProps {
  onComplete: () => void
}

export const KYCStepper: React.FC<KYCStepperProps> = ({ onComplete }) => {
  const { data, isSuccess } = useGetMyUserDetails()

  const { mutate: UseUpdateUse } = useUpdateUserMutation()

  const [step, setStep] = useState(() => {
    const saved = localStorage.getItem('formData')
    const parsed = saved ? JSON.parse(saved) : null
    return parsed?.step || 1
  })

  const [formData, setFormData] = useState<UserData>(() => {
    const saved = localStorage.getItem('formData')
    return saved
      ? JSON.parse(saved)
      : {
          firstName: '',
          lastName: '',
          dob: '',
          phone: '',
          email: '',
          identityNumber: '',
          frontIdImage: '',
          backIdImage: '',
          selfie: '',
          documentType: '',
          step: 1,
          address: { number: '', street: '', town: '', state: '' },
        }
  })

  // On formData change update local storage
  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData))
  }, [formData])

  useEffect(() => {
    setFormData((prev: any) => ({ ...prev, step }))
  }, [step])

  useEffect(() => {
    if (isSuccess && data?.data?.data) {
      const userDetails: UserData = data.data.data

      setFormData((prev: UserData) => ({
        ...prev,
        firstName: userDetails.firstName || prev.firstName,
        lastName: userDetails.lastName || prev.lastName,
        email: userDetails.email || prev.email,
        // Preserve step from previous formData or default to current step
        step: prev.step || step,
      }))
    }
  }, [isSuccess, data])
  console.log('Form Data:', formData)

  const handleNext = () => setStep((prev: number) => prev + 1)
  const handleBack = () => setStep((prev: number) => prev - 1)

  const updateFormData = (data: any) => {
    setFormData((prev: any) => ({ ...prev, ...data }))
  }

  const handleSubmit = async () => {
    console.log('Final KYC data submitted:', formData)

    try {
      // Upload front and back ID images
      const [responseFront, responseBack] = await Promise.all([
        uploadFile(formData.frontIdImage),
        uploadFile(formData.backIdImage),
      ])

      console.log(responseFront?.secure_url)
      console.log(responseBack?.secure_url)

      // Check both uploads
      if (responseFront?.secure_url && responseBack?.secure_url) {
        const updatedData: KYCForm = {
          dateOfBirth: formData.dob,
          firstName: formData.firstName,
          lastName: formData.lastName,
          identityDocuments:
            responseFront?.secure_url && responseBack?.secure_url
              ? [responseFront.secure_url, responseBack.secure_url]
              : undefined,
          identityDocumentType: formData.documentType,
          phone: formData.phoneNumber,
          address: {
            street: formData.address.street || undefined,
            town: formData.address.town || undefined,
            state: formData.address.state || undefined,
            number: formData.address.number || undefined,
          },
          // frontIdImage: responseFront.secure_url,
          // backIdImage: responseBack.secure_url,
        }
        console.log(updatedData)
        UseUpdateUse(updatedData) // Submit updated form with URLs
        onComplete() // Call completion callback
      } else {
        console.error('One or both image uploads failed.')
      }
    } catch (error) {
      console.error('Image upload error:', error)
    }
  }

  return (
    <div className="min-h-screen flex bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="hidden md:block fixed top-0 left-0 h-[100vh] w-full md:w-64 bg-[#021346] text-white pt-6 pb-8 pl-4 pr-4 sticky">
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
                  <CheckCircleIcon className="h-4 w-4 text-green-400" />
                ) : step === 1 ? (
                  <div className="text-xs text-white font-semibold">{step}</div>
                ) : (
                  <div className="text-xs text-white font-semibold">{1}</div>
                )}
              </div>
              {step >= 1 && (
                <div className="mt-2 flex flex-col items-center">
                  <div className="text-white text-xs">|</div>
                  <div className="text-white text-xs">|</div>
                  <div className="text-white text-xs">|</div>
                  <div className="text-white text-xs">|</div>
                </div>
              )}
            </div>
            <div>
              <span className="block text-sm text-white">Step 1</span>
              <span className="block font-semibold text-white text-base">Personal Information</span>
              <span className="block text-xs text-white">
                Enter your name, email, and phone number.
              </span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start space-x-3">
            <div className="relative flex flex-col items-center">
              <div className="w-6 h-6 flex items-center justify-center rounded-full border border-white bg-transparent">
                {step > 2 ? (
                  <CheckCircleIcon className="h-4 w-4 text-green-400" />
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
                  <CheckCircleIcon className="h-4 w-4 text-green-400" />
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

      {/* Adjusted content width */}
      <div className="flex-1 bg-white shadow-lg ">
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
