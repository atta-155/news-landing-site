import React from 'react';

interface TrendingCardProps {
    imgUrl: string;
    title: string;
    description: string;
    date: string;
}
const TrendingCard: React.FC<TrendingCardProps> = ({ imgUrl, title, description, date }) => {
    return (
        <React.Fragment>
            <div className="card" >
                <img src={imgUrl} className="card-img-top" alt="image" style={{ maxHeight: "250px", objectFit: "cover" }} />
                <div className="card-body">
                    <div className="subtitle">{title}</div>
                    <p className="content-text">{description}</p>
                    <small className="content-text"><i className="far fa-clock"></i><i> {date}</i></small>

                </div>
            </div>
        </React.Fragment>
    )
}
export default TrendingCard;