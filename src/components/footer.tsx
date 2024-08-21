import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="footer py-5">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-2">
                        <h5 className="text-uppercase">Logo</h5>
                    </div>
                    <div className="col-lg-4">
                        <div className="row">
                            <div className="col-4">
                                <ul className="list-unstyled">
                                    <li><a href="#" className="text-muted">Home</a></li>
                                    <li><a href="#" className="text-muted">Discovery</a></li>
                                    <li><a href="#" className="text-muted">Photos</a></li>
                                    <li><a href="#" className="text-muted">Contact</a></li>
                                </ul>
                            </div>
                            <div className="col-4">
                                <ul className="list-unstyled">
                                    <li><a href="#" className="text-muted">About</a></li>
                                    <li><a href="#" className="text-muted">Help</a></li>
                                    <li><a href="#" className="text-muted">Terms</a></li>
                                    <li><a href="#" className="text-muted">Guidelines</a></li>
                                </ul>
                            </div>
                            <div className="col-4">
                                <ul className="list-unstyled">
                                    <li><a href="#" className="text-muted">Testimonials</a></li>
                                    <li><a href="#" className="text-muted">Advertise</a></li>
                                    <li><a href="#" className="text-muted">Integrations</a></li>
                                    <li><a href="#" className="text-muted">Careers</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="row">
                            <div className="col-12 mb-3">
                                <form className="d-flex">
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Email" aria-label="Recipient's username" />
                                            <span className="input-group-text" id="basic-addon2"><i className="fa fa-paper-plane"></i>
                                            </span>
                                    </div>

                                </form>
                                <small className="">Stay in touch with us for the freshest products!</small>
                            </div>

                        </div>
                    </div>

                    <div className='col-lg-2'>
                        <div className="d-flex justify-content-sm-start justify-content-lg-end footer-icon">
                            <a href="#" className="text-muted me-3">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="text-muted me-3">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-muted me-3">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="text-muted">
                                <i className="fa fa-globe"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
