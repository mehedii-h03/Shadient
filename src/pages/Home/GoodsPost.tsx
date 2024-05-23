import Container from "../../components/ui/Container";
import GoodPostCard from "../../components/ui/GoodPostCard";
import { useGetSuppliesQuery } from "../../redux/api/api";

type TSupply = {
  _id: string;
  title: string;
  image: string;
  amount: number;
  description: string;
  category: string;
};

const GoodsPost = () => {
  const { data: supplies } = useGetSuppliesQuery("");

  return (
    <section className="mt-16 bg-secondary py-28">
      <Container>
        <div className="mb-20">
          <h3 className="text-3xl text-primary-color font-semibold text-center">
            Relief Good post
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center place-content-center gap-5">
          {supplies?.slice(0, 6).map((supply: TSupply) => (
            <GoodPostCard
              key={supply._id}
              id={supply._id}
              title={supply.title}
              category={supply.category}
              amount={supply.amount}
              img={supply.image}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default GoodsPost;
