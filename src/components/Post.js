import React from 'react'

import share from '../images/share.png'
import group from '../images/Group.png'
import dots from '../images/dots.png'
import location from '../images/location.png'

const Post = ({profile,postHeading,postText,postimage,postCategory}) => {
    return (
        <>
            {/* <div className='row'> */}
            <div className="col-md-7 col-auto">
                <div className=" postBox" style={{height:"472px"}}>
                    <img src={postimage} className="card-img-top img-fluid" alt="..." />
                    <div className=" post-card">
                        <img src={postCategory} className="post-title"></img>
                        <div className='d-flex align-items-start'>
                            <h2 className="post-heading" style={{marginBottom: "12px"}}>{postHeading}</h2>
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

                        <p className="post-text text-muted">{postText}</p>
                    </div>

                    <div className='post-profile '>
                        <div className='d-flex'>
                            <img src={profile} className='img-fluid' style={{ borderRadius: '24px', }} alt="..." />
                            <h4 className='post-name'>Sarthak Kamra</h4>
                        </div>
                        <div className='d-flex'>
                            <img src={group} className='img-fluid' alt="..." style={{ width: '98px', height: '18px', margin: "auto 40px auto auto " }} />
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

export default Post