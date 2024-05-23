type TGoodsDetailsProps = {
  description: string;
  amount: string;
  category: string;
};

const GoodsDetailsAbout = ({
  description,
  amount,
  category,
}: TGoodsDetailsProps) => {
  return (
    <div>
      <h3 className="text-primary-color text-2xl font-semibold">About</h3>
      <p className="text-primary-color text-base mt-4 mb-1">
        Category: {category}
      </p>
      <p className="text-primary-color text-base mb-2">Amount: {amount}</p>
      <p className="text-[#667085] text-sm mt-3">{description}</p>
      <button className="primary-btn mt-4">Donate Now</button>
    </div>
  );
};

export default GoodsDetailsAbout;
