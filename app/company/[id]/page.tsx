// 'use client'
import React from "react";
import { createClient } from "@/utils/supabase/server";
import CompanyCard from "../../components/CompanyCard";
import Link from "next/link";

// 'use client'
// import { createClient } from "@supabase/supabase-js";

export default async function page({ params }: { params: { id: string } }) {
  const supabase = createClient();
  const { data: company, error } = await supabase
    .from("company")
    .select()
    .eq("id", params.id)
    .single();

  if (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
  return (
    <>
      <div className="text-center w-10 h-6 bg-orange-400">
        <Link href={"/company"}>
          <button>Back</button>
        </Link>
      </div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <CompanyCard company={company} />
      </div>
    </>
  );
}
