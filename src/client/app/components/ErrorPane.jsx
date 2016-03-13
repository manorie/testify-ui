import React from 'react';

export default React.createClass({
  getInitialState: function() {
    return {hideErrors: false};
  },
  close: function() {
    this.setState({hideErrors: true});
  },
  render: function() {
    var errorLines = this.props.data.map(function(error) {
      return (
        <p key={error.message}>{error.message}</p>
      )
    });
    if (errorLines.length > 0 && !this.state.hideErrors) {
      return (
        <div className="row">
          <div className="col-md-10 col-md-offset-1 text-danger bbottom">
            <div className="col-md-6">
              <h5><i className="fa fa-warning fa-fw mr1"></i>Errors</h5>
            </div>
            <div className="col-md-6 text-right text-muted">
              <p className="mt1"><a href="#" onClick={this.close}>Close</a></p>
            </div>
            <div className="col-md-12"><hr className="mt0"/></div>
            <div className="col-md-12">
              {errorLines}
            </div>
          </div>
        </div>
      );
    }
    return (<div></div>);
  }
});
