module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
            @import "@/assets/scss/global.scss";
            @import "@/assets/scss/_variables.scss";
            @import "@/assets/scss/_fonts.scss";
          `,
      },
    },
  },
  pwa: {
    name: "Swapup",
    themeColor: '#7a5ebf',
    msTileColor: '#faf9f9',
    iconPaths: {
      favicon32: 'public/icons/icon-32x32.png',
      favicon16: 'public/icons/icon-16x16.png',
    }
  }
};
