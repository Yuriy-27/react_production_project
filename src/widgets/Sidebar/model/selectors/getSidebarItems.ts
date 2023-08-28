import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import HomeIcon from '@/shared/assets/icons/home-24-24.svg';
import AboutIcon from '@/shared/assets/icons/about-24-24.svg';
import ProfileIcon from '@/shared/assets/icons/profile-24-24.svg';
import ArticleIcon from '@/shared/assets/icons/article-24-24.svg';
import { SidebarItemType } from '../types/sidebar';
import {
  getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile,
} from '@/shared/constants/router';

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userAuthData) => {
    const sidebarItemsList: SidebarItemType[] = [
      {
        path: getRouteMain(),
        text: 'home_page_nav',
        Icon: HomeIcon,
      },
      {
        path: getRouteAbout(),
        text: 'about_page_nav',
        Icon: AboutIcon,
      },
    ];

    if (userAuthData) {
      sidebarItemsList.push(
        {
          path: getRouteProfile(userAuthData.id),
          text: 'profile_page_nav',
          Icon: ProfileIcon,
          authOnly: true,
        },
        {
          path: getRouteArticles(),
          text: 'articles_page_nav',
          Icon: ArticleIcon,
          authOnly: true,
        },
      );
    }

    return sidebarItemsList;
  },
);
