import React from 'react'
import logo from '../images/logo.png'
import search from '../images/search.png'
import downarrow from '../images/arrowdown.png'
import backarrow from '../images/arrowback.png'



const Nav = () => {
    return (
        <>
            <div className='container-fluid d-flex justify-content-around align-items-center d-none d-md-flex' style={{ height: "72px" }}>
                <div>
                    <img src={logo} alt='logo' className='logo img-fluid' ></img>
                </div>

                <div>
                    <form className="d-flex" style={{ width: "360px", height: "42px" }}>
                        <button className='btn position-absolute ms-1' >
                            <img src={search} alt='search icon' ></img>
                        </button>
                        <input type="search" className="form-control searchBar" placeholder="Search for your favorite groups in ATG"
                            style={{
                                backgroundColor: "#F2F2F2", border: "", borderRadius: "21px", border: "0", fontSize: "",
                                fontWeight: "",
                                fontFamily: " "
                            }}
                        />

                    </form>
                </div>

                <div>
                    <h6 style={{
                        LineHeight: '20.8px'
                    }}>Create account. It’s free!<img src={downarrow} alt='arrow' style={{ marginLeft: '7px' }}></img>
                    </h6>
                </div>

            </div>
            {/* // HeaderSection // */}

            <div className='container-fluid bgcont' style={{ height: "440px" }}>
            </div>
            <div className='background img-fluid'>
                <div className='d-flex d-md-none'>
                <img src={backarrow} className='' style={{position: "absolute",left: "6%",
top: "7%"}}></img>
<button type="button" class="btn joinbtn">Primary</button>

</div>
                <h2 className='title'>Computer Engineering</h2>
                <p className='subtitle'>142,765 Computer Engineers follow this</p>
            </div>
        </>
    )
}

export default Nav