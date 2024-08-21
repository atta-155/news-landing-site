import React from 'react';

interface SmallArticleProps {
    imgUrl: string;
    title: string;
    date: string;
    createdBy: string;
}
const SmallArticle: React.FC<SmallArticleProps> = ({ imgUrl, title, date, createdBy }) => {
    return (
        <div className="mb-5">
            <div className='card'>
            <img src={imgUrl} className='img-fluid' alt="image" style={{width: "100%", height: "250px", objectFit: 'cover'}}/>
            </div>
            <div className='d-flex flex-column mt-2'>
                <div className='subtitle'>{title}</div>
                <div><small className="content-text"><i className="far fa-clock"></i><i> {date} by <u>{createdBy}</u></i></small></div>
            </div>
        </div>
    )
}
export default SmallArticle;