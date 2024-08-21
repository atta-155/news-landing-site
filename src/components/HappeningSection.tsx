import React from 'react';
import LargeArticleCard from './common/LargeArticleCard';
import happening1 from '../assets/happening/happening-1.jpg';
import happening2 from '../assets/happening/happening-2.jpg';
import happening3 from '../assets/happening/happening-3.jpg';
import happening4 from '../assets/happening/happening-4.jpg';
import happening5 from '../assets/happening/happening-5.jpg';

import SmallArticle from './common/SmallArticle';

function HappeningSection() {
    return (
        <div className='pb-5'>
            <div className='d-flex justify-content-between align-items-center'>
                <div className="title py-5">HAPPENING NOW</div>
                <div>
                    <i className="fas fa-angle-left" style={{ color: "gray", marginRight: "40px" }}></i>
                    <i className="fas fa-angle-right"></i>
                </div>
            </div>

            <div className='row d-flex g-5'>
                <div className='col-md-12 col-lg-8 d-flex flex-column'>
                    <div className='mb-5 flex-fill'>
                        <LargeArticleCard
                            imgUrl={happening1}
                            category="CITY"
                            title="Lorem ipsum dolor sit amet"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio."
                            date="2 min ago"
                        />
                    </div>
                    <div className='flex-fill'>
                        <LargeArticleCard
                            imgUrl={happening2}
                            category="TRAVEL"
                            title="Lorem ipsum dolor sit amet"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio."
                            date="2 min ago"
                        />
                    </div>
                </div>
                <div className='col-md-12 col-lg-4 d-flex flex-column'>
                    <div className='row'>
                        <div className='col-md-4 col-lg-12'>
                            <SmallArticle
                                imgUrl={happening3}
                                title="Small Title"
                                date="2 min ago"
                                createdBy='Worldnews'
                            />
                        </div>
                        <div className='col-md-4 col-lg-12'>

                            <SmallArticle
                                imgUrl={happening4}
                                title="Small Title"
                                date="2 min ago"
                                createdBy='Worldnews'
                            />
                        </div>
                        <div className='col-md-4 col-lg-12'>
                            <SmallArticle
                                imgUrl={happening5}
                                title="Small Title"
                                date="2 min ago"
                                createdBy='Worldnews'
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}
export default HappeningSection;