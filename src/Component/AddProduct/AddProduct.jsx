import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
const image_hosting_key = import.meta.env.VITE_IMAGEHOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddProduct = () => {
  const {
    register,
    handleSubmit } = useForm();

    const onSubmit = async(data) => {
      console.log(data)
      //upload image to imgbb and then get image url
      const imageFile = {image : data.image[0]}
      const res = await axios.post(image_hosting_api, imageFile, {
          headers:{
              'content-type' : 'multipart/form-data'
          }
      });
      console.log(res.data);
      if(res.data.success){
          const menuItem = {
               name : data.name,
               category : data.category,
              price : parseFloat(data.price),
              email : data.email, 
              image : res.data.data.display_url
          }
          //
          const menuResponse = await axios.post('http://localhost:5000/addPost', menuItem);
          console.log(menuResponse);
          if(menuResponse.data.insertedId){
              //show pop up
              toast.success('Recipe uploaded successfully completed.')
          }
          else{
              toast.error('failed')
          }
      }
  };

  /*   fetch('http://localhost:5000/addProducts', {
      method:"POST",
      headers:{
        "Content-type": "application/json"
      },
      body:JSON.stringify(postProducts)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId > 0){
        alert('add successfully done')
      }
    }) 
  /*   axios.post('http://localhost:5000/addProducts',postProducts)
    .then(res => {
      console.log(res.data);
      alert(`added successfully ${title}`)
    }) */

  return (
    <div className="  mx-auto max-w-7xl">
      <section className="p-6 dark:bg-gray-800 dark:text-gray-50 w-full mx-auto ">
        <div className="space-y-2 text-center ">
          <h1>Add Your Product</h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="container flex flex-col mx-auto space-y-12  "
        >
          <fieldset className="grid grid-cols-4  gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 ">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="name" className="text-sm">
                  Your name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder=" name"
                  {...register("name")}
                  className="w-full border p-2  rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
                <input
                  id="email"
                  type="text"
                  name="email"
                  placeholder="Email"
                  {...register("email")}
                  className="w-full border p-2  rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label htmlFor="title" className="text-sm">
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  placeholder="Title"
                  name="title"
                  {...register("title")}
                  className="w-full border p-2  rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="price" className="text-sm">
                  Price
                </label>
                <input
                  id="price"
                  type="text"
                  placeholder="Price"
                  name="price"
                  {...register("price")}
                  className="w-full border p-2  rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="details" className="text-sm">
                  Details
                </label>
                <input
                  id="details"
                  type="text"
                  placeholder="Details"
                  name="details"
                  {...register("details")}
                  className="w-full border p-2  rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="division" className="text-sm">
                  Division
                </label>
                <input
                  id="division"
                  type="text"
                  name="division"
                  placeholder="division"
                  {...register("division")}
                  className="w-full border p-2  rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                 <label htmlFor="category" className="text-sm mr-2">
                    Category
                  </label>
                  <select className="select w-full max-w-xs " value="value" name="category"  {...register("category")}>
                    {/*  {
                    categories?.map(cat =><option 
                      defaultValue={cat.category}
                      key={cat._id}
                    >{cat.category}</option> )
                  }
                   */}
                   <option value="laptop">Laptop</option>
                   <option value="mobile">Mobile</option>
                  </select>
              </div>
              {/* photo upload */}
              <div className="w-2/3 sm:col-span-3">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-12 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div className="flex gap-2 items-center justify-center pt-2 pb-2 ">
                      <svg
                        className="w-8 h-8 mb-2 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      
                    </div>
                    <input
                      id="dropzone-file"
                      name="image"
                      {...register("image")}
                      type="file"
                      className="hidden"
                    />
                  </label>
                </div>
                {/* photo upload */}
            </div>
          </fieldset>
          <input
            type="submit"
            value="Post your Product"
            className="btn bg-sky-500 w-min mx-auto"
          />
        </form>
      </section>
    </div>
  );
};

export default AddProduct;
