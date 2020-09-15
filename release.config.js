module.exports = new Promise(async (resolve) => {
    resolve({
        verifyConditions: [],
        verifyRelease: ['@semantic-release/npm', '@semantic-release/git']
            .map(require)
            .map(x => x.verifyConditions),
        plugins: [
            "@semantic-release/commit-analyzer",
            "@semantic-release/release-notes-generator",
            "@semantic-release/npm",
            "@semantic-release/git",
            "@semantic-release/github",
        ],
        branches: ["master", "next", {name: "beta", prerelease: true}]
    });
});
