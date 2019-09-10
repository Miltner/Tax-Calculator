import React, { Component } from 'react'
import UserDetails from './UserDetails';
import Result from './Result';

export class UserForm extends Component {
    state = {
        page: 1,
        payRate: [],
        hours: [],
        federal: 0.267,
        total: 0,
        deductions: 0,
        net: 0,
        weeks: []
    }

    nextPage = () => {
      const { page } = this.state;
      this.setState({
        page: page + 1  
      });  
    }

    prevPage = () => {
        const { page } = this.state;
        this.setState({
            page: page - 1
        });
    }

    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    }

    grossTotal = () => {
        const { payRate, hours, federal, weeks} = this.state;
        this.setState({
            total: payRate * hours * weeks
        });
        this.setState((prevState) => ({
            deductions: prevState.total * federal
        }));
        this.setState((prevState) => ({
            net: prevState.total - prevState.deductions
        }));
    }

    handlePayCycle = (e) => {

    }

    render() {
        const { page } = this.state;
        const { payRate, hours, total, deductions, federal, net, weeks } = this.state;
        const values = { page, payRate, hours, total, deductions, federal, net, weeks };

        switch(page) {
            case 1:
                return (
                    <UserDetails 
                        nextPage={this.nextPage}
                        prevPage={this.prevPage}
                        handleChange={this.handleChange}
                        grossTotal={this.grossTotal}
                        values={values}
                    />
                )
            case 2: 
                return (
                    <Result 
                        values={values}
                        prevPage={this.prevPage}
                    />
                )
            default:
                alert('404 PAGE NOT FOUND')
        }
    }
}

export default UserForm
