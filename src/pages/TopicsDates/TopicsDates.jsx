
import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "./PresentationCarousel.css"; // Optional CSS file

const topics = [
  { title: "Artificial Intelligence", path: "/callForPapers/AI", bg: "nk-bg-2", image: "/images/ai.jpg" },
  { title: "Blockchain Technology", path: "/callForPapers/BT", bg: "nk-bg-3", image: "/images/blockchain.jpg" },
  { title: "Cloud Computing", path: "/callForPapers/CC", bg: "nk-bg-4", image: "/images/cloud.jpg" },
  { title: "Cyber Security", path: "/callForPapers/CS", bg: "nk-bg-5", image: "/images/cyber.jpg" },
  { title: "Data Science", path: "/callForPapers/DS", bg: "nk-bg-6", image: "/images/data.jpg" },
  { title: "E-Commerce", path: "/callForPapers/EC", bg: "nk-bg-7", image: "/images/ecommerce.jpg" },
  { title: "Computer Architectures", path: "/callForPapers/HPCA", bg: "nk-bg-8", image: "/images/architectures.jpg" },
  { title: "Image and Video Processing", path: "/callForPapers/IMP", bg: "nk-bg-9", image: "/images/image-video.jpg" },
  { title: "Pandemic Preparedness", path: "/callForPapers/PPD", bg: "nk-bg-10", image: "/images/pandemic.jpg" },
  { title: "Pattern Recognition", path: "/callForPapers/PRC", bg: "nk-bg-11", image: "/images/pattern.jpg" },
];

const PresentationCarousel = () => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div className="mt-3 p-0 text-light nk-bg-1">
      <h2 className="text-center mb-4">Presentation Topics</h2>
      <Slider {...settings}>
        {topics.map((topic, index) => (
          <div
            key={index}
            className={`p-4 ${topic.bg}`}
            style={{ cursor: "pointer", height: "250px", position: "relative" }}
            onClick={() => navigate(topic.path)}
          >
            <img
              src={topic.image}
              alt={topic.title}
              style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.7 }}
            />
            <h5
              style={{
                position: "absolute",
                bottom: "10%",
                left: "50%",
                transform: "translateX(-50%)",
                color: "white",
                fontWeight: "bold",
                fontSize: "20px",
                textAlign: "center",
                letterSpacing: "0.05rem",
              }}
            >
              {topic.title}
            </h5>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PresentationCarousel;
