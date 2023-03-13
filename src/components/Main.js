import React from 'react'

export default function Login() {
  return (
    <div>
        <div className="w-screen justify-center">
          <div className="p-8 m-24">
            <div className="flex felx-col items-center justify-center">
              <span className="rounded-full bg-indigo-500 px-2 py-1 text-white uppercase text-sm">
                Insight
              </span>
            </div>
            <h1 className="text-4xl font-medium text-gray-700 text-center mt-6">
              Full-Funnel Social Analytics
            </h1>
            <p className="text-center mt-6 text-lg font-light text-gray-500">
              The time is now for it to be okay to be great. For being a bright color. For
              standing out.
            </p>
          </div>

          <section className="m-24 p-8">
              <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                  <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">We didn't reinvent the wheel</h2>
                      <p className="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
                      <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-8">
                      <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1"/>
                      <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2"/>
                  </div>
              </div>
          </section>
        </div>
    </div>
  )
}
