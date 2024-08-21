import React from 'react';
import TrendingCard from './common/TrendingCard';
import trending1 from '../assets/trending/trending-1.jpg';
import trending2 from '../assets/trending/trending-2.jpg';
import trending3 from '../assets/trending/trending-3.jpg';

function TrendingSection() {
    return (
        <div className=''>
            <div className='d-flex justify-content-between align-items-center'>
                <div className="title py-5">TRENDING</div>
                <div>
                    <i className="fas fa-angle-left" style={{ color: "gray", marginRight: "40px" }}></i>
                    <i className="fas fa-angle-right"></i>
                </div>
            </div>
           
            <div className='row gy-5'>
                <div className='col-sm-12 col-md-4'>
                    <TrendingCard
                        imgUrl={trending1}
                        title="Lorem ipsum dolor sit amet"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio."
                        date="2 min ago"
                    />
                </div>
                <div className='col-sm-12 col-md-4'>
                    <TrendingCard
                        imgUrl={trending2}
                        title="Lorem ipsum dolor sit amet"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio."
                        date="2 min ago"
                    />
                </div>
                <div className='col-sm-12 col-md-4'>
                    <TrendingCard
                        imgUrl={trending3}
                        title="Lorem ipsum dolor sit amet"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio."
                        date="2 min ago"
                    />
                </div>
            </div>

        </div>
    )
}
export default TrendingSection;