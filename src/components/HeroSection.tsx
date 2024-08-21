import React from 'react';
import HeroSectionCover from '../assets/hero-section-cover.jpg';
function HeroSection() {
    return (
        <div className="container-fluid">
            <div className="row align-items-center justify-content-center">

                <div className="col-lg-8 p-0" style={{ height: "600px", backgroundImage: `url(${HeroSectionCover})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: "100%" }}>
                        <div className="w-75 w-sm-100 p-sm-0 p-md-5 ">
                            <div className="title" style={{ color: "#fff" }}>WORLD NEWS</div>
                            <div><hr style={{ height: '1px', backgroundColor: "#fff", border: 'none', margin: '35px 0px', opacity: '1' }} /></div>
                            <div className='title text-white'>Amazing places in America to visit.</div>
                            <p className='text-white'>
                                For some reason – this country, this city, this neighborhood, this particular street – is the place you are living a majority of your life in.
                            </p>
                            <button className="btn btn-danger mt-3">LEARN MORE</button>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="col-lg-4">
                    <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: "100%" }}>
                        <div className="w-75 w-sm-100 py-5">
                            <div className='d-flex justify-content-between'>
                                <div className="title" style={{ textAlign: 'start' }}>MORE NEWS</div>
                                <div>
                                    <i className="fas fa-angle-left" style={{ color: "gray", marginRight: "40px" }}></i>
                                    <i className="fas fa-angle-right"></i>
                                </div>
                            </div>
                            <hr style={{ height: '1px', backgroundColor: "#2d2d2d", border: 'none', margin: '30px 0px' }} />

                            <ul className="list-unstyled">
                                <li className="mb-5">
                                    <h6 className="fw-semibold text-danger">TRAVEL</h6>
                                    <div className="subtitle">Article title</div>
                                    <p className="content-text">Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat…</p>
                                    <small className="content-text"><i className="far fa-clock"></i><i> 2 min ago</i></small>
                                </li>
                                <li className="">
                                    <h6 className="fw-semibold text-danger">TECHNOLOGY</h6>
                                    <div className="subtitle">Article title</div>
                                    <p className="content-text">Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat…</p>
                                    <small className="content-text"><i className="far fa-clock"></i><i> 2 min ago</i></small>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HeroSection;