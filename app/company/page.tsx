import { createClient } from "@/utils/supabase/server";
import CompanyCard from "../components/CompanyCard";
import Link from "next/link";

export default async function Company() {
  const supabase = createClient();
  const { data: company } = await supabase.from("company").select();

  return (
    <main>
      <h1 className="text-4xl font-bold text-center mb-8">Companies</h1>
      <div className="text-center w-10 h-6 bg-orange-400">
        <Link href={"/"}>
          <button>Back</button>
        </Link>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="bg-gray-100 min-h-screen p-8">
          {company?.map((company) => (
            <Link href={`/company/${company.id}`} key={company.id}>
              <CompanyCard key={company.id} company={company} />
            </Link>
          ))}{" "}
        </div>
      </div>
    </main>
  );
}
