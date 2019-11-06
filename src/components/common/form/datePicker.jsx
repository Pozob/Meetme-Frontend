import React, { Component } from "react";
import M from "materialize-css";
import moment from "moment";

class Datepicker extends Component {
    componentDidMount() {
        const options = {
            i18n: {
                cancel: "Abbrechen",
                done: "OK",
                months: ["Januar", "Februar", "März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],
                monthsShort: ["Jan","Feb","Mrz","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],
                weekdays: ["Sonntag", "Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],
                weekdaysShort: ["So","Mo","Di","Mi","Do","Fr","Sa"],
                weekdaysAbbrev: ["So","Mo","Di","Mi","Do","Fr","Sa"]
            },
            onSelect: date => this.props.onDateChange(this.datepicker, moment.parseZone(date).format("DD.MM.YYYY")),
            autoClose: true,
            disableWeekends: true,
            format: "dd.mm.yyyy",
            firstDay: 1
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
                <input name={name} type="text" id={name} className={"datepicker"} ref={datepicker => this.datepicker = datepicker} {...rest} />
                <label htmlFor={name}>{label}</label>
            </div>
            );
    }
}

export default Datepicker;