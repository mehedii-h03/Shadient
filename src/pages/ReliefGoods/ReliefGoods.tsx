import GoodPostCard from "../../components/ui/GoodPostCard";
import Container from "../../components/ui/Container";
import { useGetSuppliesQuery } from "../../redux/api/api";

type TSupply = {
  _id: string;
  title: string;
  image: string;
  amount: number;
  description: string;
  category: string;
};

const ReliefGoods = () => {
  const { data: supplies } = useGetSuppliesQuery("");

  return (
    <section className="my-10">
      <h1 className="text-center text-4xl font-semibold">All Relief Goods</h1>
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center place-content-center gap-5 mt-10">
        {/* card */}
        {supplies?.map((supply: TSupply) => (
          <GoodPostCard
            key={supply._id}
            id={supply._id}
            title={supply.title}
            category={supply.category}
            amount={supply.amount}
            img={supply.image}
          />
        ))}
      </Container>
    </section>
  );
};

export default ReliefGoods;
