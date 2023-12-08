## typescript

```
tsc --init   -------------- to generate tsconfig.json file   
tsc          -------------- to run the file   #run tsc without the filename   
```
## Fundamentals od Typescript

TypeScript is a superset of JavaScript, meaning it includes all the features of JavaScript and adds optional typing information. This typing information helps to catch errors early in the development process and makes your code more readable and maintainable.

### what to learn: Built-in types

```
The any type  
Arrays  
Tuples  
Enums  
Functions  
Objects  
```

## Primitive Types:

number: Represents numeric values (integers, decimals).  
string: Represents sequences of characters.  
boolean: Represents true or false values.   
symbol: Represents unique identifiers.   
undefined: Represents the absence of a value.   
null: Represents the intentional absence of a value.   

## Structural Types:

object: Represents unconstrained objects.  
array: Represents ordered collections of values.  
function: Represents callable functions.   
void: Represents the absence of a return value.  

## Utility Types:

Partial<T>: Makes all properties of type T optional.   
Required<T>: Makes all properties of type T required.   
Readonly<T>: Makes all properties of type T readonly.    
Pick<T, K>: Creates a new type containing a subset of properties from type T.   
Record<K, T>: Creates a new type whose keys are of type K and values are of type T.   
Exclude<T, U>: Creates a new type that excludes all types from T that are assignable to U.   
Extract<T, U>: Creates a new type that includes all types from T that are assignable to U.   
NonNullable<T>: Removes null and undefined from the type T.   

## Other Built-in Types:

keyof T: Extracts the literal keys of object type T.   
infer E: Used in mapped types to infer the type of a variable within the mapping.   
ReturnType<T>: Extracts the return type of function type T.   
ConstructorParameters<T>: Extracts the parameter types of constructor type T.   