import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <div className="row mb1 mt1">
        <div className="col-md-6">
          <h4><i className="fa fa-caret-right fa-fw"></i>{this.props.header}</h4>
          <hr />
        </div>
        <div className="col-md-6 text-right">
          <p className="text-muted mt1">{this.props.info}</p>
        </div>
      </div>
    );
  }
});
