const Footer = () => {
    return (
      <footer style={styles.footer}>
        <p>Study Purposes</p>
        <p>Made by Gustavo Inacio with OMDB</p>
      </footer>
    );
  }
  
  const styles = {
    footer: {
      backgroundColor: '#333',
      color: '#fff',
      textAlign: 'center',
      padding: '20px 0',
      bottom: 0,
      width: '100%',
    },
  };
  
  export default Footer;