"use client";
import { assets } from "@/Assets/assets";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Page = () => {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Startup",
    author: "kajanthan",
    author_img: "/profile_icon.png",
  });

  /*************  ✨ Windsurf Command ⭐  *************/
  /**
   * Handles change events for input fields and updates the state
   * with the new value.
   * @param {Object} e - The change event object
   */
  /*******  bf2a675c-b84e-4583-a794-a3a49fe90d42  *******/
  const onchangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const onsubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("category", data.category);
      formData.append("author", data.author);
      formData.append("author_img", data.author_img);
      formData.append("image", image);

      const response = await axios.post("/api/blog", formData);

      if (response.data.success) {
        toast.success(response.data.message);
        setImage(false);
        setData({
          title: "",
          description: "",
          category: "Startup",
          author: "kajanthan",
          author_img: "/profile_icon.png",
        });
      } else {
        toast.error(response.data.message || "Something went wrong");
      }
    } catch (err) {
      toast.error(err.message || "Request failed");
    }
  };

  return (
    <form onSubmit={onsubmitHandler} className="pt-5 px-5 sm:pt-12 sm:pl-16">
      <p className="text-xl">Upload Thumbnail</p>
      <label htmlFor="image" className="hover:cursor-pointer">
        {!image ? (
          <Image
            className="mt-4"
            src={assets.upload_area}
            width={140}
            height={70}
            alt=""
          />
        ) : (
          <img
            className="mt-4 w-[140px] h-[70px] object-cover"
            src={URL.createObjectURL(image)}
            alt="preview"
          />
        )}
      </label>
      <input
        onChange={(e) => setImage(e.target.files[0])}
        type="file"
        hidden
        required
        id="image"
      />

      <p className="text-xl mt-4">Blog Title</p>
      <input
        name="title"
        onChange={onchangeHandler}
        value={data.title}
        className="w-full sm:w-[400px] mt-4 py-3 border"
        type="text"
        placeholder="Type Here"
        required
      />

      <p className="text-xl mt-4">Blog Description</p>
      <textarea
        name="description"
        onChange={onchangeHandler}
        value={data.description}
        className="w-full sm:w-[400px] mt-4 py-3 border"
        placeholder="Write content here"
        rows={6}
        required
      />

      <p className="text-xl mt-4">Blog Category</p>
      <select
        name="category"
        onChange={onchangeHandler}
        value={data.category}
        className="w-40 mt-4 px-4 py-3 border text-gray-500"
      >
        <option value="Startup">Startup</option>
        <option value="Technology">Technology</option>
        <option value="Lifestyle">Lifestyle</option>
      </select>

      <br />
      <button type="submit" className="mt-8 w-40 h-12 bg-black text-white">
        ADD
      </button>
    </form>
  );
};

export default Page;
