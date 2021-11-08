import Head from "next/head";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export default function Home({ events }) {
  console.log("events", events);

  // const transdata = events;
  // console.log(transdata);
  return (
    <div class=" w-full min-h-screen container mx-auto bg-orange-300 p-5 ">
      <nav class="flex items-center flex-row justify-between py-8 mb-10">
        <div class="flex flex-row items-center">
          <div class="bg-black w-12 h-12 rounded-full"></div>
          <h1 class="text-3xl text-gray-600 ml-3 ">Logo</h1>
        </div>
        <ul class="flex items-center space-x-2">
          <li>
            <a class="text-gray-600 text-xl hover:bg-gray-50 p-4" href="#">
              Conference
            </a>
          </li>
          <li>
            <a href="#" class="text-gray-600 text-xl hover:bg-gray-50 p-4">
              Tickets
            </a>
          </li>
          <li>
            <a href="#" class="text-gray-600 text-xl hover:bg-gray-50 p-4">
              Contact
            </a>
          </li>
        </ul>
        <div>
          <a href="#" class="text-gray-600 hover:bg-gray-50 text-xl p-4">
            Login
          </a>
          <a
            href="#"
            class="bg-gray-900 text-gray-50 hover:bg-gray-600 p-3 px-5 text-xl rounded-sm"
          >
            Register
          </a>
        </div>
      </nav>

      <main class="flex flex-col mt-20 mb-50">
        <div class="flex flex-row">
          <div class="w-2/5 flex flex-col justify-center p-4">
            <div class="flex flex-row items-center mb-6">
              <div class="bg-gray-900 h-1 w-14 mr-4"></div>
              <h2 class="text-3xl text-gray-500"> Office Space</h2>
            </div>
            <h2 class="font-sans-serif font-bold text-7xl text-gray-600 mb-8">
              The New <br /> Way to Discover
            </h2>
            <p class="text-2xl text-gray-600 tracking-wide mb-8">
              Booking Company-Wide Savings, Invoicing <br /> And Reporting Docs
            </p>

            <div class="flex flex-row items-center">
              <a
                href="#"
                class=" bg-gray-900 rounded-lg py-4 px-6 text-gray-50 uppercase text-xl tracking-wide self-start my-5"
              >
                Book Demo
              </a>
              <button class=" flex flex-row items-center ml-3 text-xl hover:bg-gray-300 p-2 rounded-lg">
                Our Showreel{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-10 w-10 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="w-3/5">
            <img src="/undraw_moving_re_pipp.svg" class="w-full" />
          </div>
        </div>
        <div class="mx-auto text-6xl mt-40 mb-28">
          <p>Explore Events Around You </p>
        </div>
        <div>
          <section class="text-gray-600 body-font">
            <div class="container px-5 py-20 mx-auto">
              <div class="flex flex-wrap -m-4">
                {events.map((event) => {
                  return (
                    <div class="p-4 md:w-1/3">
                      <div class="h-100 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img
                          class="lg:h-48 md:h-36 w-full object-cover object-center"
                          src={event.photoUrl}
                          alt="blog"
                        />
                        <div class="p-6">
                          <h2 class="tracking-widest text-md title-font font-medium text-gray-400 mb-1">
                            { event.theme }
                          </h2>
                          <h1 class="title-font text-2xl font-medium text-gray-900 mb-3">
                            {event.name}
                          </h1>
                          <p class="text-xl mb-3 truncate">
                            { event.description}
                          </p>
                          <div class="flex items-center flex-wrap ">
                            <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                              Learn More
                              <svg
                                class="w-4 h-4 ml-2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                              </svg>
                            </a>
                            <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                              <svg
                                class="w-4 h-4 mr-1"
                                stroke="currentColor"
                                stroke-width="2"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                viewBox="0 0 24 24"
                              >
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                              </svg>
                              1.2K
                            </span>
                            <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                              <svg
                                class="w-4 h-4 mr-1"
                                stroke="currentColor"
                                stroke-width="2"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                viewBox="0 0 24 24"
                              >
                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                              </svg>
                              6
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* <--footer --> */}
      <footer class="flex flex-row justify-between mx-auto items-center mt-30 p-16">
        <div class="flex flex-row w-3/5 items-center">
          <div class="bg-black w-16 h-16 rounded-full mr-5"></div>
          <div>
            <p class="text-xl font-bold mt-2">Question ?</p>
            <a href="#" class="text-xl font-bold ">
              Talk to Our Experts
            </a>
          </div>
        </div>
        <div>
          <ul class="flex flex-row text-xl font-bold">
            <li class="mr-2">
              <a href="#">Facebook</a>
            </li>
            /
            <li class="mr-2 ml-2">
              <a href="#">LinkedIn</a>
            </li>
            /
            <li class="ml-2">
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://dev.peddlesoft.com/graphql#query=%23%20Welcome%20to%20GraphiQL%0A%23%0A%23%20GraphiQL%20is%20an%20in-browser%20tool%20for%20writing%2C%20validating%2C%20and%0A%23%20testing%20GraphQL%20queries.%0A%23%0A%23%20Type%20queries%20into%20this%20side%20of%20the%20screen%2C%20and%20you%20will%20see%20intelligent%0A%23%20typeaheads%20aware%20of%20the%20current%20GraphQL%20type%20schema%20and%20live%20syntax%20and%0A%23%20validation%20errors%20highlighted%20within%20the%20text.%0A%23%0A%23%20GraphQL%20queries%20typically%20start%20with%20a%20%22%7B%22%20character.%20Lines%20that%20start%0A%23%20with%20a%20%23%20are%20ignored.%0A%23%0A%23%20An%20example%20GraphQL%20query%20might%20look%20like%3A%0A%23%0A%23%20%20%20%20%20%7B%0A%23%20%20%20%20%20%20%20field(arg%3A%20%22value%22)%20%7B%0A%23%20%20%20%20%20%20%20%20%20subField%0A%23%20%20%20%20%20%20%20%7D%0A%23%20%20%20%20%20%7D%0A%23%0A%23%20Keyboard%20shortcuts%3A%0A%23%0A%23%20%20Prettify%20Query%3A%20%20Shift-Ctrl-P%20(or%20press%20the%20prettify%20button%20above)%0A%23%0A%23%20%20%20%20%20Merge%20Query%3A%20%20Shift-Ctrl-M%20(or%20press%20the%20merge%20button%20above)%0A%23%0A%23%20%20%20%20%20%20%20Run%20Query%3A%20%20Ctrl-Enter%20(or%20press%20the%20play%20button%20above)%0A%23%0A%23%20%20%20Auto%20Complete%3A%20%20Ctrl-Space%20(or%20just%20start%20typing)%0A%23%20RootQuery%0A%20%0A%0Aquery%20%7B%0A%20%20events%20%7B%0A%20%20%20%20name%2C%0A%0A%20%20%20%20description%0A%20%20%7D%0A%7D&operationName=Events",
    cache: new InMemoryCache(),
  });

  const data = await client.query({
    query: gql`
      query {
        events {
          name
          venue
          photoUrl
          theme
          startDate
          startTime
          description
        }
      }
    `,
  });
  console.log("data", data);
  return {
    props: {
      events: data.data.events,
    },
  };
}
