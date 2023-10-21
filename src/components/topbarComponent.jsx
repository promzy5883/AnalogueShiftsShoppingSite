import { useState, useEffect } from "react";
import LanguageDropdownComponent from "./langDropdown";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

export default function TopbarComponent() {
  const [languageSelected, setLanguageSelected] = useState("en");
  const [dropdown, setDropdown] = useState(false);
  const { t, i18n } = useTranslation();

  const [flag, setFlag] = useState("/images/usa-flag.webp");

  useEffect(() => {
    setDropdown(false);
    i18n.changeLanguage(languageSelected);
    if (languageSelected === "en") {
      setFlag("/images/usa-flag.webp");
    } else if (languageSelected === "german") {
      setFlag("/images/germany-flag.webp");
    } else if (languageSelected === "french") {
      setFlag("/images/french-flag.png");
    } else {
      setFlag("/images/spanish-flag.png");
    }
  }, [languageSelected]);
  return (
    <div className="px-28 flex w-full items-center border-b max-[1000px]:px-12 max-[800px]:px-0">
      <div className="w-11/12 h-14  grid grid-cols-7 max-[900px]:w-[80%]">
        <div className="col-span-2 border-r h-full flex items-center gap-2.5 max-[900px]:hidden">
          <i class="fa-solid fa-envelope text-PrimaryBlack "></i>
          <p className="text-PrimaryBlack">cinnamon19fashion@gmail.com</p>
        </div>
        <div className="col-span-4 border-r flex justify-between w-full items-center px-6 max-[900px]:hidden">
          <div className="flex gap-2.5 items-center ">
            <i class="fa-solid fa-phone text-PrimaryBlack text-xs"></i>
            <p className="text-PrimaryBlack">+2348031376569</p>
          </div>
          <div className="flex gap-4 items-center">
            <a href="">
              <i class="fa-brands fa-facebook-f text-PrimaryBlack text-sm"></i>
            </a>
            <a href="">
              <i class="fa-brands fa-twitter text-PrimaryBlack text-sm"></i>
            </a>
            <a href="">
              <i class="fa-brands fa-linkedin-in text-PrimaryBlack text-sm"></i>
            </a>
            <a href="">
              <i class="fa-brands fa-pinterest-p text-PrimaryBlack text-sm"></i>
            </a>
          </div>
        </div>
        <div
          onClick={() => setDropdown((prev) => !prev)}
          className="col-span-1 border-r h-full flex items-center justify-between px-4 cursor-pointer relative max-[900px]:col-span-7 max-[900px]:justify-end max-[900px]:gap-8"
        >
          <div className="flex items-center gap-2">
            <img src={flag} alt="" className="w-8 h-5" />
            <p className="text-PrimaryBlack text-sm">
              {languageSelected === "en" && "English"}{" "}
              {languageSelected === "german" && "German"}
              {languageSelected === "french" && "French"}
              {languageSelected === "spanish" && "Spanish"}
            </p>
          </div>
          <i class="fa-solid fa-angle-down text-PrimaryBlack text-xs"></i>
          {dropdown && (
            <LanguageDropdownComponent
              clicked={(language) => {
                setLanguageSelected(language);
              }}
            />
          )}
        </div>
      </div>
      <Link
        to="/login"
        className="w-1/12 max-[900px]:w-[20%] h-14 flex justify-end items-center gap-2 max-[900px]:justify-center"
      >
        <i class="fa-solid fa-user text-PrimaryBlack text-xs"></i>
        <p className="text-PrimaryBlack text-sm">Login</p>
      </Link>
    </div>
  );
}
