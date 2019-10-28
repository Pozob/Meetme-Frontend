import React, { Component } from 'react';
import Joi from 'joi-browser';
import M from "materialize-css";
import InputField from './form/inputField';
import SelectField from './form/selectField';
import Datepicker from "./form/datePicker";
import Timepicker from "./form/timePicker";
import ChipInput from "./form/chipInput";
import Checkbox from "./form/checkbox";


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
    
    componentDidUpdate() {
        M.updateTextFields();
    }
    
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
        return <button type="submit" disabled={this.validate()} className="waves-effect waves-light btn">{label}</button>;
    }
    
    renderSelect(name, label, selections, options) {
        const {data, errors} = this.state;
        return <SelectField name={name} value={data[name]} label={label} selections={selections} {...options} onChange={this.handleChange} error={errors[name]} />;
    }
    
    renderInput(name, label, options) {
        const {data, errors} = this.state;
        return <InputField name={name} value={data[name]} label={label} {...options} onChange={this.handleChange} error={errors[name]} />;
    }
    
    renderDatePicker(name, label, options) {
        const {data, errors} = this.state;
        return <Datepicker name={name} label={label} value={data[name]} onChange={this.handleChange} error={errors[name]} {...options} />
    }
    
    renderTimePicker(name, label, options) {
        const {data, errors} = this.state;
        return <Timepicker name={name} label={label} value={data[name]} onChange={this.handleChange} error={errors[name]} {...options} />
    }
    
    renderChipInput(name, label, options) {
        const {data, errors} = this.state;
        return <ChipInput name={name} label={label} value={data[name]} onChange={this.handleChange} error={errors[name]} {...options} />
    }
    
    renderUserCheckbox(elements, dataField) {
        const selectedUsers = this.state.data[dataField];
        return elements.map(element => {
            const selected = !!selectedUsers.find(selectedUser => selectedUser === element._id);
            return <Checkbox user={element} selected={selected} onChange={(e) => this.handleCheckboxSelect(e, dataField)} />
        });
    }
    
    handleCheckboxSelect = ({currentTarget: checkbox}, dataField) => {
        const data = {...this.state.data};
        const checkboxData =this.state.data[dataField];
        
        const index = checkboxData.findIndex(elem => elem === checkbox.value);
        
        (index !== -1) ? checkboxData.splice(index, 1) : checkboxData.push(checkbox.value);
        
        data[dataField] = checkboxData;
        this.setState({data});
    };
    
    renderLabel = label => <label>{label}</label>;
}

export default Form;

