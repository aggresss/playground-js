#!/usr/bin/evn node

function getSomething() {
  return "something";
}

async function testAsync() {
  return Promise.resolve("hello async");
}

async function test() {
  const v1 = getSomething();
  const v2 = await testAsync();
  console.log(v1, v2);
}

test();

