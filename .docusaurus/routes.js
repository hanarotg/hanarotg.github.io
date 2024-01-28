import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '395'),
    exact: true
  },
  {
    path: '/blog/about-me',
    component: ComponentCreator('/blog/about-me', '067'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '7f8'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '911'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '8ea'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'c19'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'b54'),
        routes: [
          {
            path: '/tags',
            component: ComponentCreator('/tags', 'd7a'),
            exact: true
          },
          {
            path: '/tags/android',
            component: ComponentCreator('/tags/android', '27c'),
            exact: true
          },
          {
            path: '/tags/docusaurus',
            component: ComponentCreator('/tags/docusaurus', '0fe'),
            exact: true
          },
          {
            path: '/tags/git',
            component: ComponentCreator('/tags/git', '66f'),
            exact: true
          },
          {
            path: '/',
            component: ComponentCreator('/', 'f0a'),
            routes: [
              {
                path: '/android/2024-01-28-build-release-android-app',
                component: ComponentCreator('/android/2024-01-28-build-release-android-app', '2f4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/android',
                component: ComponentCreator('/category/android', '848'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/docusaurus',
                component: ComponentCreator('/category/docusaurus', '6fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/flutter',
                component: ComponentCreator('/category/flutter', 'cbc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/software',
                component: ComponentCreator('/category/software', '6e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flutter/create-a-blog-post',
                component: ComponentCreator('/flutter/create-a-blog-post', 'c6d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/software/docusaurus/2024-01-28-docusaurus-deploy copy',
                component: ComponentCreator('/software/docusaurus/2024-01-28-docusaurus-deploy copy', 'b29'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/software/docusaurus/2024-01-29-docusaurus-all-in-one-script',
                component: ComponentCreator('/software/docusaurus/2024-01-29-docusaurus-all-in-one-script', '326'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', '96c'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
