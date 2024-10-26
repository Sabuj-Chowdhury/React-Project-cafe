import { IoIosBookmark } from "react-icons/io";
import PropTypes from "prop-types";
const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const {
    id,
    title,
    cover,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="mb-20 space-y-4">
      <img
        className="w-full mb-8 rounded-lg mt-2"
        src={cover}
        alt={`cover picture of ${title}`}
      />
      <div className="flex justify-between  mt-3">
        <div className="flex justify-center">
          <img className="w-14" src={author_img} alt="" />
          <div className="ml-4">
            <p className="text-2xl font-bold">{author}</p>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span className="text-xl">{reading_time} mins read</span>
          <button
            onClick={() => handleAddToBookmark(blog)}
            className="ml-1 text-blue-500 text-2xl"
          >
            <IoIosBookmark></IoIosBookmark>
          </button>
        </div>
      </div>

      <h2 className="text-4xl mb-4">{title}</h2>
      <p>
        {hashtags.map((hashtag, idx) => (
          <span key={idx}>
            <a href="">#{hashtag}</a>
          </span>
        ))}
      </p>

      <button
        onClick={() => handleMarkAsRead(reading_time, id)}
        className="text-purple-600 font-bold underline"
      >
        Mark As Read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};

export default Blog;
