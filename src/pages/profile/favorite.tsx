import AccountMenu from "../../components/account/AccountMenu";
import FavoriteHotelListItem from "../../components/hotel/FavoriteHotelListItem";
import Pagination from "../../components/Pagination";

function MySaved() {
  const list = [1, 2, 3];

  return (
    <div>
      <div className="bg-primary">
        <div className="container">
          <div className="py-4 py-lg-5">
            <h1 className="text-light text-center text-lg-start">My Saved</h1>
          </div>
        </div>
      </div>

      <div className="container py-4">
        <div className="row g-4">
          <div className="col-lg-4 col-xl-3">
            <AccountMenu />
          </div>
          <div className="col-lg-8 col-xl-9 gap-3">
            <div className="row row-cols-1 g-3">
              {list.map((i) => (
                <div className="col" key={i}>
                  <FavoriteHotelListItem />
                </div>
              ))}
            </div>
            <div className="d-flex justify-content-end pt-3">
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MySaved;
