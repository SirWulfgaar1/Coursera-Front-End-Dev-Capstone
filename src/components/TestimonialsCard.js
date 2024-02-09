import "./TestimonialsCard.css";

const TestimonialsCard = ({ data }) => {
  return (
    <div className="col-25 col-50 col light">
      <div className="center mt-3">
        <img className="test-img" src={data.picture.large} alt="" />
      </div>
      <h5 className="center my-2">{data.name.first}</h5>
      <p className="pd">&quot; Nam hendrerit elementum orci, sit amet sagittis justo tincidunt at. &quot;</p>
    </div>
  );
};

export default TestimonialsCard;
