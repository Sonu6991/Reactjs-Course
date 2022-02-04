import React from "react";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import UserDetail from "../pages/UserDetail";
import Users from "../pages/Users";

interface Page {
      readonly url: string;
      readonly title: string;
      readonly component: typeof React.Component | React.FC | any;
}

export const routes: Page[] = [
      {
            title: 'Home',
            url: '/home',
            component: Home,
      },
      {
            title: 'Dashboard',
            url: '/dashboard',
            component: Dashboard,
      },
      {
            title: 'User list',
            url: '/dashboard/users',
            component: Users,
      },
      {
            title: 'User Detail',
            url: '/dashboard/users/:id',
            component: UserDetail,
      },
]