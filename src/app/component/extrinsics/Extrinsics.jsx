import Link from 'next/link'
import React from 'react'

export const Extrinsics = () => {
  return (
    <div className="form-parent-inner">
    <div className="selected-accounts-list">
        <form action="">
            <div className="inner-selected-accounts-list common-label-form">
                <h4><label for="selected-option">Selected Accounts:</label></h4>
                <div className="select-sec common-input-form">
                    <select name="cars" id="cars" className="">
                        <option value="one">1r27sdq23fbpueEuU5jEyjErv4</option>
                        <option value="two">1r27sdq23fbpueEuU5jEyjErv4</option>
                        <option value="three">1r27sdq23fbpueEuU5jEyjErv4</option>
                    </select>
                </div>

            </div>
            <div className="inner-selected-accounts-list common-label-form">
                <h4><label for="selected-option">Selected Accounts:</label></h4>
                <div className="select-sec common-input-form">
                    <select name="cars" id="cars" className="">
                        <option value="one">1r27sdq23fbpueEuU5jEyjErv4</option>
                        <option value="two">1r27sdq23fbpueEuU5jEyjErv4</option>
                        <option value="three">1r27sdq23fbpueEuU5jEyjErv4</option>
                    </select>
                </div>

            </div>


        </form>
    </div>
    <div className="new-multisig-form">
        <form action="">
            <div className="inner-selected-accounts-list common-label-form">
                <h4><label for="selected-option">Hotkey:</label></h4>
                <div className="select-sec common-input-form">
                    <select name="cars" id="cars" className="">
                        <option value="one">1r27sdq23fbpueEuU5jEyjErv4</option>
                        <option value="two">1r27sdq23fbpueEuU5jEyjErv4</option>
                        <option value="three">1r27sdq23fbpueEuU5jEyjErv4</option>
                    </select>
                </div>

            </div>
            <div className="inner-selected-accounts-list common-label-form">
                <h4><label for="selected-option">Account:</label></h4>
                <div className="select-sec common-input-form">
                    <input type="text" id="text" name="text" placeholder="0"/>
                </div>
            </div>
            <div className="inner-selected-accounts-list common-label-form">
                <h4><label for="selected-option">Call data:</label></h4>
                <div className="select-sec common-input-form call-bg-icon">
                    <input type="text" id="text" name="text" placeholder="1r27sdq23fbpueEuU5jEyjErv4"/>
                    <img src="/images/Frame.png"/>
                </div>
                <Link href="#" className="custom-btn">Submit Transaction</Link>
            </div>
        </form>
    </div>
</div>
  )
}
