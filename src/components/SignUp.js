import React from 'react'

function SignUp() {
  return (
    <div className='flex h-[75vh] m-16 grid grid-cols-3 items-center justify-center'>
        <h1></h1>
        <div className="flex h-3/4 flex items-center justify-center flex-col rounded-2xl bg-white px-6 shadow-2xl sm:px-14">
            <h2 className="font-serif text-2xl font-semibold text-gray-700">What is your name?</h2>
            <input placeholder='Full Name' className="bg-gray-200 mt-5 rounded-full py-3 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text"/>
        </div>
        <div className='flex items-center h-full w-full justify-center'>
            <button className='h-3/4 w-full items-center flex justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
            </button>
        </div>
    </div>
    // <div class="flex m-8 items-center justify-center">
    //     <div class="flex w-[38rem] flex-col rounded-2xl bg-white px-6 shadow-2xl sm:px-14">
    //         <div class="flex w-full justify-between self-start pt-12 pb-8">
    //             <h2 class="font-serif text-2xl font-semibold text-gray-700">Lets Begin!</h2>
    //         </div>
    //         <div class="flex w-full flex-col pb-8 pt-4">
    //             <h2 class="font-serif text-2xl font-semibold text-gray-700">What is your name?</h2>
    //             <input placeholder='Full Name' className="bg-gray-200 mt-5 rounded-full py-3 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text"/>


    //             {/* <div class="relative mb-4">
    //                 <input class="peer hidden" id="radio_1" type="radio" name="radio" checked />
    //                 <span class="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-gray-900"></span>
    //                 <label class="flex cursor-pointer flex-col rounded-2xl border border-gray-300 bg-slate-100/80 p-4 pr-8 sm:pr-16" for="radio_1">
    //                 <span class="mb-2 text-lg font-semibold">Small Team</span>
    //                 <p class="text-sm sm:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea mollitia corporis non fugiat ratione.</p>
    //                 </label>
    //             </div>
    //             <div class="relative mb-4">
    //                 <input class="peer hidden" id="radio_2" type="radio" name="radio" />
    //                 <span class="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-gray-900"></span>
    //                 <label class="flex cursor-pointer flex-col rounded-2xl border border-gray-300 bg-slate-100/80 p-4 pr-8 sm:pr-16" for="radio_2">
    //                 <span class="mb-2 text-lg font-semibold">Large Team</span>
    //                 <p class="text-sm sm:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea mollitia corporis non fugiat ratione.</p>
    //                 </label>
    //             </div> */}
    //             {/* <div class="my-4 space-y-3">
    //                 <label for="terms" class="flex space-x-4">
    //                 <input id="terms" name="terms" type="checkbox" class="h-6 w-6 shrink-0 accent-gray-900" checked />
    //                 <span id="terms-description" class="text-sm text-gray-600">I agree to the <a class="underline" href="#">Terms and Conditions</a>. Learn about our Privacy Policy and our measures to keep your data safe and secure.</span>
    //                 </label>
    //                 <label for="marketing" class="flex space-x-4">
    //                 <input id="marketing" name="marketing" type="checkbox" class="h-6 w-6 shrink-0 accent-gray-900" />
    //                 <span id="marketing-description" class="text-sm text-gray-600">I am interested in receiving updates and occasional marketing content.</span>
    //                 </label>
    //             </div> */}

    //             <button class="my-2 mt-5 rounded-md bg-gray-900 py-3 font-medium text-white hover:bg-gray-800">Next</button>
    //         </div>
    //     </div>
    // </div>
  )
}

export default SignUp