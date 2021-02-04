import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';


class List extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    children: PropTypes.node,
    src: PropTypes.string,
  };

  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  };

  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} srcText={this.props.src}></Hero>

        <div className={styles.description}>
          {this.props.children}
        </div>
        
        <div className={styles.columns}>
          <Column titles={'Animals'}></Column>
          <Column titles={'Plants'}></Column>
          <Column titles={'Minerals'}></Column>
        </div>
      </section>
    );
  };
};

export default List;
