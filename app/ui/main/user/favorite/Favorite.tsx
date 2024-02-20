import PostImage from "@/app/components/PostImage";
import { authOptions } from "@/libs/authOptions";
import { TrashIcon } from "@heroicons/react/24/outline";
import { getServerSession } from "next-auth";
import Link from "next/link";
import DataFav from "./dataFav";

export default async function Favorite() {
  return (
    <>
      <DataFav />
    </>
  );
}
