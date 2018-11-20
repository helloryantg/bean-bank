import React from 'react';

const BeanDetail = (props) => {
    let bean = props.getBean(props.match.params.name);
    return (
        <div>
            <h1>Bean Detail: {bean.name}</h1>
            <p>{bean.roast}</p>
            <p>{bean.notes}</p>
        </div>
    )
};


export default BeanDetail;