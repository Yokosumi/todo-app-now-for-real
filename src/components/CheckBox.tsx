import { useState } from 'react'
import { ImCheckboxUnchecked } from 'react-icons/im'
import { ImCheckboxChecked } from 'react-icons/im'

export const CheckBox = () => {
    const [IsChecked, setIsChecked] = useState(false)
    return (
        <>
            <div className="flex items-center">
                <button onClick={() => setIsChecked(!IsChecked)}>
                    {IsChecked ? (
                        <ImCheckboxChecked className="text-green-500" />
                    ) : (
                        <ImCheckboxUnchecked className="text-gray-300 hover:text-gray-500" />
                    )}
                </button>
            </div>
        </>
    )
}
