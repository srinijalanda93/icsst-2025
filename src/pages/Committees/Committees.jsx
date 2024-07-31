import React, { useEffect } from "react";
import { scroller } from "react-scroll";

import { useLocation } from "react-router-dom";
import PeopleCard from "./PeopleCard";
import i1 from "../../assets/callpapers.svg";

export default function Committees() {
  const location = useLocation();
  useEffect(() => {
    scroller.scrollTo(location.pathname.split("/")[2]);
  });

  let og_c = [
    {
      name: "Dr (Fr.) Abraham V M",
      desg: "Vice Chancellor",
      college: "CHRIST (Deemed to be University)",
    },
    {
      name: "Prof. Ahmed Al Naamany",
      desg: "Deputy CEO",
      college: "Modern College of Business and Science",
    },
    {
      name: "Dr (Fr.) Joseph CC",
      desg: "Pro-Vice Chancellor",
      college: "CHRIST (Deemed to be University)",
    },
    {
      name: "Dr Anil Joseph Pinto",
      desg: "Registrar",
      college: "CHRIST (Deemed to be University)",
    },
    {
      name: "Dr George Thomas C",
      desg: "Dean - School of Sciences",
      college: "CHRIST (Deemed to be University)",
    },
    {
      name: "Dr Joseph T V",
      desg: "Associate Dean School of Sciences",
      college: "CHRIST (Deemed to be University)",
    },
    {
      name: "Dr Moosa Al Kindi",
      desg: "Dean",
      college: "Modern College of Business and Science",
    },
    {
      name: "Dr Khalfan Al Asmi",
      desg: "Deputy Dean",
      college: "Modern College of Business and Science",
    },
    {
      name: "Dr Hothefa Shaker",
      desg: "Associate Dean for Research",
      college: "Modern College of Business and Science",
    },
    {
      name: "Dr Ashok Immanuel",
      desg: "HOD of Computer Science",
      college: "CHRIST (Deemed to be University)",
    },
    {
      name: "Dr. Vinay",
      desg: "Department of Computer Science",
      college: "CHRIST (Deemed to be University)",
    },
  ];

  let con_c = [
    {
      name: "Dr Chandra J",
      desg: "Associate Professor, Department of Computer Science",
      college: "CHRIST (Deemed to be University)",
    },
    {
      name: "Prof Mani Joseph",
      desg: "HOD of Mathematics and Computer Science",
      college: "Modern College of Business and Science",
    },
  ];


  let conv = [
    {
      name: "Dr Sagaya Aurelia P",
      desg: "Department of Computer Science",
      college: "CHRIST (Deemed to be University)",
    },
    {
      name: "Dr Arokia Paul Rajan R",
      desg: "Department of Computer Science",
      college: "CHRIST (Deemed to be University)",
    },
    {
      name: "Dr Basant Kumar",
      desg: "Department of Mathematics and Computer Science",
      college: "Modern College of Business and Science",
    },
  ];

  let org_sec = [
    {
      name: "Dr Kirubanand V B",
      desg: "Department of Computer Science",
      college: "CHRIST (Deemed to be University)",
    },
    {
      name: "Dr Vijaya Padmanabha",
      desg: "Department of Mathematics and Computer Science",
      college: "Modern College of Business and Science",
    },
  ];

  let adv_rev_com = [
    {
      name: "Dr. Ajay K Sharma",
      desg: "Vice-Chancellor",
      college: "IKG Punjab Technical University",
      place: "Punjab, INDIA",
    },
    {
      name: "Dr. Arockiasamy Soosaimanickam",
      desg: "Dean, Department of Information Systems",
      college: "",
      place: "",
    },
    {
      name: "Dr. S Karthikeyan",
      desg: "Head",
      college: "Development of Information Technology College of Applied Sciences",
      place: "Sultanate of Oman",
    },
    {
      name: "Dr. Rajkumar Buyya",
      desg: "Redmond Barry Distinguished ProfessorDirector, Cloud Computing and Distributed Systems (CLOUDS) Lab School of Computing and Information Systems",
      college: "The University of Melbourne",
      place: "AUSTRALIA",
    },
    {
      name: "Dr. Inder Vir Malhan",
      desg: "Professor & Head, Mathematics, Computers & Information Science",
      college: "Central University of Himachal Pradesh",
      place: "INDIA",
    },
    {
      name: "Dr. Jose Orlando Gomes",
      desg: "Professor, Department of Industrial Engineering",
      college: "Federal University",
      place: "BRAZIL",
    },
    {
      name: "Dr. Richmond Adebiaye",
      desg: "Associate Professor",
      college: "College of Science and Technology, Department of Informatics and Engineering Systems, University of South Carolina Upstate",
      place: "Spartanburg, USA",
    },
    {
      name: "Dr. Ahmad Sobri Bin Hashim",
      desg: "Senior Lecturer, CIS Department, Faculty of Applied Sciences",
      college: "University Teknologi Petronas",
      place: "MALAYSIA",
    },
    {
      name: "Dr. John Digby Haynes",
      desg: "Honorary Professor, Discipline of Business Information Systems",
      college: "The University of Sydney Business School",
      place: "AUSTRALIA",
    },
    {
      name: "Dr. Subhash Chandra Yadav",
      desg: "Professor & Head, Centre for Computer Science & Technology",
      college: "Central University",
      place: "Jharkhand, INDIA",
    },
    {
      name: "Dr. Rajeev Srivastava",
      desg: "Professor & Head, Department of Computer Science and Engineering",
      college: "Indian Institute of Technology",
      place: "Varanasi, INDIA",
    },
    {
      name: "Dr. Inder Vir Malhan",
      desg: "Professor & Head, Department of Mathematics, Computers & Information Science",
      college: "Central University",
      place: "Himachal Pradesh, INDIA",
    },
    {
      name: "Dr. Abhijit Das",
      desg: "Professor, Department of Computer Science and Engineering",
      college: "Indian Institute of Technology",
      place: "West Bengal, INDIA",
    },
    {
      name: "Dr. Muralidhara B L",
      desg: "Professor, Department of Computer Science & Application, Jnanabharathi Campus",
      college: "Bangalore University",
      place: "Bengaluru, INDIA",
    },
    {
      name: "Dr. K K Shukla",
      desg: "Professor, Department of Computer Science and Engineering",
      college: "Indian Institute of Technology (BHU)",
      place: "Varanasi, INDIA",
    },
    {
      name: "Dr. Pabitra Mitra",
      desg: "Professor, Department of Computer Science & Engineering",
      college: "Indian Institute of Technology",
      place: "Kharagpur, INDIA",
    },
    {
      name: "Dr. Hanumanthappa M",
      desg: "Professor, Department of Computer Science & Application, Jnanabharathi Campus",
      college: "Bangalore University",
      place: "Bengaluru, India",
    },
    {
      name: "Dr. Subhrabrata Choudhury",
      desg: "Professor, Department of Computer Science",
      college: "National Institute of Technology",
      place: "West Bengal, India",
    },
    {
      name: "Dr. P. Santhi Thilagam",
      desg: "Professor, Department of Computer Science and Engineering",
      college: "National Institute of Technology",
      place: "Karnataka, India",
    },
    {
      name: "Dr. Tandra Pal",
      desg: "Professor, Department of Computer Science and Engineering",
      college: " National Institute of Technology",
      place: "West Bengal, India",
    },
    {
      name: "Dr. Dilip Kumar Yadav",
      desg: "Professor & Head, Department of Computer Applications",
      college: "National Institute of Technology",
      place: "Jharkhand, India",
    },
    {
      name: "Dr. P. Santhi Thilagam",
      desg: "Professor, Department of Computer Science and Engineering",
      college: "National Institute of Technology",
      place: "Karnataka, India",
    },
    {
      name: "Dr. Annappa",
      desg: "Professor, Department of Computer Science and Engineering",
      college: "National Institute of Technology",
      place: "Karnataka, India",
    },
    {
      name: "Dr. R. Thamaraiselvi",
      desg: "Associate Professor and Head, Department of Computer Applications",
      college: "Bishop Heber College",
      place: "Trichy, INDIA",
    },
    {
      name: "Dr. P. Mukilan",
      desg: "Associate Professor, Department of Electrical and Computer Engineering",
      college: "College of Engineering and Technology",
      place: "Bule Hora University, ETHIOPIA",
    },
    {
      name: "Dr. Gnanaprakasam Thangavel",
      desg: "Associate Professor, Department of Computer Science of Engineering",
      college: "Gayatri Vidya Parishad College of Engineering (Autonomous)",
      place: "Vishakhapatnam, INDIA",
    },
    {
      name: "Dr. Tanmay De",
      desg: "Associate Professor, Department of Computer Science",
      college: "National Institute of Technology",
      place: "West Bengal, India",
    },
    {
      name: "Dr. Saravanan Chandran",
      desg: "Associate Professor, Department of Computer Science",
      college: "National Institute of Technology",
      place: "West Bengal, India",
    },
    {
      name: "Dr. Rupa G. Mehta",
      desg: "Associate Professor, Department of Computer Science and Engineering",
      college: "Sardar Vallabhbhai National Institute of Technology",
      place: "Gujarat, India",
    },
    {
      name: "Dr. Bibhudatta Sahoo",
      desg: "Associate Professor & Head, Department of Computer Science and Engineering",
      college: "National Institute of Technology",
      place: "Rourkela, India",
    },
    {
      name: "Dr. Baisakhi Chakraborty",
      desg: "Associate Professor, Department of Computer Science and Engineering",
      college: "National Institute of Technology",
      place: "West Bengal, India",
    },
    {
      name: "Dr. Rajiv Misra",
      desg: "Associate Professor, Department of Computer Science and Engineering",
      college: "Indian Institute of Technology",
      place: "Bihar, India",
    },
    {
      name: "Dr. Sherimon P",
      desg: "",
      college: "Arab Open University",
      place: "Oman",
    },
    {
      name: "Prof. Nebojsa Bacanin",
      desg: "Vice-Rector for Scientific Research",
      college: "Singidunum University",
      place: "Serbia",
    },
    {
      name: "Dr. Venkata Subramanian D",
      desg: "Department of Computer Science",
      college: "CHRIST (Deemed to be University)",
      place: "Bangalore, India",
    },
    {
      name: "Afrida Yasmin",
      desg: "",
      college: "Jahangirnagar University",
      place: "Bangladesh, India",
    },
    {
      name: "Claudia Josefina Torrero Flores",
      desg: "",
      college: "Tecnológico Nacional de México / Instituto Tecnológico de La Laguna",
      place: "Mexico",
    },
    {
      name: "Dirk Jacobus Van Wyk",
      desg: "",
      college: "Cape Peninsula University of Technology",
      place: "Capetown, South Africa",
    },
    {
      name: "Irina Zhuravleva",
      desg: "",
      college: "Financial University under the Government of the Russian Federation",
      place: "Russia",
    },
    {
      name: "Iryna Yakovleva",
      desg: "",
      college: "National University of Urban Economy",
      place: "Ukraine",
    },
    {
      name: "J. P. Sharma",
      desg: "",
      college: "Mohan Lal Sukhadiya University",
      place: "Udaipur, India",
    },
    {
      name: "Keitaro Tominaga",
      desg: "",
      college: "Panasonic System Design Co., Ltd.",
      place: "Japan",
    },
    {
      name: "Maria Odinokaya",
      desg: "",
      college: "Peter the Great St.Petersburg Polytechnic University",
      place: "Russia",
    },
    {
      name: "Md. Salah Uddin Yusuf",
      desg: "",
      college: "Khulna University of Engineering & Technology",
      place: "Bangladesh, India",
    },
    {
      name: "Mohammad Chuttur",
      desg: "",
      college: "University of Mauritius",
      place: "Mauritius",
    },
    {
      name: "Mohammad Zahidul Islam",
      desg: "",
      college: "Daffodil International University",
      place: "Bangladesh, India",
    },
    {
      name: "Mr.Tucha Kedir",
      desg: "",
      college: "Bule Hora University",
      place: "Ethiopia",
    },
    {
      name: "Noureddine Zerhouni",
      desg: "",
      college: "FEMTO-ST/ENSMM",
      place: "France",
    },
    {
      name: "Olena Savielieva",
      desg: "",
      college: "South Ukrainian National Pedagogical University named after K. D. Ushynsky",
      place: "Ukraine",
    },
    {
      name: "Olga Tsarenko",
      desg: "",
      college: "Saint-Petersburg Electrotechnical University",
      place: "Russia",
    },
    {
      name: "Rita Yi Man Li",
      desg: "",
      college: "Hong Kong Shue Yan University",
      place: "Hong Kong",
    },
    {
      name: "Dr Sebastian Biedermann",
      desg: "Professor and Head Information Security, Department of Computer Science and Business Information System",
      college: "THWS - Technical University of Applied Sciences Würzburg-Schweinfurt",
      place: "Würzburg, Germany",
    },
    {
      name: "Dr Peter Braun",
      desg: "Dean, Department of Computer Science and Business Information System",
      college: "THWS - Technical University of Applied Sciences Würzburg-Schweinfurt",
      place: "Würzburg, Germany",
    },
    {
      name: "Dr Isabel John",
      desg: "Professor and Head Computer Science, Department of Computer Science and Business Information System",
      college: "THWS - Technical University of Applied Sciences Würzburg-Schweinfurt",
      place: "Würzburg, Germany",
    },
    {
      name: "Debopriyo Roy",
      desg: "",
      college: "University of Aizu",
      place: "Japan",
    },
    {
      name: "K Sathish",
      desg: "",
      college: "Vellore Institute of Technology",
      place: "Vellore",
    },
    {
      name: "Dr A Velayudham",
      desg: "",
      college: "Jansons Institute of Technology",
      place: "",
    },
    {
      name: "Rekha C",
      desg: "",
      college: "Soundarya Institute of Management and Science",
      place: "",
    },
    {
      name: "Dr Uma",
      desg: "Professor & HOD",
      college: "SRM university",
      place: "Chennai",
    },
    {
      name: "Dr Dilip R",
      desg: "",
      college: "Dayananda Sagar Academy of Technology and Management",
      place: "",
    },
    {
      name: "Frida Yasmin",
      desg: "",
      college: "Jahangirnagar University",
      place: "Bangladesh",
    },
    {
      name: "Claudia Josefina Torrero Flores",
      desg: "",
      college: "Tecnológico Nacional de México / Instituto Tecnológico de La Laguna",
      place: "Mexico",
    },
    {
      name: "Dirk Jacobus Van Wyk",
      desg: "",
      college: "Cape Peninsula University of Technology Capetown",
      place: "South Africa",
    },
    {
      name: "Irina Zhuravleva",
      desg: "",
      college: "Financial University under the Government of the Russian Federation",
      place: "Russia",
    },
    {
      name: "Iryna Yakovleva",
      desg: "",
      college: "National University of Urban Economy",
      place: "Ukraine",
    },
    {
      name: "J. P. Sharma",
      desg: "",
      college: "Mohan Lal Sukhadiya University",
      place: "Udaipur, India",
    },
    {
      name: "Keitaro Tominaga",
      desg: "",
      college: "Panasonic System Design Co., Ltd.",
      place: "Japan",
    },
    {
      name: "Maria Odinokaya",
      desg: "",
      college: "St.Petersburg Polytechnic University",
      place: "Russia",
    },
    {
      name: "Salah Uddin Yusuf",
      desg: "",
      college: "Khulna University of Engineering & Technology",
      place: "Bangladesh",
    },
    {
      name: "Mohammad Chuttur",
      desg: "",
      college: "University of Mauritius",
      place: "Mauritius",
    },
    {
      name: "Mohammad Zahidul Islam",
      desg: "",
      college: "Daffodil International University",
      place: "Bangladesh",
    },
    {
      name: "Mr Tucha Kedir",
      desg: "",
      college: "Bule Hora University",
      place: "Ethiopia",
    },
    {
      name: "Noureddine Zerhouni",
      desg: "",
      college: "FEMTO-ST/ENSMM",
      place: "France",
    },
    {
      name: "Olena Savielieva",
      desg: "",
      college: "South Ukrainian National Pedagogical University named after K. D. Ushynsky",
      place: "Ukraine",
    },
    {
      name: "Olga Tsarenko",
      desg: "",
      college: "Saint-Petersburg Electrotechnical University",
      place: "Russia",
    },
    {
      name: "Dr Suresh Devaraj",
      desg: "",
      college: "IIT -R",
      place: "India",
    },
    {
      name: "Dr E George Dharma Prakash Raj",
      desg: "",
      college: "Bharathidasan University",
      place: "Trichy",
    },
    {
      name: "Dr K Ramachandran",
      desg: "",
      college: "Srmist Vadapalani Campus",
      place: "",
    },
    {
      name: "Dr Samuvel K",
      desg: "",
      college: "Sri Manakula Vinayakar Engineering College",
      place: "",
    },
    {
      name: "Dr Renjith V Ravi",
      desg: "",
      college: "M.E.A Engineering College",
      place: "",
    },
    {
      name: "RAD Martin Dhinakaran",
      desg: "",
      college: "IFET College of Engineering",
      place: "",
    },
    {
      name: "Dr. Appala Srinuvasu Muttipati",
      desg: "",
      college: "Anil Neerukonda Institute of Technology and Sciences",
      place: "",
    },
    {
      name: "Dr. Saju Mathew",
      desg: "",
      college: "SNMV College of Arts and Science",
      place: "",
    },
    {
      name: "Prof K Thamizhmaran",
      desg: "",
      college: "Government College of Engineering Bodinayakkanur",
      place: "Theni, Tamilnadu",
    },
    {
      name: "Dr Manjaiah D H",
      desg: "",
      college: "Mangalore University",
      place: "",
    },
    {
      name: "Dr Amol P Pande",
      desg: "",
      college: "Datta Meghe College of Engineering",
      place: "",
    },
    {
      name: "Dr SK Althaf Hussain Basha",
      desg: "",
      college: "Krishna Chaitanya Institute of Technology and Sciences",
      place: "Markapur",
    },
    {
      name: "Dr DuraiRaj",
      desg: "",
      college: "Bharathidasan University",
      place: "",
    },
    {
      name: "Dr Jeghan Murugadass",
      desg: "",
      college: "",
      place: "Oman",
    },

  ];

  let webBroBanPos = [
    {
      name: "Dr Thirunavukkarasu V",
      desg: "Department of Computer Science",
      college: "CHRIST (Deemed to be University)",
      chair: "Chair",
    },
    {
      name: "Dr Cecil Donald A",
      desg: "Department of Computer Science",
      college: "CHRIST (Deemed to be University)",
    },
    {
      name: "Mr. Santhosh Nair",
      desg: "",
      college: "Modern College of Business and Science",
    },
  ];

  let comm_pub = [
    {
      name: "Dr Rohini V",
      desg: "Department of Computer Science",
      college: "CHRIST (Deemed to be University)",
      chair: "Chair",
    },
    {
      name: "Dr Lokanayaki K",
      desg: "Department of Computer Science",
      college: "CHRIST (Deemed to be University)",
    },
    {
      name: "Dr Poornima N V",
      desg: "Department of Computer Science",
      college: "CHRIST (Deemed to be University)",
    },
    {
      name: "Dr Chia Zargeh",
      desg: "",
      college: "Modern College of Business and Science",
    },
    {
      name: "Mr. Rajeev Rajendran",
      desg: "Department of Mathematics and Computer Science",
      college: "Modern College of Business and Science",
    },
    {
      name: "Dr. Muhammad Naeem",
      desg: "Department of Mathematics and Computer Science",
      college: "Modern College of Business and Science",
    },
    {
      name: "Dr. Nassor Suleiman",
      desg: "Department of Mathematics and Computer Science",
      college: "Modern College of Business and Science",
    },
  ];

  let fin_spo = [
    {
      name: "Dr Rajesh Kanna R",
      desg: "Department of Computer Science",
      college: "CHRIST (Deemed to be University)",
      chair: "Chair",
    },
    {
      name: "Dr Shoney Sebastian",
      desg: "Department of Computer Science",
      college: "CHRIST (Deemed to be University)",
    },
    {
      name: "Dr Nismon Rio R",
      desg: "Department of Computer Science",
      college: "CHRIST (Deemed to be University)",
    },
    {
      name: "Mr. Joseph Ajin",
      desg: "",
      college: "Modern College of Business and Science",
    },
  ];

  let regMenConCerti = [
    {
      name: "Dr Kavitha R",
      desg: "Department of Computer Science",
      college: "CHRIST (Deemed to be University)",
      chair: "Chair",
    },
    {
      name: "Dr Vaidhehi V",
      desg: "Department of Computer Science",
      college: "CHRIST (Deemed to be University)",
    },
    {
      name: "Dr Saravanakumar K",
      desg: "Department of Computer Science",
      college: "CHRIST (Deemed to be University)",
    },
    {
      name: "Dr Ramamurthy B",
      desg: "Department of Computer Science",
      college: "CHRIST (Deemed to be University)",
    },
    {
      name: "Dr Resmi K R",
      desg: "Department of Computer Science",
      college: "CHRIST (Deemed to be University)",
    },
  ];

  let sessExeTech = [
    {
      name: "Dr Senthilnathan T",
      desg: "Department of Computer Science",
      college: "CHRIST (Deemed to be University)",
      chair: "Chair",
    },
    {
      name: "Dr Beaulah Soundarabai P",
      desg: "Department of Computer Science",
      college: "CHRIST (Deemed to be University)",
    },
    {
      name: "Dr Gobi R",
      desg: "Department of Computer Science",
      college: "CHRIST (Deemed to be University)",
    },
    {
      name: "Dr Mohana Priya T",
      desg: "Department of Computer Science",
      college: "CHRIST (Deemed to be University)",
    },
    {
      name: "Dr Suresh K",
      desg: "Department of Computer Science",
      college: "CHRIST (Deemed to be University)",
    },
    {
      name: "Dr Somnath Sinha",
      desg: "Department of Computer Science",
      college: "CHRIST (Deemed to be University)",
    },
  ];

  let publ = [
    {
      name: "Dr Nizar Banu P K",
      desg: "Department of Computer Science",
      college: "CHRIST (Deemed to be University)",
      chair: "Chair",
    },
    {
      name: "Mr.Said Nassor",
      desg: "",
      college: "Modern College of Business and Science (Co- Chair)",
    },
    {
      name: "Mr. AbdelKawy",
      desg: "",
      college: "Modern College of Business and Science",
    },
    {
      name: "Mr. Ahmed Mounir",
      desg: "",
      college: "Modern College of Business and Science",
    },
    {
      name: "Ms. Maryam Al Washahi",
      desg: "Department of Mathematics and Computer Science",
      college: "Modern College of Business and Science",
    },
    {
      name: "Dr Deepa V Jose",
      desg: "Department of Computer Science",
      college: "CHRIST (Deemed to be University)",
    },
    {
      name: "Dr Prabu P",
      desg: "Department of Computer Science",
      college: "CHRIST (Deemed to be University)",
    },
    {
      name: "Dr. Venkata Subramanian D",
      desg: "Department of Computer Science",
      college: "CHRIST (Deemed to be University)",
    },
  ];

  let guests_Respers = [
    {
      name: "Dr Manjunatha Hiremath",
      desg: "Department of Computer Science",
      college: "CHRIST (Deemed to be University)",
      chair: "Chair",
    },
    {
      name: "Dr Anita H B",
      desg: "Department of Computer Science",
      college: "CHRIST (Deemed to be University)",
    },
    {
      name: "Dr Ramesh Chandra Poonia",
      desg: "Department of Computer Science",
      college: "CHRIST (Deemed to be University)",
    },
  ];

  let hosp_report = [
    {
      name: "Dr Smitha Vinod",
      desg: "Department of Computer Science",
      college: "CHRIST (Deemed to be University)",
      chair: "Chair",
    },
    {
      name: "Dr Peter Augustine D",
      desg: "Department of Computer Science",
      college: "CHRIST (Deemed to be University)",
    },
  ];

  let acc = [
    {
      name: "Dr Sandeep J",
      desg: "Department of Computer Science",
      college: "CHRIST (Deemed to be University)",
      chair: "Chair",
    },
    {
      name: "Dr K N Saravanan",
      desg: "Department of Computer Science",
      college: "CHRIST (Deemed to be University)",
    },
    {
      name: "Dr Prabu P",
      desg: "Department of Computer Science",
      college: "CHRIST (Deemed to be University)",
    },
  ];

  let event = [
    {
      name: "Dr Vaishnavi Balaji",
      desg: "Department of Computer Science",
      college: "CHRIST (Deemed to be University)",
      chair: "Chair",
    },
    {
      name: "Dr Ruchi Kaushik",
      desg: "Department of Computer Science",
      college: "CHRIST (Deemed to be University)",
    },
  ];


  return (
    <div>
      <div className="" id="mainpage">
        <div className="row m-0 p-2 align-items-center">
          <div className="col-md-6 col-12">
            <h1 className="p-2">COMMITTEES</h1>
          </div>
          <div className="col-md-6 col-12 text-end">
            <img src={i1} className="img-fluid pt-4 media-query" alt="..." />
          </div>
          <div className="row m-0 p-4">
            <div className="col m-0 p-0">
              <h2 className="p-2">Organizing Committee</h2>
              <div className="row m-0 px-0 justify-content-center">
                {og_c.map((y) => {
                  return (
                    <PeopleCard
                      name={y.name}
                      desg={y.desg}
                      college={y.college}
                    />
                  );
                })}
              </div>

              <h2 className="p-2">Conference Chairs</h2>
              <div className="row m-0 px-0 justify-content-center">
                {con_c.map((y) => {
                  return (
                    <PeopleCard
                      name={y.name}
                      desg={y.desg}
                      college={y.college}
                    />
                  );
                })}
              </div>

              <h2 className="p-2">Conveners</h2>
              <div className="row m-0 px-0 justify-content-center">
                {conv.map((y) => {
                  return (
                    <PeopleCard
                      name={y.name}
                      desg={y.desg}
                      college={y.college}
                    />
                  );
                })}
              </div>

              <h2 className="p-2">Organizing Secretaries</h2>
              <div className="row m-0 px-0 justify-content-center">
                {org_sec.map((y) => {
                  return (
                    <PeopleCard
                      name={y.name}
                      desg={y.desg}
                      college={y.college}
                    />
                  );
                })}
              </div>

              <h2 className="p-2">Advisory/Technical Committee</h2>
              <div className="row m-0 px-0 justify-content-center">
                {adv_rev_com.map((y) => {
                  return (
                    <PeopleCard
                      name={y.name}
                      desg={y.desg}
                      college={y.college}
                      place={y.place}
                    />
                  );
                })}
              </div>

              <h2 className="p-2">Website, Brochures, Banners & Poster Committee</h2>
              <div className="row m-0 px-0 justify-content-center">
                {webBroBanPos.map((y) => {
                  return (
                    <PeopleCard
                      name={y.name}
                      desg={y.desg}
                      college={y.college}
                      chair={y.chair}
                    />
                  );
                })}
              </div>

              <h2 className="p-2">Communication & Publicity Committee</h2>
              <div className="row m-0 px-0 justify-content-center">
                {comm_pub.map((y) => {
                  return (
                    <PeopleCard
                      name={y.name}
                      desg={y.desg}
                      college={y.college}
                      chair={y.chair}
                    />
                  );
                })}
              </div>

              <h2 className="p-2">Finance & Sponsorship Committee</h2>
              <div className="row m-0 px-0 justify-content-center">
                {fin_spo.map((y) => {
                  return (
                    <PeopleCard
                      name={y.name}
                      desg={y.desg}
                      college={y.college}
                      chair={y.chair}
                    />
                  );
                })}
              </div>

              <h2 className="p-2">Registration, Mementos, Conference Kits & Certificates Committee</h2>
              <div className="row m-0 px-0 justify-content-center">
                {regMenConCerti.map((y) => {
                  return (
                    <PeopleCard
                      name={y.name}
                      desg={y.desg}
                      college={y.college}
                      chair={y.chair}
                    />
                  );
                })}
              </div>

              <h2 className="p-2">Session Management, Execution & Technical Support Committee</h2>
              <div className="row m-0 px-0 justify-content-center">
                {sessExeTech.map((y) => {
                  return (
                    <PeopleCard
                      name={y.name}
                      desg={y.desg}
                      college={y.college}
                      chair={y.chair}
                    />
                  );
                })}
              </div>

              <h2 className="p-2">Publication Committee</h2>
              <div className="row m-0 px-0 justify-content-center">
                {publ.map((y) => {
                  return (
                    <PeopleCard
                      name={y.name}
                      desg={y.desg}
                      college={y.college}
                      chair={y.chair}
                    />
                  );
                })}
              </div>

              <h2 className="p-2">Chief Guests, Keynote & Session Resource Persons Committee</h2>
              <div className="row m-0 px-0 justify-content-center">
                {guests_Respers.map((y) => {
                  return (
                    <PeopleCard
                      name={y.name}
                      desg={y.desg}
                      college={y.college}
                      chair={y.chair}
                    />
                  );
                })}
              </div>

              <h2 className="p-2">Hospitality & Report Committee</h2>
              <div className="row m-0 px-0 justify-content-center">
                {hosp_report.map((y) => {
                  return (
                    <PeopleCard
                      name={y.name}
                      desg={y.desg}
                      college={y.college}
                      chair={y.chair}
                    />
                  );
                })}
              </div>

              <h2 className="p-2">Lunch, Refreshments & Accommodation Committee</h2>
              <div className="row m-0 px-0 justify-content-center">
                {acc.map((y) => {
                  return (
                    <PeopleCard
                      name={y.name}
                      desg={y.desg}
                      college={y.college}
                      chair={y.chair}
                    />
                  );
                })}
              </div>

              <h2 className="p-2">Event Management Committee</h2>
              <div className="row m-0 px-0 justify-content-center">
                {event.map((y) => {
                  return (
                    <PeopleCard
                      name={y.name}
                      desg={y.desg}
                      college={y.college}
                      chair={y.chair}
                    />
                  );
                })}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
