module.exports = {
  linters: {
    '**/*.+(js|ts|sass|less|graphql|yml|yaml|scss|vue)': [
      'eslint --fix',
      'prettier --write',
      'git add',
    ],
  },
};
