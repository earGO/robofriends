import React from 'react';

class Card extends React.Component {

    render() {
        let {id,name,email}=this.props.robot;
        return (
            <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
                <img alt='roboface' src={`https://robohash.org/${id}?200x200`}/>
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        )
    }
}

export default Card;