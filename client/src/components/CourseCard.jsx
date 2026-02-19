import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import LinkIcon from '@mui/icons-material/Link';


const CourseCard = () => {
  return (
    <div>

      <div className="max-w-sm bg-white rounded-3xl m-5 shadow-md overflow-hidden hover:shadow-xl transition duration-300">

        <div className='relative group'>
          <img
            className="w-full h-50 object-cover"
            src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
            alt="Course"
          />


          {/* Dark overlay - appears on hover */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-90 transition duration-300"></div>

          {/* Icons container - appears on hover */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition duration-300">
            <button className="bg-white p-2 rounded-full shadow hover:scale-110 transition">
              <FavoriteBorderIcon size={40} />
              <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 
                       bg-white text-black text-xs px-2 py-1 rounded
                       opacity-0 group-hover:opacity-100 
                       transition duration-300 whitespace-nowrap">
                Like
              </span>

            </button>
            <button className="bg-white p-2 rounded-full shadow hover:scale-110 transition">
              <BookmarkBorderIcon size={18} />
              <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 
                       bg-white text-black text-xs px-2 py-1 rounded
                       opacity-0 group-hover:opacity-100 
                       transition duration-300 whitespace-nowrap">
                Save
              </span>
            </button>
            <button className="bg-white p-2 rounded-full shadow hover:scale-110 transition">
              <LinkIcon size={18} />
              <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 
                       bg-white text-black text-xs px-2 py-1 rounded
                       opacity-0 group-hover:opacity-100 
                       transition duration-300 whitespace-nowrap">
                Explore your Course
              </span>
            </button>
          </div>

          {/* Text at bottom left - appears on hover */}
          <div className="absolute bottom-0 left-0 p-4 text-white text-md font-semibold opacity-0 group-hover:opacity-100 transition duration-300">
            Course name
          </div>

        </div>

      </div>
      


    </div>


  )
}

export default CourseCard