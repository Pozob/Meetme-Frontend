import React, { Component } from "react";
import M from "materialize-css";

class ChipInput extends Component {
    state = {};
    
    componentDidMount() {
        const data = this.props.value.map(user =>  {
            return {tag: user};
        });
        const options = {
            placeholder: this.props.label,
            secondaryPlaceholder: this.props.secondaryLabel || this.props.label,
            data
        };
        M.Chips.init(this.chip, options);
    };
    
    getClasses = (s) => {
        let className = "chips input-field ";
        className += s ? `col ${s}` : "";
        return className;
    };
    
    render() {
        const {label, s, ...rest} = this.props;
        return (
            <div ref={chip => this.chip = chip} className={this.getClasses(s)} {...rest}>
            </div>
        );
    }
}

export default ChipInput;