# @storybook/styling debug

-   Run `npm install`
-   Run `npm start`

When `sideEffects` is present in `project.json`, Tailwind does not load with @storybook/styling.
```
 "sideEffects": [],
```

Adding/removing this from the package.json during runtime will cause the issue. No restart necessary.
