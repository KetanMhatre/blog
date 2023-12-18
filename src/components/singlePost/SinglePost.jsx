import './singlePost.css';

export default function SinglePost() {
  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        <img
          className='singlePostImg'
          src='https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
          alt=''
        />
        <h1 className='singlePostTitle'>
          Lorem ipsum dolor sit amet.
          <div className='singlePostEdit'>
            <i className='singlePostIcon far fa-edit'></i>
            <i className='singlePostIcon far fa-trash-alt'></i>
          </div>
        </h1>
        <div className='singlePostInfo'>
          <span className='singlePostAuthor'>
            Author: <b>Ketan</b>
          </span>
          <span className='singlePostDate'>1 Hour ago</span>
        </div>
        <p className='singlePostDesc'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          distinctio dolorem nulla illum deleniti nobis sapiente laudantium!
          Labore facere, iure minima pariatur nostrum totam aut atque soluta, in
          cupiditate rem! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quas distinctio dolorem nulla illum deleniti nobis sapiente
          laudantium! Labore facere, iure minima pariatur nostrum totam aut
          atque soluta, in cupiditate rem! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quas distinctio dolorem nulla illum
          deleniti nobis sapiente laudantium! Labore facere, iure minima
          pariatur nostrum totam aut atque soluta, in cupiditate rem! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Quas distinctio
          dolorem nulla illum deleniti nobis sapiente laudantium! Labore facere,
          iure minima pariatur nostrum totam aut atque soluta, in cupiditate
          rem!
        </p>
      </div>
    </div>
  );
}
