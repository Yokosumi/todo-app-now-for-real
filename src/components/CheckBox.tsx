import { useState } from 'react'
import { ImCheckboxUnchecked } from 'react-icons/im'
import { ImCheckboxChecked } from 'react-icons/im'

export const CheckBox = () => {
    const [IsChecked, setIsChecked] = useState(false)
    return (
        <>
            <div className="flex items-center">
                <div className="flex items-center">
                    <div className="flex items-center">
                        <button onClick={() => setIsChecked(!IsChecked)}>
                            {IsChecked ? (
                                <ImCheckboxChecked />
                            ) : (
                                <ImCheckboxUnchecked />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
