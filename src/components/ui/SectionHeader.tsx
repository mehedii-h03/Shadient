type TSectionHeaderProps = {
  title: string;
  subTitle: string;
};

const SectionHeader = ({ title, subTitle }: TSectionHeaderProps) => {
  return (
    <div className="flex flex-col justify-center gap-2">
      <div className="p-3 bg-primary bg-opacity-20 rounded-md text-[#2C6700] inline-block mx-auto">
        <p className="uppercase text-xs font-medium">{subTitle}</p>
      </div>
      <h3 className="text-3xl text-primary-color font-semibold text-center">
        {title}
      </h3>
    </div>
  );
};

export default SectionHeader;
