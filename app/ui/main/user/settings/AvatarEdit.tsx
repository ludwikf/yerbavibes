"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { app } from "@/utils/firebase";
import { UserCircleIcon, PencilIcon } from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";

export default function AvatarEdit() {
  const [file, setFile] = useState<File | null>(null);
  const [media, setMedia] = useState<string | null>(null);
  const { data: session }: any = useSession();

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;
    setFile(selectedFile);
  };

  const deletePreviousPhoto = async (previousPhotoUrl: string) => {
    const storage = getStorage(app);
    const storageRef = ref(storage, previousPhotoUrl);

    try {
      await deleteObject(storageRef);
      console.log("Previous photo deleted successfully");
    } catch (error) {
      console.error("Error deleting previous photo:", error);
    }
  };

  useEffect(() => {
    const upload = async () => {
      if (file) {
        const storage = getStorage(app);
        const name = new Date().getTime() + file.name;
        const storageRef = ref(storage, name);

        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
            }
          },
          (error) => {
            console.error("Error uploading file:", error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              if (session?.user?.avatar) {
                deletePreviousPhoto(session.user.avatar);
              }
              setMedia(downloadURL);
            });
          }
        );
      }
    };
    upload();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [file]);

  useEffect(() => {
    const updateAvatar = async () => {
      if (media) {
        try {
          const res = await fetch("/api/add-avatar", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              media,
            }),
          });
          if (!res.ok) {
            throw new Error("Failed to update avatar");
          }
          window.location.reload();
        } catch (error) {
          console.error("Error updating avatar:", error);
        }
      }
    };
    updateAvatar();
  }, [media]);

  return (
    <div className="flex items-center">
      <div className="relative text-[#888]">
        {session?.user?.avatar ? (
          <div
            className="relative"
            style={{
              width: "144px",
              height: "144px",
              borderRadius: "50%",
            }}
          >
            <Image
              src={session?.user?.avatar}
              alt="avatar"
              fill
              sizes="100vh"
              className="rounded-full absolute object-cover"
            />
          </div>
        ) : (
          <div className="w-36 h-36 relative rounded-full overflow-hidden">
            <UserCircleIcon className="absolute left-[-10px] inset-0 w-[160px] object-cover" />
          </div>
        )}
        <button className="absolute -bottom-3 left-0 right-0 m-auto w-fit p-[.35rem] rounded-full bg-pageTheme hover:brightness-90 transition border border-gray-600 text-[#000]">
          <input
            type="file"
            id="image"
            onChange={handleFileChange}
            className="hidden"
          />
          <label className="cursor-pointer relative" htmlFor="image">
            <PencilIcon className="w-5" />
          </label>
        </button>
      </div>
    </div>
  );
}
