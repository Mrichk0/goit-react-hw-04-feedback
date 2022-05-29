import PropTypes from 'prop-types';

import styles from './sections.module.css'

const Sections = ({title, children}) => {
  return (  <section className={styles.sections}>
        <div className={styles.container}>
          <h2 className={styles.title}>{title}</h2>
          {children}
        </div>
    </section>)
    
}

Sections.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Sections;