import React, { Component } from "react";
import M from "materialize-css";

class Timepicker extends Component {
    componentDidMount() {
        const options = {
            twelveHour: false,
            i18n: {
                cancel: "Abbrechen",
                done: "OK"
            }
        };
        M.Timepicker.init(this.timepicker, options)
    }
    
    getClasses = (s) => {
        let className = "input-field ";
        className += s ? `col ${s}` : "";
        return className;
    };
    
    render() {
        const {name, label, s, error, ...rest} = this.props;
        return (
            <div className={this.getClasses(s)}>
                <input ref={timepicker => this.timepicker = timepicker} name={name} id={name} {...rest} />
                <label htmlFor={name}>{label}</label>
            </div>
        );
    }
}

export default Timepicker;