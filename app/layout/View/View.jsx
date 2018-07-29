import React from "react";
import { Component } from 'react';
import { Grid, Header } from 'semantic-ui-react';

import PageHeader from '../PageHeader/PageHeader'
import Content from '../Content/Content';
import Panel from '../Panel/Panel';

export default class View extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const {  content, leftPanel, rightPanel, title } = this.props;
        const red = 'red';

        return (

                <Grid stretched relaxed>
                    <Grid.Row color={red}>
                        <Grid.Column width={16}>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row color={'blue'} width={16}>
                        <Grid.Column >
                            <Header size="huge"> {title} </Header>     
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row >
                        <Grid.Column width={4} color={'red'} >
                       
                            <Panel content={leftPanel}/>
                        </Grid.Column>
                        <Grid.Column  width={8} color={'blue'}>
                      
                            <Content content={content}/>
                        </Grid.Column>
                        <Grid.Column width={4} color={'red'}>
                            <Panel content={rightPanel}/>
                        </Grid.Column>                                      
                    </Grid.Row>                
                    <Grid.Row>
                        <Grid.Column color="red">
                        </Grid.Column>
                    </Grid.Row>                
                </Grid>

        );

    }
}