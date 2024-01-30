import NewsletterMain from "@/app/ui/admin/newsletter/NewsletterMain";

export default async function Newsletter() {
  return (
    <main className="flex min-h-screen">
      <div className="my-[25px] flex w-screen lg:h-auto flex-col short:justify-start lg:justify-center items-center">
        <div className="w-[100%] short:w-[100%] lg:w-[90%] short:h-[auto] lg:h-[18%] flex justify-center short:justify-center lg:justify-start mb-[20px] short:mb-[20px] lg:mb-[0px]">
          <div className="flex flex-col items-center short:flex lg:block">
            <h1 className="text-3xl font-bold">Newsletter</h1>
            <p className="text-mainTheme">Send an e-mail to subscribers</p>
          </div>
        </div>
        <div className="w-[90%] h-[84vh] flex flex-col items-center">
          <NewsletterMain />
        </div>
      </div>
    </main>
  );
}
