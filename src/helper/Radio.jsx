import { useState } from "react";
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";

const Radio = ()  => {
    const [check, setCheck] = useState(false);

    return (<>
       
            <div className=" text-gray-500 cursor-pointer ">
                {check || <MdRadioButtonUnchecked size={25} onClick={() => setCheck(true)} />}
                {check && <MdRadioButtonChecked size={25} onClick={() => setCheck(false)} />}
            </div>
        
    </>);
}

export default Radio;