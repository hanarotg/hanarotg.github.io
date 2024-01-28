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
    path: '/docs',
    component: ComponentCreator('/docs', '737'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'd7b'),
        routes: [
          {
            path: '/docs/tags',
            component: ComponentCreator('/docs/tags', '0cc'),
            exact: true
          },
          {
            path: '/docs/tags/android',
            component: ComponentCreator('/docs/tags/android', 'e3a'),
            exact: true
          },
          {
            path: '/docs/tags/docusaurus',
            component: ComponentCreator('/docs/tags/docusaurus', 'ebb'),
            exact: true
          },
          {
            path: '/docs/tags/git',
            component: ComponentCreator('/docs/tags/git', '994'),
            exact: true
          },
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'fcd'),
            routes: [
              {
                path: '/docs/android/build-release-android-app',
                component: ComponentCreator('/docs/android/build-release-android-app', '0ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/android',
                component: ComponentCreator('/docs/category/android', '7ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/android-1',
                component: ComponentCreator('/docs/category/android-1', '9b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/flutter',
                component: ComponentCreator('/docs/category/flutter', '862'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/flutter/create-a-blog-post',
                component: ComponentCreator('/docs/flutter/create-a-blog-post', '5ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', 'aed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/software/docusaurus-deploy',
                component: ComponentCreator('/docs/software/docusaurus-deploy', 'acb'),
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
    path: '/',
    component: ComponentCreator('/', '8ea'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
