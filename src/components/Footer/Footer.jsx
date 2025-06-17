import React from 'react'

const footer = () => {
  return (
    <div>
       <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
          <p className="text-xs mt-2">
            Built with <a href="https://nextjs.org" className="text-blue-400 hover:underline">Next.js</a> and <a href="https://tailwindcss.com" className="text-blue-400 hover:underline">Tailwind CSS</a>.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default footer
