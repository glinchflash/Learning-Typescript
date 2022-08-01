# Learning-Typescript
---

### Objective
Learn about typescript and SOLID typescript. Understanding how it works, and be able to explain it as clear as possible.


## exercise progress
- [x] 0.S
  - extra challenge still to do
- [x] 1.0
- [ ] 2.L
- [ ] 3.I
- [ ] 4.D
---

## exercise solutions
1. 0.S
    - make classes for engine and radio
    - fuel goes into the engine class
    - make engine and radio property in class Car and initiate new object from engine and radio in the constructor of Car
    - getters for radio and engine in Car class (so we can access the properties from the classes engine and radio)
    - in the engine class create functions for reducing fuel and adding mileage
    - call on the above-mentioned function in the Car class
    - Extra challenge TO-DO

2. 1.O
   - added a get sound(original makesound function) to all classes of the animals 
   - changed in the query selector to do "animal.sound"
   - added new class Meerkat
   - deleted all classes besides zoo and made 1 Animal class requiring type and sound as parameters, so I can make multiple animal objects with different types(species) and sounds
   - Classes Cat, Dog, Parrot, Meerkat extending from class Animal
   - decided to make separate files for every Class besides Zoo
   - refactored it to separate files and import/exported them
   - in Zoo class changed generic object(line 8,10 & 14) typings to "Animal" to fix "property x does not exist on value of type"

3. 2.L
   - made 3 new classes for, one for each kind of discount
   - dropped the original "discount" class
   - made a folder models, and created 3 files , one for each kind of discount
   - refactored classes to newly created files in models folder
     - this created issues with the im -/exporting 
     - spend multiple hours trying to fix this some of these along side the coaches
     - issues lie in problems with global config, and problems with typescript installment
     - due to not being able to fix the typescript installment issue (everything works fine besides the im/exporting)
     - went for the webpack solution
       - installed webpack through terminal
       - created an app folder and moved models and new.ts/js in the app folder
       - setup webpack config 
       - changed script tag in html to new created folder by webpack called dist
     - created a new file in models called "Interface" 
     - exported the interface
     - added the functions apply and showCalculations to the new interface
     - implemented the interface too the 3 classes (Fixed,Variable and No discount)
     - recompiled with webpack



#### webpack
Webpack compiles my .ts files to .js and bundles all the .ts files in the "app" folder to 1 big .js file called "app-bundle.js"
to install webpack in your project:
1. in your terminal go to your project folder (in case of multiple exercises/project in your folder, go to specific exercise folder)
2. enter following command in terminal: ```npm install --save-dev webpack webpack-cli typescript ts-loader```
3. followed by this command in terminal: ```touch webpack.config.js ```
4. create a "app" folder (commonly used name for this)
5. drop all models/.ts files inside app folder
6. inside webpack.config.js do the following
```ts
const path = require('path');

module.exports = {
   mode: "development",
   devtool: "inline-source-map",
   entry: {
      main: "./app/new.ts",
   },
   output: {
      path: path.resolve(__dirname, './dist'),
      filename: "app-bundle.js" // <--- Will be compiled to this single file
   },
   resolve: {
      extensions: [".ts", ".tsx", ".js"],
   },
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            loader: "ts-loader"
         }
      ]
   }
}
```
7. change "entry:{ main: lorem ipsum}" to your app/*filename.ts*
8. in terminal: ```npx webpack -w``` to auto-compile on change (will make webpack watch remove "-w" to compile once)
9. change script tag in html to src ```dist/app-bundle.js```



if you want to go back to javascript   
🠋 🠋 🠋 🠋 🠋 🠋 🠋 🠋 🠋 🠋 🠋 🠋 🠋 🠋 🠋 🠋 🠋 🠋 🠋 
![to return to javascript](images/meme.jpg)