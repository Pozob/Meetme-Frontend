import React, { Component } from 'react';
import Joi from 'joi-browser';
import InputField from './inputField';
import SelectField from './selectField';


class Form extends Component {
    state = {data: {}, errors: {}};
    
    validate = () => {
        const options = {abortEarly: false};
        const {error} = Joi.validate(this.state.data, this.schema, options);
        if (!error) return null;
        const errors = {};
        for (let item of error.details) errors[item.path[0]] = item.message;
        return errors;
    };
    
    validateProperty = ({name, value}) => {
        const obj = {[name]: value};
        const schema = {[name]: this.schema[name]};
        const {error} = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
    };
    
    handleSubmit = e => {
        e.preventDefault();
        const errors = this.validate();
        this.setState({errors: errors || {}});
        if (errors) return;
        this.submit();
    };
    
    handleChange = ({currentTarget: input}) => {
        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage; else delete errors[input.name];
        const data = {...this.state.data};
        data[input.name] = input.value;
        this.setState({data, errors});
    };
    
    renderSubmitButton(label) {
        return <button disabled={this.validate()} onClick={this.handleSubmit} className="btn btn-primary">{label}</button>;
    }
    
    renderSelect(name, label, selections, options) {
        const {data, errors} = this.state;
        return <SelectField name={name} value={data[name]} label={label} selections={selections} {...options} onChange={this.handleChange} error={errors[name]} />;
    }
    
    renderInput(name, label, options) {
        const {data, errors} = this.state;
        return <InputField name={name} value={data[name]} label={label} {...options} onChange={this.handleChange} error={errors[name]} />;
    }
}

export default Form;

