# Dictionary Take Home Assignment
## Disclaimers: I used ChatGPT for the valid word finding solution + Setup the Tamagui + Solito + Next + Expo Monorepo using the Tamagui starter (see it's README below)

## Files to checkout 
[`packages/app/features/dictionary/utils/getListOfValidWords.ts`](https://github.com/tsukudabuddha/dictionary/blob/main/packages/app/features/dictionary/utils/getListOfValidWords.ts)
- function that was requested for the take home

[`packages/app/features/dictionary/detail-screen.tsx`](https://github.com/tsukudabuddha/dictionary/blob/main/packages/app/features/dictionary/detail-screen.tsx)
- Screen that takes in string input

[`packages/app/features/dictionary/sheet.tsx`](https://github.com/tsukudabuddha/dictionary/blob/main/packages/app/features/dictionary/sheet.tsx)
- Sheet that displays the input text + the words that can be created from it

[`packages/app/features/dictionary/constants/dictionary.ts`](https://github.com/tsukudabuddha/dictionary/blob/main/packages/app/features/dictionary/constants/dictionary.ts)
- Not particularly interesting, it's just the list of words the app is using. It's a list of >350 of the most common English words + some I added for testing.




# Tamagui + Solito + Next + Expo Monorepo README

```sh
npm create tamagui
```

## 🔦 About

This monorepo is a starter for an Expo + Next.js + Tamagui + Solito app.

Many thanks to [@FernandoTheRojo](https://twitter.com/fernandotherojo) for the Solito starter monorepo which this was forked from. Check out his [talk about using expo + next together at Next.js Conf 2021](https://www.youtube.com/watch?v=0lnbdRweJtA).

## 📦 Included packages

- [Tamagui](https://tamagui.dev) 🪄
- [solito](https://solito.dev) for cross-platform navigation
- Expo SDK
- Next.js
- Expo Router

## 🗂 Folder layout

The main apps are:

- `expo` (native)
- `next` (web)

- `packages` shared packages across apps
  - `ui` includes your custom UI kit that will be optimized by Tamagui
  - `app` you'll be importing most files from `app/`
    - `features` (don't use a `screens` folder. organize by feature.)
    - `provider` (all the providers that wrap the app, and some no-ops for Web.)

You can add other folders inside of `packages/` if you know what you're doing and have a good reason to.

## 🏁 Start the app

- Install dependencies: `yarn`

- Next.js local dev: `yarn web`

To run with optimizer on in dev mode (just for testing, it's faster to leave it off): `yarn web:extract`. To build for production `yarn web:prod`.

To see debug output to verify the compiler, add `// debug` as a comment to the top of any file.

- Expo local dev: `yarn native`

## UI Kit

Note we're following the [design systems guide](https://tamagui.dev/docs/guides/design-systems) and creating our own package for components.

See `packages/ui` named `@my/ui` for how this works.

## 🆕 Add new dependencies

### Pure JS dependencies

If you're installing a JavaScript-only dependency that will be used across platforms, install it in `packages/app`:

```sh
cd packages/app
yarn add date-fns
cd ../..
yarn
```

### Native dependencies

If you're installing a library with any native code, you must install it in `expo`:

```sh
cd apps/expo
yarn add react-native-reanimated
cd ..
yarn
```

## Update new dependencies

### Pure JS dependencies

```sh
yarn upgrade-interactive
```

You can also install the native library inside of `packages/app` if you want to get autoimport for that package inside of the `app` folder. However, you need to be careful and install the _exact_ same version in both packages. If the versions mismatch at all, you'll potentially get terrible bugs. This is a classic monorepo issue. I use `lerna-update-wizard` to help with this (you don't need to use Lerna to use that lib).

You may potentially want to have the native module transpiled for the next app. If you get error messages with `Cannot use import statement outside a module`, you may need to use `transpilePackages` in your `next.config.js` and add the module to the array there.

### Deploying to Vercel

- Root: `./apps/next`
- Install command to be `yarn set version berry && yarn install`
- Build command: leave default setting
- Output dir: leave default setting
