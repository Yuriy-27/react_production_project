import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { Article, ArticleBlockType, ArticleType } from 'entities/Article';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import ArticleDetailsPage from './ArticleDetailsPage';

export default {
  title: 'pages/ArticleDetailsPage',
  component: ArticleDetailsPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = () => <ArticleDetailsPage />;

const article: Article = {
  id: '1',
  title: 'Javascript news',
  subtitle: 'Javascript news subtitle',
  img: 'https://cdn.vectorstock.com/i/1000x1000/74/38/water-wave-js-logo-swoosh-letter-js-logo-design-vector-37697438.webp',
  views: 1000,
  createdAt: '29.03.2023',
  type: [ArticleType.IT, ArticleType.NEWS],
  blocks: [
    {
      id: '1',
      type: ArticleBlockType.TEXT,
      title: 'Block title',
      paragraphs: [
        'The program, which is traditionally called «Hello, world!», Is very simple. It outputs the phrase «Hello, world!», Or some other similar phrase, somewhere using some language.', "JavaScript is a language in which programs can be run in different environments. In our case, we are talking about browsers and the Node.js server platform. If you have not written a single line of JS code so far and you are reading this text in a browser, on desktop, it means you're literally seconds away from your first JavaScript program.",
        'There are other ways to run JS code in the browser. For example, if we talk about the usual use of JavaScript programs, they are loaded into the browser to provide web pages. Typically, the code is formatted as separate .js files that include to web pages, but code can also be included directly in the page code. All this is done using the <script> tag. When the browser detects such code, it executes it. For details about the script tag, see w3school.com. In particular , consider an example that demonstrates working with a web page using JavaScript, given on this resource.This example can be run using this resource (look for the Try it Yourself button), but we will do it a little differently. Namely, we will create in some text editor (for example - in VS Code or in Notepad++) a new file, which we will call hello.html, and add the following code to it:',
      ],
    },
    {
      id: '4',
      type: ArticleBlockType.CODE,
      code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
    },
    {
      id: '5',
      type: ArticleBlockType.TEXT,
      title: 'Block title',
      paragraphs: [
        'The program, which is traditionally called «Hello, world!», Is very simple. It outputs the phrase «Hello, world!», Or some other similar phrase, somewhere using some language.',
        "JavaScript is a language in which programs can be run in different environments. In our case, we are talking about browsers and the Node.js server platform. If you have not written a single line of JS code so far and you are reading this text in a browser, on desktop, it means you're literally seconds away from your first JavaScript program.",
        'There are other ways to run JS code in the browser. For example, if we talk about the usual use of JavaScript programs, they are loaded into the browser to provide web pages. Typically, the code is formatted as separate .js files that include to web pages, but code can also be included directly in the page code. All this is done using the <script> tag. When the browser detects such code, it executes it. For details about the script tag, see w3school.com. In particular , consider an example that demonstrates working with a web page using JavaScript, given on this resource.This example can be run using this resource (look for the Try it Yourself button), but we will do it a little differently. Namely, we will create in some text editor (for example - in VS Code or in Notepad++) a new file, which we will call hello.html, and add the following code to it:',
      ],
    },
    {
      id: '2',
      type: ArticleBlockType.IMAGE,
      src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
      title: 'Picture 1 - site screenshot',
    },
    {
      id: '3',
      type: ArticleBlockType.CODE,
      code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
    },
    {
      id: '7',
      type: ArticleBlockType.TEXT,
      title: 'Block title',
      paragraphs: [
        "JavaScript is a language in which programs can be run in different environments. In our case, we are talking about browsers and the Node.js server platform. If you have not written a single line of JS code so far and you are reading this text in a browser, on desktop, it means you're literally seconds away from your first JavaScript program.",
        'There are other ways to run JS code in the browser. For example, if we talk about the usual use of JavaScript programs, they are loaded into the browser to provide web pages. Typically, the code is formatted as separate .js files that include to web pages, but code can also be included directly in the page code. All this is done using the <script> tag. When the browser detects such code, it executes it. For details about the script tag, see w3school.com. In particular , consider an example that demonstrates working with a web page using JavaScript, given on this resource.This example can be run using this resource (look for the Try it Yourself button), but we will do it a little differently. Namely, we will create in some text editor (for example - in VS Code or in Notepad++) a new file, which we will call hello.html, and add the following code to it:',
      ],
    },
    {
      id: '8',
      type: ArticleBlockType.IMAGE,
      src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
      title: 'Image 1 - screenshot of the site',
    },
    {
      id: '9',
      type: ArticleBlockType.TEXT,
      title: 'Block title',
      paragraphs: [
        "JavaScript is a language in which programs can be run in different environments. In our case, we are talking about browsers and the Node.js server platform. If you have not written a single line of JS code so far and you are reading this text in a browser, on desktop, it means you're literally seconds away from your first JavaScript program.",
      ],
    },
  ],
};

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
  articleDetails: {
    data: article,
  },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
