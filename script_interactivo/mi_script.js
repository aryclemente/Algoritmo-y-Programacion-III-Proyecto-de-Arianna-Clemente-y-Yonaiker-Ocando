import fs from 'fs';
import inquirer from 'inquirer';
   
   inquirer.prompt([
    {
        type: 'input',
        name: 'filepath',
        message: 'Por favor, introduce la ruta del archivo que deseas manipular:'
    }
])
.then(answers => {
    fs.readFile(answers.filepath, 'utf8', (err, data) => {
        if (err) throw err;

        const newData = data.toUpperCase();

        fs.writeFile('new_file.txt', newData, err => {
            if (err) throw err;
            console.log('¡Archivo guardado con éxito!');
        });
    });
});