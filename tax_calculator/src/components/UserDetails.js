import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class UserDetails extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.grossTotal();
        this.props.nextPage();
    }
    
    render() {
        const { values, handleChange } = this.props;
        return (
           <MuiThemeProvider>
               <React.Fragment>
                    <AppBar title='Please Fill Out the Following Fields' />
                    <TextField 
                        hintText='Enter Hourly Pay Rate'
                        floatingLabelText='Pay Rate'
                        onChange={handleChange('payRate')}
                        defaultValue={values.payRate}

                    />
                    <br/>
                    <TextField 
                        hintText='Enter Hours Worked'
                        floatingLabelText='Hours Worked'
                        onChange={handleChange('hours')}
                        defaultValue={values.hours}

                    />
                    <br />
                    <TextField 
                        hintText='Enter Weeks Worked'
                        floatingLabelText='Weeks Worked'
                        onChange={handleChange('weeks')}
                        defaultValue={values.weeks}
                    />
                    <br/>
                    <RaisedButton 
                        label='Submit'
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
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

export default UserDetails
