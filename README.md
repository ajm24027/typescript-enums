# typescript-enums

### What is an Enum

Enums are short for "enumeration," and is a data type that consists of a set of named values "enumerators" or "constants", that represent various options or states.

In our example the "enumerations" of our enumerated object called "directions" will represent various directions:

```typescript
enum Direction {
  North = 'North',
  South = 'South',
  East = 'East',
  West = 'West'
}
```

Enumerated objects are a little bit like classes, in that there's a difference between creating the enumerated object and a constant that might share the same name, see below:

```typescript
enum Direction {
  North = 'North',
  South = 'South',
  East = 'East',
  West = 'West'
}

const direction: Direction = Direction.North
```

We're creating a variable that is only allowed to accept values from the enum that created hence the ": Direction" portion of the code.
