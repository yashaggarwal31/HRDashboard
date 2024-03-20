import React from "react";
import Navbar from "@/components/Navbar";

function Feedbacks() {
  // let feedback: string | number | readonly string[] | undefined;
  // const handleSubmit = (event: { preventDefault: () => void; }) => {
  //   // event.preventDefault();
  //   // Here you can send the feedback data to your backend or perform any other actions
  //   console.log('Feedback submitted:', feedback);
  //   // Optionally, you can clear the feedback field after submission

  // };

  return (
    <div>
      <Navbar />
      <section>
        <div className="container ">
          <div className="w-full px-4 flex flex-wrap">
            <div className="mx-auto text-center max-w-[700px] rounded bg-white px-6 py-10 shadow-three dark:bg-dark sm:p-[60px]">
              <h2 className="text-3xl mb-3 font-bold text-black">
                Feedback form
              </h2>
              <p className="text-sm">We value your feedback!</p>

              <form action="" className="text-start mt-5">
                <input
                  type="text"
                  name="title"
                  placeholder="Enter the title"
                  className="w-full border-2 rounded-md p-2"
                />

                <textarea
                  name="feedback"
                  id="feedback"
                  cols={30}
                  rows={10}
                  className="w-full border-2 rounded-md mt-4 p-2"
                  placeholder="Feedback"
                ></textarea>
                <div className="text-center">
                  <button className="mx-auto px-3 bg-red-600 p-1 rounded-md text-white">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* <h2 className="bold text-3xl ps-10 pt-6">Feedback Form</h2> */}
        </div>
      </section>
    </div>
  );
}

export default Feedbacks;
