import { PlusCircleIcon, CogIcon, LogoutIcon, BriefcaseIcon, TemplateIcon, UserIcon } from "@heroicons/react/outline";

export const navLinks = [
  {
    id: 0,
    title: "Dashboard",
    icon: <TemplateIcon className="nav-icon" />,
  },
  {
    id: 1,
    title: "Your Jobs",
    icon: <BriefcaseIcon className="nav-icon" />,
  },
  {
    id: 2,
    title: "Your Internships",
    icon: <UserIcon className="nav-icon" />,
  },
  {
    id: 3,
    title: "Add Job",
    icon: <PlusCircleIcon className="nav-icon" />,
  },
  {
    id: 4,
    title: "Settings",
    icon: <CogIcon className="nav-icon" />,
  },
  {
    id: 5,
    title: "LogOut",
    icon: <LogoutIcon className="nav-icon" />,
  },
];