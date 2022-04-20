// const Scraper = require("images-scraper");

// const google = new Scraper({
//     puppeteer: {
//       headless: true,
//     },
//   });
  

// module.exports = {
//     name: "image",
//     description: "this sends a img to discord txt channel",
//     async execute(clietn, message, args) {
//         const image_query = args.join('');
//         if (!image_query) return message.channel.send("Skriv inn et bildenavn");

//         const image_results = await google.scrape(image_query, 1);
//         message.channel.send(image_results[0].url);
            
//     }
// }
