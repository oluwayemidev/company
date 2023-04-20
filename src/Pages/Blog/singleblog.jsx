import React, {useState, useEffect, Fragment} from 'react';
import '../../styles/blog.css';
import learnNewSkills from '../../images/learnNewSkills.jpg';


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
            .then(data => setBlogs((data.reverse())));
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
    const myBlog = blog.slice(0, 8).map((blogPost, id) => 
        <React.Fragment>
            <div key={id} className='blog'>
                
            </div>
        </React.Fragment>
    );
    return myBlog;
}

function SubBlog(){
    let [blog, setBlogs] = useState([]);

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

    useEffect(() => {
        fetch('/api/Blogs')
            .then(res => res.json())
            .then(data => setBlogs((data.reverse())));
    },[]);

    const myBlog = blog.slice(0, 6).map((blogPost, id) => 
        <React.Fragment>
            <div key={id} className='subBlog'>
                <div className="image" style={{backgroundImage: `url(${'https://oyemsite.oluwayemi.repl.co/api/Blog/images/' + blogPost.path})`}}></div>
                {/* <div className="image" style={{backgroundImage: `url(${'localhost:5000/api/Blog/images/' + blogPost.path})`}}></div> */}
                {console.log(blogPost.path)}
                <div className="heading">
                    <span>{blogPost.tag}</span> / <span>{myTimer(blogPost.time)}</span>
                    <div className="read-more">
                    <a href='$'>{blogPost.heading}</a>
                </div>
                </div>
                
            </div>
        </React.Fragment>
    );
    return myBlog;
}

function BlogTags(){
    let [blog, setBlogs] = useState([]);


    useEffect(() => {
        fetch('/api/Blogs')
            .then(res => res.json())
            .then(data => setBlogs((data)));
    },[]);
    
    const tags = [...new Map(blog.map((m) => [m.tag, m])).values()];

    const myTags = tags.map((tag) => 
        <React.Fragment>
            <button>{tag.tag}</button>
        </React.Fragment>
    );
    return myTags;
}

function NewsBanner(){
    return <React.Fragment>
        <div className="newsBanner singleblog">

            <div className="popular">
                <Blogs/>
            </div>

            <div className="side">
                <div className="follow">
                    <div>Follow Us</div>

                    <div>Facebook</div>
                    <div>Twitter</div>
                    <div>Instagram</div>
                    <div>Youtube</div>
                    <div>LinkedIn</div>
                    <div>Whatsapp</div>
                </div>

                <div className="newsLetter">
                    <div>Newsletter</div>
                    
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eligendi eius sequi 
                        </p>
                        <div>
                            <input type="email" name="" id="" placeholder='Your Email' />
                            <button>Sign up</button>
                        </div>
                    </div>
                </div>

                <div className="trendingBlog">
                    <div style={{
                        backgroundImage: `url(${learnNewSkills})`
                    }}></div>

                    <div className='subTitle'>Trending</div>
                    <SubBlog />
                </div>

                <div className="tags">
                    <div>Tags</div>
                    <div className="tagsBtn">
                        <BlogTags />
                    </div>
                </div>
            </div>

            
        </div>
    </React.Fragment>
}

function Blog (){

    return (
        <React.Fragment>
            <NewsBanner />
        </React.Fragment>
    );
}


export default Blog;