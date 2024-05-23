import GoodsDetailsCard from "../../components/ui/GoodsDetailsCard";

const GoodsDetailsOtherDonation = () => {
  return (
    <div>
      <h3 className="text-primary-color text-2xl font-semibold mb-6">
        Other donation method
      </h3>
      <GoodsDetailsCard />
      <GoodsDetailsCard />
      <div className="mt-10">
        <h3 className="text-primary-color text-2xl font-semibold mb-6">
          Contact Information
        </h3>
        <GoodsDetailsCard />
      </div>
    </div>
  );
};

export default GoodsDetailsOtherDonation;
