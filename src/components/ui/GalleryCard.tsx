import { ArrowLongRightIcon } from "@heroicons/react/16/solid";

type TGalleryCardProps = {
  img: string;
};

const GalleryCard = ({ img }: TGalleryCardProps) => {
  return (
    <div className="relative max-w-full">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      <img className="w-full h-full object-cover" src={img} alt="" />
      <div className="absolute bottom-6 left-6 text-white">
        <h5 className="text-lg font-semibold">Title</h5>
        <p className="text-sm mt-1">Category</p>
        <button className="text-sm font-semibold flex justify-center items-center gap-1 ghost-btn">
          Know more
          <ArrowLongRightIcon className="w-5" />
        </button>
      </div>
    </div>
  );
};

export default GalleryCard;
