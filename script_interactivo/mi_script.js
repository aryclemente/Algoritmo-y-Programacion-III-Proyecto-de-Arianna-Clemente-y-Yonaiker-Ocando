import fs from "fs";
import inquirer from "inquirer";
import path from "path";

inquirer
  .prompt([
    {
      type: "input",
      name: "filepath",
      message:
        "Por favor, introduce la ruta especifica del archivo que deseas manipular:",
    },
  ])
  .then((answers) => {
    fs.readFile(answers.filepath, "utf8", (err, data) => {
      if (err) {
        console.error("Error al leer el archivo:", err);
        return;
      }

      const newData = data.toUpperCase();

      fs.writeFile("new_file.txt", newData, (err) => {
        if (err) {
          console.error("Error al guardar el resultado:", err);
          return;
        }
        console.log("¡Archivo guardado con éxito!");
      });
    });
  });
