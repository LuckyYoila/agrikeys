import PageBanner from "@/components/pageBanner"
const ContactUs = () => {
  return (
    <div>

        <PageBanner location="Contact Us" />
        <section className="  my-14 flex flex-col md:flex-row gap-9 items-center w-3/4 mx-auto">

            <p className=" font-bold text-3xl">Need our Services, or want an enquiry? <br />Send us a message anytime!</p>
        <form className="w-full" onSubmit={(ev)=> ev.preventDefault()}>
        <div className="form-group mb-6">
          <input type="text" className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none" id="exampleInput7"
            placeholder="Name" />
        </div>
        <div className="form-group mb-6">
          <input type="email" className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none" id="exampleInput8"
            placeholder="Email address" />
        </div>
        <div className="form-group mb-6">
          <textarea className="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none
          " id="exampleFormControlTextarea13"  placeholder="Message"></textarea>
        </div>
        
        <button type="submit" className="
          w-full
          px-6
          py-2.5
          bg-green-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-green-700 hover:shadow-lg
          focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-green-900 active:shadow-lg
          transition
          duration-150
          ease-in-out">Send</button>
      </form>
        </section>

        <hr className="w-3/4 mx-auto my-5"/>
        <div className="text-3xl max-w-lg mx-auto my-5 p-5">
            Alternatively, You can call, email, or visit us with the information at the bottom of this page.
        </div>
    </div>
  )
}
export default ContactUs