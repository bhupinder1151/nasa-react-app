export default function Sidebar(props) {
  const { handleToggleModal, apiData } = props;

  return (
    <div className="sidebar">
      <div className="sidebar-overlay" onClick={handleToggleModal}></div>
      <div className="sidebar-data">
        <h2>{apiData["title"]}</h2>
        <div>
          <h2>{apiData["date"]}</h2>
          <p>{apiData["explanation"]}</p>
        </div>
        <button onClick={handleToggleModal}>
          <i className="fa-solid fa-right-long"></i>
        </button>
      </div>
    </div>
  );
}
