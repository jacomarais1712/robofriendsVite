import React from 'react';
import Card from './Card';

const cardList = ({ robots }) => {
    const CardComponent = robots.map((User, i) => {
        return <Card key={robots[i].id} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
    });
    return (
        <div>
            {CardComponent}
        </div>
    );
}

export default cardList;