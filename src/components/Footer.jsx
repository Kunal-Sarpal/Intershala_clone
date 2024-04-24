import React from "react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#333333", color: "#ffffff", minHeight: "60vh" }} className="p-4 mt-[-19px] pt-14">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <h3 className="text-xl underline font-semibold">Internships by Places</h3>
            <ul>
              <li className="mt-4">Internship in India</li>
              <li className="mt-4">Internship in Delhi</li>
              <li className="mt-4">Internship in Bangalore</li>
              <li className="mt-4">Internship in Hyderabad</li>
              <li className="mt-4">Internship in Mumbai</li>
              <li className="mt-4">Internship in Chennai</li>
              <li className="mt-4">Internship in Gurgaon</li>
              <li className="mt-4">Internship in Kolkata</li>
              {/* Additional items can be added here */}
            </ul>
          </div>
          <div>
            <h3 className="text-xl underline font-semibold">Internship by Stream</h3>
            <ul>
              <li className="mt-4">Computer Science Internship</li>
              <li className="mt-4">Electronics Internship</li>
              <li className="mt-4">Mechanical Internship</li>
              <li className="mt-4">Civil Internship</li>
              <li className="mt-4">Marketing Internship</li>
              <li className="mt-4">Chemical Internship</li>
              <li className="mt-4">Finance Internship</li>
              <li className="mt-4">Summer Research Fellowship</li>
              <li className="mt-4">Campus Ambassador Program</li>
              {/* Additional items can be added here */}
            </ul>
          </div>
          <div>
            <h3 className="text-xl underline font-semibold">Jobs by Places</h3>
            <ul>
              <li className="mt-4">Jobs in Delhi</li>
              <li className="mt-4">Jobs in Mumbai</li>
              <li className="mt-4">Jobs in Bangalore</li>
              <li className="mt-4">Jobs in Jaipur</li>
              <li className="mt-4">Jobs in Kolkata</li>
              <li className="mt-4">Jobs in Hyderabad</li>
              <li className="mt-4">Jobs in Pune</li>
              <li className="mt-4">Jobs in Chennai</li>
              <li className="mt-4">Jobs in Lucknow</li>
              {/* <p className="animate-ping opacity-10">Kunal</p> */}
            </ul>
          </div>
          <div>
            <h3 className="text-xl underline font-semibold">Jobs by Stream</h3>
            <ul className="">
              <li className="mt-4">Marketing jobs</li>
              <li className="mt-4">Content writing jobs</li>
              <li className="mt-4">Web development jobs</li>
              <li className="mt-4">Sales jobs</li>
              <li className="mt-4">Finance jobs</li>
              <li className="mt-4">Digital Marketing jobs</li>
              <li className="mt-4">Computer Science jobs</li>
              <li className="mt-4">Graphic Design jobs</li>
              <li className="mt-4">Data Science jobs</li>

            </ul>
          </div>
        </div>
        <div className="text-center mt-24 text-blue-400">
          <p>© Copyright 2024 Internshala</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
