import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks, redingTime }) => {
  return (
    <div className="md:w-1/3 bg-slate-200 text-center rounded-xl p-4 mt-2">
      <div className="bg-slate-400 p-4 m-4 text-center rounded-xl">
        <p className="text-3xl">Reading Time : {redingTime}</p>
      </div>
      <h2 className="text-3xl">Bookmarked Blogs :{bookmarks.length}</h2>
      {bookmarks.map((bookmark, idx) => (
        <Bookmark key={idx} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  redingTime: PropTypes.number,
};
export default Bookmarks;
