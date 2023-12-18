module.exports = {
  branches: ["main"],
  verifyConditions: [
    "semantic-release-expo",
    "@semantic-release/changelog",
    "@semantic-release/git",
  ],
  prepare: [
    {
      path: "semantic-release-expo",
      versions: {
        version: "${next.raw}",
        android: "${increment}",
        ios: "${next.raw}",
      },
    },
    "@semantic-release/changelog",
    {
      path: "@semantic-release/git",
      message:
        "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      assets: [
        "CHANGELOG.md",
        "package.json",
        "package-lock.json",
        "app.json",
        "eas.json",
      ],
    },
  ],
  publish: [
    [
      "@semantic-release/github",
      {
        assets: [
          "CHANGELOG.md",
          "package.json",
          "package-lock.json",
          "app.json",
          "eas.json",
        ],
      },
    ],
  ],
  success: false,
  fail: false,
};
