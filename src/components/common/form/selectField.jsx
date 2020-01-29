import React, { Component } from "react";
import M                    from "materialize-css/dist/js/materialize"

class SelectField extends Component {
    componentDidUpdate(prevProps, prevState, snapshot) {
        M.FormSelect.init(this.select);
    }
    
    getClasses = (s) => {
        let className = "input-field ";
        className += s ? `col ${s}` : "";
        return className;
    };
    
    render() {
        const {name, label, s, selections, error, ...rest} = this.props;
        return (
            <React.Fragment>
                <div className={this.getClasses(s)}>
                    <select ref={selectField => this.select = selectField} name={name} id={name} {...rest}>
                        <option value="">Bitte wählen</option>
                        {selections.map(opt => <option key={opt._id} value={opt._id}>{opt.name}</option>)}
                    </select> <label htmlFor={name}>{label}</label>
                    <span className="helper-text" data-error={error} />
                </div>
            </React.Fragment>
        );
    }
}

export default SelectField;
