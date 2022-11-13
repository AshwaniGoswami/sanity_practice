import React from "react";
import { Link } from "react-router-dom";

const Page1 = () => {
  return (
    <div className="bg-white">
      <header className="flex justify-center items-start content-center md:flex md:flex-row">
        <section className="mx-28 md:mx-18 ">
          <nav className=" p-4">
            <ul className="mx-10 flex flex-wrap  md:-mx-10 lg:justify-items-center gap-12 md:gap-8">
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

              <li className="cursor-pointer active-menu font-bold">Features</li>
              <li className="cursor-pointer active-menu font-bold"><Link to="/pricing">Pricing</Link></li>
            </ul>
          </nav>

          <div className="mt-20 ml-5 p-8 md:-mx-12 md:mt-6">
            <h1 className="font-bold text-purple-900 text-4xl md:text-3xl lg:text-6xl">
              Post when your audience is most active.
            </h1>
            <p className="text-lg py-4 md:text-lg">
              With TImeNow, automatically schedule your posts on Twitter,
              Linkedin, and Instagram to post when your followers are most
              active.
            </p>
            <div className="flex space-x-10 md:flex-col">
              <button
                type="button"
                className=" text-white font-bold  px-4 py-2 bg-indigo-900 inline-block rounded-md tracking-normal shadow-xl"
              >
                Start Scheduling
              </button>
              <button className="md:mt-6">View Demo</button>
            </div>
            <div className="my-6 flex">
              <svg
                width="18"
                height="24"
                viewBox="0 0 18 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 0C5.629 2.866 3.516 3 0 3V14.535C0 19.138 3.203 20.339 9 24C14.797 20.339 18 19.138 18 14.535V3C14.484 3 12.371 2.866 9 0ZM8.452 15L5 11.638L6.237 10.399L8.452 12.522L12.834 8.047L14.072 9.285L8.452 15Z"
                  fill="#049372"
                />
              </svg>
              <div className="px-2 text-gray-600 text-lg flex flex-col md:flex-row">
                TimeNow does not sell your data.
                <div className="font-bold hover:underline hover:cursor-pointer">
                  Learn More
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-cyan-400   ">
          <div className="flex justify-end mx-20">
            <button className="my-5 px-4 py-2 bg-indigo-900 text-white inline-block rounded-lg shadow-lg font-bold tracking-wider ">
              Start Scheduling
            </button>
          </div>
          <div className="flex justify-center py-10">
            <img
              src={require("../images/Mockup.png")}
              alt="mok"
              className="w-[82%]"
            />
          </div>
        </section>
      </header>

      <div>
        <section className="lg:flex my-10 mx-24 py-10 lg:gap-12 md:flex-none md:mx-12 ">
          <div className="px-18 py-4 md:flex md:-px-4 ">
            <h1 className="font-bold text-purple-900 text-4xl md:text-2xl ">
              TimeNow is used by the most influential people
            </h1>
            <div className="flex space-x-8 py-4 md:py-2 md:space-x-3 md:flex md:flex-wrap">
              <img
                src={require("../images/UA1.png")}
                alt="ua1"
                className="pt-2 h-16"
              />
              <img
                src={require("../images/UA2.png")}
                alt="ua2"
                className="pt-2 h-16"
              />
              <img
                src={require("../images/UA3.png")}
                alt="ua3"
                className="pt-2 h-16"
              />
              <img
                src={require("../images/UA4.png")}
                alt="ua4"
                className="pt-2 h-16"
              />
              <img
                src={require("../images/UA5.png")}
                alt="ua5"
                className="pt-2 h-16"
              />
              <img
                src={require("../images/UA6.png")}
                alt="ua6"
                className="pt-2 h-16"
              />
              <img
                src={require("../images/UA7.png")}
                alt="ua7"
                className="pt-2 h-16"
              />
            </div>
          </div>
          <div className="py-4 pl-16 md:pl-2">
            <p className="text-gray-600 text-2xl md:text-lg ">
              The most influential people on Facebook, Twitter, and Instagram
              are using TweetNow to schedule posts when their followers are most
              active.
              <br />
              <br />
              They generally receive 23% more engagement than people who do not.
            </p>
          </div>
        </section>
        <section className="flex bg-cyan-200 gap-2 md:flex-row">
          <div className="mx-6 px-4 mt-4 w-[45%] md:w-full">
            <div className="py-4 text-blue-600 font-bold">
              Unified Dashboard
            </div>
            <div>
              <h1 className="text-emerald-800 font-bold text-5xl">
                Customizable dashboard for all platforms
              </h1>
              <p className="py-4 text-lg text-gray-500">
                use Twitter and Instagram but not Linkedin? You can customize
                your dashboard to your liking. You can even schedule the same
                post to individual platforms instead of all platforms.
              </p>
              <button className="my-5 px-4 py-2 bg-indigo-900 text-white inline-block rounded-lg shadow-lg font-bold tracking-wider ">
                Start Scheduling
              </button>
            </div>
          </div>

          <div className="mx-6 mt-4 pl-4 md:w-full">
            <div className="py-4 text-blue-600 font-bold">
              Enhanced Analytics
            </div>
            <div className="">
              <h1 className="text-emerald-800 font-bold text-5xl w-2/3">
                Real-time data that tells you everything.
              </h1>
              <p className="py-4 text-lg text-gray-500 w-2/3">
                Get detailed reports of what's working and what ins't Engagement
                rates,impressions,views, and much more data is available to you
                through our in-depth dashboard tool.
              </p>
              <br />
              <br />
              <div className="text-xl font-bold md:pb-8">View Live Demo &rarr;</div>
            </div>
          </div>
        </section>
      </div>

      <footer className="">
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
        <div className="grid grid-cols-2 md:grid-cols-2 px-8">
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
    </div>
  );
};

export default Page1;
