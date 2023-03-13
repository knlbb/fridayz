import React from 'react'

function Events() {
  return (
    <div class="">
      <section class="bg-white dark:bg-gray-900">
          <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div class="mr-auto place-self-center lg:col-span-7">
                  <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Sydney Events</h1>
                  <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
                  {/* <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                      Get started
                      <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
                  <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                      Speak to Sales
                  </a>  */}
              </div>
              <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                  <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup"/>
              </div>                
          </div>
      </section>

      <div className='flex mx-24 gap-12 grid grid-cols-3'>


        <div class="w-100 m-auto max-w-sm">
          <img src="https://image.freepik.com/free-vector/app-development-illustration_52683-47931.jpg" alt=""class="rounded-t-2xl shadow-2xl lg:w-full 2xl:w-full 2xl:h-44 object-cover"/>
          <div class="bg-white shadow-2xl px-10 rounded-b-3xl pb-10">
            <h2 class="text-left text-gray-800 text-2xl font-bold pt-6">Date night 1!</h2>
            <div class="">
              <p class="text-left text-gray-500 pt-5">You can now listen to millions of songs!</p>
            </div>
            <div class="grid grid-cols-4 w-72 lg:w-full m-auto bg-indigo-50 mt-5 p-4 lg:p-4 rounded-2xl">
              <div class="col-span-1">
                <img class="w-15 lg:w-12" src="https://img.icons8.com/ultraviolet/40/000000/musical-notes.png" alt="music icon"/>
              </div>
              <div class="col-span-2 pt-1">
                <p class="text-gray-800 font-bold lg:text-sm">Anual Plan</p>
                <p class="text-gray-500 text-sm">$59.99/year</p>
              </div>
              <div class="pt-2">
                <a href="https://google.com" class="text-indigo-700 underline hover:no-underline  text-sm hover:text-indigo-500 font-bold">Change</a>
              </div>
            </div>
            <div class="bg-blue-700 w-72 lg:w-5/6 m-auto mt-6 p-2 hover:bg-indigo-500 rounded-2xl text-white text-center shadow-xl shadow-bg-blue-700">
              <button classs="lg:text-sm text-lg font-bold ">Register</button>
            </div>
            {/* <div class="text-center m-auto mt-6 w-full h-16">
              <button class="text-gray-500 font-bold lg:text-sm hover:text-gray-900">Cancel Order</button>
            </div> */}
          </div>
        </div>

        <div class="w-100  m-auto  max-w-sm">
          <img src="https://image.freepik.com/free-vector/app-development-illustration_52683-47931.jpg" alt=""class="rounded-t-2xl shadow-2xl lg:w-full 2xl:w-full 2xl:h-44 object-cover"/>
          <div class="bg-white shadow-2xl px-10 rounded-b-3xl pb-10">
            <h2 class="text-left text-gray-800 text-2xl font-bold pt-6">Date night 1!</h2>
            <div class="">
              <p class="text-left text-gray-500 pt-5">You can now listen to millions of songs!</p>
            </div>
            <div class="grid grid-cols-4 w-72 lg:w-full m-auto bg-indigo-50 mt-5 p-4 lg:p-4 rounded-2xl">
              <div class="col-span-1">
                <img class="w-15 lg:w-12" src="https://img.icons8.com/ultraviolet/40/000000/musical-notes.png" alt="music icon"/>
              </div>
              <div class="col-span-2 pt-1">
                <p class="text-gray-800 font-bold lg:text-sm">Anual Plan</p>
                <p class="text-gray-500 text-sm">$59.99/year</p>
              </div>
              <div class="pt-2">
                <a href="https://google.com" class="text-indigo-700 underline hover:no-underline  text-sm hover:text-indigo-500 font-bold">Change</a>
              </div>
            </div>
            <div class="bg-blue-700 w-72 lg:w-5/6 m-auto mt-6 p-2 hover:bg-indigo-500 rounded-2xl text-white text-center shadow-xl shadow-bg-blue-700">
              <button classs="lg:text-sm text-lg font-bold">Register</button>
            </div>
            {/* <div class="text-center m-auto mt-6 w-full h-16">
              <button class="text-gray-500 font-bold lg:text-sm hover:text-gray-900">Cancel Order</button>
            </div> */}
          </div>
        </div>

        <div class="w-100  m-auto  max-w-sm">
          <img src="https://image.freepik.com/free-vector/app-development-illustration_52683-47931.jpg" alt=""class="rounded-t-2xl shadow-2xl lg:w-full 2xl:w-full 2xl:h-44 object-cover"/>
          <div class="bg-white shadow-2xl px-10 rounded-b-3xl pb-10">
            <h2 class="text-left text-gray-800 text-2xl font-bold pt-6">Date night 1!</h2>
            <div class="">
              <p class="text-left text-gray-500 pt-5">You can now listen to millions of songs!</p>
            </div>
            <div class="grid grid-cols-4 w-72 lg:w-full m-auto bg-indigo-50 mt-5 p-4 lg:p-4 rounded-2xl">
              <div class="col-span-1">
                <img class="w-15 lg:w-12" src="https://img.icons8.com/ultraviolet/40/000000/musical-notes.png" alt="music icon"/>
              </div>
              <div class="col-span-2 pt-1">
                <p class="text-gray-800 font-bold lg:text-sm">Anual Plan</p>
                <p class="text-gray-500 text-sm">$59.99/year</p>
              </div>
              <div class="pt-2">
                <a href="https://google.com" class="text-indigo-700 underline hover:no-underline  text-sm hover:text-indigo-500 font-bold">Change</a>
              </div>
            </div>
            <div class="bg-blue-700 w-72 lg:w-5/6 m-auto mt-6 p-2 hover:bg-indigo-500 rounded-2xl text-white text-center shadow-xl shadow-bg-blue-700">
              <button classs="lg:text-sm text-lg font-bold">Register</button>
            </div>
            {/* <div class="text-center m-auto mt-6 w-full h-16">
              <button class="text-gray-500 font-bold lg:text-sm hover:text-gray-900">Cancel Order</button>
            </div> */}
          </div>
        </div>

        <div class="w-100  m-auto  max-w-sm">
          <img src="https://image.freepik.com/free-vector/app-development-illustration_52683-47931.jpg" alt=""class="rounded-t-2xl shadow-2xl lg:w-full 2xl:w-full 2xl:h-44 object-cover"/>
          <div class="bg-white shadow-2xl px-10 rounded-b-3xl pb-10">
            <h2 class="text-left text-gray-800 text-2xl font-bold pt-6">Date night 1!</h2>
            <div class="">
              <p class="text-left text-gray-500 pt-5">You can now listen to millions of songs!</p>
            </div>
            <div class="grid grid-cols-4 w-72 lg:w-full m-auto bg-indigo-50 mt-5 p-4 lg:p-4 rounded-2xl">
              <div class="col-span-1">
                <img class="w-15 lg:w-12" src="https://img.icons8.com/ultraviolet/40/000000/musical-notes.png" alt="music icon"/>
              </div>
              <div class="col-span-2 pt-1">
                <p class="text-gray-800 font-bold lg:text-sm">Anual Plan</p>
                <p class="text-gray-500 text-sm">$59.99/year</p>
              </div>
              <div class="pt-2">
                <a href="https://google.com" class="text-indigo-700 underline hover:no-underline  text-sm hover:text-indigo-500 font-bold">Change</a>
              </div>
            </div>
            <div class="bg-blue-700 w-72 lg:w-5/6 m-auto mt-6 p-2 hover:bg-indigo-500 rounded-2xl text-white text-center shadow-xl shadow-bg-blue-700">
              <button classs="lg:text-sm text-lg font-bold">Register</button>
            </div>
            {/* <div class="text-center m-auto mt-6 w-full h-16">
              <button class="text-gray-500 font-bold lg:text-sm hover:text-gray-900">Cancel Order</button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events