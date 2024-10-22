import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    const { title, author_img, author, cover, posted_date, reading_time, hashtags } = blog;
    return (
        <div>
            <img className='w-full mb-8 rounded-lg' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='mb-8 flex  justify-between'>
                <div className='flex justify-between'>
                    <img className='w-14 mr-4' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <p><span>{reading_time} min read</span></p>
                </div>
            </div>
            <h2 className="mb-8 text-4xl">{title}</h2>
            {
                hashtags.map(hash => <span key={blog}> #{hash}</span>)
            }
            <div className='mt-6 mb-6'>
                <button>
                    <a >Mark as Read</a>
                </button>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}


export default Blog;