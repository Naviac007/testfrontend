import React, { Component } from 'react'
import { withRouter, useParams } from "react-router-dom";
class SearchPage extends Component {

    render() {
        return (
            <>{this.props.match.params.id}</>

        );
    }
}


export default withRouter(SearchPage)
