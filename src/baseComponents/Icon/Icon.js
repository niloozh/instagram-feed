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
  AiOutlineSetting,
  AiOutlineAppstore,
  AiOutlineVideoCamera,
  AiOutlineSearch,
  AiOutlinePlusCircle,
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineCamera,
} from "react-icons/ai";
import { BiCompass } from "react-icons/bi";
import { BsMusicNote, BsPerson, BsPersonFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

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
    profile: FaUser,
    user: filled ? BsPersonFill : BsPerson,
    userOutline: AiOutlineUser,

    // Actions
    heart: filled ? AiFillHeart : AiOutlineHeart,
    comment: AiOutlineComment,
    share: AiOutlineSend,
    bookmark: filled ? AiFillBook : AiOutlineBook,

    // Settings menu
    settings: AiOutlineSetting,
    grid: AiOutlineAppstore,
    video: AiOutlineVideoCamera,

    // Media
    camera: AiOutlineCamera,
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

  // If onClick is provided, wrap in button, otherwise just render icon
  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={`p-1 hover:scale-110 transition-transform duration-200 ${className}`}
        aria-label={name}
      >
        <IconComponent size={size} color={color} />
      </button>
    );
  }

  return <IconComponent size={size} color={color} className={className} />;
};
