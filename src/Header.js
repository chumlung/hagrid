import React, { PureComponent } from 'react';

import HeaderCell from './HeaderCell';

const DEFAULT_WIDTH = 100;
class Header extends PureComponent {
  componentDidMount() {
    this.addWidth();
  }

  /**
   * Used For scrollbars.
   */
  addWidth() {
    const { setWidth, columns } = this.props;
    const width = columns.reduce((acc, nextColumn) => {
      return acc + (nextColumn.width || DEFAULT_WIDTH);
    }, 0);
    
    setWidth(width);
  }

  render() {
    const { width, columns, responsive } = this.props;
    const styles =  {};

    if(responsive){
      styles.minWidth = width || '1000px';
    }else{
      styles.width = width || '1000px';
    }

    return (
      <div id="rs-header" className="table-head-row" style={ styles }>
        <div className="table-row table-header-group" style={{paddingRight: this.props.ScrollbarWidth}}>
          {columns.map((column, index) => {
            return <HeaderCell key={index} column={column} />;
          })}
        </div>
      </div>
    );
  }
}

export default Header;
