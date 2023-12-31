import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: '테헤란의 왕자',
      logo: {
        src: '/public/favicon.svg',
        replacesTitle: true,
      },
      sidebar: [
        {
          label: '소개',
          autogenerate: { directory: '소개' },
        },
        {
          label: '파트 1: 애플 II',
          items: [
            {
              label: '다시 게임을 만들고 싶을까?',
              autogenerate: {
                directory: '파트_1_Apple_II/다시_게임을_만들고_싶을까',
              },
            },
          ],
        },
      ],
      tableOfContents: false,
      customCss: process.env.NO_GRADIENTS ? [] : ['./src/assets/landing.css'],
    }),
  ],
})
