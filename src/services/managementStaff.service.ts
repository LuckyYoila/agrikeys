import samsonBugama from "../images/management/samsonBugama.png";
import abiagailBugama from "../images/management/abigailBugama.png";
import plangnanWasat from "../images/management/plangnanWasat.png";
import fubureSati from "../images/management/fubureSati.png";

import kudla from "../images/management/kudlaM.png";
import zacharyM from "../images/management/zacharyM.png";
import andyChagwa from "../images/management/andyChagwa.png";
import adamuIzang from "../images/management/adamuIzang.png";

interface managementStaff {
  image?: any;
  name: string;
  position: string;
  profile?: string;
}

export const managementStaff: managementStaff[] = [
  {
    image: samsonBugama.src,
    name: "Samson Ishaku Bugama",
    position: "Managing Director/ CEO",
    profile:
      "Mr Samson Ishaku Bugama is the Managing Director and Chief Executive Officer of Agrikeys. He is a trained Agricultural Economist who has an ongoing Master in Leadership and Development from the Jos Ecwa Theological Seminary (JETS) and a B.Agric (Tech) in Agricultural Economics and Extension from The Abubakar Tafawa Balewa University, Bauchi. He has over Thirteen (13) years of direct and indirect experience in the Nigerian Banking Industry, where he served as Agricultural officer in First Bank of Nigeria Ltd and also as the pioneer Agricultural Manager for Access Bank Plc. He has attended several National and international courses on different aspects of Agricultural Finance and Production. A fellow of the Leadership Institute in Southern California and also a facilitator of the Leadership Institute in Nigeria which trains Leaders under its programme called the journey Nigeria. He is also a fellow at the Institute of Management Consultants (FIMC).",
  },
  {
    image: abiagailBugama.src,
    name: "Abigail Bugama",
    position: "Executive Director",
    profile:
      "Mrs Abigail Bugama is the General Manager of Agrikeys, She holds an MBA from University of Jos and a B.sc in Accounting from Ahmadu Bello University Zaria. She is a sound business manager with over 12 years experience in the banking sector where she has worked with Ecobank Plc in different capacities from Business operations to Business Management. She is an Associate of the Chartered Institute of Personnel Management (CIPM) and also a Certified National Accountant (CNA) from Association of National Accountants of Nigeria (ANAN).",
  },
  {
    image: plangnanWasat.src,
    name: "Plangnan Wasat",
    position: "General Manager",
    profile:
      "A graduate of University of Jos. Mr. Plangnan Wasat holds a B.Sc. in Plant science and technology. He brings to the company a 5 years work experience that has proven vital for the work at Agrikeys. He has a deep conviction in leading the poor into finding business for themselves.",
  },
  {
    image: fubureSati.src,
    name: "Fubure Sati",
    position: "General Manager",
    profile:
      "A graduate of University of Jos. Mrs. Fubure Sati is a value chain expert with years of experience in developing robust agricultural systems that work and provide value for small businesses. She holds a B.Sc. in Plant science and technology. Her passion towards improving systems and maintaining synergy in the business environment gives us an advantage at delivering our core mandate.",
  },
];

export const board: managementStaff[] = [
  {
    image: kudla.src,
    name: "Kudla M. Satumari",
    position: "Chairman",
    profile:
      "He has behind him over two decades of professional experience garnered from both the public and private sectors. A dynamic, upwardly mobile entrepreneur, Kudla's career imprints have traversed agencies and establishments in the aviation sector, hospitality, construction and real estate. His leadership skills seem like a page from the visionary pantheons while exuding key management capacities drawn from his experience in industry regulatory roadmaps, innovation and training. He is a 1990 graduate of Business Management from ABU and sees or identifies opportunities well ahead.",
  },
  {
    image: zacharyM.src,
    name: "Zachary Medugu",
    position: "Director",
    profile:
      "Zachary is a very meticulous professional who has acquired valuable experience in the strategic sector of telecommunications. He has worked with the Nigerian Telecommunications Plc. rising through the ranks to the position of manager, Treasury. He is very good in credit control, verification, reconciliation and monitoring. He graduated from the University of Maiduguri in 1992 With Honors in Banking and Finance and holds the professional membership of the Nigerian Institute of Management, NIM.",
  },
  {
    image: andyChagwa.src,
    name: "Andy Chagwa",
    position: "Director",
    profile:
      "A founding member of the company, Andy is focused on developing our new businesses. He has over 20 years experience in the financial services sector with at least 10 years in leading finance teams at a senior level across different aspects of commercial and institutional banking as well as corporate finance. He graduated from University of Maiduguri in 1991 with a B.sc hons in Agricultural Economics and also holds a master's degree in Economics from University of Lagos. Andy is an associate member of Project Management Institute and is a thoroughbred financial expert. He has attended several local and offshore courses in banking instruments, operational systems, financial analysis, policies and procedures and financing mechanisms. Andy is excellent resource personnel in project management, finance and administration and is also a reliable team player that is well endowed with good interpersonal skills.",
  },
  {
    image: adamuIzang.src,
    name: "Barr. Adamu Izang Madaki",
    position: "Company Secretary",
    profile:
      "A graduate of Law from the University of Jos and a Masters holder from the same university, Barrister Adamu Izang Madaki has been in law practice for over 15 years and practices from his own chambers currently after working for several years with many chambers around Jos Plateau state. He brings to the board a wealth of experience on the legal aspects of business.",
  },
];
