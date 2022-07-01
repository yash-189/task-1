import React from 'react'

import share from '../images/share.png'
import group from '../images/Group.png'
import dots from '../images/dots.png'
import calendar from '../images/calendar.png'
import location from '../images/location.png'

const Post2 = ({profile,postHeading,textcolor,pdate,plocation,postimage,postCategory,btnName}) => {
    const btnStyle={
        border: "0.7px dashed #A9AEB8",
borderRadius: "8px",
color:`${textcolor}`,
fontFamily: 'IBM Plex Sans',
fontStyle: "normal",
fontWeight: "600",
fontSize: "13px",
lineHeight: "140.4%",
/* or 18px */

textAlign: "center"
    }


    return (
        <>
            {/* <div className='row'> */}
            <div className="col-md-7 col-auto">
                <div className=" postBox" style={{height:"490px"}}>
                    {postimage?<img src={postimage} className="card-img-top" alt="..."></img>:''}
                    <div className=" post-card">
                        <img src={postCategory} className="post-title"></img>
                        <div className='d-flex align-items-start'>
                            <h2 className="post-heading" style={{marginBottom: "-18px"}}>{postHeading}</h2>
                            <div class="dropdown">
                                <button class="btn  " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src={dots} className="" alt="..." />
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="#">Edit</a></li>
                                    <li><a class="dropdown-item" href="#">Report</a></li>
                                    <li><a class="dropdown-item" href="#">Option 3</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className='d-flex align-items-start' > 
                            <img src={calendar} className='me-1'></img>
                            <p className='info me-5'>{pdate}</p>
                            <img src={location} className='me-1'></img>
                            <p className='info'>{plocation}</p>
                        </div>
                    </div>
                    <div class="d-grid mb-4" style={{margin: "0 20px"}}>
  <button class="btn " type="button" style={btnStyle}>{btnName}</button>
</div>

                    <div className='post-profile '>
                        <div className='d-flex'>
                            <img src={profile} style={{ borderRadius: '24px', }} alt="..." />
                            <h4 className='post-name'>Sarthak Kamra</h4>
                        </div>
                        <div className='d-flex'>
                            <img src={group} alt="..." style={{ width: '98px', height: '18px', margin: "auto 40px auto auto " }} />
                            <div style={{ width: "42px", height: "36px", background: "#EDEEF0", borderRadius: "2px", margin: "auto", textAlign: "center" }}>
                                <img src={share} alt="..." style={{ width: "13.5px", height: "14.94px" }} />
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            {/* </div> */}
        </>
    )
}

export default Post2