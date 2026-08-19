"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const Dashboard = () => {
    const searchParams = useSearchParams();
  const tab = searchParams.get("tab")||"analytics";
  

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="flex gap-4 mb-6">
        <Link
          href={"/shop/dashboard?tab=analytics"}
          className={
            tab === "analytics"
              ? "font-bold underline text-amber-300"
              : "font-medium text-amber-50"
          }
        >Analytics</Link>
        <Link
          href={"/shop/dashboard?tab=sales"}
          className={
            tab === "sales"
              ? "font-bold underline text-amber-300"
              : "font-medium text-amber-50"
          }
        >Sales</Link>
        <Link
          href={"/shop/dashboard?tab=customers"}
          className={
            tab === "customers"
              ? "font-bold underline text-amber-300"
              : "font-medium text-amber-50"
          }
        >Customers</Link>
      </div>
      <div>
        {tab==="analytics" && (<h2>Showing Analytics data</h2>)}
        {tab==="sales" && (<h2>Showing Sales data</h2>)}
        {tab==="customers" && (<h2>Showing customers data</h2>)}
         
      </div>
    </div>
  );
};

export default Dashboard;
