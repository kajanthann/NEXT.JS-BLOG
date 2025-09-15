"use client";
import SubTableItem from "@/components/AdminComponents/SubTableItem";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const page = () => {
  const [email, setEmail] = useState([]);

  const deleteEmail = async (mongoId) => {
    const response = await axios.delete(`/api/email`,{
      params:{id:mongoId}
    })
    if (response.data.success) {
      toast.success(response.data.message);
      fetchEmail();
    }else{
      toast.error(response.data.message);
    }
  }

  const fetchEmail = async () => {
    const response = await axios.get("/api/email",FormData);
    setEmail(response.data.emails);
  };

  useEffect(() => {
    fetchEmail();
  }, []);

  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
      <h1>All Subscribtions</h1>
      <div className="relative max-w-[600px] h-[80vh] overflow-x-auto mt-4 border border-gray-400">
        <table className="w-full text-sm text-gray-400">
          <thead className="text-xs text-gray-700 text-left uppercase bg-gray-200">
            <tr>
              <th scope="col" className="px-6 py-3">
                Email Subscribtion
              </th>
              <th scope="col" className="px-6 py-3 hidden sm:block">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {email.map((item, index) => {
              return <SubTableItem deleteEmail={deleteEmail} key={index} mongoId={item._id} email={item.email} date={item.date} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
