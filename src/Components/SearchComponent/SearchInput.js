import React from 'react';


const Input = (props) => {
    return (
        <React.Fragment>
            <div className="text-center">
                <input placeholder="search" name="searchedText" onChange={props.handleOnChange} />
                {props.searchLoading ? <i className="fa fa-spinner fa-spin"></i> : null}
            </div>
        </React.Fragment>
    )
};

export default Input;