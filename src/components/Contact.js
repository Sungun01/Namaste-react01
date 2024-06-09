import React from "react";

const Contact = () => {
    return (

    <div>
        <h1 className=" font-bold text-3xl p-4 m-4">Contact Us</h1>
        <form>
            <input type="text" className="border border-black m-2 p-2" placeholder="name" />
            <input type="text" className="border border-black m-2 p-2" placeholder="contact number" />
            <button className="bg-gray-200 border border-black m-2 p-2 rounded-lg">Submit</button>
        </form>
    </div>
    )
};

export default Contact;