# Learning-Typescript
---

### Objective
Learn about typescript and SOLID typescript. Understanding how it works, and be able to explain it as clear as possible.


## exercise progress
- [x] 0.S
  - extra challenge still to do
- [x] 1.0
- [x] 2.L
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
     - spend multiple hours trying to fix this some of these alongside the coaches
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
     - implemented the interface to the 3 classes (Fixed,Variable and No discount)
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


### OOP
So what is OOP? Well Object-Oriented-Programming of course! Still no clue? Ok!

OOP or object-oriented-programming means we structure our code with classes and objects
a class you can define as a "blueprint" (for example: Animal) -> there are many animals, but they all have something in common
they have a species for example.
now the object we create from this class/blueprint will take the properties of this class, but of course not all animals have the same species.
so we make getters and setters, so we can set the info with our setter of what kind of species our animal is & we use get the info with our getter.

this way we don't have to make a whole new animal every time we need one, we just create a new object from our class/blueprint
alter a few small things and done! YAAAAAY!

### Pillars of OOP 
1. Encapsulation
  - encapsulating all data(and it's methods/functions that use the data) in a single unit,
   and removing access from outside this unit if necessary.
      - Child explanation: put all your lego in your lego box, all the monopoly money in the monopoly box, all the marbles in the marble-box
      then put all of these in 1 big box, so you can bring it along easily, but they don't get intertwined. So when you want to play with the lego, there is only lego there! Don't need marbles or monopoly money in your lego do we!
        <br><br>
2. Abstraction
      - Hiding away parts of the code, so you know it's doing something, but you don't know what it is doing and how it works (which isn't necessary either for this)
        - Child explanation: When we make coffee, we press the button on the espresso machine, we don't have any clue what it is doing inside , but we do know after a few minutes we will have coffee!
          <br><br>
3. Inheritance
   - When creating classes(our blueprints) we can also make classes extend from others (making this the child from the original class). 
   When doing, so we can pass on the properties of the parent class but also give the child new properties of its own.
      -. Child explanation: Tommy is a blond haired boy with a slightly pointed nose, his mother is blond haired as well, so he got it from her. While his father has a pointed nose so there he got his nose from!
           these traits (properties so to speak) he inherited from his parents, but Tommy knows how to play football while neither of his parents know  this is the trait(property) of himself.
     <br><br>
4. Polymorphism
   - Allows use to use the same function/method in multiple ways (on multiple objects f.e.).
        When we create a method called makeSound() we can call that function in our objects dog, cat, lion.
     but when they then do make a sound they all give us a different result in sound-> using the same method but getting different results based on where it is used.
     - Child explanation:Three animals are on a show and are given the command "Speak". The dog barks, duck quacks, cat meows.
       From here we see that they hear the same command but give different sounds according to their type.
---
### SOLID
1. Single responsibility principle
    - A class should only have one responsibility, example:
        a user class could hold methods for changing credentials, checking credentials. But this breaks the single responsibility principle.
        we should split this up into 2 classes, one for changing the credentials and one for checking them, so each class has only a single responsibility.
      <br><br>
2. Open-closed principle
   - A class should be open for extension but closed for modification. We should be able to add new data to our class, but nothing should be able to alter the code and structure of the class from the outside.
     <br><br>
3. Liskov substitute principle
   - Classes can have subclasses(child Class) when we use this, the subclass has inherited properties/methods from its superclass(Parent Class).<br><br>
        But sometimes this is incorrect (bird class with fly method, not all birds can fly).
        So we follow the Single responsibility principle and make 2 super classes one for flying birds and one for swimming birds (methods), and create our subclasses accordingly.<br><br>
        For the methods we say it needs a dependency (parameter) of which kind of bird, so only the subclass of said superclass will be able to use the method, but the superclass on its own can work as well.
     <br><br>
4. Interface segregation principle
    - Having 1 big interface is breaking the Single responsibility principle since it is most likely handling  more then one responsibility at once.
        By splitting up in to multiple small interfaces we can easily maintain our code and also have more readability.
        since most languages accept implementation of multiple interfaces to a single class, we don't have to create big beefy interfaces and lose track of which part is applicable for this class.
        <br><br>
5. Dependency inversion principle
---
if you want to go back to javascript   
🠋 🠋 🠋 🠋 🠋 🠋 🠋 🠋 🠋 🠋 🠋 🠋 🠋 🠋 🠋 🠋 🠋 🠋 🠋 
![to return to javascript](images/meme.jpg)