import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import LinkIcon from '@mui/icons-material/Link';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';




const CourseCard = () => {
  return (
    <div className='m-4 max-w-sm w-full h-50'>

      <div className="max-w-sm bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">

        <div className='relative group'>
          <img
            className="w-full h-50 object-cover"
            src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
            alt="Course"
          />


          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-90 transition duration-300"></div>

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

          <div className="absolute top-0 left-0 p-4 text-white text-md font-semibold opacity-0 group-hover:opacity-100 transition duration-300">
            Course name
          </div>

        </div>

      </div>
      <div className='mt-1 flex justify-between'>
        full stack development
        <div className='flex gap-3'>
          <span className='flex gap-1'>
            <FavoriteIcon size={6} className=' fs-sm' />
            87
          </span>
          <span className='flex gap-1'>
            <VisibilityIcon className='fs-md flex ' />
            89
          </span>


        </div>
      </div>



    </div>


  )
}

export default CourseCard