import Container from "../../components/ui/Container";
import img1 from "../../assets/gallery/Photos.jpg";
import GalleryCard from "../../components/ui/GalleryCard";
import { useGetGalleryQuery } from "../../redux/api/api";

const Gallery = () => {
  const { data: gallery } = useGetGalleryQuery("");
  console.log(gallery);

  return (
    <section className="h-full my-28">
      <Container className={"grid grid-cols-12 gap-2"}>
        <div className="col-span-12 lg:col-span-5 grid gap-2">
          <div className="p-8 bg-secondary space-y-2 col-span-12 ">
            <div className="p-3 bg-primary bg-opacity-20 rounded-md text-[#2C6700] inline-block">
              <p className="uppercase text-xs font-medium">Galleries</p>
            </div>
            <h3 className="text-3xl text-primary-color font-semibold">
              By you its happened
            </h3>
            <p className="text-sm">
              Lorem Ipsum is simply dummy text of the printin typesetting dummy
              text ever when an unknown printer took a galley of type and
              scrambled a type specimen book.
            </p>
          </div>
          <div className="col-span-12 ">
            <GalleryCard img={img1} />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-7 grid grid-cols-2 gap-2">
          {gallery?.map((image: { _id: string; image: string }, i: number) => (
            <GalleryCard key={i + 1} img={image.image} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Gallery;
