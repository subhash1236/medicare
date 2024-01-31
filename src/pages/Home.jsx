import { Link } from "react-router-dom";
import heroImg01 from "../images/hero-img01.png";
import heroImg02 from "../images/hero-img02.png";
import heroImg03 from "../images/hero-img03.png";
import icon01 from "../images/icon01.png";
import icon02 from "../images/icon02.png";
import icon03 from "../images/icon03.png";
import { FaArrowRight } from "react-icons/fa";
import About from "../components/About/About";
import ServicesList from "../components/Services/ServicesList";
import featureImg from '../images/feature-img.png';
import videoIcon from "../images/video-icon.png";
import avtarIcon from "../images/avatar-icon.png";
import DocterList from "../components/Docters/DocterList";
import faqImg from '../images/faq-img.png';
import FaqList from "../components/Faq/FaqList";




const Home = () => {
  return (

    <>

      <section className="hero_section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            <div>
              <div className="lg:w-[500px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[500]  md:text-[60px]  md:leading-[70px]">We help patients <br /> live a healthy, <br /> longer life.</h1>
                <p className="text_para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptas doloremque maiores nemo, minus atque porro dolorum illum nisi similique, fuga numquam asperiores ullam placeat distinctio eveniet, magnam magni veritatis.</p>
                <button className="btn">Reqest an Appointend</button>
              </div>
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">30+</h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full  block mt-[-14px]"></span>
                  <p className="text_para">Year of Experience</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">15+</h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full  block mt-[-14px]"></span>
                  <p className="text_para">Clinic Location</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">100%</h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full  block mt-[-14px]"></span>
                  <p className="text_para">Patient Sati</p>
                </div>

              </div>
            </div>
            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroImg01} alt="" />
              </div>
              <div className="mt-[30px]">
                <img src={heroImg02} alt="" className="w-full mb-[30px]" />
                <img src={heroImg03} alt="" className="w-full" />
              </div>

            </div>

          </div>
        </div>

      </section>
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="text-center heading">
              Providing the best medical services
            </h2>
            <p className="text-center text_para">Word-class care for everyone,Our health System offers unmatched, expert health care.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5 ">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>
              <div className="mt-[30px] ">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Find a Docter</h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Word Class care everyone. our health system offers unmatchd ,expert health care, From the lab to the clinic
                </p>
                <Link to="/docters" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  <FaArrowRight className="w-6 h-5 group-hover:text-white" />
                </Link>
              </div>

            </div>
            <div className="py-[30px] px-5 ">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>
              <div className="mt-[30px] ">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Find a Location</h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Word Class care everyone. our health system offers unmatchd ,expert health care, From the lab to the clinic
                </p>
                <Link to="/docters" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  <FaArrowRight className="w-6 h-5 group-hover:text-white" />
                </Link>
              </div>

            </div>
            <div className="py-[30px] px-5 ">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>
              <div className="mt-[30px] ">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Book Appointment</h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Word Class care everyone. our health system offers unmatchd ,expert health care, From the lab to the clinic
                </p>
                <Link to="/docters" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  <FaArrowRight className="w-6 h-5 group-hover:text-white" />
                </Link>
              </div>

            </div>

          </div>

        </div>
      </section>
      <About />
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="text-center heading">
              Our medical services
            </h2>
            <p className="text-center text_para">World-class care for everyone. Our health System offers unmatched expert helth care</p>

          </div>
          <ServicesList />
        </div>
      </section>
      <section>
        <div className="container">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Get virtual treatment <br /> anytime
              </h2>
              <ul className="pl-4">
                <li className="text_para">1. Schedule the appontment directly.</li>
                <li className="text_para">2. Search for Your physician here, andcontact their office.</li>
                <li className="text_para">
                  view our physicians who are accepting patient,use the online scheduling tool to section an appintmenttime.
                </li>
              </ul>
              <Link to='/'><button className="btn">Learn More</button></Link>
            </div>
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-[0]">
              <img src={featureImg} className="w3/4" alt="" />
              <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">Tue, 24</p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">10: 00</p>
                  </div>
                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor
                rounded py-1 px-[6px] lg:py-3 lg:px-[9px] ">
                    <img src={videoIcon} alt="" />
                  </span>

                </div>

                <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full ">
                  Consultation

                </div>
                <div className="flex items-center gap-[6px]  lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src={avtarIcon} alt="" />
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">Wayne Collections</h4>

                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="text-center heading">
              Our greate docters
            </h2>
            <p className="text-center text_para">World-class care for everyone. Our health System offers unmatched expert helth care</p>
          </div>
          <DocterList />
        </div>
      </section>
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="hidden w-1/2 md:block">
              <img src={faqImg} alt="" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="heading">Most question by our belaved patients</h2>
              <FaqList />

            </div>

          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="text-center heading">
            What our patient say
            </h2>
            <p className="text-center text_para">World-class care for everyone. Our health System offers unmatched expert helth care</p>
          </div>
          

        </div>
      </section>
      
    </>

  )
}

export default Home
