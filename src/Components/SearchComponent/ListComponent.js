import React from 'react';

const tableDataDisplay = (data) => data && data.map(val => <tr key={val._id}>
    <td>{val._id}</td>
    <td>{val.name}</td>
    <td>{val.gender}</td>
</tr>);

const List = (props) => {
    const { searchedResults, tableData } = props;
   
    return (
        <React.Fragment>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {searchedResults.length > 0 ? tableDataDisplay(searchedResults) : tableDataDisplay(tableData)}
                </tbody>
            </table>
        </React.Fragment>
    )
};
export default List;