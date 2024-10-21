"use client";
import Navbar from "./Navbar";
import ContactInfo from "./ContactInfo";
import Image from "next/image";
import Footer from "./Footer";

export default function Services() {
  const clearingAndForwardind = (
    <p>
      We diligently handle custom clearance for the importation of various
      consignments by sea, air and land superbly making us the best logistics
      company to do business with. Our main services in Custom Clearance and
      Forwarding ensures our clients are well advised in the preparation of
      documents, completion of evaluation and examination procedures and
      payments. After the completion of all the required and necessary
      procedures, we deliver the consignments to the client&apos;s desired
      destination. You would not need to worry about dealing with all the hustle
      and bustle involved in a customs clearance process and tedious procedures
      at the ports of Ghana when working with us, because we handle all that for
      our cherished clients.
    </p>
  );

  const transportation = (
    <p>
      At Shield of Faith Logistics, we offer prompt and reliable haulage
      services throughout Ghana. Our experienced and skilled team is dedicated
      to understanding the unique logistics needs of our clients, ensuring
      tailored solutions that align with their business requirements. We
      specialize in the safe and efficient transportation of goods of all kinds,
      providing seamless connections to and from major ports in Ghana. Our
      modern fleet of vehicles and trailers, operated by dedicated and
      experienced drivers, ensures the secure and timely delivery of your cargo.
      Whether you need to transport heavy equipment, raw materials, or finished
      products, our logistics solutions are designed to meet the highest
      standards of efficiency and reliability.
    </p>
  );

  const transitCargo = (
    <p>
      We specialize in providing efficient cargo in transit services for clients
      needing delivery to Ghana&apos;s hinterlands and neighboring landlocked
      countries. Our experienced drivers are well-versed in cross-border
      logistics, ensuring that your cargo is safely transported and delivered to
      your desired destination with ease. Whether it&apos;s agricultural
      products, consumer goods, or industrial materials, our team is equipped to
      handle your freight with the utmost care and professionalism.
    </p>
  );

  const consolidatedCargo = (
    <p>
      we specialize in preparing and consolidating cargo for both import and
      export shipments. Whether you need Full Container Load (FCL) or Less Than
      Container Load (LCL) services, we cater to diverse client needs, ensuring
      flexibility and efficiency in logistics. Our experienced team handles
      cargo consolidation with precision, making it easier to manage shipments
      of various sizes and types. We provide tailored solutions for businesses
      seeking reliable cargo services, optimizing your supply chain with our
      expertise in freight consolidation and transportation.
    </p>
  );

  const warehousing = (
    <p>
      We offer comprehensive warehousing services tailored to meet the needs of
      clients requiring storage for shipping or distribution. Our
      state-of-the-art warehousing and ex-warehousing facilities are secure and
      available to safeguard your goods. Whether you need short-term storage or
      long-term warehousing solutions, our facilities are equipped to handle
      various types of cargo, ensuring that your products are stored under
      optimal conditions. We pride ourselves on providing reliable and flexible
      storage options, supporting our clients with efficient inventory
      management and timely distribution services.
    </p>
  );

  const handleClearingOnclick = () => {
    const content = document.querySelector(".content");
    const clearing = document.querySelector(".clearing");
    const transport = document.querySelector(".transport");
    const transit = document.querySelector(".transit");
    const consolidated = document.querySelector(".consolidated");
    const warehouse = document.querySelector(".warehouse");

    if (transport) transport.classList.remove("before:opacity-90");
    if (transit) transit.classList.remove("before:opacity-90");
    if (consolidated) consolidated.classList.remove("before:opacity-90");
    if (warehouse) warehouse.classList.remove("before:opacity-90");

    if (clearing) clearing.classList.add("before:opacity-90");

    if (content) {
      content.innerHTML = " ";
      content.innerHTML = clearingAndForwardind.props.children;
    }
  };

  const handleTransportaionOnclick = () => {
    const content = document.querySelector(".content");
    const clearing = document.querySelector(".clearing");
    const transport = document.querySelector(".transport");
    const transit = document.querySelector(".transit");
    const consolidated = document.querySelector(".consolidated");
    const warehouse = document.querySelector(".warehouse");

    if (clearing) clearing.classList.remove("before:opacity-90");
    if (transit) transit.classList.remove("before:opacity-90");
    if (consolidated) consolidated.classList.remove("before:opacity-90");
    if (warehouse) warehouse.classList.remove("before:opacity-90");

    if (transport) transport.classList.add("before:opacity-90");

    if (content) {
      content.innerHTML = " ";
      content.innerHTML = transportation.props.children;
    }
  };

  const handleTransitOnclick = () => {
    const content = document.querySelector(".content");
    const clearing = document.querySelector(".clearing");
    const transport = document.querySelector(".transport");
    const transit = document.querySelector(".transit");
    const consolidated = document.querySelector(".consolidated");
    const warehouse = document.querySelector(".warehouse");

    if (clearing) clearing.classList.remove("before:opacity-90");
    if (transport) transport.classList.remove("before:opacity-90");
    if (consolidated) consolidated.classList.remove("before:opacity-90");
    if (warehouse) warehouse.classList.remove("before:opacity-90");

    if (transit) transit.classList.add("before:opacity-90");

    if (content) {
      content.innerHTML = " ";
      content.innerHTML = transitCargo.props.children;
    }
  };

  const handleConsolidatedOnclick = () => {
    const content = document.querySelector(".content");
    const clearing = document.querySelector(".clearing");
    const transport = document.querySelector(".transport");
    const transit = document.querySelector(".transit");
    const consolidated = document.querySelector(".consolidated");
    const warehouse = document.querySelector(".warehouse");

    if (clearing) clearing.classList.remove("before:opacity-90");
    if (transport) transport.classList.remove("before:opacity-90");
    if (transit) transit.classList.remove("before:opacity-90");
    if (warehouse) warehouse.classList.remove("before:opacity-90");

    if (consolidated) consolidated.classList.add("before:opacity-90");

    if (content) {
      content.innerHTML = " ";
      content.innerHTML = consolidatedCargo.props.children;
    }
  };

  const handleWarehousingOnclick = () => {
    const content = document.querySelector(".content");
    const clearing = document.querySelector(".clearing");
    const transport = document.querySelector(".transport");
    const transit = document.querySelector(".transit");
    const consolidated = document.querySelector(".consolidated");
    const warehouse = document.querySelector(".warehouse");

    if (clearing) clearing.classList.remove("before:opacity-90");
    if (transport) transport.classList.remove("before:opacity-90");
    if (transit) transit.classList.remove("before:opacity-90");
    if (consolidated) consolidated.classList.remove("before:opacity-90");

    if (warehouse) warehouse.classList.add("before:opacity-90");

    if (content) {
      content.innerHTML = " ";
      content.innerHTML = warehousing.props.children;
    }
  };

  return (
    <>
      <ContactInfo />
      <Navbar />
      <section className="bg-slate-200">
        <div>
          <Image
            src={"/office-workplace.svg"}
            width={300}
            height={200}
            alt="hero image"
            className="w-full h-[50vh]"
          />
        </div>
      </section>
      <section className="px-5">
        <div className="flex justify-center items-center">
          <div className="max-w-6xl py-8">
            <h2 className="text-2xl font-semibold">Home\Services</h2>

            <p className="my-10">
              SOF logistics renders a wide range of logistics services in the
              various ports of Ghana, however, our core business is in the
              domain of Customs Clearing and Forwarding ,Transportation, Transit
              Cargo, Consolidated Cargo, Warehousing/ Ex-warehousing,
              Consultancy.
            </p>
          </div>
        </div>
      </section>
      <section className="px-5 lg:px-0">
        <div className="flex justify-center items-center">
          <div className="max-w-5xl border border-black rounded-md py-10 mb-20">
            <ul className="flex flex-wrap gap-3 border-b border-black px-10 pb-4">
              <li
                onClick={handleClearingOnclick}
                className="relative cursor-pointer before:absolute before:content-[''] before:w-28 before:h-[2.5px] before:bg-blue-200 before:-bottom-2 before:left-10 before:opacity-0 clearing font-semibold"
              >
                CLEARING AND FORWARDING
              </li>
              <li
                onClick={handleTransportaionOnclick}
                className="relative cursor-pointer before:absolute before:content-[''] before:w-20 before:h-[2.5px] before:bg-blue-200 before:-bottom-2 before:left-5 before:opacity-0 transport font-semibold"
              >
                TRANSPORTION
              </li>
              <li
                onClick={handleTransitOnclick}
                className="relative cursor-pointer before:absolute before:content-[''] before:w-20 before:h-[2.5px] before:bg-blue-200 before:-bottom-2 before:left-5 before:opacity-0 transit font-semibold"
              >
                TRANSIT CARGO
              </li>
              <li
                onClick={handleConsolidatedOnclick}
                className="relative cursor-pointer before:absolute before:content-[''] before:w-28 before:h-[2.5px] before:bg-blue-200 before:-bottom-2 before:left-6 before:opacity-0 consolidated font-semibold"
              >
                CONSOLIDATED CARGO
              </li>
              <li
                onClick={handleWarehousingOnclick}
                className="relative cursor-pointer before:absolute before:content-[''] before:w-28 before:h-[2.5px] before:bg-blue-200 before:-bottom-2 before:left-10 before:opacity-0 warehouse font-semibold"
              >
                WAREHOUSE/EX-WAREHOUSING
              </li>
            </ul>
            <div className="mt-10 px-10 content">{clearingAndForwardind}</div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
