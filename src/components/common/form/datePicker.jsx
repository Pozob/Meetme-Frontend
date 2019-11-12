import React, { Component } from "react";
import M from "materialize-css";
import moment from "moment";

class Datepicker extends Component {
    componentDidMount() {
        const selectedDate = this.props.value ? moment(this.props.value).toDate() : null;
        const options = {
            i18n: {
                cancel: "Abbrechen",
                done: "OK",
                clear: "Löschen",
                months: ["Januar", "Februar", "März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],
                monthsShort: ["Jan","Feb","Mrz","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],
                weekdays: ["Sonntag", "Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],
                weekdaysShort: ["So","Mo","Di","Mi","Do","Fr","Sa"],
                weekdaysAbbrev: ["So","Mo","Di","Mi","Do","Fr","Sa"]
            },
            showClearBtn: true,
            onClose: () => {
                const date = this.datepicker.M_Datepicker.date;
                if(date === null) return;
                this.props.onChange(this.datepicker, date);
            },
            autoClose: true,
            format: "dd.mm.yyyy",
            disableWeekends: true,
            firstDay: 1,
            minDate: moment().add(1, "days").toDate(),
            defaultDate: selectedDate,
            setDefaultDate: true
        };
        M.Datepicker.init(this.datepicker, options);
    }
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        const instance = M.Datepicker.getInstance(this.datepicker);
        instance.setDate(this.props.value);
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