import { useState } from 'react'
import Button from '../ui/Button'
import { getFirstWordInUpper } from '../../lib/NameFilter'

export const DebtTransfer = ({ name, bill }: { name: string; bill: string }) => {
  const [isOpen, setIsOpen] = useState(false)
  const abbrev = getFirstWordInUpper(name)

  return (
    <div className="p-2 mt-2 border-b border-gray-400">
      <div className="flex flex-row justify-between text-xs">
        <h1 className="text-lg md:text-sm">{name}</h1>
        <p className="text-lg md:text-sm">{bill}</p>
      </div>
      <div className="flex flex-row justify-between my-1">
        <Button title="Accept" style="bg-[#34A67B] text-white text-md md:text-xs my-1 px-8 md:px-4 py-1" />
        <Button title="Decline" style="bg-[#FAD1D1] text-red-500 text-md md:text-xs my-1 px-8 md:px-5 py-1" />
        <div>
          <button
            onClick={() => setIsOpen(true)}
            className="bg-gray-300 text-black items-center rounded-lg text-xs px-0 py-0  my-1 px-2 py-1"
          >
            ...
          </button>

          {/* Modal */}
          {isOpen && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center text-left z-50">
              {/* Modal box */}
              <div className="bg-white rounded-lg shadow-lg w-96 px-12 py-8 relative">
                {/* Close button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-2 right-5 text-gray-500 hover:text-black text-xl"
                >
                  &times;
                </button>

                <div>
                  <div className="flex flex-row items-center">
                    <h1 className="p-4 mr-2 font-sora text-5xl bg-[#05238C] text-white rounded-full">
                      {abbrev}
                    </h1>
                    <div>
                      <p className="font-bold mb-1">{name}</p>
                      <p>2hrs ago</p>
                    </div>
                  </div>

                  <div className="my-5">
                    <p>Amount of debt to transfer</p>
                    <p className="font-bold text-xl">N50,000</p>
                  </div>

                  <div className="my-5">
                    <p>Reason (optional)</p>
                    <p className="font-bold">Lost My Job</p>
                  </div>

                  <p className="my-2">Deadline : Accept by April 25</p>

                  <div className="flex flex-row justify-between">
                    <Button
                      title="Accept Request"
                      style="bg-[#05238C] text-white text-xs my-1 px-4 py-2"
                      onClick={() => setIsOpen(false)}
                    />
                    <Button
                      title="Reject Request"
                      style="bg-[#05238C] text-white text-xs my-1 px-4 py-2"
                      onClick={() => setIsOpen(false)}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
