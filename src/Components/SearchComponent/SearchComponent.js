import React from 'react';
import jsonData from './data.json';
import List from './ListComponent.js';
import Input from './SearchInput.js';
import { connect } from 'react-redux';
import { jsonDataProvider } from '../../Store/Actions';

class SearchComponent extends React.Component {
    state = {
        searchedText: '',
        searchedtableResult: [],
        searchLoading: false
    }
    componentDidMount() {
        this.props.sendData(jsonData);
    }
    handleOnChange = event => {
        this.setState({
            searchedText: event.target.value, searchLoading: true
        }, () => this.searchTableResult())
    }
    searchTableResult = () => {
        const searchedResults = [...this.props.tableData];
        const regex = new RegExp(this.state.searchedText, "gi");
        const searchedtableResult = searchedResults.reduce((acc, searchResults) => {
            if (searchResults && searchResults.name.match(regex) || searchResults.gender.match(regex)) {
                acc.push(searchResults)
            }
            return acc;
        }, []);
        this.setState({ searchedtableResult });
        setTimeout(() => this.setState({ searchLoading: false }), 1000)
    }
    render() {

        return (
            <React.Fragment>
                <Input handleOnChange={this.handleOnChange} searchLoading={this.state.searchLoading} />
                <List tableData={this.props.tableData} searchedResults={this.state.searchedtableResult} />
            </React.Fragment>
        )
    }
};

const mapStateToProps = state => ({
    tableData: state.tableData
});

const mapDispatchToProps = dispatch => ({
    sendData: (data) => dispatch(jsonDataProvider(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);
