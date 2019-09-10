import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar, RaisedButton, List, ListItem } from 'material-ui';

export class Result extends Component {
    previous = (e) =>{
        e.preventDefault();
        this.props.prevPage();
    }
    
    render() {
        const { values } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title='Results' />
                    <List>
                        <ListItem 
                            primaryText='Gross Pay'
                            secondaryText={values.total}
                        />
                        <br/>
                        <ListItem 
                            primaryText='Federal Tax Deductions'
                            secondaryText={values.deductions}
                        />
                        <br/>
                        <ListItem 
                            primaryText='Net Pay'
                            secondaryText={values.net}
                        />
                    </List>
                    <br/>
                    <RaisedButton 
                        label='Return'
                        style={styles.button}
                        onClick={this.previous}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: '15px'
    }
}

export default Result
