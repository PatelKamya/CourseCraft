

const CourseCard = () => {
  return (
<div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      
      {/* Course Image */}
      <img
        className="w-full h-48 object-cover"
        src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
        alt="Course"
      />

      {/* Course Content */}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800">
          Full Stack Web Development
        </h3>

        <p className="text-gray-500 text-sm mt-2">
          Learn React, Node.js, MongoDB & build real-world projects.
        </p>

        {/* Course Info */}
        <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
          <span>⭐ 4.8</span>
          <span>20 Hours</span>
        </div>

        {/* Price & Button */}
        <div className="flex justify-between items-center mt-5">
          <span className="text-lg font-bold text-blue-600">
            ₹1999
          </span>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Enroll
          </button>
        </div>
      </div>
    </div>
  )
}

export default CourseCard