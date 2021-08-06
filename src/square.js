import React from 'React';


class Square extends React.component {
    render() {
        return (
            <button classname="square">
              {this.props.values}
              </button>
        );
    }
}

export default Square;