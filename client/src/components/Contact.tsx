import React from 'react'

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-0 max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">Contact Us</h2>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Full Name" className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"/>
          <input type="email" placeholder="Email" className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"/>
          <input type="text" placeholder="Subject" className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"/>
          <textarea placeholder="Message" rows={5} className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"/>
          <button type="submit" className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-md transition mt-2">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
