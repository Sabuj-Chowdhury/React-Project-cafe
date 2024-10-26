import PropTypes from "prop-types";
const Blog = ({ blog }) => {
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
    <div>
      <img
        className="w-full rounded-lg mt-2"
        src={cover}
        alt={`cover picture of ${title}`}
      />
      <div className="flex justify-between items-center mt-3">
        <div className="flex justify-center">
          <img className="w-14" src={author_img} alt="" />
          <div className="ml-4">
            <p className="text-2xl font-bold">{author}</p>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} mins read</span>
        </div>
      </div>

      <h2 className="text-4xl">{title}</h2>
      {hashtags.map((hashtag, idx) => (
        <span key={idx}>
          <a href="">#{hashtag}</a>
        </span>
      ))}
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
