const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact US</h1>
      <form className="border border-black flex flex-col w-6/12">
        <input
          type="text"
          className="border border-black p-2 m-2 rounded-lg"
          placeholder="Name"
        ></input>
        <input
          type="text"
          className="border border-black p-2 m-2 rounded-lg"
          placeholder="Message"
        ></input>
        <input
          type="text"
          className="border border-black p-2 m-2 rounded-lg"
          placeholder="Email"
        ></input>
        <button className="border border-black p-2 m-2 bg-green-200 rounded-lg w-3/12">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
