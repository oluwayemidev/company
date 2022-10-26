import {React, useState} from 'react';
import "../../styles/courses.css";
import starfill from "../../icons/starfill.svg";
import layersfill from "../../icons/layersfill.svg";
import arrowright from "../../icons/arrowright.svg";
import search from "../../icons/search.svg";
import arrowDown from "../../icons/arrowDown.svg";
import rightArr from "../../icons/rightArr.svg"
import leftArr from "../../icons/leftArr.svg"



function Rating(){
    var stars = []
    for (var i = 0; i <= 4; i++){
        stars.push(
            <img src={starfill} alt="" srcset="" />
        )
    }
    return stars
}

function Course(){
    var multiCourse = []
    for (var u = 1; u <= 30; u++){
        multiCourse.push(
            <div className='course'>
                <div className="image" style={{'backgroundImage': `url(../../../images/banner.jpg)`}}></div>
                <div className="details">
                    <h4>Web Design Master Course</h4>
                    <p>Oluwayemi</p>
                    <div className="rating">
                        <span>5.0</span> <Rating /> (120,034)
                    </div>
                    <div className="pricing">
                        $12.00 <del>$20.99</del>
                    </div>
                    <div className="bottom">
                        <div>
                            <img src={layersfill} alt="" /> 30 Lessons
                        </div>

                        <div>
                            Enrol Now <img src={arrowright} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return multiCourse
}

function Courses(){
    const [isActive, setIsActive] = useState(false)

    const openFilter = () => {
        setIsActive(current => !current)
    }
  return (
    

    <div className='courses-container'>

        <div className="course-header">
            <h2>All Courses</h2>
            <input type="search" name="search" id="search" className='search' placeholder='Search' /><img src={search} alt="" className='search-icon' />

            <div className="filter">
                <div onClick={openFilter}>Filter <img src={arrowDown} alt="" /></div>
                
                <div className="dropdown" style={{
                    display: isActive ? "flex" : "none",
                }}>
                    <div>Web</div>
                    <div>Mobile</div>
                    <div>Desktop</div>
                </div>
            </div>
            <div className="recent">Recent</div>
            <div className="popular">Popupular</div>
        </div>

        <div className="courses">
            <Course />
        </div>

        <div className="course-footer">
            <button><img src={leftArr} alt="" /></button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button><img src={rightArr} alt="" /></button>
        </div>

    </div>
  )
}

export default Courses;