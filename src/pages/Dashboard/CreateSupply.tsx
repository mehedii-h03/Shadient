import { useForm, SubmitHandler } from "react-hook-form";
import { useAddSupplyMutation } from "../../redux/api/api";
import Swal from "sweetalert2";

type FormValues = {
  image: string;
  category: string;
  title: string;
  imgUrl: string;
  amount: string;
  description: string;
};

const CreateSupply = () => {
  const { register, handleSubmit, reset } = useForm<FormValues>();

  const [addSupply] = useAddSupplyMutation();

  // Onsubmit handler
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const result = await addSupply(data).unwrap();

      if (result.acknowledged) {
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      }
    } catch (error) {
      console.error("something went wrong", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
  };

  return (
    <div className="rounded-lg shadow-lg p-8">
      <h1 className="text-4xl text-center mb-20 font-semibold">
        Create a Supply
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
          />
        </div>
        <div className="mb-4">
          <label htmlFor="imgUrl" className="block font-medium mb-2">
            Image Url
          </label>
          <input
            type="text"
            {...register("imgUrl")}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
            placeholder="Enter image url"
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
  );
};

export default CreateSupply;
