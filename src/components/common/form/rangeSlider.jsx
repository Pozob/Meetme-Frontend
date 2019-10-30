import React, {Component} from 'react';
import M from "materialize-css"
class RangeSlider extends Component {
    componentDidMount() {
        M.Range.init(this.slider);
    }
    
    render() {
        const {name, label, valueInLabel, ...rest} = this.props;
        return (
            <p className={"range-field"}>
                <label>{label}</label>
                <input ref={slider => this.slider = slider} name={name} type="range" id={name} {...rest}/>
            </p>
        );
    }
}

export default RangeSlider;