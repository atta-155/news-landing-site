import React from 'react';

interface LargeArticleProps {
    imgUrl: string;
    category: string;
    title: string;
    description: string;
    date: string;
}
const LargeArticleCard: React.FC<LargeArticleProps> = ({ imgUrl, category, title, description, date }) => {
    return (
        <div className="card p-5"
            style={{
                backgroundImage: `url(${imgUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '500px',
            }}>
            <div className='d-flex flex-column justify-content-between h-100'>
                <div className='subtitle text-white'>{category}</div>
                <div>
                    <div className='header'>{title}</div>
                    <div className='text-white'>{description}</div>
                    <small className="text-white"><i className="far fa-clock"></i><i> {date}</i></small>
                </div>

            </div>
        </div>
    )
}
export default LargeArticleCard;