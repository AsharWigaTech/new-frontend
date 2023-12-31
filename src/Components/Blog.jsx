import React from 'react'
// import img1 from '../Assets/Rectangle.jpg'
// import img2 from '../Assets/Rectangle (1).jpg'
// import img3 from '../Assets/Rectangle (2).jpg'
// import img4 from '../Assets/Rectangle (3).jpg'
// import img5 from '../Assets/Rectangle (4).jpg'
// import img6 from '../Assets/Mask group.jpg'
export default function Blog(props) {
  let { title, des, cat,time } = props;
  return (
      <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
        <img
          src="https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
          className="object-cover w-full h-64"
          alt=""
        />
        <div className="p-5 border border-t-0">
          <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
            <a
              href="/"
              className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
              aria-label="Category"
              title="traveling"
            >
              {cat}
            </a>
            <span className="text-gray-600">{time}</span>
          </p>
          <a
            href="/"
            aria-label="Category"
            title="Visit the East"
            className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
          >
           {title}
          </a>
          <p className="mb-2 text-gray-700">
         {des}
          </p>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
      </div>
  )
}
