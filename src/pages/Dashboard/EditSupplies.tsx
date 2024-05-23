import { useForm, SubmitHandler } from "react-hook-form";
import {
  useGetSupplyQuery,
  useUpdateSupplyMutation,
} from "../../redux/api/api";
import Swal from "sweetalert2";

type FormValues = {
  image: string;
  category: string;
  title: string;
  amount: string;
  description: string;
};

const EditSupplies = ({ id }: { id: string }) => {
  const { data: supply } = useGetSupplyQuery(id);
  const [updateSupply] = useUpdateSupplyMutation();

  const supplyData = Array.isArray(supply) ? supply[0] : supply;
  const { register, handleSubmit } = useForm<FormValues>();

  // Onsubmit handler
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const updatedFormData = {
      image: data.image || supplyData?.image,
      category: data.category || supplyData?.category,
      title: data.title || supplyData?.title,
      amount: data.amount || supplyData?.amount,
      description: data.description || supplyData?.description,
    };

    const options = {
      id: id,
      data: updatedFormData,
    };

    try {
      await updateSupply(options);
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error("Update failed:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
  };

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box w-11/12 max-w-5xl">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div className="rounded-lg shadow-lg p-8">
          <h1 className="text-4xl text-center mb-20 font-semibold">
            Edit a Supply
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-wrap mb-4">
              <div className="w-full md:w-1/2 md:pr-2">
                <label htmlFor="image" className="block font-medium mb-2">
                  Image
                </label>
                <input
                  type="text"
                  {...register("image")}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
                  placeholder="Enter image address"
                  defaultValue={supplyData?.image}
                />
              </div>
              <div className="w-full md:w-1/2 md:pl-2">
                <label htmlFor="category" className="block font-medium mb-2">
                  Category
                </label>
                <input
                  type="text"
                  {...register("category")}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
                  placeholder="Enter category"
                  defaultValue={supplyData?.category}
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="title" className="block font-medium mb-2">
                Title
              </label>
              <input
                type="text"
                {...register("title")}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="Enter title"
                defaultValue={supplyData?.title}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="amount" className="block font-medium mb-2">
                Amount
              </label>
              <input
                type="text"
                {...register("amount")}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="Enter amount"
                defaultValue={supplyData?.amount}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block font-medium mb-2">
                Description
              </label>
              <input
                type="text"
                {...register("description")}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="Enter description"
                defaultValue={supplyData?.description}
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-wide bg-[#030202] hover:bg-[#241818] text-white"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default EditSupplies;
