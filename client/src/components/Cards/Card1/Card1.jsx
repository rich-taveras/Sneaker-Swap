import "../Card1/Card1.css"
const Card1 = (prop) => {
  return (
    <>
      <div className="col-12 d-sm-none d-lg-inline col-lg-3 custom-card">
        <img
          src={prop.url}
          className="card-img"
          alt="..."
        />
      </div>
    </>
  );
};
export default Card1;
