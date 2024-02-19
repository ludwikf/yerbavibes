import PostImage from "@/app/components/PostImage";
import { authOptions } from "@/libs/authOptions";
import { TrashIcon } from "@heroicons/react/24/outline";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Favorite() {
  const session = await getServerSession(authOptions);
  async function fetchData() {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_WEB_URL}/api/get-favorite-list`,
        {
          cache: "no-store",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Session: JSON.stringify(session),
          },
        }
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await res.json();
      return Promise.resolve(data);
    } catch (error) {
      return null;
    }
  }
  const deleteFavorite = async (id: any) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_WEB_URL}/api/delete-favorite?id=${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Session: JSON.stringify(session),
          },
        }
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      return window.location.reload();
    } catch (error) {
      return null;
    }
  };
  const data = await fetchData();
  return (
    <>
      {data.map((e: any) => (
        <div
          key={e.productId._id}
          className="flex items-center h-[170px] mb-5 border-b-[1px] pb-5 border-[#ccc]"
        >
          <Link href={"/yerba/productName"} className="min-w-[150px] h-[150px]">
            <PostImage src={`${e.productId.image}`} />
          </Link>
          <div className="flex flex-col justify-between w-[60%] h-[100%] py-1 pl-5">
            <div>
              <Link href={"/yerba/productName"} className="font-bold text-lg">
                {e.productId.title}
              </Link>
              <div>{e.productId.category}</div>
            </div>
            <div>{e.productId.producer}</div>
          </div>
          <div className="flex flex-col items-end h-[100%] pl-5">
            <button className="hover:bg-[#dcd8c5] p-1 rounded-xl">
              <TrashIcon className="w-7" />
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
