import React from 'react'
import bgBlurry from "../assets/images/bgBlurry.jpg"

export default function Login() {
  return (
    <div>
        <div className="flex h-screen w-screen items-center justify-center" style={{ backgroundImage: "url(" + bgBlurry + ")", backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'}} >
            <div className="relative flex w-[40rem] flex-col justify-center overflow-hidden rounded-lg bg-white/50 py-32">
                <span className="absolute top-0 h-1 w-1/6 bg-blue-600"></span>
                <div className="flex flex-col items-center">
                    <p className="text-lg font-medium text-gray-600">Hello, there!</p>
                    <h1 className="text-4xl font-medium text-gray-600">Welcome to Fridayz</h1>

                    <p className="mt-10 text-sm text-gray-600">Let's begin creating your profile and give you some fridays to remember</p>
                    {/* <div className="mt-3 flex space-x-3">
                        <div className="relative h-8 w-8 cursor-pointer overflow-hidden rounded-full bg-slate-800 shadow-lg shadow-gray-400/60 hover:scale-110">
                        <span className="absolute h-full w-1/2 bg-indigo-600"></span>
                        </div>
                        <div className="relative h-8 w-8 cursor-pointer overflow-hidden rounded-full bg-white shadow-lg shadow-gray-400/60 hover:scale-110">
                        <span className="absolute h-full w-1/2 bg-rose-600"></span>
                        </div>
                        <div className="relative h-8 w-8 cursor-pointer overflow-hidden rounded-full bg-orange-600 shadow-lg shadow-gray-400/60 hover:scale-110">
                        <span className="absolute h-full w-1/2 bg-slate-800"></span>
                        </div>
                    </div> */}

                    <div className="mt-10">
                        <h2 className="text-center text-sm font-bold text-gray-600">What's your name?</h2>
                        <div class="">
                            <input class="rounded-full mt-2 relative w-56 appearance-none py-3 px-4 border-2 border-gray-200 rounded w-full text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-600" id="inline-full-name" type="text" placeholder='Full Name'/>
                        </div>
                        {/* <div className="relative flex w-56 items-center justify-center rounded-full bg-gray-50 py-3 px-4 font-medium text-gray-700">
                            <input className="peer hidden" type="radio" name="framework" id="framework1" checked />
                            <label className="absolute top-0 h-full w-full cursor-pointer rounded-full border peer-checked:border-blue-700" for="framework1"> </label>
                        <div className="absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-blue-700 ring-offset-2 peer-checked:border-transparent peer-checked:bg-blue-700 peer-checked:ring-2"></div>
                            <span>Svelte</span>
                        </div>
                        <div className="relative flex w-56 items-center justify-center rounded-full bg-gray-50 py-3 px-4 font-medium text-gray-700">
                            <input className="peer hidden" type="radio" name="framework" id="framework2" />
                            <label className="absolute top-0 h-full w-full cursor-pointer rounded-full border peer-checked:border-blue-700" for="framework2"> </label>
                        <div className="absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-blue-700 ring-offset-2 peer-checked:border-transparent peer-checked:bg-blue-700 peer-checked:ring-2"></div>
                            <span>React</span>
                        </div>
                        <div className="relative flex w-56 items-center justify-center rounded-full bg-gray-50 py-3 px-4 font-medium text-gray-700">
                            <input className="peer hidden" type="radio" name="framework" id="framework3" />
                            <label className="absolute top-0 h-full w-full cursor-pointer rounded-full border peer-checked:border-blue-700" for="framework3"> </label>
                        <div className="absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-blue-700 ring-offset-2 peer-checked:border-transparent peer-checked:bg-blue-700 peer-checked:ring-2"></div>
                            <span>Vue</span>
                        </div> */}
                    </div>

                    <button className="group mt-10 flex w-40 items-center justify-center text-sm rounded-lg bg-blue-700 py-2 text-center font-bold text-white transition">
                        Continue
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-4 h-4 w-4 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
