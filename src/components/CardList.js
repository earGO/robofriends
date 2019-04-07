import React from 'react';
import Card from './Card';


const CardList = ({ robots }) => {
        return (
            <div>
                {
                    robots.map((robot, key) =>{
                        return (
                            <Card
                                robot={robot} key={key}
                            />);
                    })
                }
            </div>
    )
}

export default CardList;