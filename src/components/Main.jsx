export default function Main(props){
    const { apiData } = props;

    return (
      <div className="image-container">
        <img src={apiData["hdurl"]} alt={apiData['title'] ? apiData['title']: 'Background image'} className="bg-image" />
      </div>
    );
}