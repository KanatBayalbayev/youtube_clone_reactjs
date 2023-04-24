import {
  faCode,
  faCoins,
  faDumbbell,
  faGamepad,
  faGlasses,
  faGraduationCap,
  faHouse,
  faMasksTheater,
  faMedal,
  faMusic,
  faPodcast,
  faShirt,
  faTowerBroadcast,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const categories = [
  { name: "New", icon: <FontAwesomeIcon icon={faHouse} /> },
  { name: "Coding", icon: <FontAwesomeIcon icon={faCode} /> },
  { name: "Frontend Development", icon: <FontAwesomeIcon icon={faCode} /> },
  { name: "ReactJS", icon: <FontAwesomeIcon icon={faCode} /> },
  { name: "Music", icon: <FontAwesomeIcon icon={faMusic} /> },
  { name: "Education", icon: <FontAwesomeIcon icon={faGraduationCap} /> },
  { name: "Podcast", icon: <FontAwesomeIcon icon={faPodcast} /> },
  { name: "Movie", icon: <FontAwesomeIcon icon={faVideo} /> },
  { name: "Gaming", icon: <FontAwesomeIcon icon={faGamepad} /> },
  { name: "Live", icon: <FontAwesomeIcon icon={faTowerBroadcast} /> },
  { name: "Sport", icon: <FontAwesomeIcon icon={faMedal} /> },
  { name: "Fashion", icon: <FontAwesomeIcon icon={faShirt} /> },
  { name: "Beauty", icon: <FontAwesomeIcon icon={faGlasses} /> },
  { name: "Comedy", icon: <FontAwesomeIcon icon={faMasksTheater} /> },
  { name: "Gym", icon: <FontAwesomeIcon icon={faDumbbell} /> },
  { name: "Crypto", icon: <FontAwesomeIcon icon={faCoins} /> },
];

export default categories;
