import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const Navbar = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      {/* <aside className="hidden md:flex w-20 bg-black text-white flex-col items-center py-6 space-y-9"> */}
<aside className="hidden md:flex w-20 bg-black text-white flex-col items-center py-6 space-y-9">
        <div >
          <span className="font-brand text-md">
  CourseCraft
</span>
          </div>

        <nav className="flex flex-col space-y-8">
         <div className="flex flex-col items-center gap-8">

  <GridViewOutlinedIcon className="hover:text-white cursor-pointer" />

  <FolderOutlinedIcon className="hover:text-white cursor-pointer" />

  <EditOutlinedIcon className="hover:text-white cursor-pointer" />

  <BookmarkBorderIcon className="hover:text-white cursor-pointer" />

  <HeadphonesOutlinedIcon className="hover:text-white cursor-pointer" />

  <SettingsOutlinedIcon className="hover:text-white cursor-pointer" />

</div>
<div className="mt-auto flex justify-center pb-6">
    <LogoutOutlinedIcon className="hover:text-white cursor-pointer" />
  </div>
        </nav>

      </aside>

      {/* MAIN */}
      <main className="flex-1 p-4 md:p-6">

        {/* HEADER */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          {/* Search */}
          <div className="flex items-center bg-white rounded-xl px-4 py-2 shadow w-full md:w-96 border">
            <input
              placeholder="Search"
              className="outline-none flex-1"
            />
            <SearchOutlinedIcon/>
          </div>

          {/* Profile */}
          <div className="flex items-center gap-3">
            <div className="px-5">
             <NotificationsOutlinedIcon/>
             </div>
            <img
              src="https://i.pravatar.cc/40"
              className="rounded-full w-10 h-10"
            />
            <div>
              <p className="font-semibold">Kacie</p>
              <p className="text-sm text-gray-500">@k_velasquez</p>
            </div>
          </div>

        </header>

        {/* CONTENT */}
        <div className="mt-8">

          <h1 className="text-2xl font-bold mb-6">My Courses</h1>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-yellow-300 rounded-xl p-5">
              <h2 className="font-semibold">Creative Writing</h2>
              <p className="text-sm mt-2">5 / 20 lessons</p>
              <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg">
                Continue
              </button>
            </div>

            <div className="bg-purple-300 rounded-xl p-5">
              <h2 className="font-semibold">Illustrator</h2>
              <p className="text-sm mt-2">12 / 50 lessons</p>
            </div>

            <div className="bg-blue-300 rounded-xl p-5">
              <h2 className="font-semibold">Public Speaking</h2>
              <p className="text-sm mt-2">18 / 22 lessons</p>
            </div>

          </div>

        </div>

      </main>
    </div>
  );
}

export default Navbar;
