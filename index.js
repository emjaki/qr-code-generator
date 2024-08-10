// Purpose: This file is used to generate a QR code image and save the URL to a text file
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "What is the URL you would like to turn into a QR code?",
      name: "url",
    },
  ])
  .then((answers) => {
    const url = answers.url;
    const qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream("qr_image.png"));

    fs.writeFile("url.txt", url, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("File written successfully");
      }
    });
  });
