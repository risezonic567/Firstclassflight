import React from 'react'

export default function Loader() {
    return (
        <>
            <section>
                <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
                    <div className='text-center'>
                        <div className='loader border-4 border-gray-400 border-t-red-600 rounded-full w-14 h-14 animate-spin mx-auto'>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 mt-4">
                            Loading Premium Experience Firstclassflight....
                        </h2>
                    </div>
                </div>
            </section>
        </>
    )
}
