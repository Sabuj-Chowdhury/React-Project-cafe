import { useState } from "react";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";

function App() {
  const [bookmarks, setBookmark] = useState([]);
  const [redingTime, setReadingTime] = useState(0);
  const handleAddToBookmark = (blog) => {
    // console.log(blog);
    // console.log("bookMar adding SOON");
    const newBookmarks = [...bookmarks, blog];
    setBookmark(newBookmarks);
  };

  const handleMarkAsRead = (time, id) => {
    // console.log("reading time Adding Soon", time);
    const newReadingTime = time + redingTime;
    setReadingTime(newReadingTime);
    const remainingBookMark = bookmarks.filter(
      (bookmark) => bookmark.id !== id
    );
    setBookmark(remainingBookMark);
  };

  return (
    <>
      <Header></Header>

      <div className="container mx-auto md:flex justify-between gap-3">
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} redingTime={redingTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
