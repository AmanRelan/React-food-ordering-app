import contactUs from "../images/contact-us.png";
const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-center text-3xl p-4 m-4">Contact US</h1>
      <div className="flex">
        <div className="w-6/12">
          <img src={contactUs} alt="contact-us" className="ml-8" />
        </div>
        <div className="w-6/12">
          <form className="border border-black rounded-lg flex flex-col my-8 mx-8">
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
      </div>
    </div>
  );
};

export default Contact;
