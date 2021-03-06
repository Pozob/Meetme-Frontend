import React, { Component } from 'react';
import moment from "moment";
import Joi from 'joi-browser';
import M from "materialize-css";
import InputField from './form/inputField';
import SelectField from './form/selectField';
import Datepicker from "./form/datePicker";
import Timepicker from "./form/timePicker";
import ChipInput from "./form/chipInput";
import Checkbox from "./form/checkbox";
import RangeSlider from "./form/rangeSlider";


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
    
    handleDatepickerChange = (datepicker, date) => {
        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(datepicker);
        if (errorMessage) errors[datepicker.name] = errorMessage; else delete errors[datepicker.name];
        const data = {...this.state.data};
        data[datepicker.name] = (date && moment(date).format("DD.MM.YYYY")) || "";
        this.setState({data, errors});
    };
    
    handleTimepickerChange = (timepicker, hour, min) => {
        const data = {...this.state.data};
        const errors = {...this.state.errors};
        let time;
        
        // I hour is empty, reset time
        if(hour === "" && min === undefined) {
            time = "";
        } else {
            time = `${hour}:${min}`;
            const errorMessage = this.validateProperty(timepicker);
            if (errorMessage) errors[timepicker.name] = errorMessage; else delete errors[timepicker.name];
        }
        data[timepicker.name] = time;
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
        return <Datepicker name={name} label={label} value={data[name]} onChange={this.handleDatepickerChange} error={errors[name]} {...options} />
    }
    
    renderTimePicker(name, label, options) {
        const {data, errors} = this.state;
        return <Timepicker name={name} label={label} value={data[name]} onChange={this.handleTimepickerChange} error={errors[name]} {...options} />
    }
    
    renderChipInput(name, label, options) {
        const {data, errors} = this.state;
        return <ChipInput name={name} label={label} value={data[name]} onChange={this.handleChange} error={errors[name]} {...options} />
    }
    
    renderRangeSlider(name, label, min, max) {
        const {data} = this.state;
        return <RangeSlider name={name} label={label} min={min} max={max} value={data[name]} onChange={this.handleChange} />;
    }
    
    renderUserCheckbox(elements, dataField) {
        const selectedUsers = this.state.data[dataField];
        return (
            <div className="row">
                {elements.map(element => {
                const selected = !!selectedUsers.find(selectedUser => selectedUser === element._id);
                return <Checkbox key={element._id} user={element} selected={selected} onChange={(e) => this.handleCheckboxSelect(e, dataField)} />
            })}
            </div>
        );
    }
    
    handleCheckboxSelect = ({currentTarget: checkbox}, dataField) => {
        const data = {...this.state.data};
        const checkboxData =this.state.data[dataField];
        
        const index = checkboxData.findIndex(elem => elem === checkbox.value);
        
        (index !== -1) ? checkboxData.splice(index, 1) : checkboxData.push(checkbox.value);
        
        data[dataField] = checkboxData;
        this.setState({data});
    };
    
    renderLabel = label => <p><label>{label}</label></p>;
}

export default Form;

