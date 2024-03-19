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
      <div>
      <h2 className="bold text-3xl ps-10 pt-6">Feedback Form</h2>
      <form>
        <div className="flex flex-col items-center">
          <label className="block my-6" htmlFor="feedback">Your Feedback:</label>
          <input className="border-2 my-3 w-1/3"  type="text" placeholder="Title" />
          <textarea className="border-2"
            id="feedback"
            name="feedback"
            // value={feedback}
            rows={5}
            cols={50}
            placeholder="Feedback"
            required
          />
        <button className="border-2 mt-4">Submit</button>
        </div>
      </form>
    </div>
    </div>
    
  );
}

export default Feedbacks;
