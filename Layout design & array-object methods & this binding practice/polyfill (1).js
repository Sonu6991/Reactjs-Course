/* Polyfill service v3.109.0
 * For detailed credits and licence information see https://github.com/financial-times/polyfill-service.
 *
 * Features requested: Array.from,Array.isArray,Array.of,Array.prototype.@@iterator,Array.prototype.copyWithin,Array.prototype.entries,Array.prototype.every,Array.prototype.fill,Array.prototype.filter,Array.prototype.find,Array.prototype.findIndex,Array.prototype.flat,Array.prototype.flatMap,Array.prototype.forEach,Array.prototype.includes,Array.prototype.indexOf,Array.prototype.keys,Array.prototype.lastIndexOf,Array.prototype.map,Array.prototype.reduce,Array.prototype.reduceRight,Array.prototype.some,Array.prototype.sort,Array.prototype.values,ArrayBuffer
 *
 * - _ESAbstract.ArrayCreate, License: CC0 (required by "Array.prototype.flatMap", "_ESAbstract.ArraySpeciesCreate")
 * - _ESAbstract.Call, License: CC0 (required by "Array.prototype.includes", "_ESAbstract.ToString", "_ESAbstract.ToPrimitive", "_ESAbstract.OrdinaryToPrimitive")
 * - _ESAbstract.CreateDataProperty, License: CC0 (required by "Array.from", "Set", "_ESAbstract.CreateIterResultObject")
 * - _ESAbstract.CreateDataPropertyOrThrow, License: CC0 (required by "Array.prototype.flatMap", "_ESAbstract.FlattenIntoArray")
 * - _ESAbstract.CreateMethodProperty, License: CC0 (required by "Array.prototype.@@iterator", "Array.prototype.values", "_ArrayIterator", "_Iterator", "Object.assign")
 * - _ESAbstract.Get, License: CC0 (required by "Array.prototype.@@iterator", "Array.prototype.values", "_ArrayIterator", "String.prototype.includes", "_ESAbstract.IsRegExp")
 * - _ESAbstract.HasOwnProperty, License: CC0 (required by "Array.prototype.@@iterator", "Array.prototype.values", "_ArrayIterator", "Object.setPrototypeOf", "Object.getOwnPropertyDescriptor")
 * - _ESAbstract.HasProperty, License: CC0 (required by "Array.prototype.flatMap", "_ESAbstract.FlattenIntoArray")
 * - _ESAbstract.IsArray, License: CC0 (required by "Array.prototype.flatMap", "_ESAbstract.FlattenIntoArray")
 * - _ESAbstract.IsCallable, License: CC0 (required by "Array.prototype.includes", "_ESAbstract.ToString", "_ESAbstract.ToPrimitive", "_ESAbstract.OrdinaryToPrimitive")
 * - _ESAbstract.RequireObjectCoercible, License: CC0 (required by "Array.prototype.@@iterator", "Array.prototype.values", "_ArrayIterator", "String.prototype.includes")
 * - _ESAbstract.SameValueNonNumber, License: CC0 (required by "Array.from", "Set", "_ESAbstract.SameValueZero")
 * - _ESAbstract.ToBoolean, License: CC0 (required by "Array.prototype.@@iterator", "Array.prototype.values", "_ArrayIterator", "String.prototype.includes", "_ESAbstract.IsRegExp")
 * - _ESAbstract.ToObject, License: CC0 (required by "Array.prototype.@@iterator", "Array.prototype.values", "_ArrayIterator", "_Iterator", "Object.assign")
 * - _ESAbstract.GetV, License: CC0 (required by "Array.from", "_ESAbstract.GetIterator")
 * - _ESAbstract.GetMethod, License: CC0 (required by "Array.prototype.includes", "_ESAbstract.ToString", "_ESAbstract.ToPrimitive")
 * - _ESAbstract.Type, License: CC0 (required by "Array.prototype.@@iterator", "Array.prototype.values", "_ArrayIterator", "Object.setPrototypeOf", "Object.getOwnPropertyDescriptor", "_ESAbstract.ToPropertyKey")
 * - _ESAbstract.CreateIterResultObject, License: CC0 (required by "Array.from", "Set")
 * - _ESAbstract.GetPrototypeFromConstructor, License: CC0 (required by "Array.from", "Set", "_ESAbstract.OrdinaryCreateFromConstructor")
 * - _ESAbstract.OrdinaryCreateFromConstructor, License: CC0 (required by "Array.from", "Set")
 * - _ESAbstract.IsConstructor, License: CC0 (required by "Array.prototype.flatMap", "_ESAbstract.ArraySpeciesCreate")
 * - _ESAbstract.Construct, License: CC0 (required by "Array.prototype.flatMap", "_ESAbstract.ArraySpeciesCreate")
 * - _ESAbstract.ArraySpeciesCreate, License: CC0 (required by "Array.prototype.flatMap")
 * - _ESAbstract.IsRegExp, License: CC0 (required by "Array.prototype.@@iterator", "Array.prototype.values", "_ArrayIterator", "String.prototype.includes")
 * - _ESAbstract.IteratorClose, License: CC0 (required by "Array.from", "Set")
 * - _ESAbstract.IteratorComplete, License: CC0 (required by "Array.from", "Set")
 * - _ESAbstract.IteratorNext, License: CC0 (required by "Array.from", "Set")
 * - _ESAbstract.IteratorStep, License: CC0 (required by "Array.from", "Set")
 * - _ESAbstract.IteratorValue, License: CC0 (required by "Array.from", "Set")
 * - _ESAbstract.OrdinaryToPrimitive, License: CC0 (required by "Array.prototype.includes", "_ESAbstract.ToString", "_ESAbstract.ToPrimitive")
 * - _ESAbstract.SameValueZero, License: CC0 (required by "Array.from", "Set")
 * - _ESAbstract.ToInteger, License: CC0 (required by "Array.prototype.@@iterator", "Array.prototype.values", "_ArrayIterator", "String.prototype.includes")
 * - _ESAbstract.ToLength, License: CC0 (required by "Array.prototype.flatMap", "_ESAbstract.FlattenIntoArray")
 * - _ESAbstract.ToPrimitive, License: CC0 (required by "Array.prototype.@@iterator", "Array.prototype.values", "_ArrayIterator", "Object.setPrototypeOf", "Object.getOwnPropertyDescriptor", "_ESAbstract.ToPropertyKey")
 * - _ESAbstract.ToString, License: CC0 (required by "Array.prototype.@@iterator", "Array.prototype.values", "_ArrayIterator", "Object.setPrototypeOf", "Object.getOwnPropertyDescriptor", "_ESAbstract.ToPropertyKey")
 * - _ESAbstract.FlattenIntoArray, License: CC0 (required by "Array.prototype.flatMap")
 * - _ESAbstract.ToPropertyKey, License: CC0 (required by "Array.prototype.@@iterator", "Array.prototype.values", "_ArrayIterator", "Object.setPrototypeOf", "Object.getOwnPropertyDescriptor")
 * - Array.of, License: CC0
 * - Array.prototype.copyWithin, License: MIT
 * - Array.prototype.fill, License: CC0
 * - Array.prototype.find, License: CC0
 * - Array.prototype.findIndex, License: CC0
 * - Array.prototype.flat, License: CC0
 * - Array.prototype.flatMap, License: CC0
 * - Array.prototype.includes, License: MIT (required by "Array.prototype.@@iterator", "Array.prototype.values", "_ArrayIterator", "Object.setPrototypeOf", "Object.getOwnPropertyNames")
 * - Array.prototype.sort, License: MIT
 * - ArrayBuffer, License: MIT
 * - Object.getOwnPropertyDescriptor, License: CC0 (required by "Array.prototype.@@iterator", "Array.prototype.values", "_ArrayIterator", "_Iterator", "Object.assign")
 * - Object.isExtensible, License: CC0 (required by "Array.from", "Map")
 * - Object.keys, License: MIT (required by "Array.prototype.@@iterator", "Array.prototype.values", "_ArrayIterator", "_Iterator", "Object.assign")
 * - Object.assign, License: CC0 (required by "Array.prototype.@@iterator", "Array.prototype.values", "_ArrayIterator", "_Iterator")
 * - Object.getOwnPropertyNames, License: CC0 (required by "Array.prototype.@@iterator", "Array.prototype.values", "_ArrayIterator", "Object.setPrototypeOf")
 * - Object.setPrototypeOf, License: MIT (required by "Array.prototype.@@iterator", "Array.prototype.values", "_ArrayIterator")
 * - String.prototype.includes, License: CC0 (required by "Array.prototype.@@iterator", "Array.prototype.values", "_ArrayIterator")
 * - Symbol, License: MIT (required by "Array.prototype.@@iterator", "Array.prototype.values", "_ArrayIterator", "_Iterator", "Symbol.toStringTag")
 * - Symbol.iterator, License: MIT (required by "Array.prototype.@@iterator", "Array.prototype.values", "_ArrayIterator", "_Iterator")
 * - _ESAbstract.GetIterator, License: CC0 (required by "Array.from", "Set")
 * - Symbol.species, License: MIT (required by "Array.from", "Set")
 * - Map, License: CC0 (required by "Array.from")
 * - Set, License: CC0 (required by "Array.from")
 * - Array.from, License: CC0
 * - Symbol.toStringTag, License: MIT (required by "Array.prototype.@@iterator", "Array.prototype.values", "_ArrayIterator", "_Iterator")
 * - _Iterator, License: MIT (required by "Array.prototype.@@iterator", "Array.prototype.values", "_ArrayIterator")
 * - _ArrayIterator, License: MIT (required by "Array.prototype.@@iterator", "Array.prototype.values")
 * - Array.prototype.entries, License: CC0
 * - Array.prototype.keys, License: CC0
 * - Array.prototype.values, License: MIT (required by "Array.prototype.@@iterator")
 * - Array.prototype.@@iterator, License: CC0 */

(function (self, undefined) {
  // _ESAbstract.ArrayCreate
  // 9.4.2.2. ArrayCreate ( length [ , proto ] )
  function ArrayCreate(length /* [, proto] */) {
    // eslint-disable-line no-unused-vars
    // 1. Assert: length is an integer Number ≥ 0.
    // 2. If length is -0, set length to +0.
    if (1 / length === -Infinity) {
      length = 0;
    }
    // 3. If length>2^32-1, throw a RangeError exception.
    if (length > Math.pow(2, 32) - 1) {
      throw new RangeError("Invalid array length");
    }
    // 4. If proto is not present, set proto to the intrinsic object %ArrayPrototype%.
    // 5. Let A be a newly created Array exotic object.
    var A = [];
    // 6. Set A's essential internal methods except for [[DefineOwnProperty]] to the default ordinary object definitions specified in 9.1.
    // 7. Set A.[[DefineOwnProperty]] as specified in 9.4.2.1.
    // 8. Set A.[[Prototype]] to proto.
    // 9. Set A.[[Extensible]] to true.
    // 10. Perform ! OrdinaryDefineOwnProperty(A, "length", PropertyDescriptor{[[Value]]: length, [[Writable]]: true, [[Enumerable]]: false, [[Configurable]]: false}).
    A.length = length;
    // 11. Return A.
    return A;
  }

  // _ESAbstract.Call
  /* global IsCallable */
  // 7.3.12. Call ( F, V [ , argumentsList ] )
  function Call(F, V /* [, argumentsList] */) {
    // eslint-disable-line no-unused-vars
    // 1. If argumentsList is not present, set argumentsList to a new empty List.
    var argumentsList = arguments.length > 2 ? arguments[2] : [];
    // 2. If IsCallable(F) is false, throw a TypeError exception.
    if (IsCallable(F) === false) {
      throw new TypeError(
        Object.prototype.toString.call(F) + "is not a function."
      );
    }
    // 3. Return ? F.[[Call]](V, argumentsList).
    return F.apply(V, argumentsList);
  }

  // _ESAbstract.CreateDataProperty
  // 7.3.4. CreateDataProperty ( O, P, V )
  // NOTE
  // This abstract operation creates a property whose attributes are set to the same defaults used for properties created by the ECMAScript language assignment operator.
  // Normally, the property will not already exist. If it does exist and is not configurable or if O is not extensible, [[DefineOwnProperty]] will return false.
  function CreateDataProperty(O, P, V) {
    // eslint-disable-line no-unused-vars
    // 1. Assert: Type(O) is Object.
    // 2. Assert: IsPropertyKey(P) is true.
    // 3. Let newDesc be the PropertyDescriptor{ [[Value]]: V, [[Writable]]: true, [[Enumerable]]: true, [[Configurable]]: true }.
    var newDesc = {
      value: V,
      writable: true,
      enumerable: true,
      configurable: true,
    };
    // 4. Return ? O.[[DefineOwnProperty]](P, newDesc).
    try {
      Object.defineProperty(O, P, newDesc);
      return true;
    } catch (e) {
      return false;
    }
  }

  // _ESAbstract.CreateDataPropertyOrThrow
  /* global CreateDataProperty */
  // 7.3.6. CreateDataPropertyOrThrow ( O, P, V )
  function CreateDataPropertyOrThrow(O, P, V) {
    // eslint-disable-line no-unused-vars
    // 1. Assert: Type(O) is Object.
    // 2. Assert: IsPropertyKey(P) is true.
    // 3. Let success be ? CreateDataProperty(O, P, V).
    var success = CreateDataProperty(O, P, V);
    // 4. If success is false, throw a TypeError exception.
    if (!success) {
      throw new TypeError(
        "Cannot assign value `" +
          Object.prototype.toString.call(V) +
          "` to property `" +
          Object.prototype.toString.call(P) +
          "` on object `" +
          Object.prototype.toString.call(O) +
          "`"
      );
    }
    // 5. Return success.
    return success;
  }

  // _ESAbstract.CreateMethodProperty
  // 7.3.5. CreateMethodProperty ( O, P, V )
  function CreateMethodProperty(O, P, V) {
    // eslint-disable-line no-unused-vars
    // 1. Assert: Type(O) is Object.
    // 2. Assert: IsPropertyKey(P) is true.
    // 3. Let newDesc be the PropertyDescriptor{[[Value]]: V, [[Writable]]: true, [[Enumerable]]: false, [[Configurable]]: true}.
    var newDesc = {
      value: V,
      writable: true,
      enumerable: false,
      configurable: true,
    };
    // 4. Return ? O.[[DefineOwnProperty]](P, newDesc).
    Object.defineProperty(O, P, newDesc);
  }

  // _ESAbstract.Get
  // 7.3.1. Get ( O, P )
  function Get(O, P) {
    // eslint-disable-line no-unused-vars
    // 1. Assert: Type(O) is Object.
    // 2. Assert: IsPropertyKey(P) is true.
    // 3. Return ? O.[[Get]](P, O).
    return O[P];
  }

  // _ESAbstract.HasOwnProperty
  // 7.3.11 HasOwnProperty (O, P)
  function HasOwnProperty(o, p) {
    // eslint-disable-line no-unused-vars
    // 1. Assert: Type(O) is Object.
    // 2. Assert: IsPropertyKey(P) is true.
    // 3. Let desc be ? O.[[GetOwnProperty]](P).
    // 4. If desc is undefined, return false.
    // 5. Return true.
    // Polyfill.io - As we expect user agents to support ES3 fully we can skip the above steps and use Object.prototype.hasOwnProperty to do them for us.
    return Object.prototype.hasOwnProperty.call(o, p);
  }

  // _ESAbstract.HasProperty
  // 7.3.10. HasProperty ( O, P )
  function HasProperty(O, P) {
    // eslint-disable-line no-unused-vars
    // Assert: Type(O) is Object.
    // Assert: IsPropertyKey(P) is true.
    // Return ? O.[[HasProperty]](P).
    return P in O;
  }

  // _ESAbstract.IsArray
  // 7.2.2. IsArray ( argument )
  function IsArray(argument) {
    // eslint-disable-line no-unused-vars
    // 1. If Type(argument) is not Object, return false.
    // 2. If argument is an Array exotic object, return true.
    // 3. If argument is a Proxy exotic object, then
    // a. If argument.[[ProxyHandler]] is null, throw a TypeError exception.
    // b. Let target be argument.[[ProxyTarget]].
    // c. Return ? IsArray(target).
    // 4. Return false.

    // Polyfill.io - We can skip all the above steps and check the string returned from Object.prototype.toString().
    return Object.prototype.toString.call(argument) === "[object Array]";
  }

  // _ESAbstract.IsCallable
  // 7.2.3. IsCallable ( argument )
  function IsCallable(argument) {
    // eslint-disable-line no-unused-vars
    // 1. If Type(argument) is not Object, return false.
    // 2. If argument has a [[Call]] internal method, return true.
    // 3. Return false.

    // Polyfill.io - Only function objects have a [[Call]] internal method. This means we can simplify this function to check that the argument has a type of function.
    return typeof argument === "function";
  }

  // _ESAbstract.RequireObjectCoercible
  // 7.2.1. RequireObjectCoercible ( argument )
  // The abstract operation ToObject converts argument to a value of type Object according to Table 12:
  // Table 12: ToObject Conversions
  /*
|----------------------------------------------------------------------------------------------------------------------------------------------------|
| Argument Type | Result                                                                                                                             |
|----------------------------------------------------------------------------------------------------------------------------------------------------|
| Undefined     | Throw a TypeError exception.                                                                                                       |
| Null          | Throw a TypeError exception.                                                                                                       |
| Boolean       | Return argument.                                                                                                                   |
| Number        | Return argument.                                                                                                                   |
| String        | Return argument.                                                                                                                   |
| Symbol        | Return argument.                                                                                                                   |
| Object        | Return argument.                                                                                                                   |
|----------------------------------------------------------------------------------------------------------------------------------------------------|
*/
  function RequireObjectCoercible(argument) {
    // eslint-disable-line no-unused-vars
    if (argument === null || argument === undefined) {
      throw TypeError(
        Object.prototype.toString.call(argument) +
          " is not coercible to Object."
      );
    }
    return argument;
  }

  // _ESAbstract.SameValueNonNumber
  // 7.2.12. SameValueNonNumber ( x, y )
  function SameValueNonNumber(x, y) {
    // eslint-disable-line no-unused-vars
    // 1. Assert: Type(x) is not Number.
    // 2. Assert: Type(x) is the same as Type(y).
    // 3. If Type(x) is Undefined, return true.
    // 4. If Type(x) is Null, return true.
    // 5. If Type(x) is String, then
    // a. If x and y are exactly the same sequence of code units (same length and same code units at corresponding indices), return true; otherwise, return false.
    // 6. If Type(x) is Boolean, then
    // a. If x and y are both true or both false, return true; otherwise, return false.
    // 7. If Type(x) is Symbol, then
    // a. If x and y are both the same Symbol value, return true; otherwise, return false.
    // 8. If x and y are the same Object value, return true. Otherwise, return false.

    // Polyfill.io - We can skip all above steps because the === operator does it all for us.
    return x === y;
  }

  // _ESAbstract.ToBoolean
  // 7.1.2. ToBoolean ( argument )
  // The abstract operation ToBoolean converts argument to a value of type Boolean according to Table 9:
  /*
--------------------------------------------------------------------------------------------------------------
| Argument Type | Result                                                                                     |
--------------------------------------------------------------------------------------------------------------
| Undefined     | Return false.                                                                              |
| Null          | Return false.                                                                              |
| Boolean       | Return argument.                                                                           |
| Number        | If argument is +0, -0, or NaN, return false; otherwise return true.                        |
| String        | If argument is the empty String (its length is zero), return false; otherwise return true. |
| Symbol        | Return true.                                                                               |
| Object        | Return true.                                                                               |
--------------------------------------------------------------------------------------------------------------
*/
  function ToBoolean(argument) {
    // eslint-disable-line no-unused-vars
    return Boolean(argument);
  }

  // _ESAbstract.ToObject
  // 7.1.13 ToObject ( argument )
  // The abstract operation ToObject converts argument to a value of type Object according to Table 12:
  // Table 12: ToObject Conversions
  /*
|----------------------------------------------------------------------------------------------------------------------------------------------------|
| Argument Type | Result                                                                                                                             |
|----------------------------------------------------------------------------------------------------------------------------------------------------|
| Undefined     | Throw a TypeError exception.                                                                                                       |
| Null          | Throw a TypeError exception.                                                                                                       |
| Boolean       | Return a new Boolean object whose [[BooleanData]] internal slot is set to argument. See 19.3 for a description of Boolean objects. |
| Number        | Return a new Number object whose [[NumberData]] internal slot is set to argument. See 20.1 for a description of Number objects.    |
| String        | Return a new String object whose [[StringData]] internal slot is set to argument. See 21.1 for a description of String objects.    |
| Symbol        | Return a new Symbol object whose [[SymbolData]] internal slot is set to argument. See 19.4 for a description of Symbol objects.    |
| Object        | Return argument.                                                                                                                   |
|----------------------------------------------------------------------------------------------------------------------------------------------------|
*/
  function ToObject(argument) {
    // eslint-disable-line no-unused-vars
    if (argument === null || argument === undefined) {
      throw TypeError();
    }
    return Object(argument);
  }

  // _ESAbstract.GetV
  /* global ToObject */
  // 7.3.2 GetV (V, P)
  function GetV(v, p) {
    // eslint-disable-line no-unused-vars
    // 1. Assert: IsPropertyKey(P) is true.
    // 2. Let O be ? ToObject(V).
    var o = ToObject(v);
    // 3. Return ? O.[[Get]](P, V).
    return o[p];
  }

  // _ESAbstract.GetMethod
  /* global GetV, IsCallable */
  // 7.3.9. GetMethod ( V, P )
  function GetMethod(V, P) {
    // eslint-disable-line no-unused-vars
    // 1. Assert: IsPropertyKey(P) is true.
    // 2. Let func be ? GetV(V, P).
    var func = GetV(V, P);
    // 3. If func is either undefined or null, return undefined.
    if (func === null || func === undefined) {
      return undefined;
    }
    // 4. If IsCallable(func) is false, throw a TypeError exception.
    if (IsCallable(func) === false) {
      throw new TypeError("Method not callable: " + P);
    }
    // 5. Return func.
    return func;
  }

  // _ESAbstract.Type
  // "Type(x)" is used as shorthand for "the type of x"...
  function Type(x) {
    // eslint-disable-line no-unused-vars
    switch (typeof x) {
      case "undefined":
        return "undefined";
      case "boolean":
        return "boolean";
      case "number":
        return "number";
      case "string":
        return "string";
      case "symbol":
        return "symbol";
      default:
        // typeof null is 'object'
        if (x === null) return "null";
        // Polyfill.io - This is here because a Symbol polyfill will have a typeof `object`.
        if (
          "Symbol" in self &&
          (x instanceof self.Symbol || x.constructor === self.Symbol)
        )
          return "symbol";

        return "object";
    }
  }

  // _ESAbstract.CreateIterResultObject
  /* global Type, CreateDataProperty */
  // 7.4.7. CreateIterResultObject ( value, done )
  function CreateIterResultObject(value, done) {
    // eslint-disable-line no-unused-vars
    // 1. Assert: Type(done) is Boolean.
    if (Type(done) !== "boolean") {
      throw new Error();
    }
    // 2. Let obj be ObjectCreate(%ObjectPrototype%).
    var obj = {};
    // 3. Perform CreateDataProperty(obj, "value", value).
    CreateDataProperty(obj, "value", value);
    // 4. Perform CreateDataProperty(obj, "done", done).
    CreateDataProperty(obj, "done", done);
    // 5. Return obj.
    return obj;
  }

  // _ESAbstract.GetPrototypeFromConstructor
  /* global Get, Type */
  // 9.1.14. GetPrototypeFromConstructor ( constructor, intrinsicDefaultProto )
  function GetPrototypeFromConstructor(constructor, intrinsicDefaultProto) {
    // eslint-disable-line no-unused-vars
    // 1. Assert: intrinsicDefaultProto is a String value that is this specification's name of an intrinsic object. The corresponding object must be an intrinsic that is intended to be used as the [[Prototype]] value of an object.
    // 2. Assert: IsCallable(constructor) is true.
    // 3. Let proto be ? Get(constructor, "prototype").
    var proto = Get(constructor, "prototype");
    // 4. If Type(proto) is not Object, then
    if (Type(proto) !== "object") {
      // a. Let realm be ? GetFunctionRealm(constructor).
      // b. Set proto to realm's intrinsic object named intrinsicDefaultProto.
      proto = intrinsicDefaultProto;
    }
    // 5. Return proto.
    return proto;
  }

  // _ESAbstract.OrdinaryCreateFromConstructor
  /* global GetPrototypeFromConstructor */
  // 9.1.13. OrdinaryCreateFromConstructor ( constructor, intrinsicDefaultProto [ , internalSlotsList ] )
  function OrdinaryCreateFromConstructor(constructor, intrinsicDefaultProto) {
    // eslint-disable-line no-unused-vars
    var internalSlotsList = arguments[2] || {};
    // 1. Assert: intrinsicDefaultProto is a String value that is this specification's name of an intrinsic object.
    // The corresponding object must be an intrinsic that is intended to be used as the[[Prototype]] value of an object.

    // 2. Let proto be ? GetPrototypeFromConstructor(constructor, intrinsicDefaultProto).
    var proto = GetPrototypeFromConstructor(constructor, intrinsicDefaultProto);

    // 3. Return ObjectCreate(proto, internalSlotsList).
    // Polyfill.io - We do not pass internalSlotsList to Object.create because Object.create does not use the default ordinary object definitions specified in 9.1.
    var obj = Object.create(proto);
    for (var name in internalSlotsList) {
      if (Object.prototype.hasOwnProperty.call(internalSlotsList, name)) {
        Object.defineProperty(obj, name, {
          configurable: true,
          enumerable: false,
          writable: true,
          value: internalSlotsList[name],
        });
      }
    }
    return obj;
  }

  // _ESAbstract.IsConstructor
  /* global Type */
  // 7.2.4. IsConstructor ( argument )
  function IsConstructor(argument) {
    // eslint-disable-line no-unused-vars
    // 1. If Type(argument) is not Object, return false.
    if (Type(argument) !== "object") {
      return false;
    }
    // 2. If argument has a [[Construct]] internal method, return true.
    // 3. Return false.

    // Polyfill.io - `new argument` is the only way  to truly test if a function is a constructor.
    // We choose to not use`new argument` because the argument could have side effects when called.
    // Instead we check to see if the argument is a function and if it has a prototype.
    // Arrow functions do not have a [[Construct]] internal method, nor do they have a prototype.
    return typeof argument === "function" && !!argument.prototype;
  }

  // _ESAbstract.Construct
  /* global IsConstructor, OrdinaryCreateFromConstructor, Call */
  // 7.3.13. Construct ( F [ , argumentsList [ , newTarget ]] )
  function Construct(F /* [ , argumentsList [ , newTarget ]] */) {
    // eslint-disable-line no-unused-vars
    // 1. If newTarget is not present, set newTarget to F.
    var newTarget = arguments.length > 2 ? arguments[2] : F;

    // 2. If argumentsList is not present, set argumentsList to a new empty List.
    var argumentsList = arguments.length > 1 ? arguments[1] : [];

    // 3. Assert: IsConstructor(F) is true.
    if (!IsConstructor(F)) {
      throw new TypeError("F must be a constructor.");
    }

    // 4. Assert: IsConstructor(newTarget) is true.
    if (!IsConstructor(newTarget)) {
      throw new TypeError("newTarget must be a constructor.");
    }

    // 5. Return ? F.[[Construct]](argumentsList, newTarget).
    // Polyfill.io - If newTarget is the same as F, it is equivalent to new F(...argumentsList).
    if (newTarget === F) {
      return new (Function.prototype.bind.apply(
        F,
        [null].concat(argumentsList)
      ))();
    } else {
      // Polyfill.io - This is mimicking section 9.2.2 step 5.a.
      var obj = OrdinaryCreateFromConstructor(newTarget, Object.prototype);
      return Call(F, obj, argumentsList);
    }
  }

  // _ESAbstract.ArraySpeciesCreate
  /* global IsArray, ArrayCreate, Get, Type, IsConstructor, Construct */
  // 9.4.2.3. ArraySpeciesCreate ( originalArray, length )
  function ArraySpeciesCreate(originalArray, length) {
    // eslint-disable-line no-unused-vars
    // 1. Assert: length is an integer Number ≥ 0.
    // 2. If length is -0, set length to +0.
    if (length === 0 && 1 / length === -Infinity) {
      length = 0;
    }

    // 3. Let isArray be ? IsArray(originalArray).
    var isArray = IsArray(originalArray);

    // 4. If isArray is false, return ? ArrayCreate(length).
    if (isArray === false) {
      return ArrayCreate(length);
    }

    // 5. Let C be ? Get(originalArray, "constructor").
    var C = Get(originalArray, "constructor");

    // Polyfill.io - We skip this section as not sure how to make a cross-realm normal Array, a same-realm Array.
    // 6. If IsConstructor(C) is true, then
    // if (IsConstructor(C)) {
    // a. Let thisRealm be the current Realm Record.
    // b. Let realmC be ? GetFunctionRealm(C).
    // c. If thisRealm and realmC are not the same Realm Record, then
    // i. If SameValue(C, realmC.[[Intrinsics]].[[%Array%]]) is true, set C to undefined.
    // }
    // 7. If Type(C) is Object, then
    if (Type(C) === "object") {
      // a. Set C to ? Get(C, @@species).
      C =
        "Symbol" in self && "species" in self.Symbol
          ? Get(C, self.Symbol.species)
          : undefined;
      // b. If C is null, set C to undefined.
      if (C === null) {
        C = undefined;
      }
    }
    // 8. If C is undefined, return ? ArrayCreate(length).
    if (C === undefined) {
      return ArrayCreate(length);
    }
    // 9. If IsConstructor(C) is false, throw a TypeError exception.
    if (!IsConstructor(C)) {
      throw new TypeError("C must be a constructor");
    }
    // 10. Return ? Construct(C, « length »).
    return Construct(C, [length]);
  }

  // _ESAbstract.IsRegExp
  /* global Type, Get, ToBoolean */
  // 7.2.8. IsRegExp ( argument )
  function IsRegExp(argument) {
    // eslint-disable-line no-unused-vars
    // 1. If Type(argument) is not Object, return false.
    if (Type(argument) !== "object") {
      return false;
    }
    // 2. Let matcher be ? Get(argument, @@match).
    var matcher =
      "Symbol" in self && "match" in self.Symbol
        ? Get(argument, self.Symbol.match)
        : undefined;
    // 3. If matcher is not undefined, return ToBoolean(matcher).
    if (matcher !== undefined) {
      return ToBoolean(matcher);
    }
    // 4. If argument has a [[RegExpMatcher]] internal slot, return true.
    try {
      var lastIndex = argument.lastIndex;
      argument.lastIndex = 0;
      RegExp.prototype.exec.call(argument);
      return true;
      // eslint-disable-next-line no-empty
    } catch (e) {
    } finally {
      argument.lastIndex = lastIndex;
    }
    // 5. Return false.
    return false;
  }

  // _ESAbstract.IteratorClose
  /* global GetMethod, Type, Call */
  // 7.4.6. IteratorClose ( iteratorRecord, completion )
  function IteratorClose(iteratorRecord, completion) {
    // eslint-disable-line no-unused-vars
    // 1. Assert: Type(iteratorRecord.[[Iterator]]) is Object.
    if (Type(iteratorRecord["[[Iterator]]"]) !== "object") {
      throw new Error(
        Object.prototype.toString.call(iteratorRecord["[[Iterator]]"]) +
          "is not an Object."
      );
    }
    // 2. Assert: completion is a Completion Record.
    // Polyfill.io - Ignoring this step as there is no way to check if something is a Completion Record in userland JavaScript.

    // 3. Let iterator be iteratorRecord.[[Iterator]].
    var iterator = iteratorRecord["[[Iterator]]"];
    // 4. Let return be ? GetMethod(iterator, "return").
    // Polyfill.io - We name it  returnMethod because return is a keyword and can not be used as an identifier (E.G. variable name, function name etc).
    var returnMethod = GetMethod(iterator, "return");
    // 5. If return is undefined, return Completion(completion).
    if (returnMethod === undefined) {
      return completion;
    }
    // 6. Let innerResult be Call(return, iterator, « »).
    try {
      var innerResult = Call(returnMethod, iterator);
    } catch (error) {
      var innerException = error;
    }
    // 7. If completion.[[Type]] is throw, return Completion(completion).
    if (completion) {
      return completion;
    }
    // 8. If innerResult.[[Type]] is throw, return Completion(innerResult).
    if (innerException) {
      throw innerException;
    }
    // 9. If Type(innerResult.[[Value]]) is not Object, throw a TypeError exception.
    if (Type(innerResult) !== "object") {
      throw new TypeError("Iterator's return method returned a non-object.");
    }
    // 10. Return Completion(completion).
    return completion;
  }

  // _ESAbstract.IteratorComplete
  /* global Type, ToBoolean, Get */
  // 7.4.3 IteratorComplete ( iterResult )
  function IteratorComplete(iterResult) {
    // eslint-disable-line no-unused-vars
    // 1. Assert: Type(iterResult) is Object.
    if (Type(iterResult) !== "object") {
      throw new Error(
        Object.prototype.toString.call(iterResult) + "is not an Object."
      );
    }
    // 2. Return ToBoolean(? Get(iterResult, "done")).
    return ToBoolean(Get(iterResult, "done"));
  }

  // _ESAbstract.IteratorNext
  /* global Call, Type */
  // 7.4.2. IteratorNext ( iteratorRecord [ , value ] )
  function IteratorNext(iteratorRecord /* [, value] */) {
    // eslint-disable-line no-unused-vars
    // 1. If value is not present, then
    if (arguments.length < 2) {
      // a. Let result be ? Call(iteratorRecord.[[NextMethod]], iteratorRecord.[[Iterator]], « »).
      var result = Call(
        iteratorRecord["[[NextMethod]]"],
        iteratorRecord["[[Iterator]]"]
      );
      // 2. Else,
    } else {
      // a. Let result be ? Call(iteratorRecord.[[NextMethod]], iteratorRecord.[[Iterator]], « value »).
      result = Call(
        iteratorRecord["[[NextMethod]]"],
        iteratorRecord["[[Iterator]]"],
        [arguments[1]]
      );
    }
    // 3. If Type(result) is not Object, throw a TypeError exception.
    if (Type(result) !== "object") {
      throw new TypeError("bad iterator");
    }
    // 4. Return result.
    return result;
  }

  // _ESAbstract.IteratorStep
  /* global IteratorNext, IteratorComplete */
  // 7.4.5. IteratorStep ( iteratorRecord )
  function IteratorStep(iteratorRecord) {
    // eslint-disable-line no-unused-vars
    // 1. Let result be ? IteratorNext(iteratorRecord).
    var result = IteratorNext(iteratorRecord);
    // 2. Let done be ? IteratorComplete(result).
    var done = IteratorComplete(result);
    // 3. If done is true, return false.
    if (done === true) {
      return false;
    }
    // 4. Return result.
    return result;
  }

  // _ESAbstract.IteratorValue
  /* global Type, Get */
  // 7.4.4 IteratorValue ( iterResult )
  function IteratorValue(iterResult) {
    // eslint-disable-line no-unused-vars
    // Assert: Type(iterResult) is Object.
    if (Type(iterResult) !== "object") {
      throw new Error(
        Object.prototype.toString.call(iterResult) + "is not an Object."
      );
    }
    // Return ? Get(iterResult, "value").
    return Get(iterResult, "value");
  }

  // _ESAbstract.OrdinaryToPrimitive
  /* global Get, IsCallable, Call, Type */
  // 7.1.1.1. OrdinaryToPrimitive ( O, hint )
  function OrdinaryToPrimitive(O, hint) {
    // eslint-disable-line no-unused-vars
    // 1. Assert: Type(O) is Object.
    // 2. Assert: Type(hint) is String and its value is either "string" or "number".
    // 3. If hint is "string", then
    if (hint === "string") {
      // a. Let methodNames be « "toString", "valueOf" ».
      var methodNames = ["toString", "valueOf"];
      // 4. Else,
    } else {
      // a. Let methodNames be « "valueOf", "toString" ».
      methodNames = ["valueOf", "toString"];
    }
    // 5. For each name in methodNames in List order, do
    for (var i = 0; i < methodNames.length; ++i) {
      var name = methodNames[i];
      // a. Let method be ? Get(O, name).
      var method = Get(O, name);
      // b. If IsCallable(method) is true, then
      if (IsCallable(method)) {
        // i. Let result be ? Call(method, O).
        var result = Call(method, O);
        // ii. If Type(result) is not Object, return result.
        if (Type(result) !== "object") {
          return result;
        }
      }
    }
    // 6. Throw a TypeError exception.
    throw new TypeError("Cannot convert to primitive.");
  }

  // _ESAbstract.SameValueZero
  /* global Type, SameValueNonNumber */
  // 7.2.11. SameValueZero ( x, y )
  function SameValueZero(x, y) {
    // eslint-disable-line no-unused-vars
    // 1. If Type(x) is different from Type(y), return false.
    if (Type(x) !== Type(y)) {
      return false;
    }
    // 2. If Type(x) is Number, then
    if (Type(x) === "number") {
      // a. If x is NaN and y is NaN, return true.
      if (isNaN(x) && isNaN(y)) {
        return true;
      }
      // b. If x is +0 and y is -0, return true.
      if (1 / x === Infinity && 1 / y === -Infinity) {
        return true;
      }
      // c. If x is -0 and y is +0, return true.
      if (1 / x === -Infinity && 1 / y === Infinity) {
        return true;
      }
      // d. If x is the same Number value as y, return true.
      if (x === y) {
        return true;
      }
      // e. Return false.
      return false;
    }
    // 3. Return SameValueNonNumber(x, y).
    return SameValueNonNumber(x, y);
  }

  // _ESAbstract.ToInteger
  /* global Type */
  // 7.1.4. ToInteger ( argument )
  function ToInteger(argument) {
    // eslint-disable-line no-unused-vars
    if (Type(argument) === "symbol") {
      throw new TypeError("Cannot convert a Symbol value to a number");
    }

    // 1. Let number be ? ToNumber(argument).
    var number = Number(argument);
    // 2. If number is NaN, return +0.
    if (isNaN(number)) {
      return 0;
    }
    // 3. If number is +0, -0, +∞, or -∞, return number.
    if (
      1 / number === Infinity ||
      1 / number === -Infinity ||
      number === Infinity ||
      number === -Infinity
    ) {
      return number;
    }
    // 4. Return the number value that is the same sign as number and whose magnitude is floor(abs(number)).
    return (number < 0 ? -1 : 1) * Math.floor(Math.abs(number));
  }

  // _ESAbstract.ToLength
  /* global ToInteger */
  // 7.1.15. ToLength ( argument )
  function ToLength(argument) {
    // eslint-disable-line no-unused-vars
    // 1. Let len be ? ToInteger(argument).
    var len = ToInteger(argument);
    // 2. If len ≤ +0, return +0.
    if (len <= 0) {
      return 0;
    }
    // 3. Return min(len, 253-1).
    return Math.min(len, Math.pow(2, 53) - 1);
  }

  // _ESAbstract.ToPrimitive
  /* global Type, GetMethod, Call, OrdinaryToPrimitive */
  // 7.1.1. ToPrimitive ( input [ , PreferredType ] )
  function ToPrimitive(input /* [, PreferredType] */) {
    // eslint-disable-line no-unused-vars
    var PreferredType = arguments.length > 1 ? arguments[1] : undefined;
    // 1. Assert: input is an ECMAScript language value.
    // 2. If Type(input) is Object, then
    if (Type(input) === "object") {
      // a. If PreferredType is not present, let hint be "default".
      if (arguments.length < 2) {
        var hint = "default";
        // b. Else if PreferredType is hint String, let hint be "string".
      } else if (PreferredType === String) {
        hint = "string";
        // c. Else PreferredType is hint Number, let hint be "number".
      } else if (PreferredType === Number) {
        hint = "number";
      }
      // d. Let exoticToPrim be ? GetMethod(input, @@toPrimitive).
      var exoticToPrim =
        typeof self.Symbol === "function" &&
        typeof self.Symbol.toPrimitive === "symbol"
          ? GetMethod(input, self.Symbol.toPrimitive)
          : undefined;
      // e. If exoticToPrim is not undefined, then
      if (exoticToPrim !== undefined) {
        // i. Let result be ? Call(exoticToPrim, input, « hint »).
        var result = Call(exoticToPrim, input, [hint]);
        // ii. If Type(result) is not Object, return result.
        if (Type(result) !== "object") {
          return result;
        }
        // iii. Throw a TypeError exception.
        throw new TypeError("Cannot convert exotic object to primitive.");
      }
      // f. If hint is "default", set hint to "number".
      if (hint === "default") {
        hint = "number";
      }
      // g. Return ? OrdinaryToPrimitive(input, hint).
      return OrdinaryToPrimitive(input, hint);
    }
    // 3. Return input
    return input;
  }

  // _ESAbstract.ToString
  /* global Type, ToPrimitive */
  // 7.1.12. ToString ( argument )
  // The abstract operation ToString converts argument to a value of type String according to Table 11:
  // Table 11: ToString Conversions
  /*
|---------------|--------------------------------------------------------|
| Argument Type | Result                                                 |
|---------------|--------------------------------------------------------|
| Undefined     | Return "undefined".                                    |
|---------------|--------------------------------------------------------|
| Null	        | Return "null".                                         |
|---------------|--------------------------------------------------------|
| Boolean       | If argument is true, return "true".                    |
|               | If argument is false, return "false".                  |
|---------------|--------------------------------------------------------|
| Number        | Return NumberToString(argument).                       |
|---------------|--------------------------------------------------------|
| String        | Return argument.                                       |
|---------------|--------------------------------------------------------|
| Symbol        | Throw a TypeError exception.                           |
|---------------|--------------------------------------------------------|
| Object        | Apply the following steps:                             |
|               | Let primValue be ? ToPrimitive(argument, hint String). |
|               | Return ? ToString(primValue).                          |
|---------------|--------------------------------------------------------|
*/
  function ToString(argument) {
    // eslint-disable-line no-unused-vars
    switch (Type(argument)) {
      case "symbol":
        throw new TypeError("Cannot convert a Symbol value to a string");
      case "object":
        var primValue = ToPrimitive(argument, String);
        return ToString(primValue); // eslint-disable-line no-unused-vars
      default:
        return String(argument);
    }
  }

  // _ESAbstract.FlattenIntoArray
  /* globals ToString, HasProperty, Get, Call, IsArray, ToLength, CreateDataPropertyOrThrow */
  // 22.1.3.10.1 FlattenIntoArray(target, source, sourceLen, start, depth [ , mapperFunction, thisArg ])
  function FlattenIntoArray(
    target,
    source,
    sourceLen,
    start,
    depth /* , mapperFunction, thisArg */
  ) {
    // eslint-disable-line no-unused-vars
    var mapperFunction = arguments[5];
    var thisArg = arguments[6];
    // 1. Let targetIndex be start.
    var targetIndex = start;
    // 2. Let sourceIndex be 0.
    var sourceIndex = 0;
    // 3. Repeat, while sourceIndex < sourceLen
    while (sourceIndex < sourceLen) {
      // a. Let P be ! ToString(sourceIndex).
      var P = ToString(sourceIndex);
      // b. Let exists be ? HasProperty(source, P).
      var exists = HasProperty(source, P);
      // c. If exists is true, then
      if (exists === true) {
        // i. Let element be ? Get(source, P).
        var element = Get(source, P);
        // ii. If mapperFunction is present, then
        if (5 in arguments) {
          // 1. Assert: thisArg is present.
          // 2. Set element to ? Call(mapperFunction, thisArg , « element, sourceIndex, source »).
          element = Call(mapperFunction, thisArg, [
            element,
            sourceIndex,
            source,
          ]);
        }
        // iii. Let shouldFlatten be false.
        var shouldFlatten = false;
        // iv. If depth > 0, then
        if (depth > 0) {
          // 1. Set shouldFlatten to ? IsArray(element).
          shouldFlatten = IsArray(element);
        }
        // v. If shouldFlatten is true, then
        if (shouldFlatten === true) {
          // 1. Let elementLen be ? ToLength(? Get(element, "length")).
          var elementLen = ToLength(Get(element, "length"));
          // 2. Set targetIndex to ? FlattenIntoArray(target, element, elementLen, targetIndex, depth - 1).
          targetIndex = FlattenIntoArray(
            target,
            element,
            elementLen,
            targetIndex,
            depth - 1
          ); // eslint-disable-line no-unused-vars
          // vi. Else,
        } else {
          // 1. If targetIndex ≥ 253-1, throw a TypeError exception.
          if (targetIndex >= Math.pow(2, 53) - 1) {
            throw new TypeError(
              "targetIndex is greater than or equal to 2^53-1"
            );
          }
          // 2. Perform ? CreateDataPropertyOrThrow(target, ! ToString(targetIndex), element).
          CreateDataPropertyOrThrow(target, ToString(targetIndex), element);
          // 3. Increase targetIndex by 1.
          targetIndex += 1;
        }
      }
      // d. Increase sourceIndex by 1.
      sourceIndex += 1;
    }
    // 4. Return targetIndex.
    return targetIndex;
  }

  // _ESAbstract.ToPropertyKey
  /* globals ToPrimitive, Type, ToString */
  // 7.1.14. ToPropertyKey ( argument )
  function ToPropertyKey(argument) {
    // eslint-disable-line no-unused-vars
    // 1. Let key be ? ToPrimitive(argument, hint String).
    var key = ToPrimitive(argument, String);
    // 2. If Type(key) is Symbol, then
    if (Type(key) === "symbol") {
      // a. Return key.
      return key;
    }
    // 3. Return ! ToString(key).
    return ToString(key);
  }

  // Array.of
  /* global ArrayCreate, Construct, CreateDataPropertyOrThrow, CreateMethodProperty, IsConstructor, ToString */
  // 22.1.2.3. Array.of ( ...items )
  CreateMethodProperty(Array, "of", function of() {
    // 1. Let len be the actual number of arguments passed to this function.
    var len = arguments.length;
    // 2. Let items be the List of arguments passed to this function.
    var items = arguments;
    // 3. Let C be the this value.
    var C = this;
    // 4. If IsConstructor(C) is true, then
    if (IsConstructor(C)) {
      // a. Let A be ? Construct(C, « len »).
      var A = Construct(C, [len]);
      // 5. Else,
    } else {
      // a. Let A be ? ArrayCreate(len).
      A = ArrayCreate(len);
    }
    // 6. Let k be 0.
    var k = 0;
    // 7. Repeat, while k < len
    while (k < len) {
      // a. Let kValue be items[k].
      var kValue = items[k];
      // b. Let Pk be ! ToString(k).
      var Pk = ToString(k);
      // c. Perform ? CreateDataPropertyOrThrow(A, Pk, kValue).
      CreateDataPropertyOrThrow(A, Pk, kValue);
      // d. Increase k by 1.
      k = k + 1;
    }
    // 8. Perform ? Set(A, "length", len, true)
    A.length = len;
    // 9. Return A.
    return A;
  });

  // Array.prototype.copyWithin
  /* global CreateMethodProperty, HasProperty, ToInteger */
  // 22.1.3.3 Array.prototype.copyWithin ( target, start [ , end ] )
  CreateMethodProperty(
    Array.prototype,
    "copyWithin",
    function copyWithin(target, start /* [ , end ] */) {
      "use strict";
      var end = arguments[2];

      // 22.1.3.3.1 Let O be ? ToObject(this value).
      if (this === null || this === undefined) {
        throw new TypeError("Cannot call method on " + this);
      }

      var o = Object(this);

      // 22.1.3.3.2 Let len be ? ToLength(? Get(O, "length")).
      var len = ToInteger(o.length);
      if (len <= 0) {
        len = 0;
      }
      if (len === Infinity) {
        len = Math.pow(2, 53) - 1;
      } else {
        len = Math.min(len, Math.pow(2, 53) - 1);
      }
      len = Math.max(len, 0);

      // 22.1.3.3.3 Let relativeTarget be ? ToInteger(target).
      var relativeTarget = ToInteger(target);

      // 22.1.3.3.4 If relativeTarget < 0, let to be max((len + relativeTarget), 0); else let to be min(relativeTarget, len).
      var to;
      if (relativeTarget < 0) {
        to = Math.max(len + relativeTarget, 0);
      } else {
        to = Math.min(relativeTarget, len);
      }

      // 22.1.3.3.5 Let relativeStart be ? ToInteger(start).
      var relativeStart = ToInteger(start);

      // 22.1.3.3.6 If relativeStart < 0, let from be max((len + relativeStart), 0); else let from be min(relativeStart, len).
      var from;
      if (relativeStart < 0) {
        from = Math.max(len + relativeStart, 0);
      } else {
        from = Math.min(relativeStart, len);
      }

      // 22.1.3.3.7 If end is undefined, let relativeEnd be len; else let relativeEnd be ? ToInteger(end).
      var relativeEnd;
      if (end === undefined) {
        relativeEnd = len;
      } else {
        relativeEnd = ToInteger(end);
      }

      // 22.1.3.3.8 If relativeEnd < 0, let final be max((len + relativeEnd), 0); else let final be min(relativeEnd, len).
      var final;
      if (relativeEnd < 0) {
        final = Math.max(len + relativeEnd, 0);
      } else {
        final = Math.min(relativeEnd, len);
      }

      // 22.1.3.3.9 Let count be min(final-from, len-to).
      var count = Math.min(final - from, len - to);

      // 22.1.3.3.10 If from<to and to<from+count, then
      var direction;
      if (from < to && to < from + count) {
        // 22.1.3.3.10.a Let direction be -1.
        direction = -1;

        // 22.1.3.3.10.b Let from be from + count - 1.
        from = from + count - 1;

        // 22.1.3.3.10.c Let to be to + count - 1.
        to = to + count - 1;
      } else {
        // 22.1.3.3.11 Else,
        // 22.1.3.3.11.a Let direction be 1.
        direction = 1;
      }

      // 22.1.3.3.12 Repeat, while count > 0
      while (count > 0) {
        // 22.1.3.3.12.a Let fromKey be ! ToString(from).
        var fromKey = String(from);
        // 22.1.3.3.12.b Let toKey be ! ToString(to).
        var toKey = String(to);
        // 22.1.3.3.12.c Let fromPresent be ? HasProperty(O, fromKey).
        var fromPresent = HasProperty(o, fromKey);
        // 22.1.3.3.12.d If fromPresent is true, then
        if (fromPresent) {
          // 22.1.3.3.12.d.i Let fromVal be ? Get(O, fromKey).
          var fromVal = o[fromKey];
          // 22.1.3.3.12.d.ii Perform ? Set(O, toKey, fromVal, true).
          o[toKey] = fromVal;
        } else {
          // 22.1.3.3.12.e Else fromPresent is false,
          // 22.1.3.3.12.e.i Perform ? DeletePropertyOrThrow(O, toKey).
          delete o[toKey];
        }
        // 22.1.3.3.12.f Let from be from + direction.
        from = from + direction;
        // 22.1.3.3.12.g Let to be to + direction.
        to = to + direction;
        // 22.1.3.3.12.h Let count be count - 1.
        count = count - 1;
      }
      // 22.1.3.3.13 Return O.
      return o;
    }
  );

  // Array.prototype.fill
  /* global CreateMethodProperty, Get, ToInteger, ToLength, ToObject, ToString */
  // 22.1.3.6. Array.prototype.fill ( value [ , start [ , end ] ] )
  CreateMethodProperty(
    Array.prototype,
    "fill",
    function fill(value /* [ , start [ , end ] ] */) {
      var start = arguments[1];
      var end = arguments[2];
      // 1. Let O be ? ToObject(this value).
      var O = ToObject(this);
      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = ToLength(Get(O, "length"));
      // 3. Let relativeStart be ? ToInteger(start).
      var relativeStart = ToInteger(start);
      // 4. If relativeStart < 0, let k be max((len + relativeStart), 0); else let k be min(relativeStart, len)
      var k =
        relativeStart < 0
          ? Math.max(len + relativeStart, 0)
          : Math.min(relativeStart, len);
      // 5. If end is undefined, let relativeEnd be len; else let relativeEnd be ? ToInteger(end).
      var relativeEnd = end === undefined ? len : ToInteger(end);
      // 6. If relativeEnd < 0, let final be max((len + relativeEnd), 0); else let final be min(relativeEnd, len).
      var final =
        relativeEnd < 0
          ? Math.max(len + relativeEnd, 0)
          : Math.min(relativeEnd, len);
      // 7. Repeat, while k < final
      while (k < final) {
        // a. Let Pk be ! ToString(k).
        var Pk = ToString(k);
        // b. Perform ? Set(O, Pk, value, true).
        O[Pk] = value;
        // c. Increase k by 1.
        k = k + 1;
      }
      // 8. Return O.
      return O;
    }
  );

  // Array.prototype.find
  /* global Call, CreateMethodProperty, Get, IsCallable, ToBoolean, ToLength, ToObject, ToString */
  // 22.1.3.8 Array.prototype.find ( predicate [ , thisArg ] )
  CreateMethodProperty(
    Array.prototype,
    "find",
    function find(predicate /* [ , thisArg ] */) {
      // 1. Let O be ? ToObject(this value).
      var O = ToObject(this);
      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = ToLength(Get(O, "length"));
      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (IsCallable(predicate) === false) {
        throw new TypeError(predicate + " is not a function");
      }
      // 4. If thisArg is present, let T be thisArg; else let T be undefined.
      var T = arguments.length > 1 ? arguments[1] : undefined;
      // 5. Let k be 0.
      var k = 0;
      // 6. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        var Pk = ToString(k);
        // b. Let kValue be ? Get(O, Pk).
        var kValue = Get(O, Pk);
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        var testResult = ToBoolean(Call(predicate, T, [kValue, k, O]));
        // d. If testResult is true, return kValue.
        if (testResult) {
          return kValue;
        }
        // e. Increase k by 1.
        k = k + 1;
      }
      // 7. Return undefined.
      return undefined;
    }
  );

  // Array.prototype.findIndex
  /* global Call, CreateMethodProperty, Get, IsCallable, ToBoolean, ToLength, ToObject, ToString */
  // 22.1.3.9. Array.prototype.findIndex ( predicate [ , thisArg ] )
  CreateMethodProperty(
    Array.prototype,
    "findIndex",
    function findIndex(predicate /* [ , thisArg ] */) {
      // 1. Let O be ? ToObject(this value).
      var O = ToObject(this);
      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = ToLength(Get(O, "length"));
      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (IsCallable(predicate) === false) {
        throw new TypeError(predicate + " is not a function");
      }
      // 4. If thisArg is present, let T be thisArg; else let T be undefined.
      var T = arguments.length > 1 ? arguments[1] : undefined;
      // 5. Let k be 0.
      var k = 0;
      // 6. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        var Pk = ToString(k);
        // b. Let kValue be ? Get(O, Pk).
        var kValue = Get(O, Pk);
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        var testResult = ToBoolean(Call(predicate, T, [kValue, k, O]));
        // d. If testResult is true, return k.
        if (testResult) {
          return k;
        }
        // e. Increase k by 1.
        k = k + 1;
      }
      // 7. Return -1.
      return -1;
    }
  );

  // Array.prototype.flat
  /* global CreateMethodProperty, ToObject, ToLength, Get, ToInteger, ArraySpeciesCreate, FlattenIntoArray */
  // 22.1.3.10 Array.prototype.flat( [ depth ] )
  CreateMethodProperty(Array.prototype, "flat", function flat() {
    "use strict";
    var depth = arguments[0];
    // 1. Let O be ? ToObject(this value).
    var O = ToObject(this);
    // 2. Let sourceLen be ? ToLength(? Get(O, "length")).
    var sourceLen = ToLength(Get(O, "length"));
    // 3. Let depthNum be 1.
    var depthNum = 1;
    // 4. If depth is not undefined, then
    if (depth !== void 0) {
      // a. Set depthNum to ? ToInteger(depth).
      depthNum = ToInteger(depth);
    }
    // 5. Let A be ? ArraySpeciesCreate(O, 0).
    var A = ArraySpeciesCreate(O, 0);
    // 6. Perform ? FlattenIntoArray(A, O, sourceLen, 0, depthNum).
    FlattenIntoArray(A, O, sourceLen, 0, depthNum);
    // 7. Return A.
    return A;
  });

  // Array.prototype.flatMap
  /* global CreateMethodProperty, ToObject, ToLength, Get, IsCallable, ArraySpeciesCreate, FlattenIntoArray */
  // 22.1.3.11 Array.prototype.flatMap ( mapperFunction [ , thisArg ] )
  CreateMethodProperty(
    Array.prototype,
    "flatMap",
    function flatMap(mapperFunction /* , thisArg */) {
      "use strict";
      // 1. Let O be ? ToObject(this value).
      var O = ToObject(this);
      // 2. Let sourceLen be ? ToLength(? Get(O, "length")).
      var sourceLen = ToLength(Get(O, "length"));
      // 3. If IsCallable(mapperFunction) is false, throw a TypeError exception.
      if (IsCallable(mapperFunction) === false) {
        throw new TypeError("mapperFunction is not callable.");
      }
      // 4. If thisArg is present, let T be thisArg; else let T be undefined.
      var T;
      if (1 in arguments) {
        T = arguments[1];
      } else {
        T = undefined;
      }
      // 5. Let A be ? ArraySpeciesCreate(O, 0).
      var A = ArraySpeciesCreate(O, 0);
      // 6. Perform ? FlattenIntoArray(A, O, sourceLen, 0, 1, mapperFunction, T).
      FlattenIntoArray(A, O, sourceLen, 0, 1, mapperFunction, T);
      // 7. Return A.
      return A;
    }
  );

  // Array.prototype.includes
  /* global CreateMethodProperty, Get, SameValueZero, ToInteger, ToLength, ToObject, ToString */
  // 22.1.3.11. Array.prototype.includes ( searchElement [ , fromIndex ] )
  CreateMethodProperty(
    Array.prototype,
    "includes",
    function includes(searchElement /* [ , fromIndex ] */) {
      "use strict";
      // 1. Let O be ? ToObject(this value).
      var O = ToObject(this);
      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = ToLength(Get(O, "length"));
      // 3. If len is 0, return false.
      if (len === 0) {
        return false;
      }
      // 4. Let n be ? ToInteger(fromIndex). (If fromIndex is undefined, this step produces the value 0.)
      var n = ToInteger(arguments[1]);
      // 5. If n ≥ 0, then
      if (n >= 0) {
        // a. Let k be n.
        var k = n;
        // 6. Else n < 0,
      } else {
        // a. Let k be len + n.
        k = len + n;
        // b. If k < 0, let k be 0.
        if (k < 0) {
          k = 0;
        }
      }
      // 7. Repeat, while k < len
      while (k < len) {
        // a. Let elementK be the result of ? Get(O, ! ToString(k)).
        var elementK = Get(O, ToString(k));
        // b. If SameValueZero(searchElement, elementK) is true, return true.
        if (SameValueZero(searchElement, elementK)) {
          return true;
        }
        // c. Increase k by 1.
        k = k + 1;
      }
      // 8. Return false.
      return false;
    }
  );

  // Array.prototype.sort
  /* global CreateMethodProperty, IsCallable */
  ("use strict");

  var origSort = Array.prototype.sort;

  // 22.1.3.27 Array.prototype.sort ( comparefn )
  // The elements of this array are sorted. The sort must be stable (that is,
  // elements that compare equal must remain in their original order). If
  // comparefn is not undefined, it should be a function that accepts two
  // arguments x and y and returns a negative value
  // if x < y, zero if x = y, or a positive value if x > y.

  CreateMethodProperty(Array.prototype, "sort", function sort(compareFn) {
    // 1. If comparefn is not undefined and IsCallable(comparefn) is false, throw
    //    a TypeError exception.
    if (compareFn !== undefined && IsCallable(compareFn) === false) {
      throw new TypeError(
        "The comparison function must be either a function or undefined"
      );
    }

    // Polyfill.io - the steps below are handled by the native
    // Array.prototype.sort method that we call.
    // 2.Let obj be ? ToObject(this value).
    // 3.Let len be ? LengthOfArrayLike(obj).

    // if comprateFn does not exist, use the spec defined in-built SortCompare.
    if (compareFn === undefined) {
      origSort.call(this);
    } else {
      // if compareFn exists, sort the array, breaking sorting ties by using the
      // items' original index position.

      // Keep track of the items starting index position.
      var that = Array.prototype.map.call(this, function (item, index) {
        return { item: item, index: index };
      });
      origSort.call(that, function (a, b) {
        var compareResult = compareFn.call(undefined, a.item, b.item);
        return compareResult === 0 ? a.index - b.index : compareResult;
      });
      // update the original object (`this`) with the new position for the items
      // which were moved.
      for (var a in that) {
        if (Object.prototype.hasOwnProperty.call(that, a)) {
          if (that[a].item !== this[a]) {
            this[a] = that[a].item;
          }
        }
      }
    }

    return this;
  });

  // ArrayBuffer
  /*
 Copyright (c) 2010, Linden Research, Inc.
 Copyright (c) 2014, Joshua Bell

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 $/LicenseInfo$
 */

  // Original can be found at:
  //   https://bitbucket.org/lindenlab/llsd
  // Modifications by Joshua Bell inexorabletash@gmail.com
  //   https://github.com/inexorabletash/polyfill

  // ES3/ES5 implementation of the Krhonos Typed Array Specification
  //   Ref: http://www.khronos.org/registry/typedarray/specs/latest/
  //   Date: 2011-02-01
  //
  // Variations:
  //  * Allows typed_array.get/set() as alias for subscripts (typed_array[])
  //  * Gradually migrating structure from Khronos spec to ES2015 spec
  //
  // Caveats:
  //  * Beyond 10000 or so entries, polyfilled array accessors (ta[0],
  //    etc) become memory-prohibitive, so array creation will fail. Set
  //    self.TYPED_ARRAY_POLYFILL_NO_ARRAY_ACCESSORS=true to disable
  //    creation of accessors. Your code will need to use the
  //    non-standard get()/set() instead, and will need to add those to
  //    native arrays for interop.
  (function (global) {
    "use strict";
    var undefined = void 0; // Paranoia

    // Beyond this value, index getters/setters (i.e. array[0], array[1]) are so slow to
    // create, and consume so much memory, that the browser appears frozen.
    var MAX_ARRAY_LENGTH = 1e5;

    // Approximations of internal ECMAScript conversion functions
    function Type(v) {
      switch (typeof v) {
        case "undefined":
          return "undefined";
        case "boolean":
          return "boolean";
        case "number":
          return "number";
        case "string":
          return "string";
        default:
          return v === null ? "null" : "object";
      }
    }

    // Class returns internal [[Class]] property, used to avoid cross-frame instanceof issues:
    function Class(v) {
      return Object.prototype.toString.call(v).replace(/^\[object *|\]$/g, "");
    }
    function IsCallable(o) {
      return typeof o === "function";
    }
    function ToObject(v) {
      if (v === null || v === undefined) throw TypeError();
      return Object(v);
    }
    function ToInt32(v) {
      return v >> 0;
    }
    function ToUint32(v) {
      return v >>> 0;
    }

    // Snapshot intrinsics
    var LN2 = Math.LN2,
      abs = Math.abs,
      floor = Math.floor,
      log = Math.log,
      max = Math.max,
      min = Math.min,
      pow = Math.pow,
      round = Math.round;

    // emulate ES5 getter/setter API using legacy APIs
    // http://blogs.msdn.com/b/ie/archive/2010/09/07/transitioning-existing-code-to-the-es5-getter-setter-apis.aspx
    // (second clause tests for Object.defineProperty() in IE<9 that only supports extending DOM prototypes, but
    // note that IE<9 does not support __defineGetter__ or __defineSetter__ so it just renders the method harmless)

    (function () {
      var orig = Object.defineProperty;
      var dom_only = !(function () {
        try {
          return Object.defineProperty({}, "x", {});
        } catch (_) {
          return false;
        }
      })();

      if (!orig || dom_only) {
        Object.defineProperty = function (o, prop, desc) {
          // In IE8 try built-in implementation for defining properties on DOM prototypes.
          if (orig)
            try {
              return orig(o, prop, desc);
            } catch (_) {}
          if (o !== Object(o))
            throw TypeError("Object.defineProperty called on non-object");
          if (Object.prototype.__defineGetter__ && "get" in desc)
            Object.prototype.__defineGetter__.call(o, prop, desc.get);
          if (Object.prototype.__defineSetter__ && "set" in desc)
            Object.prototype.__defineSetter__.call(o, prop, desc.set);
          if ("value" in desc) o[prop] = desc.value;
          return o;
        };
      }
    })();

    // ES5: Make obj[index] an alias for obj._getter(index)/obj._setter(index, value)
    // for index in 0 ... obj.length
    function makeArrayAccessors(obj) {
      if ("TYPED_ARRAY_POLYFILL_NO_ARRAY_ACCESSORS" in global) return;

      if (obj.length > MAX_ARRAY_LENGTH)
        throw RangeError("Array too large for polyfill");

      function makeArrayAccessor(index) {
        Object.defineProperty(obj, index, {
          get: function () {
            return obj._getter(index);
          },
          set: function (v) {
            obj._setter(index, v);
          },
          enumerable: true,
          configurable: false,
        });
      }

      var i;
      for (i = 0; i < obj.length; i += 1) {
        makeArrayAccessor(i);
      }
    }

    // Internal conversion functions:
    //    pack<Type>()   - take a number (interpreted as Type), output a byte array
    //    unpack<Type>() - take a byte array, output a Type-like number

    function as_signed(value, bits) {
      var s = 32 - bits;
      return (value << s) >> s;
    }
    function as_unsigned(value, bits) {
      var s = 32 - bits;
      return (value << s) >>> s;
    }

    function packI8(n) {
      return [n & 0xff];
    }
    function unpackI8(bytes) {
      return as_signed(bytes[0], 8);
    }

    function packU8(n) {
      return [n & 0xff];
    }
    function unpackU8(bytes) {
      return as_unsigned(bytes[0], 8);
    }

    function packU8Clamped(n) {
      n = round(Number(n));
      return [n < 0 ? 0 : n > 0xff ? 0xff : n & 0xff];
    }

    function packI16(n) {
      return [n & 0xff, (n >> 8) & 0xff];
    }
    function unpackI16(bytes) {
      return as_signed((bytes[1] << 8) | bytes[0], 16);
    }

    function packU16(n) {
      return [n & 0xff, (n >> 8) & 0xff];
    }
    function unpackU16(bytes) {
      return as_unsigned((bytes[1] << 8) | bytes[0], 16);
    }

    function packI32(n) {
      return [n & 0xff, (n >> 8) & 0xff, (n >> 16) & 0xff, (n >> 24) & 0xff];
    }
    function unpackI32(bytes) {
      return as_signed(
        (bytes[3] << 24) | (bytes[2] << 16) | (bytes[1] << 8) | bytes[0],
        32
      );
    }

    function packU32(n) {
      return [n & 0xff, (n >> 8) & 0xff, (n >> 16) & 0xff, (n >> 24) & 0xff];
    }
    function unpackU32(bytes) {
      return as_unsigned(
        (bytes[3] << 24) | (bytes[2] << 16) | (bytes[1] << 8) | bytes[0],
        32
      );
    }

    function packIEEE754(v, ebits, fbits) {
      var bias = (1 << (ebits - 1)) - 1;

      function roundToEven(n) {
        var w = floor(n),
          f = n - w;
        if (f < 0.5) return w;
        if (f > 0.5) return w + 1;
        return w % 2 ? w + 1 : w;
      }

      // Compute sign, exponent, fraction
      var s, e, f;
      if (v !== v) {
        // NaN
        // http://dev.w3.org/2006/webapi/WebIDL/#es-type-mapping
        e = (1 << ebits) - 1;
        f = pow(2, fbits - 1);
        s = 0;
      } else if (v === Infinity || v === -Infinity) {
        e = (1 << ebits) - 1;
        f = 0;
        s = v < 0 ? 1 : 0;
      } else if (v === 0) {
        e = 0;
        f = 0;
        s = 1 / v === -Infinity ? 1 : 0;
      } else {
        s = v < 0;
        v = abs(v);

        if (v >= pow(2, 1 - bias)) {
          // Normalized
          e = min(floor(log(v) / LN2), 1023);
          var significand = v / pow(2, e);
          if (significand < 1) {
            e -= 1;
            significand *= 2;
          }
          if (significand >= 2) {
            e += 1;
            significand /= 2;
          }
          var d = pow(2, fbits);
          f = roundToEven(significand * d) - d;
          e += bias;
          if (f / d >= 1) {
            e += 1;
            f = 0;
          }
          if (e > 2 * bias) {
            // Overflow
            e = (1 << ebits) - 1;
            f = 0;
          }
        } else {
          // Denormalized
          e = 0;
          f = roundToEven(v / pow(2, 1 - bias - fbits));
        }
      }

      // Pack sign, exponent, fraction
      var bits = [],
        i;
      for (i = fbits; i; i -= 1) {
        bits.push(f % 2 ? 1 : 0);
        f = floor(f / 2);
      }
      for (i = ebits; i; i -= 1) {
        bits.push(e % 2 ? 1 : 0);
        e = floor(e / 2);
      }
      bits.push(s ? 1 : 0);
      bits.reverse();
      var str = bits.join("");

      // Bits to bytes
      var bytes = [];
      while (str.length) {
        bytes.unshift(parseInt(str.substring(0, 8), 2));
        str = str.substring(8);
      }
      return bytes;
    }

    function unpackIEEE754(bytes, ebits, fbits) {
      // Bytes to bits
      var bits = [],
        i,
        j,
        b,
        str,
        bias,
        s,
        e,
        f;

      for (i = 0; i < bytes.length; ++i) {
        b = bytes[i];
        for (j = 8; j; j -= 1) {
          bits.push(b % 2 ? 1 : 0);
          b = b >> 1;
        }
      }
      bits.reverse();
      str = bits.join("");

      // Unpack sign, exponent, fraction
      bias = (1 << (ebits - 1)) - 1;
      s = parseInt(str.substring(0, 1), 2) ? -1 : 1;
      e = parseInt(str.substring(1, 1 + ebits), 2);
      f = parseInt(str.substring(1 + ebits), 2);

      // Produce number
      if (e === (1 << ebits) - 1) {
        return f !== 0 ? NaN : s * Infinity;
      } else if (e > 0) {
        // Normalized
        return s * pow(2, e - bias) * (1 + f / pow(2, fbits));
      } else if (f !== 0) {
        // Denormalized
        return s * pow(2, -(bias - 1)) * (f / pow(2, fbits));
      } else {
        return s < 0 ? -0 : 0;
      }
    }

    function unpackF64(b) {
      return unpackIEEE754(b, 11, 52);
    }
    function packF64(v) {
      return packIEEE754(v, 11, 52);
    }
    function unpackF32(b) {
      return unpackIEEE754(b, 8, 23);
    }
    function packF32(v) {
      return packIEEE754(v, 8, 23);
    }

    //
    // 3 The ArrayBuffer Type
    //

    (function () {
      function ArrayBuffer(length) {
        length = ToInt32(length);
        if (length < 0)
          throw RangeError(
            "ArrayBuffer size is not a small enough positive integer."
          );
        Object.defineProperty(this, "byteLength", { value: length });
        Object.defineProperty(this, "_bytes", { value: Array(length) });

        for (var i = 0; i < length; i += 1) this._bytes[i] = 0;
      }

      global.ArrayBuffer = global.ArrayBuffer || ArrayBuffer;

      //
      // 5 The Typed Array View Types
      //

      function $TypedArray$() {
        // %TypedArray% ( length )
        if (!arguments.length || typeof arguments[0] !== "object") {
          return function (length) {
            length = ToInt32(length);
            if (length < 0)
              throw RangeError(
                "length is not a small enough positive integer."
              );
            Object.defineProperty(this, "length", { value: length });
            Object.defineProperty(this, "byteLength", {
              value: length * this.BYTES_PER_ELEMENT,
            });
            Object.defineProperty(this, "buffer", {
              value: new ArrayBuffer(this.byteLength),
            });
            Object.defineProperty(this, "byteOffset", { value: 0 });
          }.apply(this, arguments);
        }

        // %TypedArray% ( typedArray )
        if (
          arguments.length >= 1 &&
          Type(arguments[0]) === "object" &&
          arguments[0] instanceof $TypedArray$
        ) {
          return function (typedArray) {
            if (this.constructor !== typedArray.constructor) throw TypeError();

            var byteLength = typedArray.length * this.BYTES_PER_ELEMENT;
            Object.defineProperty(this, "buffer", {
              value: new ArrayBuffer(byteLength),
            });
            Object.defineProperty(this, "byteLength", { value: byteLength });
            Object.defineProperty(this, "byteOffset", { value: 0 });
            Object.defineProperty(this, "length", { value: typedArray.length });

            for (var i = 0; i < this.length; i += 1)
              this._setter(i, typedArray._getter(i));
          }.apply(this, arguments);
        }

        // %TypedArray% ( array )
        if (
          arguments.length >= 1 &&
          Type(arguments[0]) === "object" &&
          !(arguments[0] instanceof $TypedArray$) &&
          !(
            arguments[0] instanceof ArrayBuffer ||
            Class(arguments[0]) === "ArrayBuffer"
          )
        ) {
          return function (array) {
            var byteLength = array.length * this.BYTES_PER_ELEMENT;
            Object.defineProperty(this, "buffer", {
              value: new ArrayBuffer(byteLength),
            });
            Object.defineProperty(this, "byteLength", { value: byteLength });
            Object.defineProperty(this, "byteOffset", { value: 0 });
            Object.defineProperty(this, "length", { value: array.length });

            for (var i = 0; i < this.length; i += 1) {
              var s = array[i];
              this._setter(i, Number(s));
            }
          }.apply(this, arguments);
        }

        // %TypedArray% ( buffer, byteOffset=0, length=undefined )
        if (
          arguments.length >= 1 &&
          Type(arguments[0]) === "object" &&
          (arguments[0] instanceof ArrayBuffer ||
            Class(arguments[0]) === "ArrayBuffer")
        ) {
          return function (buffer, byteOffset, length) {
            byteOffset = ToUint32(byteOffset);
            if (byteOffset > buffer.byteLength)
              throw RangeError("byteOffset out of range");

            // The given byteOffset must be a multiple of the element
            // size of the specific type, otherwise an exception is raised.
            if (byteOffset % this.BYTES_PER_ELEMENT)
              throw RangeError(
                "buffer length minus the byteOffset is not a multiple of the element size."
              );

            if (length === undefined) {
              var byteLength = buffer.byteLength - byteOffset;
              if (byteLength % this.BYTES_PER_ELEMENT)
                throw RangeError(
                  "length of buffer minus byteOffset not a multiple of the element size"
                );
              length = byteLength / this.BYTES_PER_ELEMENT;
            } else {
              length = ToUint32(length);
              byteLength = length * this.BYTES_PER_ELEMENT;
            }

            if (byteOffset + byteLength > buffer.byteLength)
              throw RangeError(
                "byteOffset and length reference an area beyond the end of the buffer"
              );

            Object.defineProperty(this, "buffer", { value: buffer });
            Object.defineProperty(this, "byteLength", { value: byteLength });
            Object.defineProperty(this, "byteOffset", { value: byteOffset });
            Object.defineProperty(this, "length", { value: length });
          }.apply(this, arguments);
        }

        // %TypedArray% ( all other argument combinations )
        throw TypeError();
      }

      // Properties of the %TypedArray Instrinsic Object

      // %TypedArray%.from ( source , mapfn=undefined, thisArg=undefined )
      Object.defineProperty($TypedArray$, "from", {
        value: function (iterable) {
          return new this(iterable);
        },
      });

      // %TypedArray%.of ( ...items )
      Object.defineProperty($TypedArray$, "of", {
        value: function (/*...items*/) {
          return new this(arguments);
        },
      });

      // %TypedArray%.prototype
      var $TypedArrayPrototype$ = {};
      $TypedArray$.prototype = $TypedArrayPrototype$;

      // WebIDL: getter type (unsigned long index);
      Object.defineProperty($TypedArray$.prototype, "_getter", {
        value: function (index) {
          if (arguments.length < 1) throw SyntaxError("Not enough arguments");

          index = ToUint32(index);
          if (index >= this.length) return undefined;

          var bytes = [],
            i,
            o;
          for (
            i = 0, o = this.byteOffset + index * this.BYTES_PER_ELEMENT;
            i < this.BYTES_PER_ELEMENT;
            i += 1, o += 1
          ) {
            bytes.push(this.buffer._bytes[o]);
          }
          return this._unpack(bytes);
        },
      });

      // NONSTANDARD: convenience alias for getter: type get(unsigned long index);
      Object.defineProperty($TypedArray$.prototype, "get", {
        value: $TypedArray$.prototype._getter,
      });

      // WebIDL: setter void (unsigned long index, type value);
      Object.defineProperty($TypedArray$.prototype, "_setter", {
        value: function (index, value) {
          if (arguments.length < 2) throw SyntaxError("Not enough arguments");

          index = ToUint32(index);
          if (index >= this.length) return;

          var bytes = this._pack(value),
            i,
            o;
          for (
            i = 0, o = this.byteOffset + index * this.BYTES_PER_ELEMENT;
            i < this.BYTES_PER_ELEMENT;
            i += 1, o += 1
          ) {
            this.buffer._bytes[o] = bytes[i];
          }
        },
      });

      // get %TypedArray%.prototype.buffer
      // get %TypedArray%.prototype.byteLength
      // get %TypedArray%.prototype.byteOffset
      // -- applied directly to the object in the constructor

      // %TypedArray%.prototype.constructor
      Object.defineProperty($TypedArray$.prototype, "constructor", {
        value: $TypedArray$,
      });

      // %TypedArray%.prototype.copyWithin (target, start, end = this.length )
      Object.defineProperty($TypedArray$.prototype, "copyWithin", {
        value: function (target, start) {
          var end = arguments[2];

          var o = ToObject(this);
          var lenVal = o.length;
          var len = ToUint32(lenVal);
          len = max(len, 0);
          var relativeTarget = ToInt32(target);
          var to;
          if (relativeTarget < 0) to = max(len + relativeTarget, 0);
          else to = min(relativeTarget, len);
          var relativeStart = ToInt32(start);
          var from;
          if (relativeStart < 0) from = max(len + relativeStart, 0);
          else from = min(relativeStart, len);
          var relativeEnd;
          if (end === undefined) relativeEnd = len;
          else relativeEnd = ToInt32(end);
          var final;
          if (relativeEnd < 0) final = max(len + relativeEnd, 0);
          else final = min(relativeEnd, len);
          var count = min(final - from, len - to);
          var direction;
          if (from < to && to < from + count) {
            direction = -1;
            from = from + count - 1;
            to = to + count - 1;
          } else {
            direction = 1;
          }
          while (count > 0) {
            o._setter(to, o._getter(from));
            from = from + direction;
            to = to + direction;
            count = count - 1;
          }
          return o;
        },
      });

      // %TypedArray%.prototype.entries ( )
      // -- defined in es6.js to shim browsers w/ native TypedArrays

      // %TypedArray%.prototype.every ( callbackfn, thisArg = undefined )
      Object.defineProperty($TypedArray$.prototype, "every", {
        value: function (callbackfn) {
          if (this === undefined || this === null) throw TypeError();
          var t = Object(this);
          var len = ToUint32(t.length);
          if (!IsCallable(callbackfn)) throw TypeError();
          var thisArg = arguments[1];
          for (var i = 0; i < len; i++) {
            if (!callbackfn.call(thisArg, t._getter(i), i, t)) return false;
          }
          return true;
        },
      });

      // %TypedArray%.prototype.fill (value, start = 0, end = this.length )
      Object.defineProperty($TypedArray$.prototype, "fill", {
        value: function (value) {
          var start = arguments[1],
            end = arguments[2];

          var o = ToObject(this);
          var lenVal = o.length;
          var len = ToUint32(lenVal);
          len = max(len, 0);
          var relativeStart = ToInt32(start);
          var k;
          if (relativeStart < 0) k = max(len + relativeStart, 0);
          else k = min(relativeStart, len);
          var relativeEnd;
          if (end === undefined) relativeEnd = len;
          else relativeEnd = ToInt32(end);
          var final;
          if (relativeEnd < 0) final = max(len + relativeEnd, 0);
          else final = min(relativeEnd, len);
          while (k < final) {
            o._setter(k, value);
            k += 1;
          }
          return o;
        },
      });

      // %TypedArray%.prototype.filter ( callbackfn, thisArg = undefined )
      Object.defineProperty($TypedArray$.prototype, "filter", {
        value: function (callbackfn) {
          if (this === undefined || this === null) throw TypeError();
          var t = Object(this);
          var len = ToUint32(t.length);
          if (!IsCallable(callbackfn)) throw TypeError();
          var res = [];
          var thisp = arguments[1];
          for (var i = 0; i < len; i++) {
            var val = t._getter(i); // in case fun mutates this
            if (callbackfn.call(thisp, val, i, t)) res.push(val);
          }
          return new this.constructor(res);
        },
      });

      // %TypedArray%.prototype.find (predicate, thisArg = undefined)
      Object.defineProperty($TypedArray$.prototype, "find", {
        value: function (predicate) {
          var o = ToObject(this);
          var lenValue = o.length;
          var len = ToUint32(lenValue);
          if (!IsCallable(predicate)) throw TypeError();
          var t = arguments.length > 1 ? arguments[1] : undefined;
          var k = 0;
          while (k < len) {
            var kValue = o._getter(k);
            var testResult = predicate.call(t, kValue, k, o);
            if (Boolean(testResult)) return kValue;
            ++k;
          }
          return undefined;
        },
      });

      // %TypedArray%.prototype.findIndex ( predicate, thisArg = undefined )
      Object.defineProperty($TypedArray$.prototype, "findIndex", {
        value: function (predicate) {
          var o = ToObject(this);
          var lenValue = o.length;
          var len = ToUint32(lenValue);
          if (!IsCallable(predicate)) throw TypeError();
          var t = arguments.length > 1 ? arguments[1] : undefined;
          var k = 0;
          while (k < len) {
            var kValue = o._getter(k);
            var testResult = predicate.call(t, kValue, k, o);
            if (Boolean(testResult)) return k;
            ++k;
          }
          return -1;
        },
      });

      // %TypedArray%.prototype.forEach ( callbackfn, thisArg = undefined )
      Object.defineProperty($TypedArray$.prototype, "forEach", {
        value: function (callbackfn) {
          if (this === undefined || this === null) throw TypeError();
          var t = Object(this);
          var len = ToUint32(t.length);
          if (!IsCallable(callbackfn)) throw TypeError();
          var thisp = arguments[1];
          for (var i = 0; i < len; i++)
            callbackfn.call(thisp, t._getter(i), i, t);
        },
      });

      // %TypedArray%.prototype.indexOf (searchElement, fromIndex = 0 )
      Object.defineProperty($TypedArray$.prototype, "indexOf", {
        value: function (searchElement) {
          if (this === undefined || this === null) throw TypeError();
          var t = Object(this);
          var len = ToUint32(t.length);
          if (len === 0) return -1;
          var n = 0;
          if (arguments.length > 0) {
            n = Number(arguments[1]);
            if (n !== n) {
              n = 0;
            } else if (n !== 0 && n !== 1 / 0 && n !== -(1 / 0)) {
              n = (n > 0 || -1) * floor(abs(n));
            }
          }
          if (n >= len) return -1;
          var k = n >= 0 ? n : max(len - abs(n), 0);
          for (; k < len; k++) {
            if (t._getter(k) === searchElement) {
              return k;
            }
          }
          return -1;
        },
      });

      // %TypedArray%.prototype.join ( separator )
      Object.defineProperty($TypedArray$.prototype, "join", {
        value: function (separator) {
          if (this === undefined || this === null) throw TypeError();
          var t = Object(this);
          var len = ToUint32(t.length);
          var tmp = Array(len);
          for (var i = 0; i < len; ++i) tmp[i] = t._getter(i);
          return tmp.join(separator === undefined ? "," : separator); // Hack for IE7
        },
      });

      // %TypedArray%.prototype.keys ( )
      // -- defined in es6.js to shim browsers w/ native TypedArrays

      // %TypedArray%.prototype.lastIndexOf ( searchElement, fromIndex = this.length-1 )
      Object.defineProperty($TypedArray$.prototype, "lastIndexOf", {
        value: function (searchElement) {
          if (this === undefined || this === null) throw TypeError();
          var t = Object(this);
          var len = ToUint32(t.length);
          if (len === 0) return -1;
          var n = len;
          if (arguments.length > 1) {
            n = Number(arguments[1]);
            if (n !== n) {
              n = 0;
            } else if (n !== 0 && n !== 1 / 0 && n !== -(1 / 0)) {
              n = (n > 0 || -1) * floor(abs(n));
            }
          }
          var k = n >= 0 ? min(n, len - 1) : len - abs(n);
          for (; k >= 0; k--) {
            if (t._getter(k) === searchElement) return k;
          }
          return -1;
        },
      });

      // get %TypedArray%.prototype.length
      // -- applied directly to the object in the constructor

      // %TypedArray%.prototype.map ( callbackfn, thisArg = undefined )
      Object.defineProperty($TypedArray$.prototype, "map", {
        value: function (callbackfn) {
          if (this === undefined || this === null) throw TypeError();
          var t = Object(this);
          var len = ToUint32(t.length);
          if (!IsCallable(callbackfn)) throw TypeError();
          var res = [];
          res.length = len;
          var thisp = arguments[1];
          for (var i = 0; i < len; i++)
            res[i] = callbackfn.call(thisp, t._getter(i), i, t);
          return new this.constructor(res);
        },
      });

      // %TypedArray%.prototype.reduce ( callbackfn [, initialValue] )
      Object.defineProperty($TypedArray$.prototype, "reduce", {
        value: function (callbackfn) {
          if (this === undefined || this === null) throw TypeError();
          var t = Object(this);
          var len = ToUint32(t.length);
          if (!IsCallable(callbackfn)) throw TypeError();
          // no value to return if no initial value and an empty array
          if (len === 0 && arguments.length === 1) throw TypeError();
          var k = 0;
          var accumulator;
          if (arguments.length >= 2) {
            accumulator = arguments[1];
          } else {
            accumulator = t._getter(k++);
          }
          while (k < len) {
            accumulator = callbackfn.call(
              undefined,
              accumulator,
              t._getter(k),
              k,
              t
            );
            k++;
          }
          return accumulator;
        },
      });

      // %TypedArray%.prototype.reduceRight ( callbackfn [, initialValue] )
      Object.defineProperty($TypedArray$.prototype, "reduceRight", {
        value: function (callbackfn) {
          if (this === undefined || this === null) throw TypeError();
          var t = Object(this);
          var len = ToUint32(t.length);
          if (!IsCallable(callbackfn)) throw TypeError();
          // no value to return if no initial value, empty array
          if (len === 0 && arguments.length === 1) throw TypeError();
          var k = len - 1;
          var accumulator;
          if (arguments.length >= 2) {
            accumulator = arguments[1];
          } else {
            accumulator = t._getter(k--);
          }
          while (k >= 0) {
            accumulator = callbackfn.call(
              undefined,
              accumulator,
              t._getter(k),
              k,
              t
            );
            k--;
          }
          return accumulator;
        },
      });

      // %TypedArray%.prototype.reverse ( )
      Object.defineProperty($TypedArray$.prototype, "reverse", {
        value: function () {
          if (this === undefined || this === null) throw TypeError();
          var t = Object(this);
          var len = ToUint32(t.length);
          var half = floor(len / 2);
          for (var i = 0, j = len - 1; i < half; ++i, --j) {
            var tmp = t._getter(i);
            t._setter(i, t._getter(j));
            t._setter(j, tmp);
          }
          return t;
        },
      });

      // %TypedArray%.prototype.set(array, offset = 0 )
      // %TypedArray%.prototype.set(typedArray, offset = 0 )
      // WebIDL: void set(TypedArray array, optional unsigned long offset);
      // WebIDL: void set(sequence<type> array, optional unsigned long offset);
      Object.defineProperty($TypedArray$.prototype, "set", {
        value: function (index, value) {
          if (arguments.length < 1) throw SyntaxError("Not enough arguments");
          var array,
            sequence,
            offset,
            len,
            i,
            s,
            d,
            byteOffset,
            byteLength,
            tmp;

          if (
            typeof arguments[0] === "object" &&
            arguments[0].constructor === this.constructor
          ) {
            // void set(TypedArray array, optional unsigned long offset);
            array = arguments[0];
            offset = ToUint32(arguments[1]);

            if (offset + array.length > this.length) {
              throw RangeError("Offset plus length of array is out of range");
            }

            byteOffset = this.byteOffset + offset * this.BYTES_PER_ELEMENT;
            byteLength = array.length * this.BYTES_PER_ELEMENT;

            if (array.buffer === this.buffer) {
              tmp = [];
              for (
                i = 0, s = array.byteOffset;
                i < byteLength;
                i += 1, s += 1
              ) {
                tmp[i] = array.buffer._bytes[s];
              }
              for (i = 0, d = byteOffset; i < byteLength; i += 1, d += 1) {
                this.buffer._bytes[d] = tmp[i];
              }
            } else {
              for (
                i = 0, s = array.byteOffset, d = byteOffset;
                i < byteLength;
                i += 1, s += 1, d += 1
              ) {
                this.buffer._bytes[d] = array.buffer._bytes[s];
              }
            }
          } else if (
            typeof arguments[0] === "object" &&
            typeof arguments[0].length !== "undefined"
          ) {
            // void set(sequence<type> array, optional unsigned long offset);
            sequence = arguments[0];
            len = ToUint32(sequence.length);
            offset = ToUint32(arguments[1]);

            if (offset + len > this.length) {
              throw RangeError("Offset plus length of array is out of range");
            }

            for (i = 0; i < len; i += 1) {
              s = sequence[i];
              this._setter(offset + i, Number(s));
            }
          } else {
            throw TypeError("Unexpected argument type(s)");
          }
        },
      });

      // %TypedArray%.prototype.slice ( start, end )
      Object.defineProperty($TypedArray$.prototype, "slice", {
        value: function (start, end) {
          var o = ToObject(this);
          var lenVal = o.length;
          var len = ToUint32(lenVal);
          var relativeStart = ToInt32(start);
          var k =
            relativeStart < 0
              ? max(len + relativeStart, 0)
              : min(relativeStart, len);
          var relativeEnd = end === undefined ? len : ToInt32(end);
          var final =
            relativeEnd < 0 ? max(len + relativeEnd, 0) : min(relativeEnd, len);
          var count = final - k;
          var c = o.constructor;
          var a = new c(count);
          var n = 0;
          while (k < final) {
            var kValue = o._getter(k);
            a._setter(n, kValue);
            ++k;
            ++n;
          }
          return a;
        },
      });

      // %TypedArray%.prototype.some ( callbackfn, thisArg = undefined )
      Object.defineProperty($TypedArray$.prototype, "some", {
        value: function (callbackfn) {
          if (this === undefined || this === null) throw TypeError();
          var t = Object(this);
          var len = ToUint32(t.length);
          if (!IsCallable(callbackfn)) throw TypeError();
          var thisp = arguments[1];
          for (var i = 0; i < len; i++) {
            if (callbackfn.call(thisp, t._getter(i), i, t)) {
              return true;
            }
          }
          return false;
        },
      });

      // %TypedArray%.prototype.sort ( comparefn )
      Object.defineProperty($TypedArray$.prototype, "sort", {
        value: function (comparefn) {
          if (this === undefined || this === null) throw TypeError();
          var t = Object(this);
          var len = ToUint32(t.length);
          var tmp = Array(len);
          for (var i = 0; i < len; ++i) tmp[i] = t._getter(i);
          function sortCompare(x, y) {
            if (x !== x && y !== y) return +0;
            if (x !== x) return 1;
            if (y !== y) return -1;
            if (comparefn !== undefined) {
              return comparefn(x, y);
            }
            if (x < y) return -1;
            if (x > y) return 1;
            return +0;
          }
          tmp.sort(sortCompare);
          for (i = 0; i < len; ++i) t._setter(i, tmp[i]);
          return t;
        },
      });

      // %TypedArray%.prototype.subarray(begin = 0, end = this.length )
      // WebIDL: TypedArray subarray(long begin, optional long end);
      Object.defineProperty($TypedArray$.prototype, "subarray", {
        value: function (start, end) {
          function clamp(v, min, max) {
            return v < min ? min : v > max ? max : v;
          }

          start = ToInt32(start);
          end = ToInt32(end);

          if (arguments.length < 1) {
            start = 0;
          }
          if (arguments.length < 2) {
            end = this.length;
          }

          if (start < 0) {
            start = this.length + start;
          }
          if (end < 0) {
            end = this.length + end;
          }

          start = clamp(start, 0, this.length);
          end = clamp(end, 0, this.length);

          var len = end - start;
          if (len < 0) {
            len = 0;
          }

          return new this.constructor(
            this.buffer,
            this.byteOffset + start * this.BYTES_PER_ELEMENT,
            len
          );
        },
      });

      // %TypedArray%.prototype.toLocaleString ( )
      // %TypedArray%.prototype.toString ( )
      // %TypedArray%.prototype.values ( )
      // %TypedArray%.prototype [ @@iterator ] ( )
      // get %TypedArray%.prototype [ @@toStringTag ]
      // -- defined in es6.js to shim browsers w/ native TypedArrays

      function makeTypedArray(elementSize, pack, unpack) {
        // Each TypedArray type requires a distinct constructor instance with
        // identical logic, which this produces.
        var TypedArray = function () {
          Object.defineProperty(this, "constructor", { value: TypedArray });
          $TypedArray$.apply(this, arguments);
          makeArrayAccessors(this);
        };
        if ("__proto__" in TypedArray) {
          TypedArray.__proto__ = $TypedArray$;
        } else {
          TypedArray.from = $TypedArray$.from;
          TypedArray.of = $TypedArray$.of;
        }

        TypedArray.BYTES_PER_ELEMENT = elementSize;

        var TypedArrayPrototype = function () {};
        TypedArrayPrototype.prototype = $TypedArrayPrototype$;

        TypedArray.prototype = new TypedArrayPrototype();

        Object.defineProperty(TypedArray.prototype, "BYTES_PER_ELEMENT", {
          value: elementSize,
        });
        Object.defineProperty(TypedArray.prototype, "_pack", { value: pack });
        Object.defineProperty(TypedArray.prototype, "_unpack", {
          value: unpack,
        });

        return TypedArray;
      }

      var Int8Array = makeTypedArray(1, packI8, unpackI8);
      var Uint8Array = makeTypedArray(1, packU8, unpackU8);
      var Uint8ClampedArray = makeTypedArray(1, packU8Clamped, unpackU8);
      var Int16Array = makeTypedArray(2, packI16, unpackI16);
      var Uint16Array = makeTypedArray(2, packU16, unpackU16);
      var Int32Array = makeTypedArray(4, packI32, unpackI32);
      var Uint32Array = makeTypedArray(4, packU32, unpackU32);
      var Float32Array = makeTypedArray(4, packF32, unpackF32);
      var Float64Array = makeTypedArray(8, packF64, unpackF64);

      global.Int8Array = global.Int8Array || Int8Array;
      global.Uint8Array = global.Uint8Array || Uint8Array;
      global.Uint8ClampedArray = global.Uint8ClampedArray || Uint8ClampedArray;
      global.Int16Array = global.Int16Array || Int16Array;
      global.Uint16Array = global.Uint16Array || Uint16Array;
      global.Int32Array = global.Int32Array || Int32Array;
      global.Uint32Array = global.Uint32Array || Uint32Array;
      global.Float32Array = global.Float32Array || Float32Array;
      global.Float64Array = global.Float64Array || Float64Array;
    })();

    //
    // 6 The DataView View Type
    //

    (function () {
      function r(array, index) {
        return IsCallable(array.get) ? array.get(index) : array[index];
      }

      var IS_BIG_ENDIAN = (function () {
        var u16array = new Uint16Array([0x1234]),
          u8array = new Uint8Array(u16array.buffer);
        return r(u8array, 0) === 0x12;
      })();

      // DataView(buffer, byteOffset=0, byteLength=undefined)
      // WebIDL: Constructor(ArrayBuffer buffer,
      //                     optional unsigned long byteOffset,
      //                     optional unsigned long byteLength)
      function DataView(buffer, byteOffset, byteLength) {
        if (!(buffer instanceof ArrayBuffer || Class(buffer) === "ArrayBuffer"))
          throw TypeError();

        byteOffset = ToUint32(byteOffset);
        if (byteOffset > buffer.byteLength)
          throw RangeError("byteOffset out of range");

        if (byteLength === undefined)
          byteLength = buffer.byteLength - byteOffset;
        else byteLength = ToUint32(byteLength);

        if (byteOffset + byteLength > buffer.byteLength)
          throw RangeError(
            "byteOffset and length reference an area beyond the end of the buffer"
          );

        Object.defineProperty(this, "buffer", { value: buffer });
        Object.defineProperty(this, "byteLength", { value: byteLength });
        Object.defineProperty(this, "byteOffset", { value: byteOffset });
      }

      // get DataView.prototype.buffer
      // get DataView.prototype.byteLength
      // get DataView.prototype.byteOffset
      // -- applied directly to instances by the constructor

      function makeGetter(arrayType) {
        return function GetViewValue(byteOffset, littleEndian) {
          byteOffset = ToUint32(byteOffset);

          if (byteOffset + arrayType.BYTES_PER_ELEMENT > this.byteLength)
            throw RangeError("Array index out of range");

          byteOffset += this.byteOffset;

          var uint8Array = new Uint8Array(
              this.buffer,
              byteOffset,
              arrayType.BYTES_PER_ELEMENT
            ),
            bytes = [];
          for (var i = 0; i < arrayType.BYTES_PER_ELEMENT; i += 1)
            bytes.push(r(uint8Array, i));

          if (Boolean(littleEndian) === Boolean(IS_BIG_ENDIAN)) bytes.reverse();

          return r(new arrayType(new Uint8Array(bytes).buffer), 0);
        };
      }

      Object.defineProperty(DataView.prototype, "getUint8", {
        value: makeGetter(Uint8Array),
      });
      Object.defineProperty(DataView.prototype, "getInt8", {
        value: makeGetter(Int8Array),
      });
      Object.defineProperty(DataView.prototype, "getUint16", {
        value: makeGetter(Uint16Array),
      });
      Object.defineProperty(DataView.prototype, "getInt16", {
        value: makeGetter(Int16Array),
      });
      Object.defineProperty(DataView.prototype, "getUint32", {
        value: makeGetter(Uint32Array),
      });
      Object.defineProperty(DataView.prototype, "getInt32", {
        value: makeGetter(Int32Array),
      });
      Object.defineProperty(DataView.prototype, "getFloat32", {
        value: makeGetter(Float32Array),
      });
      Object.defineProperty(DataView.prototype, "getFloat64", {
        value: makeGetter(Float64Array),
      });

      function makeSetter(arrayType) {
        return function SetViewValue(byteOffset, value, littleEndian) {
          byteOffset = ToUint32(byteOffset);
          if (byteOffset + arrayType.BYTES_PER_ELEMENT > this.byteLength)
            throw RangeError("Array index out of range");

          // Get bytes
          var typeArray = new arrayType([value]),
            byteArray = new Uint8Array(typeArray.buffer),
            bytes = [],
            i,
            byteView;

          for (i = 0; i < arrayType.BYTES_PER_ELEMENT; i += 1)
            bytes.push(r(byteArray, i));

          // Flip if necessary
          if (Boolean(littleEndian) === Boolean(IS_BIG_ENDIAN)) bytes.reverse();

          // Write them
          byteView = new Uint8Array(
            this.buffer,
            byteOffset,
            arrayType.BYTES_PER_ELEMENT
          );
          byteView.set(bytes);
        };
      }

      Object.defineProperty(DataView.prototype, "setUint8", {
        value: makeSetter(Uint8Array),
      });
      Object.defineProperty(DataView.prototype, "setInt8", {
        value: makeSetter(Int8Array),
      });
      Object.defineProperty(DataView.prototype, "setUint16", {
        value: makeSetter(Uint16Array),
      });
      Object.defineProperty(DataView.prototype, "setInt16", {
        value: makeSetter(Int16Array),
      });
      Object.defineProperty(DataView.prototype, "setUint32", {
        value: makeSetter(Uint32Array),
      });
      Object.defineProperty(DataView.prototype, "setInt32", {
        value: makeSetter(Int32Array),
      });
      Object.defineProperty(DataView.prototype, "setFloat32", {
        value: makeSetter(Float32Array),
      });
      Object.defineProperty(DataView.prototype, "setFloat64", {
        value: makeSetter(Float64Array),
      });

      global.DataView = global.DataView || DataView;
    })();
  })(self);

  // Object.getOwnPropertyDescriptor
  /* global CreateMethodProperty, ToObject, ToPropertyKey, HasOwnProperty, Type */
  (function () {
    var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

    var supportsDOMDescriptors = function () {
      try {
        return (
          Object.defineProperty(document.createElement("div"), "one", {
            get: function () {
              return 1;
            },
          }).one === 1
        );
      } catch (e) {
        return false;
      }
    };

    var toString = {}.toString;
    var split = "".split;

    // 19.1.2.8 Object.getOwnPropertyDescriptor ( O, P )
    CreateMethodProperty(
      Object,
      "getOwnPropertyDescriptor",
      function getOwnPropertyDescriptor(O, P) {
        // 1. Let obj be ? ToObject(O).
        var obj = ToObject(O);
        // Polyfill.io fallback for non-array-like strings which exist in some ES3 user-agents (IE 8)
        obj =
          (Type(obj) === "string" || obj instanceof String) &&
          toString.call(O) == "[object String]"
            ? split.call(O, "")
            : Object(O);

        // 2. Let key be ? ToPropertyKey(P).
        var key = ToPropertyKey(P);

        // 3. Let desc be ? obj.[[GetOwnProperty]](key).
        // 4. Return FromPropertyDescriptor(desc).
        // Polyfill.io Internet Explorer 8 natively supports property descriptors only on DOM objects.
        // We will fallback to the polyfill implementation if the native implementation throws an error.
        if (supportsDOMDescriptors) {
          try {
            return nativeGetOwnPropertyDescriptor(obj, key);
            // eslint-disable-next-line no-empty
          } catch (error) {}
        }
        if (HasOwnProperty(obj, key)) {
          return {
            enumerable: true,
            configurable: true,
            writable: true,
            value: obj[key],
          };
        }
      }
    );
  })();

  // Object.isExtensible
  /* global CreateMethodProperty, Type */

  (function (nativeIsExtensible) {
    // 19.1.2.13 Object.isExtensible ( O )
    CreateMethodProperty(Object, "isExtensible", function isExtensible(O) {
      // 1. If Type(O) is not Object, return false.
      if (Type(O) !== "object") {
        return false;
      }
      // 2. Return ? IsExtensible(O).
      return nativeIsExtensible ? nativeIsExtensible(O) : true;
    });
  })(Object.isExtensible);

  // Object.keys
  /* global CreateMethodProperty */
  CreateMethodProperty(
    Object,
    "keys",
    (function () {
      "use strict";

      // modified from https://github.com/es-shims/object-keys

      var has = Object.prototype.hasOwnProperty;
      var toStr = Object.prototype.toString;
      var isEnumerable = Object.prototype.propertyIsEnumerable;
      var hasDontEnumBug = !isEnumerable.call({ toString: null }, "toString");
      var hasPrototypeEnumBug = isEnumerable.call(function () {}, "prototype");
      function hasProtoEnumBug() {
        // Object.create polyfill creates an enumerable __proto__
        var createdObj;
        try {
          createdObj = Object.create({});
        } catch (e) {
          // If this fails the polyfil isn't loaded yet, but will be.
          // Can't add it to depedencies because of it would create a circular depedency.
          return true;
        }

        return isEnumerable.call(createdObj, "__proto__");
      }

      var dontEnums = [
        "toString",
        "toLocaleString",
        "valueOf",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "constructor",
      ];
      var equalsConstructorPrototype = function (o) {
        var ctor = o.constructor;
        return ctor && ctor.prototype === o;
      };
      var excludedKeys = {
        $console: true,
        $external: true,
        $frame: true,
        $frameElement: true,
        $frames: true,
        $innerHeight: true,
        $innerWidth: true,
        $outerHeight: true,
        $outerWidth: true,
        $pageXOffset: true,
        $pageYOffset: true,
        $parent: true,
        $scrollLeft: true,
        $scrollTop: true,
        $scrollX: true,
        $scrollY: true,
        $self: true,
        $webkitIndexedDB: true,
        $webkitStorageInfo: true,
        $window: true,
      };
      var hasAutomationEqualityBug = (function () {
        if (typeof window === "undefined") {
          return false;
        }
        for (var k in window) {
          try {
            if (
              !excludedKeys["$" + k] &&
              has.call(window, k) &&
              window[k] !== null &&
              typeof window[k] === "object"
            ) {
              try {
                equalsConstructorPrototype(window[k]);
              } catch (e) {
                return true;
              }
            }
          } catch (e) {
            return true;
          }
        }
        return false;
      })();
      var equalsConstructorPrototypeIfNotBuggy = function (o) {
        if (typeof window === "undefined" || !hasAutomationEqualityBug) {
          return equalsConstructorPrototype(o);
        }
        try {
          return equalsConstructorPrototype(o);
        } catch (e) {
          return false;
        }
      };

      function isArgumentsObject(value) {
        var str = toStr.call(value);
        var isArgs = str === "[object Arguments]";
        if (!isArgs) {
          isArgs =
            str !== "[object Array]" &&
            value !== null &&
            typeof value === "object" &&
            typeof value.length === "number" &&
            value.length >= 0 &&
            toStr.call(value.callee) === "[object Function]";
        }
        return isArgs;
      }

      return function keys(object) {
        var isFunction = toStr.call(object) === "[object Function]";
        var isArguments = isArgumentsObject(object);
        var isString = toStr.call(object) === "[object String]";
        var theKeys = [];

        if (object === undefined || object === null) {
          throw new TypeError("Cannot convert undefined or null to object");
        }

        var skipPrototype = hasPrototypeEnumBug && isFunction;
        if (isString && object.length > 0 && !has.call(object, 0)) {
          for (var i = 0; i < object.length; ++i) {
            theKeys.push(String(i));
          }
        }

        if (isArguments && object.length > 0) {
          for (var j = 0; j < object.length; ++j) {
            theKeys.push(String(j));
          }
        } else {
          for (var name in object) {
            if (
              !(hasProtoEnumBug() && name === "__proto__") &&
              !(skipPrototype && name === "prototype") &&
              has.call(object, name)
            ) {
              theKeys.push(String(name));
            }
          }
        }

        if (hasDontEnumBug) {
          var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

          for (var k = 0; k < dontEnums.length; ++k) {
            if (
              !(skipConstructor && dontEnums[k] === "constructor") &&
              has.call(object, dontEnums[k])
            ) {
              theKeys.push(dontEnums[k]);
            }
          }
        }
        return theKeys;
      };
    })()
  );

  // Object.assign
  /* global CreateMethodProperty, Get, ToObject */
  // 19.1.2.1 Object.assign ( target, ...sources )
  CreateMethodProperty(Object, "assign", function assign(target, source) {
    // eslint-disable-line no-unused-vars
    // 1. Let to be ? ToObject(target).
    var to = ToObject(target);

    // 2. If only one argument was passed, return to.
    if (arguments.length === 1) {
      return to;
    }

    // 3. Let sources be the List of argument values starting with the second argument
    var sources = Array.prototype.slice.call(arguments, 1);

    // 4. For each element nextSource of sources, in ascending index order, do
    var index1;
    var index2;
    var keys;
    var from;
    for (index1 = 0; index1 < sources.length; index1++) {
      var nextSource = sources[index1];
      // a. If nextSource is undefined or null, let keys be a new empty List.
      if (nextSource === undefined || nextSource === null) {
        keys = [];
        // b. Else,
      } else {
        // Polyfill.io - In order to get strings in ES3 and old V8 working correctly we need to split them into an array ourselves.
        // i. Let from be ! ToObject(nextSource).
        from =
          Object.prototype.toString.call(nextSource) === "[object String]"
            ? String(nextSource).split("")
            : ToObject(nextSource);
        // ii. Let keys be ? from.[[OwnPropertyKeys]]().
        /*
				This step in our polyfill is not complying with the specification.
				[[OwnPropertyKeys]] is meant to return ALL keys, including non-enumerable and symbols.
				TODO: When we have Reflect.ownKeys, use that instead as it is the userland equivalent of [[OwnPropertyKeys]].
			*/
        keys = Object.keys(from);
      }

      // c. For each element nextKey of keys in List order, do
      for (index2 = 0; index2 < keys.length; index2++) {
        var nextKey = keys[index2];
        var enumerable;
        try {
          // i. Let desc be ? from.[[GetOwnProperty]](nextKey).
          var desc = Object.getOwnPropertyDescriptor(from, nextKey);
          // ii. If desc is not undefined and desc.[[Enumerable]] is true, then
          enumerable = desc !== undefined && desc.enumerable === true;
        } catch (e) {
          // Polyfill.io - We use Object.prototype.propertyIsEnumerable as a fallback
          // because `Object.getOwnPropertyDescriptor(window.location, 'hash')` causes Internet Explorer 11 to crash.
          enumerable = Object.prototype.propertyIsEnumerable.call(
            from,
            nextKey
          );
        }
        if (enumerable) {
          // 1. Let propValue be ? Get(from, nextKey).
          var propValue = Get(from, nextKey);
          // 2. Perform ? Set(to, nextKey, propValue, true).
          to[nextKey] = propValue;
        }
      }
    }
    // 5. Return to.
    return to;
  });

  // Object.getOwnPropertyNames
  /* global CreateMethodProperty, ToObject */
  (function () {
    var toString = {}.toString;
    var split = "".split;
    var concat = [].concat;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var nativeGetOwnPropertyNames = Object.getOwnPropertyNames || Object.keys;
    var cachedWindowNames =
      typeof self === "object" ? nativeGetOwnPropertyNames(self) : [];

    // 19.1.2.10 Object.getOwnPropertyNames ( O )
    CreateMethodProperty(
      Object,
      "getOwnPropertyNames",
      function getOwnPropertyNames(O) {
        var object = ToObject(O);

        if (toString.call(object) === "[object Window]") {
          try {
            return nativeGetOwnPropertyNames(object);
          } catch (e) {
            // IE bug where layout engine calls userland Object.getOwnPropertyNames for cross-domain `window` objects
            return concat.call([], cachedWindowNames);
          }
        }

        // Polyfill.io fallback for non-array-like strings which exist in some ES3 user-agents (IE 8)
        object =
          toString.call(object) == "[object String]"
            ? split.call(object, "")
            : Object(object);

        var result = nativeGetOwnPropertyNames(object);
        var extraNonEnumerableKeys = ["length", "prototype"];
        for (var i = 0; i < extraNonEnumerableKeys.length; i++) {
          var key = extraNonEnumerableKeys[i];
          if (hasOwnProperty.call(object, key) && !result.includes(key)) {
            result.push(key);
          }
        }

        if (result.includes("__proto__")) {
          var index = result.indexOf("__proto__");
          result.splice(index, 1);
        }

        return result;
      }
    );
  })();

  // Object.setPrototypeOf
  /* global CreateMethodProperty */
  // ES6-shim 0.16.0 (c) 2013-2014 Paul Miller (http://paulmillr.com)
  // ES6-shim may be freely distributed under the MIT license.
  // For more details and documentation:
  // https://github.com/paulmillr/es6-shim/

  // NOTE:  This versions needs object ownership
  //        because every promoted object needs to be reassigned
  //        otherwise uncompatible browsers cannot work as expected
  //
  // NOTE:  This might need es5-shim or polyfills upfront
  //        because it's based on ES5 API.
  //        (probably just an IE <= 8 problem)
  //
  // NOTE:  nodejs is fine in version 0.8, 0.10, and future versions.
  (function () {
    if (Object.setPrototypeOf) {
      return;
    }

    /*jshint proto: true */
    // @author    Andrea Giammarchi - @WebReflection

    var getOwnPropertyNames = Object.getOwnPropertyNames;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var create = Object.create;
    var defineProperty = Object.defineProperty;
    var getPrototypeOf = Object.getPrototypeOf;
    var objProto = Object.prototype;

    var copyDescriptors = function (target, source) {
      // define into target descriptors from source
      getOwnPropertyNames(source).forEach(function (key) {
        defineProperty(target, key, getOwnPropertyDescriptor(source, key));
      });
      return target;
    };
    // used as fallback when no promotion is possible
    var createAndCopy = function setPrototypeOf(origin, proto) {
      return copyDescriptors(create(proto), origin);
    };
    var set, sPOf;
    try {
      // this might fail for various reasons
      // ignore if Chrome cought it at runtime
      set = getOwnPropertyDescriptor(objProto, "__proto__").set;
      set.call({}, null);
      // setter not poisoned, it can promote
      // Firefox, Chrome
      sPOf = function setPrototypeOf(origin, proto) {
        set.call(origin, proto);
        return origin;
      };
    } catch (e) {
      // do one or more feature detections
      set = { __proto__: null };
      // if proto does not work, needs to fallback
      // some Opera, Rhino, ducktape
      if (set instanceof Object) {
        sPOf = createAndCopy;
      } else {
        // verify if null objects are buggy
        /* eslint-disable no-proto */
        set.__proto__ = objProto;
        /* eslint-enable no-proto */
        // if null objects are buggy
        // nodejs 0.8 to 0.10
        if (set instanceof Object) {
          sPOf = function setPrototypeOf(origin, proto) {
            // use such bug to promote
            /* eslint-disable no-proto */
            origin.__proto__ = proto;
            /* eslint-enable no-proto */
            return origin;
          };
        } else {
          // try to use proto or fallback
          // Safari, old Firefox, many others
          sPOf = function setPrototypeOf(origin, proto) {
            // if proto is not null
            if (getPrototypeOf(origin)) {
              // use __proto__ to promote
              /* eslint-disable no-proto */
              origin.__proto__ = proto;
              /* eslint-enable no-proto */
              return origin;
            } else {
              // otherwise unable to promote: fallback
              return createAndCopy(origin, proto);
            }
          };
        }
      }
    }
    CreateMethodProperty(Object, "setPrototypeOf", sPOf);
  })();

  // String.prototype.includes
  /* global CreateMethodProperty, IsRegExp, RequireObjectCoercible, ToInteger, ToString */
  // 21.1.3.7. String.prototype.includes ( searchString [ , position ] )
  CreateMethodProperty(
    String.prototype,
    "includes",
    function includes(searchString /* [ , position ] */) {
      "use strict";
      var position = arguments.length > 1 ? arguments[1] : undefined;
      // 1. Let O be ? RequireObjectCoercible(this value).
      var O = RequireObjectCoercible(this);
      // 2. Let S be ? ToString(O).
      var S = ToString(O);
      // 3. Let isRegExp be ? IsRegExp(searchString).
      var isRegExp = IsRegExp(searchString);
      // 4. If isRegExp is true, throw a TypeError exception.
      if (isRegExp) {
        throw new TypeError(
          "First argument to String.prototype.includes must not be a regular expression"
        );
      }
      // 5. Let searchStr be ? ToString(searchString).
      var searchStr = ToString(searchString);
      // 6. Let pos be ? ToInteger(position). (If position is undefined, this step produces the value 0.)
      var pos = ToInteger(position);
      // 7. Let len be the length of S.
      var len = S.length;
      // 8. Let start be min(max(pos, 0), len).
      var start = Math.min(Math.max(pos, 0), len);
      // 9. Let searchLen be the length of searchStr.
      // var searchLength = searchStr.length;
      // 10. If there exists any integer k not smaller than start such that k + searchLen is not greater than len, and for all nonnegative integers j less than searchLen, the code unit at index k+j within S is the same as the code unit at index j within searchStr, return true; but if there is no such integer k, return false.
      return String.prototype.indexOf.call(S, searchStr, start) !== -1;
    }
  );

  // Symbol
  // A modification of https://github.com/WebReflection/get-own-property-symbols
  // (C) Andrea Giammarchi - MIT Licensed

  /* global Type */
  (function (Object, GOPS, global) {
    "use strict"; //so that ({}).toString.call(null) returns the correct [object Null] rather than [object Window]

    var supportsGetters = (function () {
      // supports getters
      try {
        var a = {};
        Object.defineProperty(a, "t", {
          configurable: true,
          enumerable: false,
          get: function () {
            return true;
          },
          set: undefined,
        });
        return !!a.t;
      } catch (e) {
        return false;
      }
    })();

    var setDescriptor;
    var id = 0;
    var random = "" + Math.random();
    var prefix = "__\x01symbol:";
    var prefixLength = prefix.length;
    var internalSymbol = "__\x01symbol@@" + random;
    var emptySymbolLookup = {};
    var DP = "defineProperty";
    var DPies = "defineProperties";
    var GOPN = "getOwnPropertyNames";
    var GOPD = "getOwnPropertyDescriptor";
    var PIE = "propertyIsEnumerable";
    var ObjectProto = Object.prototype;
    var hOP = ObjectProto.hasOwnProperty;
    var pIE = ObjectProto[PIE];
    var toString = ObjectProto.toString;
    var concat = Array.prototype.concat;
    var cachedWindowNames = Object.getOwnPropertyNames
      ? Object.getOwnPropertyNames(self)
      : [];
    var nGOPN = Object[GOPN];
    var gOPN = function getOwnPropertyNames(obj) {
      if (toString.call(obj) === "[object Window]") {
        try {
          return nGOPN(obj);
        } catch (e) {
          // IE bug where layout engine calls userland gOPN for cross-domain `window` objects
          return concat.call([], cachedWindowNames);
        }
      }
      return nGOPN(obj);
    };
    var gOPD = Object[GOPD];
    var objectCreate = Object.create;
    var objectKeys = Object.keys;
    var freeze = Object.freeze || Object;
    var objectDefineProperty = Object[DP];
    var $defineProperties = Object[DPies];
    var descriptor = gOPD(Object, GOPN);
    var addInternalIfNeeded = function (o, uid, enumerable) {
      if (!hOP.call(o, internalSymbol)) {
        try {
          objectDefineProperty(o, internalSymbol, {
            enumerable: false,
            configurable: false,
            writable: false,
            value: {},
          });
        } catch (e) {
          o[internalSymbol] = {};
        }
      }
      o[internalSymbol]["@@" + uid] = enumerable;
    };
    var createWithSymbols = function (proto, descriptors) {
      var self = objectCreate(proto);
      gOPN(descriptors).forEach(function (key) {
        if (propertyIsEnumerable.call(descriptors, key)) {
          $defineProperty(self, key, descriptors[key]);
        }
      });
      return self;
    };
    var copyAsNonEnumerable = function (descriptor) {
      var newDescriptor = objectCreate(descriptor);
      newDescriptor.enumerable = false;
      return newDescriptor;
    };
    var get = function get() {};
    var onlyNonSymbols = function (name) {
      return name != internalSymbol && !hOP.call(source, name);
    };
    var onlySymbols = function (name) {
      return name != internalSymbol && hOP.call(source, name);
    };
    var propertyIsEnumerable = function propertyIsEnumerable(key) {
      var uid = "" + key;
      return onlySymbols(uid)
        ? hOP.call(this, uid) &&
            this[internalSymbol] &&
            this[internalSymbol]["@@" + uid]
        : pIE.call(this, key);
    };
    var setAndGetSymbol = function (uid) {
      var descriptor = {
        enumerable: false,
        configurable: true,
        get: get,
        set: function (value) {
          setDescriptor(this, uid, {
            enumerable: false,
            configurable: true,
            writable: true,
            value: value,
          });
          addInternalIfNeeded(this, uid, true);
        },
      };
      try {
        objectDefineProperty(ObjectProto, uid, descriptor);
      } catch (e) {
        ObjectProto[uid] = descriptor.value;
      }
      source[uid] = objectDefineProperty(
        Object(uid),
        "constructor",
        sourceConstructor
      );
      var description = gOPD(Symbol.prototype, "description");
      if (description) {
        objectDefineProperty(source[uid], "description", description);
      }
      return freeze(source[uid]);
    };

    var symbolDescription = function (s) {
      var sym = thisSymbolValue(s);

      // 3. Return sym.[[Description]].
      if (supportsInferredNames) {
        var name = getInferredName(sym);
        if (name !== "") {
          return name.slice(1, -1); // name.slice('['.length, -']'.length);
        }
      }

      if (emptySymbolLookup[sym] !== undefined) {
        return emptySymbolLookup[sym];
      }

      var string = sym.toString();
      var randomStartIndex = string.lastIndexOf("0.");
      string = string.slice(10, randomStartIndex);

      if (string === "") {
        return undefined;
      }
      return string;
    };

    var Symbol = function Symbol() {
      var description = arguments[0];
      if (this instanceof Symbol) {
        throw new TypeError("Symbol is not a constructor");
      }

      var uid = prefix.concat(description || "", random, ++id);

      if (
        description !== undefined &&
        (description === null ||
          isNaN(description) ||
          String(description) === "")
      ) {
        emptySymbolLookup[uid] = String(description);
      }

      var that = setAndGetSymbol(uid);

      if (!supportsGetters) {
        Object.defineProperty(that, "description", {
          configurable: true,
          enumerable: false,
          value: symbolDescription(that),
        });
      }

      return that;
    };

    var source = objectCreate(null);
    var sourceConstructor = { value: Symbol };
    var sourceMap = function (uid) {
      return source[uid];
    };
    var $defineProperty = function defineProperty(o, key, descriptor) {
      var uid = "" + key;
      if (onlySymbols(uid)) {
        setDescriptor(
          o,
          uid,
          descriptor.enumerable ? copyAsNonEnumerable(descriptor) : descriptor
        );
        addInternalIfNeeded(o, uid, !!descriptor.enumerable);
      } else {
        objectDefineProperty(o, key, descriptor);
      }
      return o;
    };

    var onlyInternalSymbols = function (obj) {
      return function (name) {
        return (
          hOP.call(obj, internalSymbol) &&
          hOP.call(obj[internalSymbol], "@@" + name)
        );
      };
    };
    var $getOwnPropertySymbols = function getOwnPropertySymbols(o) {
      return gOPN(o)
        .filter(o === ObjectProto ? onlyInternalSymbols(o) : onlySymbols)
        .map(sourceMap);
    };
    descriptor.value = $defineProperty;
    objectDefineProperty(Object, DP, descriptor);

    descriptor.value = $getOwnPropertySymbols;
    objectDefineProperty(Object, GOPS, descriptor);

    descriptor.value = function getOwnPropertyNames(o) {
      return gOPN(o).filter(onlyNonSymbols);
    };
    objectDefineProperty(Object, GOPN, descriptor);

    descriptor.value = function defineProperties(o, descriptors) {
      var symbols = $getOwnPropertySymbols(descriptors);
      if (symbols.length) {
        objectKeys(descriptors)
          .concat(symbols)
          .forEach(function (uid) {
            if (propertyIsEnumerable.call(descriptors, uid)) {
              $defineProperty(o, uid, descriptors[uid]);
            }
          });
      } else {
        $defineProperties(o, descriptors);
      }
      return o;
    };
    objectDefineProperty(Object, DPies, descriptor);

    descriptor.value = propertyIsEnumerable;
    objectDefineProperty(ObjectProto, PIE, descriptor);

    descriptor.value = Symbol;
    objectDefineProperty(global, "Symbol", descriptor);

    // defining `Symbol.for(key)`
    descriptor.value = function (key) {
      var uid = prefix.concat(prefix, key, random);
      return uid in ObjectProto ? source[uid] : setAndGetSymbol(uid);
    };
    objectDefineProperty(Symbol, "for", descriptor);

    // defining `Symbol.keyFor(symbol)`
    descriptor.value = function (symbol) {
      if (onlyNonSymbols(symbol))
        throw new TypeError(symbol + " is not a symbol");
      return hOP.call(source, symbol)
        ? symbol.slice(prefixLength * 2, -random.length)
        : void 0;
    };
    objectDefineProperty(Symbol, "keyFor", descriptor);

    descriptor.value = function getOwnPropertyDescriptor(o, key) {
      var descriptor = gOPD(o, key);
      if (descriptor && onlySymbols(key)) {
        descriptor.enumerable = propertyIsEnumerable.call(o, key);
      }
      return descriptor;
    };
    objectDefineProperty(Object, GOPD, descriptor);

    descriptor.value = function create(proto, descriptors) {
      return arguments.length === 1 || typeof descriptors === "undefined"
        ? objectCreate(proto)
        : createWithSymbols(proto, descriptors);
    };

    objectDefineProperty(Object, "create", descriptor);

    var strictModeSupported =
      function () {
        "use strict";
        return this;
      }.call(null) === null;
    if (strictModeSupported) {
      descriptor.value = function () {
        var str = toString.call(this);
        return str === "[object String]" && onlySymbols(this)
          ? "[object Symbol]"
          : str;
      };
    } else {
      descriptor.value = function () {
        // https://github.com/Financial-Times/polyfill-library/issues/164#issuecomment-486965300
        // Polyfill.io this code is here for the situation where a browser does not
        // support strict mode and is executing `Object.prototype.toString.call(null)`.
        // This code ensures that we return the correct result in that situation however,
        // this code also introduces a bug where it will return the incorrect result for
        // `Object.prototype.toString.call(window)`. We can't have the correct result for
        // both `window` and `null`, so we have opted for `null` as we believe this is the more
        // common situation.
        if (this === window) {
          return "[object Null]";
        }

        var str = toString.call(this);
        return str === "[object String]" && onlySymbols(this)
          ? "[object Symbol]"
          : str;
      };
    }
    objectDefineProperty(ObjectProto, "toString", descriptor);

    setDescriptor = function (o, key, descriptor) {
      var protoDescriptor = gOPD(ObjectProto, key);
      delete ObjectProto[key];
      objectDefineProperty(o, key, descriptor);
      if (o !== ObjectProto) {
        objectDefineProperty(ObjectProto, key, protoDescriptor);
      }
    };

    // The abstract operation thisSymbolValue(value) performs the following steps:
    function thisSymbolValue(value) {
      // 1. If Type(value) is Symbol, return value.
      if (Type(value) === "symbol") {
        return value;
      }
      // 2. If Type(value) is Object and value has a [[SymbolData]] internal slot, then
      // a. Let s be value.[[SymbolData]].
      // b. Assert: Type(s) is Symbol.
      // c. Return s.
      // 3. Throw a TypeError exception.
      throw TypeError(value + " is not a symbol");
    }

    // Symbol.prototype.description
    if (
      (function () {
        // supports getters
        try {
          var a = {};
          Object.defineProperty(a, "t", {
            configurable: true,
            enumerable: false,
            get: function () {
              return true;
            },
            set: undefined,
          });
          return !!a.t;
        } catch (e) {
          return false;
        }
      })()
    ) {
      var getInferredName;
      try {
        // eslint-disable-next-line no-new-func
        getInferredName = Function(
          "s",
          "var v = s.valueOf(); return { [v]() {} }[v].name;"
        );
        // eslint-disable-next-line no-empty
      } catch (e) {}

      var inferred = function () {};
      var supportsInferredNames =
        getInferredName && inferred.name === "inferred"
          ? getInferredName
          : null;

      // 19.4.3.2 get Symbol.prototype.description
      Object.defineProperty(global.Symbol.prototype, "description", {
        configurable: true,
        enumerable: false,
        get: function () {
          // 1. Let s be the this value.
          var s = this;
          return symbolDescription(s);
        },
      });
    }
  })(Object, "getOwnPropertySymbols", self);

  // Symbol.iterator
  Object.defineProperty(self.Symbol, "iterator", {
    value: self.Symbol("iterator"),
  });

  // _ESAbstract.GetIterator
  /* global GetMethod, Symbol, Call, Type, GetV */
  // 7.4.1. GetIterator ( obj [ , method ] )
  // The abstract operation GetIterator with argument obj and optional argument method performs the following steps:
  function GetIterator(obj /*, method */) {
    // eslint-disable-line no-unused-vars
    // 1. If method is not present, then
    // a. Set method to ? GetMethod(obj, @@iterator).
    var method =
      arguments.length > 1 ? arguments[1] : GetMethod(obj, Symbol.iterator);
    // 2. Let iterator be ? Call(method, obj).
    var iterator = Call(method, obj);
    // 3. If Type(iterator) is not Object, throw a TypeError exception.
    if (Type(iterator) !== "object") {
      throw new TypeError("bad iterator");
    }
    // 4. Let nextMethod be ? GetV(iterator, "next").
    var nextMethod = GetV(iterator, "next");
    // 5. Let iteratorRecord be Record {[[Iterator]]: iterator, [[NextMethod]]: nextMethod, [[Done]]: false}.
    var iteratorRecord = Object.create(null);
    iteratorRecord["[[Iterator]]"] = iterator;
    iteratorRecord["[[NextMethod]]"] = nextMethod;
    iteratorRecord["[[Done]]"] = false;
    // 6. Return iteratorRecord.
    return iteratorRecord;
  }

  // Symbol.species
  /* global Symbol */
  Object.defineProperty(Symbol, "species", { value: Symbol("species") });

  // Map
  /* global CreateIterResultObject, CreateMethodProperty, GetIterator, IsCallable, IteratorClose, IteratorStep, IteratorValue, OrdinaryCreateFromConstructor, SameValueZero, Type, Symbol */
  (function (global) {
    var supportsGetters = (function () {
      try {
        var a = {};
        Object.defineProperty(a, "t", {
          configurable: true,
          enumerable: false,
          get: function () {
            return true;
          },
          set: undefined,
        });
        return !!a.t;
      } catch (e) {
        return false;
      }
    })();

    // Need an internal counter to assign unique IDs to a key map
    var _uniqueHashId = 0;
    // Create a unique key name for storing meta data on functions and objects to enable lookups in hash table
    var _metaKey = Symbol(
      "meta_" + (Math.random() * 100000000 + "").replace(".", "")
    );

    /**
     * hashKey()
     * Function that given a key of `any` type, returns a string key value to enable hash map optimization for accessing Map data structure
     * @param {string|integer|function|object} recordKey - Record key to normalize to string accessor for hash map
     * @returns {string|false} - Returns a hashed string value or false if non extensible object key
     */
    var hashKey = function (recordKey) {
      // Check to see if we are dealing with object or function type.
      if (
        typeof recordKey === "object"
          ? recordKey !== null
          : typeof recordKey === "function"
      ) {
        // Check to see if we are dealing with a non extensible object
        if (!Object.isExtensible(recordKey)) {
          // Return `false`
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(recordKey, _metaKey)) {
          var uniqueHashKey = typeof recordKey + "-" + ++_uniqueHashId;
          Object.defineProperty(recordKey, _metaKey, {
            configurable: false,
            enumerable: false,
            writable: false,
            value: uniqueHashKey,
          });
        }
        // Return previously defined hashed key
        return recordKey[_metaKey];
      }
      // If this is just a primitive, we can cast it to a string and return it
      return "" + recordKey;
    };

    /**
     * getRecordIndex()
     * Function that given a Map and a key of `any` type, returns an index number that coorelates with a record found in `this._keys[index]` and `this._values[index]`
     * @param {Map} map - Map structure
     * @param {string|number|function|object} recordKey - Record key to normalize to string accessor for hash map
     * @returns {number|false} - Returns either a index to access map._keys and map._values, or false if not found
     */
    var getRecordIndex = function (map, recordKey) {
      var hashedKey = hashKey(recordKey); // Casts key to unique string (unless already string or number)
      if (hashedKey === false) {
        // We have to iterate through our Map structure because `recordKey` is non-primitive and not extensible
        return getRecordIndexSlow(map, recordKey);
      }
      var recordIndex = map._table[hashedKey]; // O(1) access to record
      return recordIndex !== undefined ? recordIndex : false;
    };

    /**
     * getRecordIndexSlow()
     * Alternative (and slower) function to `getRecordIndex()`.  Necessary for looking up non-extensible object keys.
     * @param {Map} map - Map structure
     * @param {string|number|function|object} recordKey - Record key to normalize to string accessor for hash map
     * @returns {number|false} - Returns either a index to access map._keys and map._values, or false if not found
     */
    var getRecordIndexSlow = function (map, recordKey) {
      // We have to iterate through our Map structure because `recordKey` is non-primitive and not extensible
      for (var i = 0; i < map._keys.length; i++) {
        var _recordKey = map._keys[i];
        if (
          _recordKey !== undefMarker &&
          SameValueZero(_recordKey, recordKey)
        ) {
          return i;
        }
      }
      return false;
    };

    /**
     * setHashIndex()
     * Function that given a map, key of `any` type, and a value, creates a new entry in Map hash table
     * @param {Map} map
     * @param {string|number|function|object} recordKey - Key to translate into normalized key for hash map
     * @param {number|bool} recordIndex - new record index for the hashedKey or `false` to delete the record index for the hashedKey
     * @returns {bool} - indicates success of operation
     */
    var setHashIndex = function (map, recordKey, recordIndex) {
      var hashedKey = hashKey(recordKey);
      if (hashedKey === false) {
        // If hashed key is false, the recordKey is an object which is not extensible.
        // That indicates we cannot use the hash map for it, so this operation becomes no-op.
        return false;
      }
      if (recordIndex === false) {
        delete map._table[hashedKey];
      } else {
        map._table[hashedKey] = recordIndex;
      }
      return true;
    };

    // Deleted map items mess with iterator pointers, so rather than removing them mark them as deleted. Can't use undefined or null since those both valid keys so use a private symbol.
    var undefMarker = Symbol("undef");
    // 23.1.1.1 Map ( [ iterable ] )
    var Map = function Map(/* iterable */) {
      // 1. If NewTarget is undefined, throw a TypeError exception.
      if (!(this instanceof Map)) {
        throw new TypeError('Constructor Map requires "new"');
      }
      // 2. Let map be ? OrdinaryCreateFromConstructor(NewTarget, "%MapPrototype%", « [[MapData]] »).
      var map = OrdinaryCreateFromConstructor(this, Map.prototype, {
        _table: {}, // O(1) access table for retrieving records
        _keys: [],
        _values: [],
        _size: 0,
        _es6Map: true,
      });

      // 3. Set map.[[MapData]] to a new empty List.
      // Polyfill.io - This step was done as part of step two.

      // Some old engines do not support ES5 getters/setters.  Since Map only requires these for the size property, we can fall back to setting the size property statically each time the size of the map changes.
      if (!supportsGetters) {
        Object.defineProperty(map, "size", {
          configurable: true,
          enumerable: false,
          writable: true,
          value: 0,
        });
      }

      // 4. If iterable is not present, let iterable be undefined.
      var iterable = arguments.length > 0 ? arguments[0] : undefined;

      // 5. If iterable is either undefined or null, return map.
      if (iterable === null || iterable === undefined) {
        return map;
      }

      // 6. Let adder be ? Get(map, "set").
      var adder = map.set;

      // 7. If IsCallable(adder) is false, throw a TypeError exception.
      if (!IsCallable(adder)) {
        throw new TypeError("Map.prototype.set is not a function");
      }

      // 8. Let iteratorRecord be ? GetIterator(iterable).
      try {
        var iteratorRecord = GetIterator(iterable);
        // 9. Repeat,
        // eslint-disable-next-line no-constant-condition
        while (true) {
          // a. Let next be ? IteratorStep(iteratorRecord).
          var next = IteratorStep(iteratorRecord);
          // b. If next is false, return map.
          if (next === false) {
            return map;
          }
          // c. Let nextItem be ? IteratorValue(next).
          var nextItem = IteratorValue(next);
          // d. If Type(nextItem) is not Object, then
          if (Type(nextItem) !== "object") {
            // i. Let error be Completion{[[Type]]: throw, [[Value]]: a newly created TypeError object, [[Target]]: empty}.
            try {
              throw new TypeError(
                "Iterator value " + nextItem + " is not an entry object"
              );
            } catch (error) {
              // ii. Return ? IteratorClose(iteratorRecord, error).
              return IteratorClose(iteratorRecord, error);
            }
          }
          try {
            // Polyfill.io - The try catch accounts for steps: f, h, and j.

            // e. Let k be Get(nextItem, "0").
            var k = nextItem[0];
            // f. If k is an abrupt completion, return ? IteratorClose(iteratorRecord, k).
            // g. Let v be Get(nextItem, "1").
            var v = nextItem[1];
            // h. If v is an abrupt completion, return ? IteratorClose(iteratorRecord, v).
            // i. Let status be Call(adder, map, « k.[[Value]], v.[[Value]] »).
            adder.call(map, k, v);
          } catch (e) {
            // j. If status is an abrupt completion, return ? IteratorClose(iteratorRecord, status).
            return IteratorClose(iteratorRecord, e);
          }
        }
      } catch (e) {
        // Polyfill.io - For user agents which do not have iteration methods on argument objects or arrays, we can special case those.
        if (
          Array.isArray(iterable) ||
          Object.prototype.toString.call(iterable) === "[object Arguments]" ||
          // IE 7 & IE 8 return '[object Object]' for the arguments object, we can detect by checking for the existence of the callee property
          !!iterable.callee
        ) {
          var index;
          var length = iterable.length;
          for (index = 0; index < length; index++) {
            adder.call(map, iterable[index][0], iterable[index][1]);
          }
        }
      }
      return map;
    };

    // 23.1.2.1. Map.prototype
    // The initial value of Map.prototype is the intrinsic object %MapPrototype%.
    // This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: false }.
    Object.defineProperty(Map, "prototype", {
      configurable: false,
      enumerable: false,
      writable: false,
      value: {},
    });

    // 23.1.2.2 get Map [ @@species ]
    if (supportsGetters) {
      Object.defineProperty(Map, Symbol.species, {
        configurable: true,
        enumerable: false,
        get: function () {
          // 1. Return the this value.
          return this;
        },
        set: undefined,
      });
    } else {
      CreateMethodProperty(Map, Symbol.species, Map);
    }

    // 23.1.3.1 Map.prototype.clear ( )
    CreateMethodProperty(Map.prototype, "clear", function clear() {
      // 1. Let M be the this value.
      var M = this;
      // 2. If Type(M) is not Object, throw a TypeError exception.
      if (Type(M) !== "object") {
        throw new TypeError(
          "Method Map.prototype.clear called on incompatible receiver " +
            Object.prototype.toString.call(M)
        );
      }
      // 3. If M does not have a [[MapData]] internal slot, throw a TypeError exception.
      if (M._es6Map !== true) {
        throw new TypeError(
          "Method Map.prototype.clear called on incompatible receiver " +
            Object.prototype.toString.call(M)
        );
      }
      // 4. Let entries be the List that is M.[[MapData]].
      var entries = M._keys;
      // 5. For each Record {[[Key]], [[Value]]} p that is an element of entries, do
      for (var i = 0; i < entries.length; i++) {
        // 5.a. Set p.[[Key]] to empty.
        M._keys[i] = undefMarker;
        // 5.b. Set p.[[Value]] to empty.
        M._values[i] = undefMarker;
      }
      this._size = 0;
      if (!supportsGetters) {
        this.size = this._size;
      }
      // 5a. Clear lookup table
      this._table = {};
      // 6. Return undefined.
      return undefined;
    });

    // 23.1.3.2. Map.prototype.constructor
    CreateMethodProperty(Map.prototype, "constructor", Map);

    // 23.1.3.3. Map.prototype.delete ( key )
    CreateMethodProperty(Map.prototype, "delete", function (key) {
      // 1. Let M be the this value.
      var M = this;
      // 2. If Type(M) is not Object, throw a TypeError exception.
      if (Type(M) !== "object") {
        throw new TypeError(
          "Method Map.prototype.clear called on incompatible receiver " +
            Object.prototype.toString.call(M)
        );
      }
      // 3. If M does not have a [[MapData]] internal slot, throw a TypeError exception.
      if (M._es6Map !== true) {
        throw new TypeError(
          "Method Map.prototype.clear called on incompatible receiver " +
            Object.prototype.toString.call(M)
        );
      }
      // 4. Let entries be the List that is M.[[MapData]].
      // 5. For each Record {[[Key]], [[Value]]} p that is an element of entries, do
      // 5a. If p.[[Key]] is not empty and SameValueZero(p.[[Key]], key) is true, then
      // i. Set p.[[Key]] to empty.
      // ii. Set p.[[Value]] to empty.
      // ii-a. Remove key from lookup table
      // iii. Return true.
      // 6. Return false.

      // Implement steps 4-6 with a more optimal algo

      // Steps 4-5: Access record
      var recordIndex = getRecordIndex(M, key); // O(1) access to record index

      if (recordIndex !== false) {
        // Get record's `key` (could be `any` type);
        var recordKey = M._keys[recordIndex];
        // 5a. If p.[[Key]] is not empty and SameValueZero(p.[[Key]], key) is true, then
        if (recordKey !== undefMarker && SameValueZero(recordKey, key)) {
          // i. Set p.[[Key]] to empty.
          this._keys[recordIndex] = undefMarker;
          // ii. Set p.[[Value]] to empty.
          this._values[recordIndex] = undefMarker;
          this._size = --this._size;
          if (!supportsGetters) {
            this.size = this._size;
          }
          // iia. Remove key from lookup table
          setHashIndex(this, key, false);
          // iii. Return true.
          return true;
        }
      }

      // 6. Return false.
      return false;
    });

    // 23.1.3.4. Map.prototype.entries ( )
    CreateMethodProperty(Map.prototype, "entries", function entries() {
      // 1. Let M be the this value.
      var M = this;
      // 2. Return ? CreateMapIterator(M, "key+value").
      return CreateMapIterator(M, "key+value");
    });

    // 23.1.3.5. Map.prototype.forEach ( callbackfn [ , thisArg ] )
    CreateMethodProperty(Map.prototype, "forEach", function (callbackFn) {
      // 1. Let M be the this value.
      var M = this;
      // 2. If Type(M) is not Object, throw a TypeError exception.
      if (Type(M) !== "object") {
        throw new TypeError(
          "Method Map.prototype.forEach called on incompatible receiver " +
            Object.prototype.toString.call(M)
        );
      }
      // 3. If M does not have a [[MapData]] internal slot, throw a TypeError exception.
      if (M._es6Map !== true) {
        throw new TypeError(
          "Method Map.prototype.forEach called on incompatible receiver " +
            Object.prototype.toString.call(M)
        );
      }
      // 4. If IsCallable(callbackfn) is false, throw a TypeError exception.
      if (!IsCallable(callbackFn)) {
        throw new TypeError(
          Object.prototype.toString.call(callbackFn) + " is not a function."
        );
      }
      // 5. If thisArg is present, let T be thisArg; else let T be undefined.
      if (arguments[1]) {
        var T = arguments[1];
      }
      // 6. Let entries be the List that is M.[[MapData]].
      var entries = M._keys;
      // 7. For each Record {[[Key]], [[Value]]} e that is an element of entries, in original key insertion order, do
      for (var i = 0; i < entries.length; i++) {
        // a. If e.[[Key]] is not empty, then
        if (M._keys[i] !== undefMarker && M._values[i] !== undefMarker) {
          // i. Perform ? Call(callbackfn, T, « e.[[Value]], e.[[Key]], M »).
          callbackFn.call(T, M._values[i], M._keys[i], M);
        }
      }
      // 8. Return undefined.
      return undefined;
    });

    // 23.1.3.6. Map.prototype.get ( key )
    CreateMethodProperty(Map.prototype, "get", function get(key) {
      // 1. Let M be the this value.
      var M = this;
      // 2. If Type(M) is not Object, throw a TypeError exception.
      if (Type(M) !== "object") {
        throw new TypeError(
          "Method Map.prototype.get called on incompatible receiver " +
            Object.prototype.toString.call(M)
        );
      }
      // 3. If M does not have a [[MapData]] internal slot, throw a TypeError exception.
      if (M._es6Map !== true) {
        throw new TypeError(
          "Method Map.prototype.get called on incompatible receiver " +
            Object.prototype.toString.call(M)
        );
      }
      // 4. Let entries be the List that is M.[[MapData]].
      // 5. For each Record {[[Key]], [[Value]]} p that is an element of entries, do
      // a. If p.[[Key]] is not empty and SameValueZero(p.[[Key]], key) is true, return p.[[Value]].
      // 6. Return undefined.

      // Implement steps 4-6 with a more optimal algo
      var recordIndex = getRecordIndex(M, key); // O(1) access to record index
      if (recordIndex !== false) {
        var recordKey = M._keys[recordIndex];
        if (recordKey !== undefMarker && SameValueZero(recordKey, key)) {
          return M._values[recordIndex];
        }
      }

      return undefined;
    });

    // 23.1.3.7. Map.prototype.has ( key )
    CreateMethodProperty(Map.prototype, "has", function has(key) {
      // 1. Let M be the this value.
      var M = this;
      // 2. If Type(M) is not Object, throw a TypeError exception.
      if (typeof M !== "object") {
        throw new TypeError(
          "Method Map.prototype.has called on incompatible receiver " +
            Object.prototype.toString.call(M)
        );
      }
      // 3. If M does not have a [[MapData]] internal slot, throw a TypeError exception.
      if (M._es6Map !== true) {
        throw new TypeError(
          "Method Map.prototype.has called on incompatible receiver " +
            Object.prototype.toString.call(M)
        );
      }
      // 4. Let entries be the List that is M.[[MapData]].
      // 5. For each Record {[[Key]], [[Value]]} p that is an element of entries, do
      // a. If p.[[Key]] is not empty and SameValueZero(p.[[Key]], key) is true, return true.
      // 6. Return false.

      // Implement steps 4-6 with a more optimal algo
      var recordIndex = getRecordIndex(M, key); // O(1) access to record index
      if (recordIndex !== false) {
        var recordKey = M._keys[recordIndex];
        if (recordKey !== undefMarker && SameValueZero(recordKey, key)) {
          return true;
        }
      }

      return false;
    });

    // 23.1.3.8. Map.prototype.keys ( )
    CreateMethodProperty(Map.prototype, "keys", function keys() {
      // 1. Let M be the this value.
      var M = this;
      // 2. Return ? CreateMapIterator(M, "key").
      return CreateMapIterator(M, "key");
    });

    // 23.1.3.9. Map.prototype.set ( key, value )
    CreateMethodProperty(Map.prototype, "set", function set(key, value) {
      // 1. Let M be the this value.
      var M = this;
      // 2. If Type(M) is not Object, throw a TypeError exception.
      if (Type(M) !== "object") {
        throw new TypeError(
          "Method Map.prototype.set called on incompatible receiver " +
            Object.prototype.toString.call(M)
        );
      }
      // 3. If M does not have a [[MapData]] internal slot, throw a TypeError exception.
      if (M._es6Map !== true) {
        throw new TypeError(
          "Method Map.prototype.set called on incompatible receiver " +
            Object.prototype.toString.call(M)
        );
      }
      // 4. Let entries be the List that is M.[[MapData]].
      // 5. For each Record {[[Key]], [[Value]]} p that is an element of entries, do
      // 6. If key is -0, let key be +0.
      // 7. Let p be the Record {[[Key]]: key, [[Value]]: value}.
      // 8. Append p as the last element of entries.
      // 9. Return M.

      // Strictly following the above steps 4-9 will lead to an inefficient algorithm.
      // Step 8 also doesn't seem to be required if an entry already exists
      var recordIndex = getRecordIndex(M, key); // O(1) access to record index
      if (recordIndex !== false) {
        // update path
        M._values[recordIndex] = value;
      } else {
        // eslint-disable-next-line no-compare-neg-zero
        if (key === -0) {
          key = 0;
        }
        var p = {
          "[[Key]]": key,
          "[[Value]]": value,
        };
        M._keys.push(p["[[Key]]"]);
        M._values.push(p["[[Value]]"]);
        setHashIndex(M, key, M._keys.length - 1); // update lookup table
        ++M._size;
        if (!supportsGetters) {
          M.size = M._size;
        }
      }
      return M;
    });

    // 23.1.3.10. get Map.prototype.size
    if (supportsGetters) {
      Object.defineProperty(Map.prototype, "size", {
        configurable: true,
        enumerable: false,
        get: function () {
          // 1. Let M be the this value.
          var M = this;
          // 2. If Type(M) is not Object, throw a TypeError exception.
          if (Type(M) !== "object") {
            throw new TypeError(
              "Method Map.prototype.size called on incompatible receiver " +
                Object.prototype.toString.call(M)
            );
          }
          // 3. If M does not have a [[MapData]] internal slot, throw a TypeError exception.
          if (M._es6Map !== true) {
            throw new TypeError(
              "Method Map.prototype.size called on incompatible receiver " +
                Object.prototype.toString.call(M)
            );
          }
          // 4. Let entries be the List that is M.[[MapData]].
          // 5. Let count be 0.
          // 6. For each Record {[[Key]], [[Value]]} p that is an element of entries, do
          // 6a. If p.[[Key]] is not empty, set count to count+1.
          // 7. Return count.

          // Implement 4-7 more efficently by returning pre-computed property
          return this._size;
        },
        set: undefined,
      });
    }

    // 23.1.3.11. Map.prototype.values ( )
    CreateMethodProperty(Map.prototype, "values", function values() {
      // 1. Let M be the this value.
      var M = this;
      // 2. Return ? CreateMapIterator(M, "value").
      return CreateMapIterator(M, "value");
    });

    // 23.1.3.12. Map.prototype [ @@iterator ] ( )
    // The initial value of the @@iterator property is the same function object as the initial value of the entries property.
    CreateMethodProperty(Map.prototype, Symbol.iterator, Map.prototype.entries);

    // 23.1.3.13. Map.prototype [ @@toStringTag ]
    // The initial value of the @@toStringTag property is the String value "Map".
    // This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: true }.

    // Polyfill.io - Safari 8 implements Map.name but as a non-configurable property, which means it would throw an error if we try and configure it here.
    if (!("name" in Map)) {
      // 19.2.4.2 name
      Object.defineProperty(Map, "name", {
        configurable: true,
        enumerable: false,
        writable: false,
        value: "Map",
      });
    }

    // 23.1.5.1. CreateMapIterator ( map, kind )
    function CreateMapIterator(map, kind) {
      // 1. If Type(map) is not Object, throw a TypeError exception.
      if (Type(map) !== "object") {
        throw new TypeError(
          "createMapIterator called on incompatible receiver " +
            Object.prototype.toString.call(map)
        );
      }
      // 2. If map does not have a [[MapData]] internal slot, throw a TypeError exception.
      if (map._es6Map !== true) {
        throw new TypeError(
          "createMapIterator called on incompatible receiver " +
            Object.prototype.toString.call(map)
        );
      }
      // 3. Let iterator be ObjectCreate(%MapIteratorPrototype%, « [[Map]], [[MapNextIndex]], [[MapIterationKind]] »).
      var iterator = Object.create(MapIteratorPrototype);
      // 4. Set iterator.[[Map]] to map.
      Object.defineProperty(iterator, "[[Map]]", {
        configurable: true,
        enumerable: false,
        writable: true,
        value: map,
      });
      // 5. Set iterator.[[MapNextIndex]] to 0.
      Object.defineProperty(iterator, "[[MapNextIndex]]", {
        configurable: true,
        enumerable: false,
        writable: true,
        value: 0,
      });
      // 6. Set iterator.[[MapIterationKind]] to kind.
      Object.defineProperty(iterator, "[[MapIterationKind]]", {
        configurable: true,
        enumerable: false,
        writable: true,
        value: kind,
      });
      // 7. Return iterator.
      return iterator;
    }

    // 23.1.5.2. The %MapIteratorPrototype% Object
    var MapIteratorPrototype = {};
    // Polyfill.io - We use this as a quick way to check if an object is a Map Iterator instance.
    Object.defineProperty(MapIteratorPrototype, "isMapIterator", {
      configurable: false,
      enumerable: false,
      writable: false,
      value: true,
    });

    // 23.1.5.2.1. %MapIteratorPrototype%.next ( )
    CreateMethodProperty(MapIteratorPrototype, "next", function next() {
      // 1. Let O be the this value.
      var O = this;
      // 2. If Type(O) is not Object, throw a TypeError exception.
      if (Type(O) !== "object") {
        throw new TypeError(
          "Method %MapIteratorPrototype%.next called on incompatible receiver " +
            Object.prototype.toString.call(O)
        );
      }
      // 3. If O does not have all of the internal slots of a Map Iterator Instance (23.1.5.3), throw a TypeError exception.
      if (!O.isMapIterator) {
        throw new TypeError(
          "Method %MapIteratorPrototype%.next called on incompatible receiver " +
            Object.prototype.toString.call(O)
        );
      }
      // 4. Let m be O.[[Map]].
      var m = O["[[Map]]"];
      // 5. Let index be O.[[MapNextIndex]].
      var index = O["[[MapNextIndex]]"];
      // 6. Let itemKind be O.[[MapIterationKind]].
      var itemKind = O["[[MapIterationKind]]"];
      // 7. If m is undefined, return CreateIterResultObject(undefined, true).
      if (m === undefined) {
        return CreateIterResultObject(undefined, true);
      }
      // 8. Assert: m has a [[MapData]] internal slot.
      if (!m._es6Map) {
        throw new Error(
          Object.prototype.toString.call(m) +
            " has a [[MapData]] internal slot."
        );
      }
      // 9. Let entries be the List that is m.[[MapData]].
      var entries = m._keys;
      // 10. Let numEntries be the number of elements of entries.
      var numEntries = entries.length;
      // 11. NOTE: numEntries must be redetermined each time this method is evaluated.
      // 12. Repeat, while index is less than numEntries,
      while (index < numEntries) {
        // a. Let e be the Record {[[Key]], [[Value]]} that is the value of entries[index].
        var e = Object.create(null);
        e["[[Key]]"] = m._keys[index];
        e["[[Value]]"] = m._values[index];
        // b. Set index to index+1.
        index = index + 1;
        // c. Set O.[[MapNextIndex]] to index.
        O["[[MapNextIndex]]"] = index;
        // d. If e.[[Key]] is not empty, then
        if (e["[[Key]]"] !== undefMarker) {
          // i. If itemKind is "key", let result be e.[[Key]].
          if (itemKind === "key") {
            var result = e["[[Key]]"];
            // ii. Else if itemKind is "value", let result be e.[[Value]].
          } else if (itemKind === "value") {
            result = e["[[Value]]"];
            // iii. Else,
          } else {
            // 1. Assert: itemKind is "key+value".
            if (itemKind !== "key+value") {
              throw new Error();
            }
            // 2. Let result be CreateArrayFromList(« e.[[Key]], e.[[Value]] »).
            result = [e["[[Key]]"], e["[[Value]]"]];
          }
          // iv. Return CreateIterResultObject(result, false).
          return CreateIterResultObject(result, false);
        }
      }
      // 13. Set O.[[Map]] to undefined.
      O["[[Map]]"] = undefined;
      // 14. Return CreateIterResultObject(undefined, true).
      return CreateIterResultObject(undefined, true);
    });

    // 23.1.5.2.2 %MapIteratorPrototype% [ @@toStringTag ]
    // The initial value of the @@toStringTag property is the String value "Map Iterator".
    // This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: true }.

    CreateMethodProperty(
      MapIteratorPrototype,
      Symbol.iterator,
      function iterator() {
        return this;
      }
    );

    // Export the object
    try {
      CreateMethodProperty(global, "Map", Map);
    } catch (e) {
      // IE8 throws an error here if we set enumerable to false.
      // More info on table 2: https://msdn.microsoft.com/en-us/library/dd229916(v=vs.85).aspx
      global.Map = Map;
    }
  })(self);

  // Set
  /* global CreateIterResultObject, CreateMethodProperty, GetIterator, IsCallable, IteratorClose, IteratorStep, IteratorValue, OrdinaryCreateFromConstructor, SameValueZero, Symbol */
  (function (global) {
    var supportsGetters = (function () {
      try {
        var a = {};
        Object.defineProperty(a, "t", {
          configurable: true,
          enumerable: false,
          get: function () {
            return true;
          },
          set: undefined,
        });
        return !!a.t;
      } catch (e) {
        return false;
      }
    })();

    // Deleted set items mess with iterator pointers, so rather than removing them mark them as deleted. Can't use undefined or null since those both valid keys so use a private symbol.
    var undefMarker = Symbol("undef");
    // 23.2.1.1. Set ( [ iterable ] )
    var Set = function Set(/* iterable */) {
      // 1. If NewTarget is undefined, throw a TypeError exception.
      if (!(this instanceof Set)) {
        throw new TypeError('Constructor Set requires "new"');
      }
      // 2. Let set be ? OrdinaryCreateFromConstructor(NewTarget, "%SetPrototype%", « [[SetData]] »).
      var set = OrdinaryCreateFromConstructor(this, Set.prototype, {
        _values: [],
        _size: 0,
        _es6Set: true,
      });

      // 3. Set set.[[SetData]] to a new empty List.
      // Polyfill.io - This step was done as part of step two.

      // Some old engines do not support ES5 getters/setters.  Since Set only requires these for the size property, we can fall back to setting the size property statically each time the size of the set changes.
      if (!supportsGetters) {
        Object.defineProperty(set, "size", {
          configurable: true,
          enumerable: false,
          writable: true,
          value: 0,
        });
      }

      // 4. If iterable is not present, let iterable be undefined.
      var iterable = arguments.length > 0 ? arguments[0] : undefined;

      // 5. If iterable is either undefined or null, return set.
      if (iterable === null || iterable === undefined) {
        return set;
      }

      // 6. Let adder be ? Get(set, "add").
      var adder = set.add;
      // 7. If IsCallable(adder) is false, throw a TypeError exception.
      if (!IsCallable(adder)) {
        throw new TypeError("Set.prototype.add is not a function");
      }

      try {
        // 8. Let iteratorRecord be ? GetIterator(iterable).
        var iteratorRecord = GetIterator(iterable);
        // 9. Repeat,
        // eslint-disable-next-line no-constant-condition
        while (true) {
          // a. Let next be ? IteratorStep(iteratorRecord).
          var next = IteratorStep(iteratorRecord);
          // b. If next is false, return set.
          if (next === false) {
            return set;
          }
          // c. Let nextValue be ? IteratorValue(next).
          var nextValue = IteratorValue(next);
          // d. Let status be Call(adder, set, « nextValue.[[Value]] »).
          try {
            adder.call(set, nextValue);
          } catch (e) {
            // e. If status is an abrupt completion, return ? IteratorClose(iteratorRecord, status).
            return IteratorClose(iteratorRecord, e);
          }
        }
      } catch (e) {
        // Polyfill.io - For user agents which do not have iteration methods on argument objects or arrays, we can special case those.
        if (
          Array.isArray(iterable) ||
          Object.prototype.toString.call(iterable) === "[object Arguments]" ||
          // IE 7 & IE 8 return '[object Object]' for the arguments object, we can detect by checking for the existence of the callee property
          !!iterable.callee
        ) {
          var index;
          var length = iterable.length;
          for (index = 0; index < length; index++) {
            adder.call(set, iterable[index]);
          }
        } else {
          throw e;
        }
      }
      return set;
    };

    // 23.2.2.1. Set.prototype
    // The initial value of Set.prototype is the intrinsic %SetPrototype% object.
    // This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: false }.
    Object.defineProperty(Set, "prototype", {
      configurable: false,
      enumerable: false,
      writable: false,
      value: {},
    });

    // 23.2.2.2 get Set [ @@species ]
    if (supportsGetters) {
      Object.defineProperty(Set, Symbol.species, {
        configurable: true,
        enumerable: false,
        get: function () {
          // 1. Return the this value.
          return this;
        },
        set: undefined,
      });
    } else {
      CreateMethodProperty(Set, Symbol.species, Set);
    }

    // 23.2.3.1. Set.prototype.add ( value )
    CreateMethodProperty(Set.prototype, "add", function add(value) {
      // 1. Let S be the this value.
      var S = this;
      // 2. If Type(S) is not Object, throw a TypeError exception.
      if (typeof S !== "object") {
        throw new TypeError(
          "Method Set.prototype.add called on incompatible receiver " +
            Object.prototype.toString.call(S)
        );
      }
      // 3. If S does not have a [[SetData]] internal slot, throw a TypeError exception.
      if (S._es6Set !== true) {
        throw new TypeError(
          "Method Set.prototype.add called on incompatible receiver " +
            Object.prototype.toString.call(S)
        );
      }
      // 4. Let entries be the List that is S.[[SetData]].
      var entries = S._values;
      // 5. For each e that is an element of entries, do
      for (var i = 0; i < entries.length; i++) {
        var e = entries[i];
        // a. If e is not empty and SameValueZero(e, value) is true, then
        if (e !== undefMarker && SameValueZero(e, value)) {
          // i. Return S.
          return S;
        }
      }
      // 6. If value is -0, let value be +0.
      if (value === 0 && 1 / value === -Infinity) {
        value = 0;
      }
      // 7. Append value as the last element of entries.
      S._values.push(value);

      this._size = ++this._size;
      if (!supportsGetters) {
        this.size = this._size;
      }
      // 8. Return S.
      return S;
    });

    // 23.2.3.2. Set.prototype.clear ( )
    CreateMethodProperty(Set.prototype, "clear", function clear() {
      // 1. Let S be the this value.
      var S = this;
      // 2. If Type(S) is not Object, throw a TypeError exception.
      if (typeof S !== "object") {
        throw new TypeError(
          "Method Set.prototype.clear called on incompatible receiver " +
            Object.prototype.toString.call(S)
        );
      }
      // 3. If S does not have a [[SetData]] internal slot, throw a TypeError exception.
      if (S._es6Set !== true) {
        throw new TypeError(
          "Method Set.prototype.clear called on incompatible receiver " +
            Object.prototype.toString.call(S)
        );
      }
      // 4. Let entries be the List that is S.[[SetData]].
      var entries = S._values;
      // 5. For each e that is an element of entries, do
      for (var i = 0; i < entries.length; i++) {
        // a. Replace the element of entries whose value is e with an element whose value is empty.
        entries[i] = undefMarker;
      }
      this._size = 0;
      if (!supportsGetters) {
        this.size = this._size;
      }
      // 6. Return undefined.
      return undefined;
    });

    // 23.2.3.3. Set.prototype.constructor
    CreateMethodProperty(Set.prototype, "constructor", Set);

    // 23.2.3.4. Set.prototype.delete ( value )
    CreateMethodProperty(Set.prototype, "delete", function (value) {
      // 1. Let S be the this value.
      var S = this;
      // 2. If Type(S) is not Object, throw a TypeError exception.
      if (typeof S !== "object") {
        throw new TypeError(
          "Method Set.prototype.delete called on incompatible receiver " +
            Object.prototype.toString.call(S)
        );
      }
      // 3. If S does not have a [[SetData]] internal slot, throw a TypeError exception.
      if (S._es6Set !== true) {
        throw new TypeError(
          "Method Set.prototype.delete called on incompatible receiver " +
            Object.prototype.toString.call(S)
        );
      }
      // 4. Let entries be the List that is S.[[SetData]].
      var entries = S._values;
      // 5. For each e that is an element of entries, do
      for (var i = 0; i < entries.length; i++) {
        var e = entries[i];
        // a. If e is not empty and SameValueZero(e, value) is true, then
        if (e !== undefMarker && SameValueZero(e, value)) {
          // i. Replace the element of entries whose value is e with an element whose value is empty.
          entries[i] = undefMarker;

          this._size = --this._size;
          if (!supportsGetters) {
            this.size = this._size;
          }
          // ii. Return true.
          return true;
        }
      }
      // 6. Return false.
      return false;
    });

    // 23.2.3.5. Set.prototype.entries ( )
    CreateMethodProperty(Set.prototype, "entries", function entries() {
      // 1. Let S be the this value.
      var S = this;
      // 2. Return ? CreateSetIterator(S, "key+value").
      return CreateSetIterator(S, "key+value");
    });

    // 23.2.3.6. Set.prototype.forEach ( callbackfn [ , thisArg ] )
    CreateMethodProperty(
      Set.prototype,
      "forEach",
      function forEach(callbackFn /*[ , thisArg ]*/) {
        // 1. Let S be the this value.
        var S = this;
        // 2. If Type(S) is not Object, throw a TypeError exception.
        if (typeof S !== "object") {
          throw new TypeError(
            "Method Set.prototype.forEach called on incompatible receiver " +
              Object.prototype.toString.call(S)
          );
        }
        // 3. If S does not have a [[SetData]] internal slot, throw a TypeError exception.
        if (S._es6Set !== true) {
          throw new TypeError(
            "Method Set.prototype.forEach called on incompatible receiver " +
              Object.prototype.toString.call(S)
          );
        }
        // 4. If IsCallable(callbackfn) is false, throw a TypeError exception.
        if (!IsCallable(callbackFn)) {
          throw new TypeError(
            Object.prototype.toString.call(callbackFn) + " is not a function."
          );
        }
        // 5. If thisArg is present, let T be thisArg; else let T be undefined.
        if (arguments[1]) {
          var T = arguments[1];
        }
        // 6. Let entries be the List that is S.[[SetData]].
        var entries = S._values;
        // 7. For each e that is an element of entries, in original insertion order, do
        for (var i = 0; i < entries.length; i++) {
          var e = entries[i];
          // a. If e is not empty, then
          if (e !== undefMarker) {
            // i. Perform ? Call(callbackfn, T, « e, e, S »).
            callbackFn.call(T, e, e, S);
          }
        }
        // 8. Return undefined.
        return undefined;
      }
    );

    // 23.2.3.7. Set.prototype.has ( value )
    CreateMethodProperty(Set.prototype, "has", function has(value) {
      // 1. Let S be the this value.
      var S = this;
      // 2. If Type(S) is not Object, throw a TypeError exception.
      if (typeof S !== "object") {
        throw new TypeError(
          "Method Set.prototype.forEach called on incompatible receiver " +
            Object.prototype.toString.call(S)
        );
      }
      // 3. If S does not have a [[SetData]] internal slot, throw a TypeError exception.
      if (S._es6Set !== true) {
        throw new TypeError(
          "Method Set.prototype.forEach called on incompatible receiver " +
            Object.prototype.toString.call(S)
        );
      }
      // 4. Let entries be the List that is S.[[SetData]].
      var entries = S._values;
      // 5. For each e that is an element of entries, do
      for (var i = 0; i < entries.length; i++) {
        var e = entries[i];
        // a. If e is not empty and SameValueZero(e, value) is true, return true.
        if (e !== undefMarker && SameValueZero(e, value)) {
          return true;
        }
      }
      // 6. Return false.
      return false;
    });

    // Polyfill.io - We need to define Set.prototype.values before Set.prototype.keys because keys is a reference to values.
    // 23.2.3.10. Set.prototype.values()
    var values = function values() {
      // 1. Let S be the this value.
      var S = this;
      // 2. Return ? CreateSetIterator(S, "value").
      return CreateSetIterator(S, "value");
    };
    CreateMethodProperty(Set.prototype, "values", values);

    // 23.2.3.8 Set.prototype.keys ( )
    // The initial value of the keys property is the same function object as the initial value of the values property.
    CreateMethodProperty(Set.prototype, "keys", values);

    // 23.2.3.9. get Set.prototype.size
    if (supportsGetters) {
      Object.defineProperty(Set.prototype, "size", {
        configurable: true,
        enumerable: false,
        get: function () {
          // 1. Let S be the this value.
          var S = this;
          // 2. If Type(S) is not Object, throw a TypeError exception.
          if (typeof S !== "object") {
            throw new TypeError(
              "Method Set.prototype.size called on incompatible receiver " +
                Object.prototype.toString.call(S)
            );
          }
          // 3. If S does not have a [[SetData]] internal slot, throw a TypeError exception.
          if (S._es6Set !== true) {
            throw new TypeError(
              "Method Set.prototype.size called on incompatible receiver " +
                Object.prototype.toString.call(S)
            );
          }
          // 4. Let entries be the List that is S.[[SetData]].
          var entries = S._values;
          // 5. Let count be 0.
          var count = 0;
          // 6. For each e that is an element of entries, do
          for (var i = 0; i < entries.length; i++) {
            var e = entries[i];
            // a. If e is not empty, set count to count+1.
            if (e !== undefMarker) {
              count = count + 1;
            }
          }
          // 7. Return count.
          return count;
        },
        set: undefined,
      });
    }

    // 23.2.3.11. Set.prototype [ @@iterator ] ( )
    // The initial value of the @@iterator property is the same function object as the initial value of the values property.
    CreateMethodProperty(Set.prototype, Symbol.iterator, values);

    // 23.2.3.12. Set.prototype [ @@toStringTag ]
    // The initial value of the @@toStringTag property is the String value "Set".
    // This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: true }.

    // Polyfill.io - Safari 8 implements Set.name but as a non-configurable property, which means it would throw an error if we try and configure it here.
    if (!("name" in Set)) {
      // 19.2.4.2 name
      Object.defineProperty(Set, "name", {
        configurable: true,
        enumerable: false,
        writable: false,
        value: "Set",
      });
    }

    // 23.2.5.1. CreateSetIterator ( set, kind )
    function CreateSetIterator(set, kind) {
      // 1. If Type(set) is not Object, throw a TypeError exception.
      if (typeof set !== "object") {
        throw new TypeError(
          "createSetIterator called on incompatible receiver " +
            Object.prototype.toString.call(set)
        );
      }
      // 2. If set does not have a [[SetData]] internal slot, throw a TypeError exception.
      if (set._es6Set !== true) {
        throw new TypeError(
          "createSetIterator called on incompatible receiver " +
            Object.prototype.toString.call(set)
        );
      }
      // 3. Let iterator be ObjectCreate(%SetIteratorPrototype%, « [[IteratedSet]], [[SetNextIndex]], [[SetIterationKind]] »).
      var iterator = Object.create(SetIteratorPrototype);
      // 4. Set iterator.[[IteratedSet]] to set.
      Object.defineProperty(iterator, "[[IteratedSet]]", {
        configurable: true,
        enumerable: false,
        writable: true,
        value: set,
      });
      // 5. Set iterator.[[SetNextIndex]] to 0.
      Object.defineProperty(iterator, "[[SetNextIndex]]", {
        configurable: true,
        enumerable: false,
        writable: true,
        value: 0,
      });
      // 6. Set iterator.[[SetIterationKind]] to kind.
      Object.defineProperty(iterator, "[[SetIterationKind]]", {
        configurable: true,
        enumerable: false,
        writable: true,
        value: kind,
      });
      // 7. Return iterator.
      return iterator;
    }

    // 23.2.5.2. The %SetIteratorPrototype% Object
    var SetIteratorPrototype = {};
    //Polyfill.io - We add this property to help us identify what is a set iterator.
    Object.defineProperty(SetIteratorPrototype, "isSetIterator", {
      configurable: false,
      enumerable: false,
      writable: false,
      value: true,
    });

    // 23.2.5.2.1. %SetIteratorPrototype%.next ( )
    CreateMethodProperty(SetIteratorPrototype, "next", function next() {
      // 1. Let O be the this value.
      var O = this;
      // 2. If Type(O) is not Object, throw a TypeError exception.
      if (typeof O !== "object") {
        throw new TypeError(
          "Method %SetIteratorPrototype%.next called on incompatible receiver " +
            Object.prototype.toString.call(O)
        );
      }
      // 3. If O does not have all of the internal slots of a Set Iterator Instance (23.2.5.3), throw a TypeError exception.
      if (!O.isSetIterator) {
        throw new TypeError(
          "Method %SetIteratorPrototype%.next called on incompatible receiver " +
            Object.prototype.toString.call(O)
        );
      }
      // 4. Let s be O.[[IteratedSet]].
      var s = O["[[IteratedSet]]"];
      // 5. Let index be O.[[SetNextIndex]].
      var index = O["[[SetNextIndex]]"];
      // 6. Let itemKind be O.[[SetIterationKind]].
      var itemKind = O["[[SetIterationKind]]"];
      // 7. If s is undefined, return CreateIterResultObject(undefined, true).
      if (s === undefined) {
        return CreateIterResultObject(undefined, true);
      }
      // 8. Assert: s has a [[SetData]] internal slot.
      if (!s._es6Set) {
        throw new Error(
          Object.prototype.toString.call(s) +
            " does not have [[SetData]] internal slot."
        );
      }
      // 9. Let entries be the List that is s.[[SetData]].
      var entries = s._values;
      // 10. Let numEntries be the number of elements of entries.
      var numEntries = entries.length;
      // 11. NOTE: numEntries must be redetermined each time this method is evaluated.
      // 12. Repeat, while index is less than numEntries,
      while (index < numEntries) {
        // a. Let e be entries[index].
        var e = entries[index];
        // b. Set index to index+1.
        index = index + 1;
        // c. Set O.[[SetNextIndex]] to index.
        O["[[SetNextIndex]]"] = index;
        // d. If e is not empty, then
        if (e !== undefMarker) {
          // i. If itemKind is "key+value", then
          if (itemKind === "key+value") {
            // 1. Return CreateIterResultObject(CreateArrayFromList(« e, e »), false).
            return CreateIterResultObject([e, e], false);
          }
          // ii. Return CreateIterResultObject(e, false).
          return CreateIterResultObject(e, false);
        }
      }
      // 13. Set O.[[IteratedSet]] to undefined.
      O["[[IteratedSet]]"] = undefined;
      // 14. Return CreateIterResultObject(undefined, true).
      return CreateIterResultObject(undefined, true);
    });

    // 23.2.5.2.2. %SetIteratorPrototype% [ @@toStringTag ]
    // The initial value of the @@toStringTag property is the String value "Set Iterator".
    // This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: true }.

    CreateMethodProperty(
      SetIteratorPrototype,
      Symbol.iterator,
      function iterator() {
        return this;
      }
    );

    // Export the object
    try {
      CreateMethodProperty(global, "Set", Set);
    } catch (e) {
      // IE8 throws an error here if we set enumerable to false.
      // More info on table 2: https://msdn.microsoft.com/en-us/library/dd229916(v=vs.85).aspx
      global.Set = Set;
    }
  })(self);

  // Array.from
  /* globals
	IsCallable, GetMethod, Symbol, IsConstructor, Construct, ArrayCreate, GetIterator, IteratorClose,
	ToString, IteratorStep, IteratorValue, Call, CreateDataPropertyOrThrow, ToObject, ToLength, Get, CreateMethodProperty
*/
  (function () {
    var toString = Object.prototype.toString;
    var stringMatch = String.prototype.match;
    // A cross-realm friendly way to detect if a value is a String object or literal.
    function isString(value) {
      if (typeof value === "string") {
        return true;
      }
      if (typeof value !== "object") {
        return false;
      }
      return toString.call(value) === "[object String]";
    }

    // 22.1.2.1. Array.from ( items [ , mapfn [ , thisArg ] ] )
    CreateMethodProperty(
      Array,
      "from",
      function from(items /* [ , mapfn [ , thisArg ] ] */) {
        // eslint-disable-line no-undef
        // 1. Let C be the this value.
        var C = this;
        // 2. If mapfn is undefined, let mapping be false.
        var mapfn = arguments.length > 1 ? arguments[1] : undefined;
        if (mapfn === undefined) {
          var mapping = false;
          // 3. Else,
        } else {
          // a. If IsCallable(mapfn) is false, throw a TypeError exception.
          if (IsCallable(mapfn) === false) {
            throw new TypeError(
              Object.prototype.toString.call(mapfn) + " is not a function."
            );
          }
          // b. If thisArg is present, let T be thisArg; else let T be undefined.
          var thisArg = arguments.length > 2 ? arguments[2] : undefined;
          if (thisArg !== undefined) {
            var T = thisArg;
          } else {
            T = undefined;
          }
          // c. Let mapping be true.
          mapping = true;
        }
        // 4. Let usingIterator be ? GetMethod(items, @@iterator).
        var usingIterator = GetMethod(items, Symbol.iterator);
        // 5. If usingIterator is not undefined, then
        if (usingIterator !== undefined) {
          // a. If IsConstructor(C) is true, then
          if (IsConstructor(C)) {
            // i. Let A be ? Construct(C).
            var A = Construct(C);
            // b. Else,
          } else {
            // i. Let A be ! ArrayCreate(0).
            A = ArrayCreate(0);
          }
          // c. Let iteratorRecord be ? GetIterator(items, usingIterator).
          var iteratorRecord = GetIterator(items, usingIterator);
          // d. Let k be 0.
          var k = 0;
          // e. Repeat,
          // eslint-disable-next-line no-constant-condition
          while (true) {
            // i. If k ≥ 2^53-1, then
            if (k >= Math.pow(2, 53) - 1) {
              // 1. Let error be Completion{[[Type]]: throw, [[Value]]: a newly created TypeError object, [[Target]]: empty}.
              var error = new TypeError(
                "Iteration count can not be greater than or equal 9007199254740991."
              );
              // 2. Return ? IteratorClose(iteratorRecord, error).
              return IteratorClose(iteratorRecord, error);
            }
            // ii. Let Pk be ! ToString(k).
            var Pk = ToString(k);
            // iii. Let next be ? IteratorStep(iteratorRecord).
            var next = IteratorStep(iteratorRecord);
            // iv. If next is false, then
            if (next === false) {
              // 1. Perform ? Set(A, "length", k, true).
              A.length = k;
              // 2. Return A.
              return A;
            }
            // v. Let nextValue be ? IteratorValue(next).
            var nextValue = IteratorValue(next);
            // vi. If mapping is true, then
            if (mapping) {
              try {
                // Polyfill.io - The try catch accounts for step 2.
                // 1. Let mappedValue be Call(mapfn, T, « nextValue, k »).
                var mappedValue = Call(mapfn, T, [nextValue, k]);
                // 2. If mappedValue is an abrupt completion, return ? IteratorClose(iteratorRecord, mappedValue).
                // 3. Let mappedValue be mappedValue.[[Value]].
              } catch (e) {
                return IteratorClose(iteratorRecord, e);
              }

              // vii. Else, let mappedValue be nextValue.
            } else {
              mappedValue = nextValue;
            }
            try {
              // Polyfill.io - The try catch accounts for step ix.
              // viii. Let defineStatus be CreateDataPropertyOrThrow(A, Pk, mappedValue).
              CreateDataPropertyOrThrow(A, Pk, mappedValue);
              // ix. If defineStatus is an abrupt completion, return ? IteratorClose(iteratorRecord, defineStatus).
            } catch (e) {
              return IteratorClose(iteratorRecord, e);
            }
            // x. Increase k by 1.
            k = k + 1;
          }
        }
        // 6. NOTE: items is not an Iterable so assume it is an array-like object.
        // 7. Let arrayLike be ! ToObject(items).
        // Polyfill.io - For Strings we need to split astral symbols into surrogate pairs.
        if (isString(items)) {
          var arrayLike =
            stringMatch.call(
              items,
              /[\uD800-\uDBFF][\uDC00-\uDFFF]?|[^\uD800-\uDFFF]|./g
            ) || [];
        } else {
          arrayLike = ToObject(items);
        }
        // 8. Let len be ? ToLength(? Get(arrayLike, "length")).
        var len = ToLength(Get(arrayLike, "length"));
        // 9. If IsConstructor(C) is true, then
        if (IsConstructor(C)) {
          // a. Let A be ? Construct(C, « len »).
          A = Construct(C, [len]);
          // 10. Else,
        } else {
          // a. Let A be ? ArrayCreate(len).
          A = ArrayCreate(len);
        }
        // 11. Let k be 0.
        k = 0;
        // 12. Repeat, while k < len
        while (k < len) {
          // a. Let Pk be ! ToString(k).
          Pk = ToString(k);
          // b. Let kValue be ? Get(arrayLike, Pk).
          var kValue = Get(arrayLike, Pk);
          // c. If mapping is true, then
          if (mapping === true) {
            // i. Let mappedValue be ? Call(mapfn, T, « kValue, k »).
            mappedValue = Call(mapfn, T, [kValue, k]);
            // d. Else, let mappedValue be kValue.
          } else {
            mappedValue = kValue;
          }
          // e. Perform ? CreateDataPropertyOrThrow(A, Pk, mappedValue).
          CreateDataPropertyOrThrow(A, Pk, mappedValue);
          // f. Increase k by 1.
          k = k + 1;
        }
        // 13. Perform ? Set(A, "length", len, true).
        A.length = len;
        // 14. Return A.
        return A;
      }
    );
  })();

  // Symbol.toStringTag
  /* global Symbol */
  Object.defineProperty(Symbol, "toStringTag", {
    value: Symbol("toStringTag"),
  });

  // _Iterator
  /* global Symbol */
  // A modification of https://github.com/medikoo/es6-iterator
  // Copyright (C) 2013-2015 Mariusz Nowak (www.medikoo.com)

  var Iterator = (function () {
    // eslint-disable-line no-unused-vars
    var clear = function () {
      this.length = 0;
      return this;
    };
    var callable = function (fn) {
      if (typeof fn !== "function")
        throw new TypeError(fn + " is not a function");
      return fn;
    };

    var Iterator = function (list, context) {
      if (!(this instanceof Iterator)) {
        return new Iterator(list, context);
      }
      Object.defineProperties(this, {
        __list__: {
          writable: true,
          value: list,
        },
        __context__: {
          writable: true,
          value: context,
        },
        __nextIndex__: {
          writable: true,
          value: 0,
        },
      });
      if (!context) return;
      callable(context.on);
      context.on("_add", this._onAdd.bind(this));
      context.on("_delete", this._onDelete.bind(this));
      context.on("_clear", this._onClear.bind(this));
    };

    Object.defineProperties(
      Iterator.prototype,
      Object.assign(
        {
          constructor: {
            value: Iterator,
            configurable: true,
            enumerable: false,
            writable: true,
          },
          _next: {
            value: function () {
              var i;
              if (!this.__list__) return;
              if (this.__redo__) {
                i = this.__redo__.shift();
                if (i !== undefined) return i;
              }
              if (this.__nextIndex__ < this.__list__.length)
                return this.__nextIndex__++;
              this._unBind();
            },
            configurable: true,
            enumerable: false,
            writable: true,
          },
          next: {
            value: function () {
              return this._createResult(this._next());
            },
            configurable: true,
            enumerable: false,
            writable: true,
          },
          _createResult: {
            value: function (i) {
              if (i === undefined)
                return {
                  done: true,
                  value: undefined,
                };
              return {
                done: false,
                value: this._resolve(i),
              };
            },
            configurable: true,
            enumerable: false,
            writable: true,
          },
          _resolve: {
            value: function (i) {
              return this.__list__[i];
            },
            configurable: true,
            enumerable: false,
            writable: true,
          },
          _unBind: {
            value: function () {
              this.__list__ = null;
              delete this.__redo__;
              if (!this.__context__) return;
              this.__context__.off("_add", this._onAdd.bind(this));
              this.__context__.off("_delete", this._onDelete.bind(this));
              this.__context__.off("_clear", this._onClear.bind(this));
              this.__context__ = null;
            },
            configurable: true,
            enumerable: false,
            writable: true,
          },
          toString: {
            value: function () {
              return "[object Iterator]";
            },
            configurable: true,
            enumerable: false,
            writable: true,
          },
        },
        {
          _onAdd: {
            value: function (index) {
              if (index >= this.__nextIndex__) return;
              ++this.__nextIndex__;
              if (!this.__redo__) {
                Object.defineProperty(this, "__redo__", {
                  value: [index],
                  configurable: true,
                  enumerable: false,
                  writable: false,
                });
                return;
              }
              this.__redo__.forEach(function (redo, i) {
                if (redo >= index) this.__redo__[i] = ++redo;
              }, this);
              this.__redo__.push(index);
            },
            configurable: true,
            enumerable: false,
            writable: true,
          },
          _onDelete: {
            value: function (index) {
              var i;
              if (index >= this.__nextIndex__) return;
              --this.__nextIndex__;
              if (!this.__redo__) return;
              i = this.__redo__.indexOf(index);
              if (i !== -1) this.__redo__.splice(i, 1);
              this.__redo__.forEach(function (redo, i) {
                if (redo > index) this.__redo__[i] = --redo;
              }, this);
            },
            configurable: true,
            enumerable: false,
            writable: true,
          },
          _onClear: {
            value: function () {
              if (this.__redo__) clear.call(this.__redo__);
              this.__nextIndex__ = 0;
            },
            configurable: true,
            enumerable: false,
            writable: true,
          },
        }
      )
    );

    Object.defineProperty(Iterator.prototype, Symbol.iterator, {
      value: function () {
        return this;
      },
      configurable: true,
      enumerable: false,
      writable: true,
    });
    Object.defineProperty(Iterator.prototype, Symbol.toStringTag, {
      value: "Iterator",
      configurable: false,
      enumerable: false,
      writable: true,
    });

    return Iterator;
  })();

  // _ArrayIterator
  /* global Iterator */
  // A modification of https://github.com/medikoo/es6-iterator
  // Copyright (C) 2013-2015 Mariusz Nowak (www.medikoo.com)

  var ArrayIterator = (function () {
    // eslint-disable-line no-unused-vars

    var ArrayIterator = function (arr, kind) {
      if (!(this instanceof ArrayIterator)) return new ArrayIterator(arr, kind);
      Iterator.call(this, arr);
      if (!kind) kind = "value";
      else if (String.prototype.includes.call(kind, "key+value"))
        kind = "key+value";
      else if (String.prototype.includes.call(kind, "key")) kind = "key";
      else kind = "value";
      Object.defineProperty(this, "__kind__", {
        value: kind,
        configurable: false,
        enumerable: false,
        writable: false,
      });
    };
    if (Object.setPrototypeOf)
      Object.setPrototypeOf(ArrayIterator, Iterator.prototype);

    ArrayIterator.prototype = Object.create(Iterator.prototype, {
      constructor: {
        value: ArrayIterator,
        configurable: true,
        enumerable: false,
        writable: true,
      },
      _resolve: {
        value: function (i) {
          if (this.__kind__ === "value") return this.__list__[i];
          if (this.__kind__ === "key+value") return [i, this.__list__[i]];
          return i;
        },
        configurable: true,
        enumerable: false,
        writable: true,
      },
      toString: {
        value: function () {
          return "[object Array Iterator]";
        },
        configurable: true,
        enumerable: false,
        writable: true,
      },
    });

    return ArrayIterator;
  })();

  // Array.prototype.entries
  /* global CreateMethodProperty, ToObject, ArrayIterator */
  // 22.1.3.4. Array.prototype.entries ( )
  CreateMethodProperty(Array.prototype, "entries", function entries() {
    // 1. Let O be ? ToObject(this value).
    var O = ToObject(this);
    // 2. Return CreateArrayIterator(O, "key+value").
    // TODO: Add CreateArrayIterator
    return new ArrayIterator(O, "key+value");
  });

  // Array.prototype.keys
  /* global CreateMethodProperty, ToObject, ArrayIterator */
  // 22.1.3.14. Array.prototype.keys ( )
  CreateMethodProperty(Array.prototype, "keys", function keys() {
    // 1. Let O be ? ToObject(this value).
    var O = ToObject(this);
    // 2. Return CreateArrayIterator(O, "key").
    // TODO: Add CreateArrayIterator.
    return new ArrayIterator(O, "key");
  });

  // Array.prototype.values
  /* global CreateMethodProperty, Symbol, ToObject, ArrayIterator */
  // 22.1.3.30/ Array.prototype.values ( )
  // Polyfill.io - Firefox, Chrome and Opera have Array.prototype[Symbol.iterator], which is the exact same function as Array.prototype.values.
  if (
    "Symbol" in self &&
    "iterator" in Symbol &&
    typeof Array.prototype[Symbol.iterator] === "function"
  ) {
    CreateMethodProperty(
      Array.prototype,
      "values",
      Array.prototype[Symbol.iterator]
    );
  } else {
    CreateMethodProperty(Array.prototype, "values", function values() {
      // 1. Let O be ? ToObject(this value).
      var O = ToObject(this);
      // 2. Return CreateArrayIterator(O, "value").
      // TODO: Add CreateArrayIterator
      return new ArrayIterator(O, "value");
    });
  }

  // Array.prototype.@@iterator
  /* global Symbol, CreateMethodProperty */
  // 22.1.3.31. Array.prototype [ @@iterator ] ( )
  // The initial value of the @@iterator property is the same function object as the initial value of the  Array.prototype.values property.
  CreateMethodProperty(
    Array.prototype,
    Symbol.iterator,
    Array.prototype.values
  );
})(
  ("object" === typeof window && window) ||
    ("object" === typeof self && self) ||
    ("object" === typeof global && global) ||
    {}
);
