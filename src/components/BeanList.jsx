import React from 'react';
import { Link } from 'react-router-dom'

const BeanList = ({beans}) => (
    <div>
        <h1>Bean List</h1>
        {beans.map(bean =>
            <div>
                <Link to={`/bean/${bean.name}`}>{bean.name}</Link>
            </div>
        )}
    </div>
);

export default BeanList;