import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineComment,
  AiOutlineSend,
  AiOutlineBook,
  AiFillBook,
  AiOutlineHome,
  AiFillHome,
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlinePlusCircle,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { BiCamera, BiCompass } from "react-icons/bi";
import { BsMusicNote, BsPerson } from "react-icons/bs";

export const Icon = ({
  name,
  size = 24,
  color = "white",
  filled = false,
  onClick,
  className = "",
}) => {
  const icons = {
    // Navigation
    home: filled ? AiFillHome : AiOutlineHome,
    user: BsPerson, // Using BsPerson instead of AiFillUser
    userOutline: AiOutlineUser,

    // Actions
    heart: filled ? AiFillHeart : AiOutlineHeart,
    comment: AiOutlineComment,
    share: AiOutlineSend,
    bookmark: filled ? AiFillBook : AiOutlineBook,

    // Media
    camera: BiCamera,
    music: BsMusicNote,

    // Navigation bottom
    explore: BiCompass,
    search: AiOutlineSearch,
    create: AiOutlinePlusCircle,

    // UI
    menu: AiOutlineMenu,
    close: AiOutlineClose,
  };

  const IconComponent = icons[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return (
    <button
      onClick={onClick}
      className={`p-1 hover:scale-110 transition-transform duration-200 ${className}`}
      aria-label={name}
    >
      <IconComponent size={size} color={color} />
    </button>
  );
};
