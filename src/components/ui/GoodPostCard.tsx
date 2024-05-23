import { Link } from "react-router-dom";

type TCardProps = {
  id: string;
  img: string;
  title: string;
  category: string;
  amount: number;
};

const GoodPostCard = ({ id, title, category, amount, img }: TCardProps) => {
  return (
    <div className="card card-compact max-w-96 w-full bg-base-100 shadow-sm rounded-md">
      <figure className="h-48 w-full overflow-hidden">
        <img src={img} className="w-full h-full object-cover" alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{title}</h2>
        <p className="text-lg">Category: {category}</p>
        <p className="text-lg">Amount: {amount}</p>
        <div className="card-actions justify-end">
          <Link to={`/relief-goods/${id}`} className="primary-btn">
            View Detail
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GoodPostCard;
