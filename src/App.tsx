import React from "react";
import userPhoto from "./assets/images/user-photo.jpg";
import githubIcon from "./assets/icons/github-icon.svg";
import linkedinIcon from "./assets/icons/linkedin-icon.svg";
import twitterIcon from "./assets/icons/twitter-icon.svg";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-green-100">
      <div className="overflow-hidden mx-auto w-1/2 bg-white rounded-xl shadow-md">
        <div className="flex flex-row h-[66vh]">
          <div className="flex flex-col text-white bg-lime-700 grow">
            <div className="relative p-8 mb-8 grow-[3]">
              <div className="absolute bottom-0">
                <dl>
                  <dt className="font-semibold before:mr-2 before:content-email">
                    Email
                  </dt>
                  <dd>zac.patrick@mail.com</dd>
                  <dt className="mt-4 font-semibold before:mr-2 before:content-phone">
                    Phone
                  </dt>
                  <dd>(+33) 6 32 43 1290</dd>
                </dl>
              </div>
            </div>
            <div className="p-8 border-white border-solid grow border-t-[16px]">
              <p className="font-semibold">Find me on</p>
              <div className="flex flex-row gap-4 mt-2">
                <a
                  href="https://github.com/zacpatrick"
                  className="text-gray-600 hover:text-gray-900"
                >
                  <img src={githubIcon} />
                </a>
                <a
                  href="https://linkedin.com/in/zacpatrick"
                  className="text-gray-600 hover:text-gray-900"
                >
                  <img src={linkedinIcon} />
                </a>
                <a
                  href="https://twitter.com/zacpatrick"
                  className="text-gray-600 hover:text-gray-900"
                >
                  <img src={twitterIcon} />
                </a>
              </div>
            </div>
          </div>
          <div className="relative w-[250px]">
            <div className="absolute w-[300px] h-[500px] left-[-70px] top-[40px]">
              <img
                src={userPhoto}
                width={805}
                height={1006}
                className="object-cover w-[300px] h-[500px]"
              />
            </div>
          </div>
          <div className="flex flex-col grow-[3]">aaa</div>
        </div>
      </div>
    </div>
  );
}

export default App;
