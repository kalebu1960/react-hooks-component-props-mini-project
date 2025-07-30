import styles from './Header.module.css';
import PropTypes from 'prop-types'; // For prop type validation

function Header({ name }) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{name}</h1>
      <p className={styles.subtitle}>Welcome to my developer blog</p>
    </header>
  );
}

// Prop type validation
Header.propTypes = {
  name: PropTypes.string.isRequired
};

export default Header;