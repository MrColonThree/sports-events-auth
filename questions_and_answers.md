<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: `ReferenceError: greetign is not defined`
     

<i>Here we know that we can reassign value in let variable.At first line a variable declared by let without set any value.After that we assign an empty object to greetign which was not declared.So that after console it we don't get it's value.That's why the output is `ReferenceError: greetign is not defined`</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: `"12"`

<i>Here we pass the value of "a" as a number '1' and the value of "b" as a string "2". So, the sum operator (+) cannot add them mathematically just because of their types. Thats why the sum operator work here to concatenate them (both as strings). So, the output is "12"</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: `['🍕', '🍫', '🥑', '🍔']`

<i>The array "food" remain unchanged. Here we got the first index of the "food" array and assigned it as the value of favoriteFood property of an object named "info". Then If we change the value of the favoriteFood property, then the "info" object's favoriteFood's value will change only. Cause there is no relation between these variables "food" and "info". They are independent </i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: `Hi there, undefined`

<i>Here we call the function but didn't give it a value when calling and also there is no default value of the parameter "name". So that, the output will be "undefined" at the place of "name".(`Hi there, undefined`)</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: 3

<i>At first here is a variable declared using let, which's initialized to 0. Here also an array "nums" declared which has 4 index or elements. So, when we use forEach to this array, we get each elements separately. Then, there is a condition about "num" which means each elements of the array. The conditions is the chosen element is truthy or not. If the "num" is truthy then we increment the value of count variable by 1. So, for the first element "0" it is a falsy value which is not matched with the condition. Then count remain 0. But then for "1","2","3" element , these elements fulfilled the condition .That's why the value of count is increasing by 1 three times "0+1","1+1","2+1". So the final count value will be 3. </i>

</p>
</details>
