import { Link } from 'react-router-dom'

const Box = ({ data = [], heading = "", handle, sText = "", fw = "" }) => {
    return (
        <div className="container my-7">
            <div className="heading  " style={{ marginBottom: sText ? "0px" : "12px" }}>
                <p className={`font-${fw}`}>{heading}</p>
            </div>

            {sText && <p className='text-[12px] text-gray-600  mb-4'>{sText}</p>}
            <div className="box border-gray-300 border-[1px] rounded-[15px] p-1"  >
                {data?.map((item, i) => (
                    <Link key={i} to={item?.path} onClick={() => { if (item?.path) { handle(false) } else { handle(true) } }}>
                        <div className="wrapper flex items-center justify-between  p-3 cursor-pointer">
                            <div className="left">
                                <p>{item?.text}</p>
                                <span className={`small text-[12px]  mt-[-2px] text-gray-500 `} style={{ display: item?.small ? "block" : "none" }}>
                                   {item?.small}
                                </span>
                            </div>
                            <div className="right">
                                <div className="icon">
                                    {item?.icon}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Box