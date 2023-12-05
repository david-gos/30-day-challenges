import { Button, Card } from "~/components";
import "./ProfileCard.css";
import img_profile from "~/assets/profile.jpg";
import { FaFacebookF, FaYoutube, FaTiktok, FaGithub } from "react-icons/fa";

export const ProfileCard = () => {
  const data = [
    {
      id: 1,
      name: "David Beck Long",
      position: "Fullstack Developer",
      img: img_profile,
      fb: "https://www.facebook.com/BaoLong.LeoIT/",
      yt: "https://www.youtube.com/watch?v=jfKfPfyJRdk",
      titok: "https://www.tiktok.com/@neymarjr",
      github: "https://github.com/david-gos",
    },
    {
      id: 2,
      name: "David Beck Long",
      position: "Fullstack Developer",
      img: img_profile,
      fb: "https://www.facebook.com/BaoLong.LeoIT/",
      yt: "https://www.youtube.com/watch?v=jfKfPfyJRdk",
      titok: "https://www.tiktok.com/@neymarjr",
      github: "https://github.com/david-gos",
    },
    {
      id: 3,
      name: "David Beck Long",
      position: "Fullstack Developer",
      img: img_profile,
      fb: "https://www.facebook.com/BaoLong.LeoIT/",
      yt: "https://www.youtube.com/watch?v=jfKfPfyJRdk",
      titok: "https://www.tiktok.com/@neymarjr",
      github: "https://github.com/david-gos",
    },
  ];

  return (
    <>
      <div className="container__profile">
        {data.map(item => (
          <Card key={item.id} variant="day2">
            <div className="card__profile-img">
              <img src={item.img} alt="none" />
            </div>

            <div className="card__profile-content">
              <h2>{item.name}</h2>
              <p>{item.position}</p>
            </div>

            <div className="card__profile-action">
              <a href={item.fb}>
                <FaFacebookF />
              </a>
              <a href={item.yt}>
                <FaYoutube />
              </a>
              <a href={item.titok}>
                <FaTiktok />
              </a>
              <a href={item.github}>
                <FaGithub />
              </a>
            </div>
            <div className="card__profile-btn">
              <Button variant="secondary" label="Contact me" />
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};
