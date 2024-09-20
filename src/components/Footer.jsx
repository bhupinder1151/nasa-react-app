export default function Footer(props) {
  const { handleToggleModal, apiData } = props;

  return (
    <footer>
      <div className="bg-gradient"></div>
      <div className="footer-data">
        <h2>{apiData['title']}</h2>
        <h1>APOD PROJECT</h1>
      </div>
      <button onClick={handleToggleModal}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
}
