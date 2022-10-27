import React, {useState, useEffect} from 'react';
import '../../styles/blog.css';
import lapi from "../../images/lapi.jpg";
import learnNewSkills from '../../images/learnNewSkills.jpg';
import testYourSkills from '../../images/testYourSkills.jpg';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import course1 from '../../images/course1.jpg';
import course2 from '../../images/course2.jpg';
import course3 from '../../images/course3.jpg';
import course4 from '../../images/course4.jpg';



const slideImages = [
    {
      url: lapi,
      caption: 'The new era in tech'
    },
    {
      url: learnNewSkills,
      caption: 'Forex Trading Business'
    },
    {
      url: testYourSkills,
      caption: 'New Web Development'
    },
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div className='mySlide' style={{'backgroundImage': `url(${slideImage.url})`}}>
                <span className='caption'>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}


function Trending() {
    setInterval(myTimer, 1000)

    function myTimer() {
        var date = new Date();
        var time = date.toLocaleTimeString();
    
        var weekday = [];
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
    
        var month = [];
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";
        var monthName = month[date.getMonth()];
        var day = weekday[date.getDay()];

        if(document.getElementById("timer")){
            return document.getElementById("timer").innerHTML = day + ", " + monthName + " " + date.getDate() + ", " + date.getFullYear() + " " + time;
        }
    }


    return <React.Fragment>
        {/* Trending */}
        <div className="trending">
            <button>Trending</button>
            <marquee>Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra conubia ligula inceptos laoreet libero tortor, nascetur non habitasse iaculis tempor nec egestas fames augue, platea porta integer nostra curae sed arcu. Nec ut diam vulputate ante scelerisque ridiculus lobortis orci mi curae himenaeos quis, senectus curabitur ullamcorper a porttitor nibh fermentum nisi cum morbi aliquam. Vitae pretium vestibulum dui gravida in potenti interdum, class rhoncus neque eget magna at.Ullamcorper porttitor non pharetra cursus nisl mollis pellentesque primis penatibus platea, dictum himenaeos eget mi bibendum ad molestie aliquet curae quis quisque, nunc duis ac at elementum dui integer viverra tempus. Lacinia bibendum diam senectus egestas nec molestie convallis aenean hac tempus, vivamus purus congue euismod fringilla cursus donec est eu blandit platea, feugiat vitae netus orci habitant accumsan placerat morbi nostra. Quam fringilla sociis suspendisse quis ultricies dis tellus cum, litora aliquet.</marquee>
            <div id="timer" className='timer'></div>
        </div>
    </React.Fragment>
}

function Blogs(props){
    let [blog, setBlogs] = useState([]);
    // let [blogImages, setBlogImages] = useState([]);

    useEffect(() => {
        // fetch('/api/blogs/images')
        //     .then(res => re)
    })

    useEffect(() => {
        fetch('/api/Blogs')
            .then(res => res.json())
            .then(data => setBlogs((data), console.log('Blogs fetched...', data)));
    },[]);

    function myTimer(d) {
        var date = new Date(d);
    
        var weekday = [];
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
    
        var month = [];
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";
        var monthName = month[date.getMonth()];
        var day = weekday[date.getDay()];
        return day + ", " + monthName + " " + date.getDate() + ", " + date.getFullYear();
    }
    const myBlog = blog.map((blogPost, id) => 
        <React.Fragment>
            <div key={id} className='blog'>
                <div className="image" style={{backgroundImage: `url(${'http://localhost:5000/api/Blog/images/' + blogPost.path})`}}></div>
                {console.log(blogPost.path)}
                <div className="heading">
                    <span>{blogPost.tag}</span> / <span>{myTimer(blogPost.time)}</span>
                </div>
                <div className="read-more">
                    <a href='$'>{blogPost.heading}</a>
                </div>
                <p>{blogPost.post.substr(0, 100)}</p>
            </div>
        </React.Fragment>
    );
    return myBlog;
}

function NewsBanner(){
    return <React.Fragment>
        <div className="newsBanner">
            <Slideshow />

            <div className="categories">
                <div>Categories <span>View All</span></div>
                <div style={{backgroundImage: `url(${course1})`}}>Technology</div>
                <div style={{backgroundImage: `url(${course2})`}}>Business</div>
                <div style={{backgroundImage: `url(${course3})`}}>Entertainment</div>
                <div style={{backgroundImage: `url(${course4})`}}>Sports</div>
            </div>

            <div className="featured">
                <div>Featured</div>
                <div>Technology</div>
                <div>Business</div>
                <div>Entertainment</div>
                <div>Sports</div>
            </div>

            <div className="popular">
                <Blogs/>
            </div>

            <div className="follow">
                <div>Follow Us</div>

                <div>Facebook</div>
                <div>Twitter</div>
                <div>Instagram</div>
                <div>Youtube</div>
                <div>LinkedIn</div>
                <div>Whatsapp</div>
            </div>
        </div>
    </React.Fragment>
}

function Blog (){
    return (
        <React.Fragment>
            <Trending />
            <NewsBanner />
        </React.Fragment>
    );
}


export default Blog;