import React from 'react'


function SignUp() {
    const totalSlides = 4;
    let currentSlideId = 1;

    function next(){
        if (currentSlideId < totalSlides){
            // setSlide(currentSlideId+1);
            currentSlideId++;
            showSlide();
        }
        console.log(currentSlideId);
    };

    function showSlide(){
        const slides = document.getElementById('slider').getElementsByTagName('li');
        for (let i = 0; i < totalSlides; i++){
            const element = slides[i];
            if (currentSlideId === i+1){
                element.classList.remove('hidden');
            }else{
                element.classList.add('hidden');
            }
        }
    }

    const prev = () => {
        if (currentSlideId > 1){
            currentSlideId--;
            showSlide();
        }
        console.log(currentSlideId);
    };

 

  return (
    <div className='m-5 mt-24 mb-12 grid grid-cols-3'>
        {/* <div className='relative '> */}
            {/* <div className='absolute flex px-5 h-full w-full top-0 left-0'>
                <div className='my-auto w-full flex justify-between'>
                    <button onClick={() => prev()} className='bg-white p-3 rounded-full bg-opacity-80 shadow-lg'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                    </button>
                </div>
            </div> */}
            <button onClick={() => prev()} id="leftBut" className='bg-white bg-opacity-80 justify-center items-center flex'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="gray-200 w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
            </button>
            <div>
                <ul id="slider" >
                    <li className='h-[50vh] flex flex-col items-center justify-center bg-gray-200'>
                        <h1>Name</h1>
                        <input className='text-center' placeholder='Full name'/>
                    </li>
                    <li className='h-[50vh] flex flex-col items-center justify-center bg-gray-200 hidden'>
                        <h1>Date of birth</h1>
                        <div date-rangepicker class="flex items-center">
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                                </div>
                                <input name="start" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date start"/>
                            </div>
                        </div>

                    </li>
                    <li className='h-[50vh] flex flex-col items-center justify-center bg-gray-200 hidden'>
                        <h1>Email</h1>
                        <input className='text-center' placeholder='Email address'/>
                    </li>
                    <li className='h-[50vh] flex flex-col items-center justify-center bg-gray-200 hidden'>
                        <h1>Are you gay?</h1>
                        <button className='bg-white'>Yes</button>
                        <button className='bg-white'>No</button>
                    </li>
                </ul>
            </div>
            <button onClick={() => next()} className='bg-white p-3 bg-opacity-80 justify-center items-center flex'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
            </button>
            {/* <div className='absolute flex px-5 h-full w-full top-0 left-0'>
                <div className='my-auto w-full flex justify-between'>
                    <button onClick={() => next()} className='bg-white p-3 rounded-full bg-opacity-80 shadow-lg'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                </div>
            </div> */}
        {/* </div> */}

    </div>
  )
}

export default SignUp

