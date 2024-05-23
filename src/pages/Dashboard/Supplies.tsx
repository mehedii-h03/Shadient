import Swal from "sweetalert2";
import {
  useGetSuppliesQuery,
  useDeleteSupplyMutation,
} from "../../redux/api/api";
import EditSupplies from "./EditSupplies";

type TSupply = {
  _id: string;
  title: string;
  image: string;
  amount: number;
  description?: string;
  category?: string;
};

const Supplies = () => {
  const { data: supplies } = useGetSuppliesQuery("");
  const [deleteSupplyMutation] = useDeleteSupplyMutation();

  const handleDelete = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteSupplyMutation(id);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        } catch (error) {
          Swal.fire({
            title: "Error!",
            text: "There was a problem deleting your file.",
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <div>
      <h1 className="text-4xl text-center mb-10 font-semibold">My Classes </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-base-300 text-base font-medium">
            <tr className="">
              <th>Sl</th>
              <th>Image</th>
              <th>Title</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          {/* Body */}
          <tbody>
            {supplies?.map((supply: TSupply, i: number) => (
              <tr key={supply._id}>
                <td>{i + 1}</td>
                <td className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={supply?.image} alt={supply.title} />
                  </div>
                </td>
                <td>
                  <div className="font-bold">{supply.title}</div>
                </td>
                <td>{supply.category}</td>
                <td>{supply.amount}</td>
                <td className="space-x-2">
                  <button
                    className="btn btn-sm"
                    onClick={() =>
                      (
                        document.getElementById(
                          "my_modal_3"
                        ) as HTMLDialogElement
                      ).showModal()
                    }
                  >
                    Edit
                  </button>
                  <EditSupplies id={supply._id} />
                  <button
                    className="btn btn-sm"
                    onClick={() => handleDelete(supply._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Supplies;
