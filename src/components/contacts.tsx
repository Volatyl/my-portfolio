function Contacts() {
  return (
    <div className="relative bg-zinc-200 py-20 text-center">
      <h1 className="text-4xl pb-5 p-5">GET IN TOUCH</h1>
      <div>
        <p className="text-[1.3rem] font-light w-[40vw] mx-auto text-center">
          Whether you have an idea for a project or just want to chat, feel free
          to shoot me an email or text!
        </p>
      </div>
      <div className="p-10 flex flex-wrap justify-center gap-5">
        <a
          href="mailto:kennedymuinde@gmail.com"
          target="blank"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Send Email
        </a>
        <a
          href="https://wa.me/254705790997"
          target="blank"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Send WhatsApp Message
        </a>
      </div>
    </div>
  );
}

export default Contacts;
