import React from 'react';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePaths.main,
    text: 'home_page_nav',
    Icon: HomeIcon,
  },
  {
    path: RoutePaths.about,
    text: 'about_page_nav',
    Icon: AboutIcon,
  },
  {
    path: RoutePaths.profile,
    text: 'profile_page_nav',
    Icon: ProfileIcon,
    authOnly: true,
  },
];
