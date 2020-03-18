import React from "react";
import Popup from "reactjs-popup";

export const PopUp = () => (

    <Popup
        trigger={<button className="popUp-btn"> Important Information </button>}>
        <div>This is a simple expense tracker that calculates your income and expense by giving you your total
        balance. NOTE: The pie graph is just a represenation between your income and expenses. It does not match
        the percentages of your expesnes fully. It just shows the comparision of how much your are spending
            and how much you are depositing. EX: if you spend more the red will increase on the pie graph.</div>

    </Popup>

);