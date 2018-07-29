import React from "react";
import { Component } from 'react';
import { Grid } from 'semantic-ui-react';

export default class Content extends Component{

    constructor(props){
        super(props);
    }

    render(){

        const { child } = this.props;

        return (
            <Grid.Row>
                <Grid.Column>
                    {child}
                </Grid.Column>
            </Grid.Row>
        )
    }

}