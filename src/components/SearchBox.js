import React from 'react';

class SearchBox extends React.Component {

    render() {
        return (
            <div className={'pa2'}>
                <input
                    className={'pa3 ba b--green bg-lightest-blue'}
                    placeholder={'search robot'}
                    type={'search'}
                    onChange = {this.props.onSearchChange}
                />
            </div>

        )
    }
}

export default SearchBox