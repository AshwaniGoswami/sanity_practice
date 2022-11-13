import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <>
      <header className="flex justify-between mx-6 px-12 items-center  md:flex md:flex-row">
        <section className="grid grid-cols-2">
          <div className="float-left">
            <nav className=" p-4  items-start justify-around flex">
              <ul className="mx-10 flex   md:-mx-10  gap-12 md:gap-8">
                <svg
                  width="24"
                  height="22"
                  viewBox="0 0 24 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.009 12.3886C16.238 14.7966 13.61 17.1716 10.65 16.7846C9.849 17.9036 8.955 19.4666 7.962 21.2806L5.666 22.0006C7.609 18.2106 10.203 14.0196 12.986 10.8346C11.781 11.6196 9.801 13.3076 8.078 15.0876C6.524 11.8416 8.163 8.83461 10.536 6.53961C10.469 7.62061 10.949 8.60761 11.308 9.11461C11.246 8.21061 11.352 6.59461 12.012 5.19461C13.335 4.07861 14.504 3.27461 15.841 2.57261C15.624 3.36361 15.808 4.31161 16.063 4.90361C16.179 4.08361 16.666 2.53561 17.23 1.89361C18.897 0.818614 21.365 -0.0423855 24 0.00161449C23.709 1.62461 22.857 4.25961 21.706 5.89461C20.777 6.49161 19.549 6.84061 18.569 7.00961C19.38 7.23761 20.288 7.30262 21.078 7.24462C20.503 8.45162 19.921 9.55561 19.039 10.9106C17.823 11.5896 16.269 11.8886 15.207 11.9456C15.95 12.3346 17.304 12.5626 18.009 12.3886ZM4 21.0006H0V22.0006H4V21.0006Z"
                    fill="#E8704A"
                  />
                </svg>

                <li className="cursor-pointer active-menu font-bold">
                  Features
                </li>
                <li className="cursor-pointer active-menu font-bold">
                  <Link to="/pricing">Pricing</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="absolute right-4 pt-2">
            <button
              type="button"
              className=" text-white font-bold  px-4 py-2 bg-indigo-900  rounded-md tracking-normal shadow-xl"
            >
              Start Scheduling
            </button>
          </div>
        </section>
      </header>
      {/* body */}
      <div className="px-12">
        <div className="text-center py-4">
          <h1 className="text-4xl font-bold">Flexible Plans for Everyone</h1>
          <p className="text-gray-500 py-4 w-full sm:w-3/4 md:w-1/2 mx-auto">
            Our plans are made for everyone. Whether you're just starting out on
            social media, or have been on there for a long time, we have plans
            that's right for you.
          </p>
          <div className="flex justify-center">
            <label htmlFor="" className="text-gray-700 font-bold">Billed MOnthly</label>
            <input type="checkbox" name="" id=""  />
   
            <label htmlFor="" className="block h-6 w-10 rounded-full bg-Blue cursor-pointe text-gray-700 font-bold">Billed Yearly</label>
          </div>
        </div>
        <div className="grid grid-flow-col grid-col-3 gap-4 px-8` ">
          <div className="border mt-2 border-gray-300 p-12 ">
            <div className="">
              <h2 className="font-bold text-2xl">
                $4 <span>/mo</span>
              </h2>
            </div>
            <p>Perfect plan if you're just standing out.</p>
            <div>
              <hr className="my-4 font-light opacity-70 text-gray-900" />
              <span className="flex gap-4 py-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM10.75 17.292L6.25 12.928L8.107 11.07L10.75 13.576L16.393 7.792L18.25 9.649L10.75 17.292Z"
                    fill="#46C487"
                  />
                </svg>
                Linkedin Integration
              </span>

              <span className="flex gap-4 py-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM10.75 17.292L6.25 12.928L8.107 11.07L10.75 13.576L16.393 7.792L18.25 9.649L10.75 17.292Z"
                    fill="#46C487"
                  />
                </svg>
                Twitter Integration
              </span>

              <span className="flex gap-4 py-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM10.75 17.292L6.25 12.928L8.107 11.07L10.75 13.576L16.393 7.792L18.25 9.649L10.75 17.292Z"
                    fill="#46C487"
                  />
                </svg>
                Real-time Analytics
              </span>
              <div className="p-2">
                <button className="p-4 w-full bg-indigo-900 text-white font-semibold rounded">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
          <div className="border mt-2 border-gray-300 p-12 ">
            <div className="">
              <h2 className="font-bold text-2xl">
                $12 <span>/mo</span>
              </h2>
            </div>
            <p>Perfect plan if you're a heavy user of social media.</p>
            <div>
              <hr className="my-4 font-light opacity-70 text-gray-900" />
              <span className="flex gap-4 py-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM10.75 17.292L6.25 12.928L8.107 11.07L10.75 13.576L16.393 7.792L18.25 9.649L10.75 17.292Z"
                    fill="#46C487"
                  />
                </svg>
                Linkedin Integration
              </span>

              <span className="flex gap-4 py-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM10.75 17.292L6.25 12.928L8.107 11.07L10.75 13.576L16.393 7.792L18.25 9.649L10.75 17.292Z"
                    fill="#46C487"
                  />
                </svg>
                Twitter Integration
              </span>

              <span className="flex gap-4 py-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM10.75 17.292L6.25 12.928L8.107 11.07L10.75 13.576L16.393 7.792L18.25 9.649L10.75 17.292Z"
                    fill="#46C487"
                  />
                </svg>
                Instagram Integration
              </span>

              <span className="flex gap-4 py-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM10.75 17.292L6.25 12.928L8.107 11.07L10.75 13.576L16.393 7.792L18.25 9.649L10.75 17.292Z"
                    fill="#46C487"
                  />
                </svg>
                Real-time Analytics
              </span>
              <div className="p-2">
                <button className="p-4 w-full bg-indigo-900 text-white font-semibold rounded">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
          <div className="border mt-2 border-gray-300 p-12">
            <div className="">
              <h2 className="font-bold text-2xl">
                $7 <span>/mo</span>
              </h2>
            </div>
            <p>Perfect plan if you're just starting out.</p>
            <div>
              <hr className="my-4 font-light opacity-70 text-gray-900" />
              <span className="flex gap-4 py-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM10.75 17.292L6.25 12.928L8.107 11.07L10.75 13.576L16.393 7.792L18.25 9.649L10.75 17.292Z"
                    fill="#46C487"
                  />
                </svg>
                Linkedin Integration
              </span>

              <span className="flex gap-4 py-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM10.75 17.292L6.25 12.928L8.107 11.07L10.75 13.576L16.393 7.792L18.25 9.649L10.75 17.292Z"
                    fill="#46C487"
                  />
                </svg>
                Twitter Integration
              </span>
              <div className="p-2">
                <button className="p-4 w-full bg-indigo-900 text-white font-semibold rounded">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <footer className="px-8">
        <div className=" mx-6 my-6">
          <svg
            width="24"
            height="22"
            viewBox="0 0 24 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.009 12.3886C16.238 14.7966 13.61 17.1716 10.65 16.7846C9.849 17.9036 8.955 19.4666 7.962 21.2806L5.666 22.0006C7.609 18.2106 10.203 14.0196 12.986 10.8346C11.781 11.6196 9.801 13.3076 8.078 15.0876C6.524 11.8416 8.163 8.83461 10.536 6.53961C10.469 7.62061 10.949 8.60761 11.308 9.11461C11.246 8.21061 11.352 6.59461 12.012 5.19461C13.335 4.07861 14.504 3.27461 15.841 2.57261C15.624 3.36361 15.808 4.31161 16.063 4.90361C16.179 4.08361 16.666 2.53561 17.23 1.89361C18.897 0.818614 21.365 -0.0423855 24 0.00161449C23.709 1.62461 22.857 4.25961 21.706 5.89461C20.777 6.49161 19.549 6.84061 18.569 7.00961C19.38 7.23761 20.288 7.30262 21.078 7.24462C20.503 8.45162 19.921 9.55561 19.039 10.9106C17.823 11.5896 16.269 11.8886 15.207 11.9456C15.95 12.3346 17.304 12.5626 18.009 12.3886ZM4 21.0006H0V22.0006H4V21.0006Z"
              fill="#E8704A"
            />
          </svg>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 px-8 ">
          <div className="grid grid-cols-3 py-4">
            <div className="grid-rows-3 grid-flow-row  ">
              <div className="my-2 font-bold text-base">Product</div>
              <ul className="space-y-2 text-gray-600">
                <li>Homepage</li>
                <li>Pricing</li>
                <li>Features</li>
              </ul>
            </div>

            <div className="grid-rows-3 grid-flow-row ">
              <div className="my-2 font-bold text-base">Help</div>
              <ul className="space-y-2 text-gray-600">
                <li>Live Chat</li>
                <li>Send Email</li>
                <li>FAQ</li>
              </ul>
            </div>

            <div className="grid-rows-3 grid-flow-row  ">
              <div className="my-2 font-bold text-base">Company</div>
              <ul className="space-y-2 text-gray-600">
                <li>About</li>
                <li>Customers</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
          <div>
            <div class=" mt-2 py-4 font-bold text-base ">Try TweetNow</div>
            <div className="flex flex-row gap-11 ">
              <div className=" border-2 rounded-sm flex justify-end ">
                <input
                  type="email"
                  name=""
                  id="email"
                  placeholder="Email Address"
                  className="focus:outline-none  px-10 "
                />
              </div>
              <div className="px-2">
                <button className="my-5 px-4 py-2 bg-indigo-900 text-white inline-block rounded-lg shadow-lg font-bold tracking-wider ">
                  Start Scheduling
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Pricing;
