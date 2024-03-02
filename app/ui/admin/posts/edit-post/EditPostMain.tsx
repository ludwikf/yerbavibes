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
import { useParams, useRouter } from "next/navigation";

export default function EditPostMain() {
  const [file, setFile] = useState<File | null>(null);
  const [media, setMedia] = useState<string>("");
  const [title, setTitle] = useState("");
  const [producer, setProducer] = useState("");
  const [category, setCategory] = useState("");
  const [strength, setStrength] = useState("");
  const [origin, setOrigin] = useState("");
  const [flavor, setFlavor] = useState("");
  const [tags, setTags] = useState<any[]>([]);
  const [details, setDetails] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { id } = useParams();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const router = useRouter();

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setIsSubmitting(true);

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
    const image =
      media ||
      "https://static-00.iconduck.com/assets.00/no-image-icon-2048x2048-2t5cx953.png";

    try {
      const res = await fetch(`/api/edit-post?id=${id}`, {
        method: "PUT",
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

      if (!res.ok) {
        throw new Error("Error submitting");
      }
      if (res.status === 200) {
        router.push("/admin-cp/yerbas");
      }
    } catch (error) {
      throw new Error("Error submitting");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: any) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  useEffect(() => {
    const fetchPostDetails = async () => {
      if (!id) {
        return router.push("/admin-cp/posts");
      }
      try {
        const response = await fetch(`/api/single-post?id=${id}`);
        if (response.ok) {
          const data = await response.json();
          setTitle(data.title);
          setDetails(data.details);
          setProducer(data.producer);
          setCategory(data.category);
          setStrength(data.strength);
          setOrigin(data.origin);
          setFlavor(data.flavor);
          setTags(data.tags);
          setMedia(data.image);
        }
      } catch (error: any) {
        throw new Error(error);
      }
    };
    fetchPostDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.value = details;
      adjustTextareaHeight();
    }
  }, [details]);
  return (
    <>
      <div className="my-[25px] flex w-screen flex-col justify-start items-center">
        <div className="w-[90%] flex mb-5">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 w-full mt-5 lg:mt-0"
          >
            <input
              defaultValue={title}
              className="bg-inherit text-3xl lg:text-5xl mt-10 placeholder:text-[#999] focus:outline-none"
              type="text"
              placeholder="Title"
              required
            />
            <textarea
              defaultValue={details}
              ref={textareaRef}
              className="bg-inherit text-lg lg:text-2xl placeholder:text-[#999] focus:outline-none resize-none"
              placeholder="Content"
              onInput={adjustTextareaHeight}
              required
            />
            <input
              defaultValue={producer}
              className="bg-inherit text-lg lg:text-2xl placeholder:text-[#999] focus:outline-none resize-none"
              type="text"
              placeholder="Producer"
              required
            />
            <input
              defaultValue={category}
              className="bg-inherit text-lg lg:text-2xl placeholder:text-[#999] focus:outline-none resize-none"
              type="text"
              placeholder="Category"
              required
            />
            <input
              defaultValue={strength}
              className="bg-inherit text-lg lg:text-2xl placeholder:text-[#999] focus:outline-none resize-none"
              type="text"
              placeholder="Strength"
              required
            />
            <input
              defaultValue={origin}
              className="bg-inherit text-lg lg:text-2xl placeholder:text-[#999] focus:outline-none resize-none"
              type="text"
              placeholder="Origin"
              required
            />
            <input
              defaultValue={flavor}
              className="bg-inherit text-lg lg:text-2xl placeholder:text-[#999] focus:outline-none resize-none"
              type="text"
              placeholder="Flavor"
              required
            />
            <input
              defaultValue={tags[0]}
              className="bg-inherit text-lg lg:text-2xl placeholder:text-[#999] focus:outline-none resize-none"
              type="text"
              placeholder="Tag #1"
            />
            <input
              defaultValue={tags[1]}
              className="bg-inherit text-lg lg:text-2xl placeholder:text-[#999] focus:outline-none resize-none"
              type="text"
              placeholder="Tag #2"
            />
            <input
              defaultValue={tags[2]}
              className="bg-inherit text-lg lg:text-2xl placeholder:text-[#999] focus:outline-none resize-none"
              type="text"
              placeholder="Tag #3"
            />
            <div>
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
                  Edit
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
