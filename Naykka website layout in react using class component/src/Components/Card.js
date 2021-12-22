import Button from "../UI/Button";
import "./Card.css";

const Card = () => {
  return (
    <div className="card">
      <div className="card-body">
        <img
          src="https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/n/y/nykdaoj005001_1.jpg"
          alt=""
        ></img>
        <div>DailyObjects Burgundy Faux Leather Fatty Women's Tote Bag</div>
        <div>
          <span className="opacity">MRP:</span>
          <span className="cutoff opacity">₹ 2499</span>
          <span className="price"> ₹ 1999</span>
          <span className="discount">45% Off</span>
        </div>
      </div>
      <div className="card-footer">
        <span className="far fa-heart favorite"></span>

        {/* <button>ADD TO BAG</button> */}
        <span className="btn-container">
          <Button />
        </span>
      </div>
    </div>
  );
};
export default Card;
