# Image Uploader

A Next.js (TypeScript) solution for the [Image Uploader Challenge](https://devchallenges.io/challenges/O2iGT9yBd6xZBrOcVirx) on [devChallenges](https://devchallenges.io/).

Live demo (version) available at: https://image-uploader-taupe.vercel.app/

## Description

This project was built to complete all the user stories listed or described by the challenge itself. Hence in this project, a user can:

- Drag and drop an image to upload it
- Cchoose to select an image from any folder
- See a loader when uploading
- Can see the uploaded image and copy it
- Choose to copy to the clipboard

## Installation

1. To get this project files locally on your machine, you can clone this repository by running the following command on your terminal or command line:

```bash
git clone https://github.com/cvrlnolan/image-uploader
```

2. Next, you need to setup the .env file found in the root with the appropriate API Keys & credentials from the following service providers:

- [Cloudinary (optional)](https://cloudinary.com/)
- [Google Firebase](https://firebase.google.com/)

3. Install all the dependency packages found in the `package.json` file by running `yarn install` or `npm install` from the project root directory.

4. Initialize `tailwindcss` by running `npx tailwindcss init -p` to generate the `tailwind.config.js` and `postcss.config.js` configuration files.

5. To start the development server of the application, run `npm run dev` or `yarn dev`. This should log some start-up application information & display the development server url: `http://localhost:3000`. Visit http://localhost:3000 to view your application.

## Usage

### General

This application was built reflecting the MVC architecture and the main dependencies(all found in the `package.json`) of the application are organised as so:

- Front-end User Interface(UI): [Tailwindcss](https://tailwindcss.com/)
- File Storage: [Firebase Storage](https://firebase.google.com/products/storage/)

Other important services & dependency libraries of the application include:

- [react-dropzone](https://react-dropzone.js.org/): Simple React hook to create a HTML5-compliant drag'n'drop zone for files.
- [react-copy-to-clipboard](https://www.npmjs.com/package/react-copy-to-clipboard): A copy to clipboard React component.
- [axios](https://www.npmjs.com/package/axios): An http client to fetch urls and make api calls or requests to the [Cloudinary API]().

### Directives

The application is organized from the root(`.`) as follows:

- `./page/` folder(integrated by NextJS) contains the UI Views for the application with the exception of the `./page/api/*` sub-folder.
- `./lib/` folder contains the Firebase initialization configuration file.
- `./components/` folder contains coded UI layouts to be used through out the application.
- `./styles/` folder(integrated by NextJS) contains the global style of the application in which Tailwindcss presets have been defined. The global stylesheet is accessible by all components.
- `./public/` folder(integrated by NextJS) contains global files to be shared through the application. You can store static images here.

Absolute imports to any of these folders through the application are configured in the `tsconfig.json` file in the root.

### Deployment

You may eventually want to deploy a live version of your app in a future instance. [Vercel](https://vercel.com/) platform is suitably built fo the deployment of NextJS application and more as they have an integrated environment to deploy directly from your own [Github Repository](https://github.com/new).

## Support

If any worries, bugs or problem arises in the future, you can create an issue, contribute or contact me via:

- [carlnolan@lootyclub.com](mailto:carlnolan@lootyclub.com)

## License

![GitHub](https://img.shields.io/github/license/cvrlnolan/image-uploader)

###

![GitHub last commit](https://img.shields.io/github/last-commit/cvrlnolan/image-uploader) ![GitHub contributors](https://img.shields.io/github/contributors/cvrlnolan/image-uploader) ![GitHub issues](https://img.shields.io/github/issues/cvrlnolan/image-uploader) ![GitHub repo size](https://img.shields.io/github/repo-size/cvrlnolan/image-uploader)

![GitHub followers](https://img.shields.io/github/followers/cvrlnolan?style=social) ![Twitter Follow](https://img.shields.io/twitter/follow/realcarlnolan?style=social)
