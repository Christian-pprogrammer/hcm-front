export const DashBoardLogo = () => {
    return (
        <div className="flex gap-6 p-5 pt-10">
            <div className='h-16 w-16 bg-black opacity-50 rounded-lg border-none outline-none'>
                <svg className='w-full h-full' width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <rect width="100" height="100" rx="10" fill="url(#pattern0)" />
                    <defs>
                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_606_1744" transform="scale(0.002)" />
                        </pattern>
                        <image id="image0_606_1744" width="500" height="500" xlinkHref="data:image/png;base64,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" />
                    </defs>
                </svg>
            </div>
            <div>
                <h1 className="font-bold pt-1 ">HCM Appointment System</h1>
                <span className="text-[#ffffff80] text-[12px]">HCM Corp</span>
            </div>
        </div>
    )
}