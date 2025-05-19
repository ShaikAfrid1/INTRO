import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";

const Create = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  let submitHandler = (data) => {
    data.isCompleted = false;
    data.id = nanoid();

    let copytodos = [...todos];
    copytodos.push(data);
    settodos(copytodos);
    reset();
  };

  return (
    <div className=" w-[60%] p-10 ">
      <h1 className="mb-10 text-6xl font-thin ">
        Set <span className="text-red-400">Remainders</span> for <br /> Tasks!
      </h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <input
          {...register("title", { required: "title can not be empty" })}
          className=" p-2 border-b w-full text-2xl font-thin outline-0"
          type="text"
          placeholder="Title"
        />
        <small className="font-thin text-red-400">
          {errors?.title?.message}
        </small>
        <br /> <br />
        <button className="mt-10 text-xl px-10 py-2 border rounded hover:bg-gray-700 cursor-pointer active:-scale-x-90 ">
          Create Todo
        </button>
      </form>
    </div>
  );
};

export default Create;
