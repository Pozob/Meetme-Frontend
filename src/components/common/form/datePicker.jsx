import React, { Component } from "react";
import M from "materialize-css";

class Datepicker extends Component {
    componentDidMount() {
        const options = {
            // onClose: () => this.props.onChange({currentTarget: this.datepicker})
            autoClose: true
        };
        M.Datepicker.init(this.datepicker, options);
    }
    
    getClasses = (s) => {
        let className = "input-field ";
        className += s ? `col ${s}` : "";
        return className;
    };
    
    render() {
        const {name, label, error, s, ...rest} = this.props;
        return (
            <div className={this.getClasses(s)}>
                <input type="text" id={name} className={"datepicker"} ref={datepicker => this.datepicker = datepicker} {...rest} />
                <label htmlFor={name}>{label}</label>
            </div>
            );
    }
}

export default Datepicker;