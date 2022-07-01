import React from 'react'
import downarrow from '../images/arrowdown.png'
import joing from '../images/joingrp.png'
import Post from './Post'
import eduimage from '../images/eduimg.png'
import articleimage from '../images/articleimg.png'
import jobimg from '../images/job.png'
import mtp from '../images/mtp.png'
import education from '../images/education.png'
import meetupimg from '../images/meetup.png'
import article from '../images/article.png'
import profile1 from '../images/profile1.png'
import profile2 from '../images/profile2.png'
import profile3 from '../images/profile3.png'
import profile4 from '../images/profile4.png'
import Post2 from './Post2'
import location from '../images/location.png'
import vector from '../images/Vector.png'
import dots from '../images/dots.png'

const PostSection = () => {
  return (
    <>
      <div className='container mt-3 '>
        <div className="container d-md-flex d-none postSection ">
          <ul className="navbar-nav me-auto flex-row text-center">
            <li className="nav-item ">
              <a className="nav-link active" aria-current="page" href="#">All Posts(32)</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Article</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">Event</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">Education</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">Job</a>
            </li>

          </ul>
          <button className='btn me-3' style={{ background: "#EDEEF0" }}>Write a Post
            <img src={downarrow} className='ms-3'></img></button>
          <button className='btn btn-primary'>
            <img src={joing} className='me-2'></img>
            Join Group</button>
        </div>
        <hr className='ms-4' />



        <div className="container d-md-none d-flex postSection ">
          <ul className="navbar-nav me-auto flex-row text-center">
            <li className="nav-item ">
              <a className="nav-link active" style={{color:"#212529"}} aria-current="page" href="#">Posts(368)</a>
            </li>


          </ul>
          <div class="dropdown " style={{background: "#F1F3F5", borderRadius: "4px"}}>
            <button class="btn  " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Filter: All
              <img src={downarrow} className="" alt="..." />
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" href="#">Edit</a></li>
              <li><a class="dropdown-item" href="#">Report</a></li>
              <li><a class="dropdown-item" href="#">Option 3</a></li>
            </ul>
          </div>
        </div>



        {/* // post // */}

        <div className='container mx-md-3 mx-0 mt-4'>
          <div className='row justify-content-md-between'>
            <div className='col-md-7 col-auto'>
              <Post profile={profile1} postHeading={'What if famous brands had regular fonts? Meet RegulaBrands!'} postText={'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…'} postimage={articleimage} postCategory={article} />

              <Post profile={profile2} postHeading={'Tax Benefits for Investment under National Pension Scheme launched by Government'} postText={'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…'} postimage={eduimage} postCategory={education} />

              <Post2 profile={profile3} postHeading={'Finance & Investment Elite Social Mixer @Lujiazui'} postCategory={mtp} textcolor={"#E56135"} btnName={"Visit Website"} postimage={meetupimg} pdate={"Fri, 12 Oct, 2018"} plocation={"Ahmedabad, India"} />

              <Post2 profile={profile4} postHeading={'Software Developer'} postCategory={jobimg} textcolor={"#02B875"} btnName={"Apply on Timesjobs"}
                pdate={"Fri, 12 Oct, 2018"} plocation={"Ahmedabad, India"} />


            </div>
            <div className='col-md-3 d-md-block d-none '>
              <img src={location} className='me-1'></img>
              <input type="text" className='locationbar' value="Noida, India"></input>
              <hr />
              <div className='d-md-flex d-none align-items-start'>
                <img src={vector} className='me-1 img-fluid'></img>
                <p style={{
                  fontFamily: 'IBM Plex Sans',
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "12px",
                  lineHeight: "16px",

                  color: "#000000",

                  opacity: "0.5"
                }}>Your location will help us serve better and extend a personalised experience.</p>
              </div>
            </div>
          </div>


        </div>
      </div>


    </>
  )
}

export default PostSection