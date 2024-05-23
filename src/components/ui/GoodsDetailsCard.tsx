import { DocumentDuplicateIcon, ShareIcon } from "@heroicons/react/16/solid";

const GoodsDetailsCard = () => {
  return (
    <div className="bg-[#F9FAFB] p-8 rounded-sm border flex justify-between mb-4">
      <div>
        <h4 className="text-primary-color text-xl font-semibold">
          Directly Bank transfer
        </h4>
        <div className="flex gap-20 mt-4">
          <div className="text-primary-color space-y-4">
            <h5>Account number</h5>
            <h5>Account number</h5>
            <h5>Account number</h5>
          </div>
          <div className="space-y-4 text-primary-color font-semibold">
            <p>2223330000456987</p>
            <p>Organization</p>
            <p>WRDSBI0BNKPIS</p>
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <div className="bg-white p-2 rounded-full">
          <DocumentDuplicateIcon className="text-primary-color size-5" />
        </div>
        <div className="bg-white p-2 rounded-full">
          <ShareIcon className="text-primary-color size-5" />
        </div>
      </div>
    </div>
  );
};

export default GoodsDetailsCard;
