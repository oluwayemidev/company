import banner from '../../images/banner.jpg';
import '../../styles/banner.css';

function Banner (){
    return(
        <div className='banner' style={{
            backgroundImage: `url(${banner})`
        }}>
            <h1>Welcome to Space Chapter</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet perspiciatis aperiam sit, ipsa libero facilis nobis quis ut consectetur? Adipisci excepturi eaque ea nam explicabo dolores nemo atque pariatur aperiam.</p>
            <button>Get started for free</button>
        </div>
    );
}

export default Banner;