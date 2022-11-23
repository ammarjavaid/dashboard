import React from 'react'

const SingleCard = (props) => {
    return (
        <>
            <div className="single__card">
                <div className='card__content'>
                    <h4> {props.title} </h4>
                    <span> {props.totalNumber} </span>
                </div>
                <span className='card__icon'> <i className={props.icon}></i> </span>
            </div>
        </>
    )
}

export default SingleCard