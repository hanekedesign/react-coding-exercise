import "./index.scss";
import SearchBanner from './SearchBanner/index';

const MainPage = () => {
  return (
    <div className="app-container">
      <div className="app-container__content app-container__content--main-page">
        <div className="main-page-content">
          <SearchBanner/>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
