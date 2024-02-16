"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NewPostMain() {
  const [file, setFile] = useState<File | null>(null);
  const [media, setMedia] = useState<string>("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const title = e.target[0].value;
    const details = e.target[1].value;
    const producer = e.target[2].value;
    const category = e.target[3].value;
    const strength = e.target[4].value;
    const origin = e.target[5].value;
    const flavor = e.target[6].value;
    const tag1 = e.target[7].value;
    const tag2 = e.target[8].value;
    const tag3 = e.target[9].value;
    let image = media;

    if (!media) {
      image =
        "https://firebasestorage.googleapis.com/v0/b/test-admincp.appspot.com/o/no-image-icon-2048x2048-2t5cx953.png?alt=media&token=91f72576-e73e-4274-90c2-c8f25b0f94de";
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/add-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          details,
          producer,
          category,
          strength,
          origin,
          flavor,
          tag1,
          tag2,
          tag3,
          image,
        }),
      });

      console.log(res);

      if (!res.ok) {
        throw new Error("Error submitting");
      }
      if (res.status === 200) {
        router.push("/admin-cp/yerbas");
      }
    } catch (error: any) {
      console.log(error);
      throw new Error(error);
    } finally {
      setTimeout(() => {
        setIsSubmitting(false);
      }, 2000);
    }
  };

  const handleFileChange = (e: any) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;
    if (selectedFile) {
      setFile(selectedFile);
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
          (error) => {},
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setMedia(downloadURL);
            });
          }
        );
      }
    };
    upload();
  }, [file]);
  return (
    <>
      <div className="my-[25px] flex w-screen flex-col justify-start items-center">
        <div className="w-[90%] flex mb-5">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 w-full mt-5 lg:mt-0"
          >
            <input
              className="bg-inherit text-3xl lg:text-5xl mt-10 placeholder:text-[#999] focus:outline-none"
              type="text"
              placeholder="Title"
              required
            />
            <textarea
              ref={textareaRef}
              className="bg-inherit text-lg lg:text-2xl placeholder:text-[#999] focus:outline-none resize-none"
              placeholder="Details"
              onInput={adjustTextareaHeight}
              required
            />
            <input
              className="bg-inherit text-lg lg:text-2xl placeholder:text-[#999] focus:outline-none resize-none"
              type="text"
              placeholder="Producer"
              required
            />
            <input
              className="bg-inherit text-lg lg:text-2xl placeholder:text-[#999] focus:outline-none resize-none"
              type="text"
              placeholder="Category"
              required
            />
            <input
              className="bg-inherit text-lg lg:text-2xl placeholder:text-[#999] focus:outline-none resize-none"
              type="text"
              placeholder="Strength"
              required
            />
            <input
              className="bg-inherit text-lg lg:text-2xl placeholder:text-[#999] focus:outline-none resize-none"
              type="text"
              placeholder="Origin"
              required
            />
            <input
              className="bg-inherit text-lg lg:text-2xl placeholder:text-[#999] focus:outline-none resize-none"
              type="text"
              placeholder="Flavor"
              required
            />
            <input
              className="bg-inherit text-lg lg:text-2xl placeholder:text-[#999] focus:outline-none resize-none"
              type="text"
              placeholder="Tag #1"
            />
            <input
              className="bg-inherit text-lg lg:text-2xl placeholder:text-[#999] focus:outline-none resize-none"
              type="text"
              placeholder="Tag #2"
            />
            <input
              className="bg-inherit text-lg lg:text-2xl placeholder:text-[#999] focus:outline-none resize-none"
              type="text"
              placeholder="Tag #3"
            />
            <div className="mt-5">
              <input
                type="file"
                id="image"
                onChange={handleFileChange}
                className="hidden"
              />
              <div className="flex">
                <label className="w-[50px] relative" htmlFor="image">
                  <PlusCircleIcon className="w-10 cursor-pointer" />
                </label>
                <button
                  className="bg-white text-black rounded-xl px-3 py-2 hover:brightness-50 transition-all select-none"
                  disabled={isSubmitting}
                  type="submit"
                >
                  Create
                </button>
              </div>
              <div className="select-none my-5 relative w-[200px] h-[110px]">
                {media && (
                  <Image
                    src={media}
                    alt="img"
                    fill
                    priority
                    className="rounded-xl object-cover object-left"
                  />
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
