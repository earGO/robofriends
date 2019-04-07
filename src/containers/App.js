import React from 'react';
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';


const initialState = {
    robots:[],
    searchfield:''
}

class App extends React.Component {
    constructor(){
        super();
        this.state = initialState;
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
            return response.json();
        }).then(users=>{
            this.setState({robots:users})
        })

    }

    onSearchChange = (e) => {
        this.setState({
            searchfield: e.target.value
        });

    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        });
        if (robots.length === 0) {
            return <h1>Loading robots</h1>
        } else {
            return (
                <div className={'tc'}>
                    <h1 className={'f1'}>Robofriends</h1>
                    <SearchBox onSearchChange={this.onSearchChange} searchfield={this.state.searchfield}/>
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

export default App;