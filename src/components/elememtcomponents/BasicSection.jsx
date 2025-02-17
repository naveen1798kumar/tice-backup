import React from 'react'

function BasicSection() {
  return (
    <section className="bg-yellow-100 min-h-screen flex items-center">
    <div className="container mx-auto flex flex-col md:flex-row gap-4 p-4">
      <div className="bg-white w-full md:w-1/2 h-60 md:h-[80vh] flex justify-center items-center shadow-lg rounded-lg">
        Accordion
      </div>
      <div className="bg-white w-full md:w-1/2 h-60 md:h-[80vh] flex justify-center items-center shadow-lg rounded-lg">
        Slider
      </div>
    </div>
  </section>
  )
}

export default BasicSection