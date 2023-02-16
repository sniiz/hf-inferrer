# hf-inferrer

a super simple little package to access the hugging face inference api

## usage

```js
import { Client } from "hf-inferrer";
const client = new Client("your hf api token goes here");

const gpt2 = client.model("gpt2");
const robertaSentiment = client.model("twitter_roberta_base_sentiment");

var result = await gpt2.run("Once upon a time,"); // returns a string
console.log(result); // Once upon a time, there were four different factions. It is now well known: the First Five (the Five who control the Dark Brotherhood and have control of the Brotherhood). These Five were named after the Dark Brotherhood's most prominent leader, General E

result = await robertaSentiment.run(
  "this module is super cool and nifty",
  true // specifies to return the entire response as an object
); // returns an object
console.log(result[0][0].label); // positive
```

## contributing

please feel free to open an [issue](https://github.com/sniiz/hf-inferrer/issues/new) or a [pull request](https://github.com/sniiz/hf-inferrer/pulls) over at the [github repo](https://github.com/sniiz/hf-inferrer) if you have anything to report or to add <3
