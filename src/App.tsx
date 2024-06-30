import React from "react";
import userPhoto from "./assets/images/user-photo.jpg";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-green-100">
      <div className="overflow-hidden mx-auto max-w-4xl bg-white rounded-xl shadow-md md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="object-cover w-full h-48 md:w-48"
              src={userPhoto}
              alt="Zac Patrick"
            />
          </div>
          <div className="p-8">
            <div className="text-sm font-semibold tracking-wide text-green-500 uppercase">
              ZAC PATRICK
            </div>
            <p className="block mt-1 text-lg font-medium leading-tight text-black">
              Front-end Developer • San Francisco
            </p>
            <p className="mt-2 text-gray-500">
              High accomplishment and user-focused Front-end Developer adept in
              collaborating with UX and design teams to plan the technical
              writing and execution of functional specifications for websites
              and applications.
            </p>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-700">
                Working with technologies:
              </h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>GraphQL</li>
              </ul>
            </div>
            <div className="mt-6">
              <p className="text-gray-700">
                <strong>Email:</strong> zac.patrick@mail.com
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> (+33) 6 32 43 1290
              </p>
            </div>
            <div className="flex mt-4 space-x-4">
              <a
                href="https://github.com/zacpatrick"
                className="text-gray-600 hover:text-gray-900"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {/* GitHub icon SVG path */}
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/zacpatrick"
                className="text-gray-600 hover:text-gray-900"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {/* LinkedIn icon SVG path */}
                </svg>
              </a>
              <a
                href="https://twitter.com/zacpatrick"
                className="text-gray-600 hover:text-gray-900"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {/* Twitter icon SVG path */}
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
