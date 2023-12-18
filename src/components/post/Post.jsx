import './post.css';

export default function Post() {
  return (
    <div className='post'>
      <img
        className='postImg'
        src='https://thumbs.dreamstime.com/b/night-landscape-colorful-milky-way-yellow-light-mountains-starry-sky-hills-summer-beautiful-universe-space-72956059.jpg'
        alt=''
      />
      <div className='postInfo'>
        <div className='postCats'>
          <span className='postCat'>Life</span>
          <span className='postCat'>Music</span>
        </div>
        <span className='postTitle'>Lorem ipsum, dolor sit amet</span>
        <hr />
        <span className='postDate'>1 hour ago</span>
      </div>
      <p className='postDesc'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        sapiente quas, iste corrupti ut dignissimos, aperiam perferendis eos
        magnam accusantium quia voluptatum incidunt corporis ex at distinctio
        minima quidem? Praesentium! Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Aliquid sapiente quas, iste corrupti ut dignissimos,
        aperiam perferendis eos magnam accusantium quia voluptatum incidunt
        corporis ex at distinctio minima quidem? Praesentium!
      </p>
    </div>
  );
}
