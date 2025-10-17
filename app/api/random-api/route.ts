// import { createClient } from "@/lib/supabase/server";
// import { rankings } from "@/rankings";
// import { Database } from "@/lib/database.types";

// type WCEntry = Database["public"]["Tables"]["wc_entry"]["Row"];

// export async function GET() {
//   const supabase = await createClient();

//   const { data: oldData, error } = await supabase
//     .from("wc_entry")
//     .select("*")
//     .order("id", { ascending: true });

//   if (error) {
//     return new Response(JSON.stringify({ error: error.message }), {
//       status: 500,
//     });
//   }

//   for (const entry of oldData) {
//     const ranking = rankings.find(
//       (country) => country.rankingItem.countryCode === entry.country_code
//     );
//     if (ranking) {
//       const rank = ranking.rankingItem.rank;
//       const { error } = await supabase
//         .from("wc_entry")
//         .update({ rank, data_as_of: new Date().toISOString(),  })
//         .eq("country_code", entry.country_code);

//       if (error) {
//         return new Response(JSON.stringify({ error: error.message }), {
//           status: 500,
//         });
//       }
//     }
//   }

//   const { data, error: newError } = await supabase
//     .from("wc_entry")
//     .select("*")
//     .order("id", { ascending: true });

//   if (newError) {
//     return new Response(JSON.stringify({ error: newError.message }), {
//       status: 500,
//     });
//   }

//   return new Response(JSON.stringify(data), { status: 200 });
// }

export async function GET() {
  return new Response(
    JSON.stringify({ message: "This endpoint is currently disabled." }),
    { status: 200 }
  );
}
