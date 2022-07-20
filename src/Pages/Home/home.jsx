import React from "react";
import moment from "moment";
import '../../styles/main.css';
import lapi from "../../images/lapi.jpg";
import learnNewSkills from '../../images/learnNewSkills.jpg';
import testYourSkills from '../../images/testYourSkills.jpg';
import askQuestions from '../../images/askQuestions.jpg';
import course1 from '../../images/course1.jpg';
import course2 from '../../images/course2.jpg';
import course3 from '../../images/course3.jpg';
import course4 from '../../images/course4.jpg';
import avatar from '../../images/avatar.jpg';
import clock from '../../icons/clock.svg';
import Banner from "./banner";




const cards = [
    {img: learnNewSkills, heading: "Learn new skills", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ea ullam sint repellendus impedit quibusdam hic cupiditate facilis tenetur non eos, dolorem illum, et maiores."},
    {img: testYourSkills, heading: "Discover new skills", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ea ullam sint repellendus impedit quibusdam hic cupiditate facilis tenetur non eos, dolorem illum, et maiores."},
    {img: askQuestions, heading: "Ask questions", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ea ullam sint repellendus impedit quibusdam hic cupiditate facilis tenetur non eos, dolorem illum, et maiores."}
];

const courses = [
    {img: course1, title: "Title", heading: "Cras vitae mattis lacus. Integer sit amet.", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ea ullam sint repellendus impedit quibusdam hic cupiditate.", time: "2022-07-08 1:30:41"},
    {img: course2, title: "Title", heading: "Cras vitae mattis lacus. Integer sit amet.", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ea ullam sint repellendus impedit quibusdam hic cupiditate.", time: "2022-07-08 1:30:23"},
    {img: course3, title: "Title", heading: "Cras vitae mattis lacus. Integer sit amet.", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ea ullam sint repellendus impedit quibusdam hic cupiditate.", time: "2022-07-08 09:20:50"},
    {img: course4, title: "Title", heading: "Cras vitae mattis lacus. Integer sit amet.", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ea ullam sint repellendus impedit quibusdam hic cupiditate.", time: "2022-07-08 09:10:20"}
]

const discussion = [
    {
        post: [
            {text: "Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra conubia ligula inceptos laoreet libero tortor, nascetur non habitasse iaculis tempor nec egestas fames augue, platea porta integer nostra curae sed arcu. Nec ut diam vulputate ante scelerisque ridiculus lobortis orci mi curae himenaeos quis, senectus curabitur ullamcorper a porttitor nibh fermentum nisi cum morbi aliquam. Vitae pretium vestibulum dui gravida in potenti interdum, class rhoncus neque eget magna at.Ullamcorper porttitor non pharetra cursus nisl mollis pellentesque primis penatibus platea, dictum himenaeos eget mi bibendum ad molestie aliquet curae quis quisque, nunc duis ac at elementum dui integer viverra tempus. Lacinia bibendum diam senectus egestas nec molestie convallis aenean hac tempus, vivamus purus congue euismod fringilla cursus donec est eu blandit platea, feugiat vitae netus orci habitant accumsan placerat morbi nostra. Quam fringilla sociis suspendisse quis ultricies dis tellus cum, litora aliquet.",
            time: "2022-07-12 08:01:20"}
        ]
    },
    {
        users: [
            {name: "Sunday Yemi", avatar : avatar, comment: "In hac habitasse platea dictumst. Sed nec venenatis odio. Nulla faucibus ipsum sed faucibus accumsan. Donec rhoncus luctus massa vitae lobortis. Duis consequat, nunc a pretium imperdiet, neque est rhoncus massa, tristique rutrum nisl risus at libero.", time: "2022-07-12 09:10:20"},
            {name: "Oluwayemi", avatar : avatar, comment: "Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra conubia ligula inceptos laoreet libero tortor, nascetur non habitasse iaculis tempor nec egestas fames augue, platea porta integer nostra curae sed arcu. Nec ut diam vulputate ante scelerisque ridiculus lobortis orci mi curae.", time: "2022-07-12 08:10:20"}
        ]
    }
]

function CardView(){
    const cardList = cards.map((card) => 
        <React.Fragment>
            <div className="card">
                <div className="imageContainer"  style={{ backgroundImage: `url(${card.img})`}}>
                </div>
                <div className="descContainer">
                    <h3>{card.heading}</h3>
                    <p>{card.desc}</p>
                    <a href="$">Learn more</a>
                </div>
            </div>
        </React.Fragment>
    );
    return (
        <div className="cards">
            {cardList}
        </div>
    )
};

function Wide(){
    const smallCourses = courses.map((smallCourse) => {
        var postTime = new Date(smallCourse.time);
        // first time check
        // var currentTime = new Date();
        // var totalTime = currentTime.getTime() - postTime.getTime();
        // totalTime = Math.round(totalTime / 1000);
        // var x = "";
        // var seconds = totalTime;
        // var minutes = Math.round(seconds / 60);
        // var hours = Math.round(minutes / 60);
        // var days = Math.round(hours / 24);
        // var years = Math.round(days / 365);
        // var time = 0;
        // if (minutes < 60){
        //     x = "m";
        //     time = minutes;
        // }else if(hours > 0) {
        //     x = "h";
        //     time = hours;
        // }else if(days > 0) {
        //     x = "days";
        //     time = days;
        // }else if(years > 0) {
        //     x = "years";
        //     time = years;
        // }
        return <React.Fragment>
            <div className="wideContent" style={{backgroundImage: `url(${smallCourse.img})`}}>
                <h4>{smallCourse.title}</h4>
                <h3>{smallCourse.heading}</h3>
                <p>{smallCourse.desc}</p>
                <div className="time">
                    <img src={clock} alt="" /> &nbsp;
                    <span>{moment(postTime).fromNow()}</span>
                </div>
            </div>
        </React.Fragment>
    });
    return(
        <div className="wide">
            {smallCourses}
        </div>
    );
}

function Small(){
    const smallCourses = courses.map((smallCourse) => {
        var postTime = new Date(smallCourse.time);
        // first time check
        // var currentTime = new Date();
        // var totalTime = currentTime.getTime() - postTime.getTime();
        // totalTime = Math.round(totalTime / 1000);
        // var x = "";
        // var seconds = totalTime;
        // var minutes = Math.round(seconds / 60);
        // var hours = Math.round(minutes / 60);
        // var days = Math.round(hours / 24);
        // var years = Math.round(days / 365);
        // var time = 0;
        // if (minutes < 60){
        //     x = "m";
        //     time = minutes;
        // }else if(hours > 0) {
        //     x = "h";
        //     time = hours;
        // }else if(days > 0) {
        //     x = "days";
        //     time = days;
        // }else if(years > 0) {
        //     x = "years";
        //     time = years;
        // }
        return <React.Fragment>
            <div className="smallContent">
                <img src={smallCourse.img} className="image" alt="" />
                <h4>{smallCourse.title}</h4>
                <div className="time">
                    <img src={clock} alt="" /> &nbsp;
                    <span>{moment(postTime).fromNow()} By Oluwayemi Dev.</span>
                </div>
            </div>
        </React.Fragment>
    });
    return(
        <div className="small">
            {smallCourses}
        </div>
    );
}


function Courses(){
    return(
        <div className="courses">
            <Wide />
            <Small />
        </div>
    );
};

function DiscussionPost(){
    const discussions = discussion[0].post.map((discussionPosts) => {
       var postTime = new Date(discussionPosts.time);
       return <React.Fragment>
        <h2 className="sectionHeading">TOP DISCUSSION</h2>
        <p>
            {discussionPosts.text}
        </p>
        <div className="bottom">
            <h5>Tought Experiment- VR App</h5>
            <div className="time">
                <img src={clock} alt="" /> &nbsp;
                <span>{moment(postTime).fromNow()} By Oluwayemi Dev.</span>
            </div>
        </div>
       </React.Fragment>
    });
    return discussions;
}

function UserDiscussion(){
    const userComments = discussion[1].users.map((user) => {
        var commentTime = new Date(user.time);

        return <React.Fragment>
            <div className="comment">
                <div className="head">
                    <img src={user.avatar} className="avatar" alt="" />
                    <span className="name">{user.name}</span>
                </div>
                <div className="comment">
                    {user.comment}
                </div>
                <div className="time">
                    <img src={clock} alt="" /> &nbsp;
                    <span>{moment(commentTime).fromNow()}</span>
                </div>
            </div>
        </React.Fragment>
    });
    return <div className="comments">
        {userComments}
    </div>
}



function Home(){
    return (
        <React.Fragment>
            <Banner />
            <div className="container">

                <h2 className="sectionHeading">WHAT WE DO</h2>
                <CardView />

                <h2 className="sectionHeading">FEATURED COURSES</h2>
                <Courses />

                <div className="topDiscussion">
                    <div className="left">
                        <DiscussionPost />
                    </div>

                    <div className="right">
                        <UserDiscussion />
                        <video src=""></video>
                    </div>
                </div>

                <div className="wideimage" style={{backgroundImage: `url(${lapi})`}}>
                    <h1>Oluwayemi Dev</h1>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia animi sed rerum reiciendis asperiores aliquid eum libero officia doloribus minus deleniti, amet, mollitia aliquam expedita neque velit blanditiis deserunt repellendus? Architecto, alias recusandae dolore ea quisquam blanditiis voluptatibus cumque quae facere, numquam, at officia fuga sequi in inventore iure sed adipisci eveniet expedita eius quod voluptate non! Laudantium accusantium nam minima hic id beatae ea dolor quasi debitis, tenetur impedit vero molestias labore iusto? Sit, illum. Similique natus dolorum vero saepe, quibusdam a! Officiis eum obcaecati sapiente magni quasi ea accusamus quam excepturi, sunt odit optio necessitatibus, repellendus deserunt porro. Sunt voluptatum consectetur debitis expedita officiis illo id, saepe, suscipit, accusantium possimus distinctio laudantium cupiditate sit magni ut modi beatae laborum quae. Consequuntur architecto velit quod minus quisquam explicabo sint!
                </p>

            </div>
        </React.Fragment>
    );
}


export default Home;