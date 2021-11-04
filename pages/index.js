import Head from "next/head";

export default function Home() {
  const menus = ["Conference", "Tickets", "Contact"];
  return (
    <div class=" w-full min-h-screen container mx-auto bg-orange-300 p-5 ">
      <nav class="flex items-center flex-row justify-between py-8 mb-10">
        <div class="flex flex-row">
          <div class="bg-gradient-to-r from-purple-600 to-red-600 w-10 h-10 rounded-full"></div>
          <h1 class="text-3xl text-gray-600 ml-3">Logo</h1>
        </div>
        <ul class="flex items-center space-x-2">
          <li>
            <a href="#" class="text-gray-600 hover:bg-gray-50 p-4">
              Conference
            </a>
          </li>
          <li>
            <a href="#" class="text-gray-600 hover:bg-gray-50 p-4">
              Tickets
            </a>
          </li>
          <li>
            <a href="#" class="text-gray-600 hover:bg-gray-50 p-4">
              Contact
            </a>
          </li>
        </ul>
        <div>
          <a href="#" class="text-gray-600 hover:bg-gray-50 p-4">
            Login
          </a>
          <a
            href="#"
            class="bg-gray-900 text-gray-50 hover:bg-gray-600 p-3 px-5 rounded-sm"
          >
            Register
          </a>
        </div>
      </nav>

      <main class="flex flex-row mt-20 mb-50">
        <div class="w-2/5 flex flex-col justify-center p-4">
          <div class="flex flex-row items-center mb-6">
            <div class="bg-gray-900 h-1 w-14 mr-4"></div>
            <h2 class="text-2xl text-gray-500"> Office Space</h2>
          </div>
          <h2 class="font-serif text-5xl text-gray-600 mb-8">
            The New Way to Discover
          </h2>
          <p class="text-xl text-gray-600 tracking-wide mb-8">
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
      </main>
      <footer class="flex flex-row justify-between mx-auto items-center mt-60 p-16">
        <div class="flex flex-row w-3/5 items-center">
          <div class="bg-black w-16 h-16 rounded-full mr-5"></div>
          <div>
            <p class="text-xl text-bold mt-2">Question ?</p>
            <p class="text-xl font-bold ">Talk to Our Experts</p>
          </div>
        </div>
        <div>
          <p class="text-xl font-bold tracking-wide">
            Facebook / LinkedIn / Instagram
          </p>
        </div>
      </footer>
    </div>
  );
}
