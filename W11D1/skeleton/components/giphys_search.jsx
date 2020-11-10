import React from 'react';

import GiphysIndex from './giphys_index';

export default class GiphysSearch extends React.Component {
    constructor() {
        super();
        this.state = {
            search: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            search: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.fetchSearchGiphys(this.state.search)
    }

    render() {
        const giphys = this.props.giphys;
        return (
            <div>
                <form>
                    <label>Search
                        <input type="text" value ={this.state.search} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="submit" onClick={this.handleSubmit}/>
                </form>
                <GiphysIndex giphys={giphys}/>
            </div>
        );
    };
}