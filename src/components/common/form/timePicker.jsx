import React, { Component } from "react";
import M from "materialize-css";
import moment from "moment";

class Timepicker extends Component {
    componentDidMount() {
        const options = {
            i18n: {
                cancel: "Abbrechen",
                done: "OK",
                clear: "Löschen"
            },
            showClearBtn: true,
            twelveHour: false,
            onCloseEnd: () => {
                const timepicker = this.timepicker.M_Timepicker;
                if(timepicker.time === undefined) return;
                this.props.onChange(this.timepicker, ...timepicker.time.split(":"));
                this.timepicker.blur();
            },
            minDate: moment().add(1, "days").toDate()
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
                <input type={"text"} ref={timepicker => this.timepicker = timepicker} name={name} id={name} {...rest} />
                <label htmlFor={name}>{label}</label>
            </div>
        );
    }
}

export default Timepicker;