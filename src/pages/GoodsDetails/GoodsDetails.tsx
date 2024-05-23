import { useParams } from "react-router-dom";
import Container from "../../components/ui/Container";
import { useGetSupplyQuery } from "../../redux/api/api";
import GoodsDetailsAbout from "./GoodsDetailsAbout";
import GoodsDetailsOtherDonation from "./GoodsDetailsOtherDonation";

const GoodsDetails = () => {
  const { id } = useParams();

  const { data: supply } = useGetSupplyQuery(id);
  const supplyData = Array.isArray(supply) ? supply[0] : supply;
  console.log(supplyData);

  return (
    <section className="my-16">
      <Container>
        <div className="space-y-4">
          <p className="font-semibold text-primary-color">Back</p>
          <h1 className="text-3xl font-semibold text-primary-color">
            {supplyData?.title}
          </h1>
          <div className="bg-[#FEF3F2] text-[#B42318] text-sm font-medium px-3 py-1 inline-block rounded-full">
            <p>Emergency Requirement</p>
          </div>
        </div>
        <div className="border-[4px] border-gray-300 rounded-lg mt-5 mb-3">
          <img
            src={supplyData?.image}
            className="w-full max-h-[450px] rounded-md object-cover"
            alt="Good detail image"
          />
        </div>
        <section className="space-y-10">
          <GoodsDetailsAbout
            category={supplyData?.category}
            amount={supplyData?.amount}
            description={supplyData?.description}
          />
          <GoodsDetailsOtherDonation />
        </section>
      </Container>
    </section>
  );
};

export default GoodsDetails;
