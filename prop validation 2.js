import React from "react";
import PropTypes from "prop-types";

class Car extends React.Component{
    render(){
        const tableStyle = {
            border: '1px solid black',
            borderCollapse: 'collapse',
            width: '100%',
            fontFamily: 'Arial, sans-serif',
            color: '#333',
            backgroundColor: '#f8f9fa',
            padding: '8px',
        };

        const thStyle = {
            borderBottom: '2px solid #333',
            backgroundColor: '#007bff',
            color: '#fff',
            padding: '12px',
        };

        const tdStyle = {
            borderBottom: '1px solid #ccc',
            padding: '8px',
        };
        return(
            <div>
                <h1>Reactjs props Validation example</h1>
                <table style={tableStyle}>
                    <tr style={thStyle}>
                        <th>Type</th>
                        <th>value</th>
                        <th>valid</th>
                    </tr>

                    <tr style={tdStyle}>
                        <td>Array</td>
                        <td>{this.props.propArray}</td>
                        <td>{this.props.propArray ? "true": "False"}</td>
                    </tr>


                    <tr style={tdStyle}>
                        <td>Boolean</td>
                       <td>{this.props.propsFunc(5)}</td>
                       <td>{this.props.propsFunc(5) ? "true" : "False"}</td>
                    </tr>

                    <tr style={tdStyle}>
                        <td>String</td>
                        <td>{this.props.propsString}</td>
                        <td>{this.props.propString ? "true" : "False"} </td>
                    </tr>

                    <tr style={tdStyle}>
                        <td>Number</td>
                        <td>{this.props.propNumber}</td>
                        <td>{this.props.propNumber ? "true" : "False"} </td>
                    </tr>
                </table>
            </div>
        );
    }
}

Car.propTypes = {
    propArray: PropTypes.array.isRequired,
    propBool: PropTypes.bool.isRequired,
    propsFunc: PropTypes.func,
    propsString: PropTypes.string,
    propNumber: PropTypes.number,
};

Car.defaultProps = {
    propArray: [1,2,3,4,5],
    propBool: false,
    propsFunc: () => {},
    propsString: "mahesh",
    propNumber: 0,
};
export default Car;