import React from 'react';
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

import { setSearchField,requestRobots } from "../actions";
/*import mapStateToProps from "react-redux/es/connect/mapStateToProps";
import mapDispatchToProps from "react-redux/es/connect/mapDispatchToProps";*/

let mapStateToProps = (state) => {
    return ({
        searchField: state.searchRobots.searchField,
        robots:state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error

    })
}

let mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => {
            dispatch(setSearchField(event.target.value))
        },
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends React.Component {

    componentDidMount() {
        this.props.onRequestRobots()
    }

/*    onSearchChange = (e) => {
        this.setState({
            searchfield: e.target.value
        });

    }*/

    render() {
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        });
        if (isPending) {
            return <h1>Loading robots</h1>
        } else {
            return (
                <div className={'tc'}>
                    <h1 className={'f1'}>Robofriends</h1>
                    <SearchBox onSearchChange={onSearchChange} searchfield={searchField}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundry>

                    </Scroll>
                </div>

            )
        }

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);