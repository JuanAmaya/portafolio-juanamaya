export default function Frame() {
    return (
        <>
            <div className='h-px w-full top-16 z-50 bg-white fixed'></div>
            <div className='h-px w-full bottom-5 z-50 bg-white fixed'></div>

            <div className='fixed z-30 inset-5 top-16'>
                {/* <div className='h-px w-full -top-px bg-white absolute'></div> */}
                {/* <div className='h-px w-full -bottom-px bg-white absolute'></div> */}
                <div className='h-full w-px -left-px bg-white absolute'></div>
                <div className='h-full w-px -right-px bg-white absolute'></div>
            </div>
        </>
    );
}